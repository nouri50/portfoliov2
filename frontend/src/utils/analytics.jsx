export const initGoogleAnalytics = (measurementId) => {
  if (!window.gtag) {
    console.warn("Google Analytics n'est pas chargé.");
    return;
  }
  window.gtag('js', new Date());
  window.gtag('config', measurementId, { send_page_view: false });
};

export const trackPageView = (path) => {
  if (!window.gtag) {
    console.warn("Google Analytics n'est pas chargé.");
    return;
  }
  window.gtag('event', 'page_view', { page_path: path });
};

export const trackEvent = (action, category, label, value) => {
  if (!window.gtag) {
    console.warn("Google Analytics n'est pas chargé.");
    return;
  }
  window.gtag('event', action, {
    event_category: category,
    event_label: label,
    value: value,
  });
};
