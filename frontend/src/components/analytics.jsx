export const initGoogleAnalytics = (measurementId) => {
    if (!window.gtag) {
      console.warn('Google Analytics is not loaded.');
      return;
    }
    window.gtag('js', new Date());
    window.gtag('config', measurementId);
  };
  
  export const trackPageView = (path) => {
    if (!window.gtag) {
      console.warn('Google Analytics is not loaded.');
      return;
    }
    window.gtag('event', 'page_view', {
      page_path: path,
    });
  };
  