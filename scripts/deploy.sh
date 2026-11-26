#!/usr/bin/env bash
# Déploie le portfolio sur le VPS : mise à jour du code, rebuild de l'image,
# redémarrage, puis vérification que le site répond.
#
# Lancé automatiquement par GitHub Actions (clé SSH restreinte à ce script,
# voir le README), ou à la main : bash scripts/deploy.sh
set -euo pipefail

APP_DIR="${APP_DIR:-/root/apps/portfolio}"
COMPOSE_FILE="compose.prod.yml"
HEALTH_URL="${HEALTH_URL:-http://127.0.0.1:8000/}"

cd "$APP_DIR"

# Un seul déploiement à la fois
exec 9>/tmp/portfolio-deploy.lock
flock -n 9 || { echo "❌ Un déploiement est déjà en cours"; exit 1; }

echo "==> Mise à jour du code"
git fetch --quiet origin main
# Refuse de continuer si le serveur a des modifications locales divergentes
git merge --ff-only --quiet origin/main
echo "Version : $(git log -1 --format='%h %s')"

echo "==> Build de l'image et redémarrage"
docker compose -f "$COMPOSE_FILE" up -d --build

echo "==> Vérification"
for _ in $(seq 1 30); do
  if curl -fsS -o /dev/null -H "Accept-Language: fr-FR" "$HEALTH_URL"; then
    echo "✅ Site en ligne"
    # Supprime les anciennes images devenues inutiles
    docker image prune -f >/dev/null
    exit 0
  fi
  sleep 2
done

echo "❌ Le site ne répond pas après le déploiement"
docker compose -f "$COMPOSE_FILE" logs --tail 50
exit 1
