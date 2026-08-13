export const initGoogleAnalytics = (measurementId) => {
  if (process.env.NODE_ENV !== "production") {
    console.log("Google Analytics désactivé en mode développement.");
    return;
  }

  if (!window.gtag) {
    console.warn("Google Analytics n'est pas chargé. Vérifie que ton script est bien ajouté dans index.html.");
    return;
  }

  window.gtag("js", new Date());
  window.gtag("config", measurementId, { send_page_view: false });
};

export const trackPageView = (path = window.location.pathname) => {
  if (process.env.NODE_ENV !== "production") return;

  if (!window.gtag) {
    console.warn("Google Analytics n'est pas chargé.");
    return;
  }

  window.gtag("event", "page_view", { page_path: path });
  console.log(`📊 Page vue enregistrée : ${path}`);
};


export const trackEvent = (action, category, label, value) => {
  if (process.env.NODE_ENV !== "production") return;

  if (!window.gtag) {
    console.warn("Google Analytics n'est pas chargé.");
    return;
  }

  window.gtag("event", action, {
    event_category: category,
    event_label: label,
    value: value,
  });

  console.log(`📊 Événement suivi : ${action} (Catégorie: ${category}, Label: ${label}, Valeur: ${value})`);
};
