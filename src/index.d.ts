export {};

declare global {
  interface Window {
    initCookieConsent: any; // 👈️ turn off type checking
  }
}