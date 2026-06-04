// ===================== Données projets =====================
// links : { kind: "demo" | "repo" | "dataset" | "powerbi", url }
// metrics : KPI RÉELS uniquement (jamais inventés)
const PROJECTS = [
  {
    icon: "🎓", featured: true, badge: { fr: "Mémoire Master 2", en: "M.Sc. thesis" },
    title: "BI &amp; ML — Optimisation des centres d'appels",
    img: "assets/memoire-preview.png",
    metrics: ["AUC 0,72", "MAPE 12,6 %", "444k appels"],
    fr: "Application décisionnelle complète sur ~444 000 appels : ETL, tableaux de bord KPI, prévision du volume (SARIMA/LSTM), prédiction de l'abandon (XGBoost + SHAP), analyse de survie (Kaplan-Meier/Cox) et dimensionnement Erlang.",
    en: "End-to-end decision app on ~444k calls: ETL, KPI dashboards, volume forecasting (SARIMA/LSTM), churn/abandonment prediction (XGBoost + SHAP), survival analysis (Kaplan-Meier/Cox) and Erlang staffing.",
    tags: ["Python", "Streamlit", "XGBoost", "SHAP", "SARIMA", "Erlang"],
    links: [
      { kind: "demo", url: "https://cheikh-sall.streamlit.app" },
      { kind: "repo", url: "https://github.com/kheuch1492/memoire-master2-bi-ucad" },
    ],
  },
  {
    icon: "📉", badge: { fr: "Data Science", en: "Data Science" },
    metrics: ["ROC-AUC 0,844"],
    title: "Customer Churn Prediction",
    fr: "Identification des clients à risque de départ pour réduire les pertes : exploration (EDA), modèle Gradient Boosting (ROC-AUC 0,844) et dashboard Power BI.",
    en: "Identifying at-risk customers to reduce churn: EDA, Gradient Boosting model (ROC-AUC 0.844) and Power BI dashboard.",
    tags: ["Python", "Gradient Boosting", "Power BI", "EDA"],
    links: [{ kind: "repo", url: "https://github.com/kheuch1492/customer-churn-prediction" }],
  },
  {
    icon: "💹", badge: { fr: "Business Intelligence", en: "Business Intelligence" },
    title: "Dashboard financier",
    fr: "Analyse du chiffre d'affaires, des coûts, des marges et des profits : KPI financiers et prévisions sur tableau de bord Power BI.",
    en: "Revenue, cost, margin and profit analysis: financial KPIs and forecasts on a Power BI dashboard.",
    tags: ["Python", "SQL", "Power BI", "DAX"],
    links: [{ kind: "repo", url: "https://github.com/kheuch1492/financial-analysis-dashboard" }],
  },
  {
    icon: "👥", badge: { fr: "People Analytics", en: "People Analytics" },
    title: "Dashboard RH",
    fr: "Suivi du turnover, de l'absentéisme et du recrutement ; identification des profils à risque (People Analytics).",
    en: "Tracking turnover, absenteeism and recruitment; at-risk profile detection (People Analytics).",
    tags: ["Python", "PostgreSQL", "Power BI", "DAX"],
    links: [{ kind: "repo", url: "https://github.com/kheuch1492/hr-analytics-dashboard" }],
  },
  {
    icon: "🛒", badge: { fr: "Business Intelligence", en: "Business Intelligence" },
    title: "Analyse e-commerce",
    fr: "Analyse des ventes e-commerce et segmentation client : indicateurs, tendances et visualisations décisionnelles.",
    en: "E-commerce sales analysis and customer segmentation: metrics, trends and decision-oriented visualizations.",
    tags: ["BI", "Analyse", "Segmentation"],
    links: [{ kind: "repo", url: "https://github.com/kheuch1492/ecommerce-sales-analysis" }],
  },
  {
    icon: "🧾", badge: { fr: "Développement", en: "Development" },
    title: "TV7-App — Facturation",
    fr: "Application web de facturation : gestion des factures, clients et produits.",
    en: "Web billing application: invoices, clients and products management.",
    tags: ["JavaScript", "Web"],
    links: [{ kind: "repo", url: "https://github.com/kheuch1492/TV7-App" }],
  },
  {
    icon: "🚗", badge: { fr: "Développement", en: "Development" },
    title: "Thiam &amp; Frère Automobile",
    fr: "Application de gestion pour une activité automobile (clients, véhicules, opérations).",
    en: "Management app for an automotive business (clients, vehicles, operations).",
    tags: ["TypeScript", "Web"],
    links: [{ kind: "repo", url: "https://github.com/kheuch1492/thiam-et-frere-automobile" }],
  },
];

const LINK_LABELS = {
  demo: { fr: "🚀 Démo live", en: "🚀 Live demo" },
  repo: { fr: "GitHub", en: "GitHub" },
  dataset: { fr: "📊 Données", en: "📊 Dataset" },
  powerbi: { fr: "📈 Power BI", en: "📈 Power BI" },
};

// ===================== Rendu projets =====================
function renderProjects(lang) {
  const grid = document.getElementById("projectsGrid");
  grid.innerHTML = PROJECTS.map(p => `
    <article class="project-card${p.featured ? " featured" : ""}">
      ${p.img ? `<img class="pc-img" src="${p.img}" alt="${p.title}" loading="lazy"/>` : ""}
      <div class="pc-body">
        <div class="pc-top">
          <span class="pc-icon">${p.icon}</span>
          <span class="pc-badge">${p.badge[lang]}</span>
        </div>
        <h4>${p.title}</h4>
        ${p.metrics ? `<div class="pc-metrics">${p.metrics.map(m => `<span>${m}</span>`).join("")}</div>` : ""}
        <p>${p[lang]}</p>
        <div class="pc-tags">${p.tags.map(t => `<span>${t}</span>`).join("")}</div>
        <div class="pc-links">
          ${p.links.map(l => `<a class="${l.kind === "demo" ? "demo" : ""}" href="${l.url}" target="_blank" rel="noopener">${LINK_LABELS[l.kind][lang]} →</a>`).join("")}
        </div>
      </div>
    </article>
  `).join("");
}

// ===================== Bascule de langue =====================
let lang = "fr";
function applyLang(l) {
  lang = l;
  document.documentElement.lang = l;
  document.querySelectorAll("[data-fr]").forEach(el => {
    el.innerHTML = el.getAttribute("data-" + l);
  });
  renderProjects(l);
  const btn = document.getElementById("langBtn");
  btn.innerHTML = l === "fr"
    ? 'FR&nbsp;|&nbsp;<span class="muted">EN</span>'
    : '<span class="muted">FR</span>&nbsp;|&nbsp;EN';
}
document.getElementById("langBtn").addEventListener("click", () => {
  applyLang(lang === "fr" ? "en" : "fr");
});

// ===================== Bascule de thème =====================
const themeBtn = document.getElementById("themeBtn");
function applyTheme(t) {
  document.documentElement.setAttribute("data-theme", t);
  themeBtn.textContent = t === "dark" ? "☀️" : "🌙";
  try { localStorage.setItem("theme", t); } catch (e) {}
}
themeBtn.addEventListener("click", () => {
  const cur = document.documentElement.getAttribute("data-theme") === "dark" ? "light" : "dark";
  applyTheme(cur);
});

// ===================== Init =====================
(function init() {
  let t = "light";
  try { t = localStorage.getItem("theme") || (matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"); } catch (e) {}
  applyTheme(t);
  applyLang("fr");
  document.getElementById("year").textContent = new Date().getFullYear();

  // Apparition au scroll
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add("visible"); obs.unobserve(e.target); } });
  }, { threshold: 0.12 });
  document.querySelectorAll(".section").forEach(s => { s.classList.add("reveal"); obs.observe(s); });
})();
