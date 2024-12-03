// analytics.js
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

// AppContent.jsx
import { useLocation } from 'react-router-dom';
import { trackPageView } from './analytics';

const useGoogleAnalytics = () => {
  const location = useLocation();
  useEffect(() => {
    trackPageView(location.pathname);
  }, [location]);
};

function AppContent() {
  useGoogleAnalytics();
  return (
    <div className="app-container">
      {/* Routes et contenus */}
    </div>
  );
}
