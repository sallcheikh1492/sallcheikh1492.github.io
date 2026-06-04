// ===================== Données projets =====================
const PROJECTS = [
  {
    icon: "🎓", featured: true, badge: { fr: "Mémoire Master 2", en: "M.Sc. thesis" },
    title: "BI &amp; ML — Optimisation des centres d'appels",
    img: "assets/memoire-preview.png",
    metrics: ["AUC 0,72", "MAPE 12,6 %", "444k appels"],
    fr: "Application décisionnelle complète sur ~444 000 appels : ETL, tableaux de bord KPI, prévision du volume (SARIMA/LSTM), prédiction de l'abandon (XGBoost + SHAP), analyse de survie (Kaplan-Meier/Cox) et dimensionnement Erlang.",
    en: "End-to-end decision app on ~444k calls: ETL, KPI dashboards, volume forecasting (SARIMA/LSTM), churn/abandonment prediction (XGBoost + SHAP), survival analysis (Kaplan-Meier/Cox) and Erlang staffing.",
    tags: ["Python", "Streamlit", "XGBoost", "SHAP", "SARIMA", "Erlang"],
    repo: "https://github.com/kheuch1492/memoire-master2-bi-ucad",
  },
  {
    icon: "📉", badge: { fr: "Data Science", en: "Data Science" },
    metrics: ["ROC-AUC 0,844"],
    title: "Customer Churn Prediction",
    fr: "Prédiction du départ des clients (Telco) : EDA, Gradient Boosting (ROC-AUC 0,844), dashboard Power BI et application web interactive.",
    en: "Telco customer churn prediction: EDA, Gradient Boosting (ROC-AUC 0.844), Power BI dashboard and interactive web app.",
    tags: ["Python", "Gradient Boosting", "Power BI", "EDA"],
    repo: "https://github.com/kheuch1492/customer-churn-prediction",
  },
  {
    icon: "💹", badge: { fr: "Business Intelligence", en: "Business Intelligence" },
    title: "Financial Analysis Dashboard",
    fr: "Analyse financière d'une entreprise : KPI, compte de résultat, prévisions et tableau de bord (Python, SQL, Power BI).",
    en: "Corporate financial analysis: KPIs, income statement, forecasts and dashboard (Python, SQL, Power BI).",
    tags: ["Python", "SQL", "Power BI", "DAX"],
    repo: "https://github.com/kheuch1492/financial-analysis-dashboard",
  },
  {
    icon: "👥", badge: { fr: "People Analytics", en: "People Analytics" },
    title: "HR Analytics Dashboard",
    fr: "Analyse RH des employés : turnover, absentéisme, satisfaction et identification des profils à risque (Python, PostgreSQL, Power BI/DAX).",
    en: "HR employee analytics: turnover, absenteeism, satisfaction and at-risk profile detection (Python, PostgreSQL, Power BI/DAX).",
    tags: ["Python", "PostgreSQL", "Power BI", "DAX"],
    repo: "https://github.com/kheuch1492/hr-analytics-dashboard",
  },
  {
    icon: "🛒", badge: { fr: "Business Intelligence", en: "Business Intelligence" },
    title: "E-commerce Sales Analysis",
    fr: "Analyse BI complète des ventes e-commerce : exploration, indicateurs et visualisations.",
    en: "Full BI analysis of e-commerce sales: exploration, metrics and visualizations.",
    tags: ["BI", "Analyse", "Visualisation"],
    repo: "https://github.com/kheuch1492/ecommerce-sales-analysis",
  },
  {
    icon: "🧾", badge: { fr: "Développement", en: "Development" },
    title: "TV7-App — Facturation",
    fr: "Application web de facturation : gestion des factures, clients et produits.",
    en: "Web billing application: invoices, clients and products management.",
    tags: ["JavaScript", "Web"],
    repo: "https://github.com/kheuch1492/TV7-App",
  },
  {
    icon: "🚗", badge: { fr: "Développement", en: "Development" },
    title: "Thiam &amp; Frère Automobile",
    fr: "Application de gestion pour une activité automobile (clients, véhicules, opérations).",
    en: "Management app for an automotive business (clients, vehicles, operations).",
    tags: ["TypeScript", "Web"],
    repo: "https://github.com/kheuch1492/thiam-et-frere-automobile",
  },
];

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
          ${p.demo ? `<a class="demo" href="${p.demo}" target="_blank" rel="noopener">🚀 Démo →</a>` : ""}
          <a href="${p.repo}" target="_blank" rel="noopener">GitHub →</a>
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
