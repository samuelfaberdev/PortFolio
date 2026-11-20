#!/bin/sh
# Supprime les statistiques Umami de plus de 25 mois (recommandation de la CNIL
# pour une mesure d'audience exemptée de consentement).
#
# Usage : ./analytics/purge-old-data.sh
# Cron conseillé (le 1er de chaque mois à 4 h) :
#   0 4 1 * * /root/apps/portfolio/analytics/purge-old-data.sh >> /var/log/umami-purge.log 2>&1

set -eu

CONTAINER="${UMAMI_DB_CONTAINER:-umami-db}"
RETENTION="${UMAMI_RETENTION:-25 months}"

echo "$(date '+%F %T') Purge des statistiques Umami antérieures à ${RETENTION}"

docker exec -i "$CONTAINER" psql -U umami -d umami -v ON_ERROR_STOP=1 -v retention="$RETENTION" <<'SQL'
BEGIN;
DELETE FROM event_data    WHERE created_at < now() - :'retention'::interval;
DELETE FROM revenue       WHERE created_at < now() - :'retention'::interval;
DELETE FROM session_data  WHERE created_at < now() - :'retention'::interval;
DELETE FROM website_event WHERE created_at < now() - :'retention'::interval;
-- Sessions anciennes qui n'ont plus aucun événement
DELETE FROM session s
WHERE s.created_at < now() - :'retention'::interval
  AND NOT EXISTS (SELECT 1 FROM website_event e WHERE e.session_id = s.session_id);
COMMIT;
SQL

echo "$(date '+%F %T') Purge terminée"
