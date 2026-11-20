/** Envoie un événement à Umami, sans effet si le script n'est pas chargé. */
export function trackEvent(
  event: string,
  data?: Record<string, string | number>,
) {
  if (typeof window === "undefined") return;
  window.umami?.track(event, data);
}
