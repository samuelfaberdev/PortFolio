// Script de suivi Umami (chargé uniquement si NEXT_PUBLIC_UMAMI_WEBSITE_ID est défini)
interface Window {
  umami?: {
    track: (event: string, data?: Record<string, string | number>) => void;
  };
}
