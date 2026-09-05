// ===================== Données projets =====================
// links : { kind: "demo" | "repo" | "dataset" | "powerbi", url }
// metrics : KPI RÉELS uniquement (jamais inventés)
const PROJECTS = [
  {
    icon: "🧾", badge: { fr: "Production · Freelance", en: "Production · Freelance" },
    title: "TV7-App — Gestion & recouvrement client",
    img: "assets/tv7-app.png",
    metrics: ["1 917 clients · 9 zones", "5 collecteurs terrain", "En production depuis 2026"],
    fr: "Application de gestion et de recouvrement client conçue et exploitée en production pour S2N Multimedia : suivi des encaissements et paiements partiels, opérations en masse, tableau de bord par collecteur, authentification par rôles (JWT), relances SMS automatisées (Africa's Talking) et version PWA installable sur mobile.",
    en: "Client management and collections app designed and run in production for S2N Multimedia: payment tracking with partial payments, bulk operations, per-collector dashboard, role-based auth (JWT), automated SMS reminders (Africa's Talking) and an installable mobile PWA.",
    tags: ["FastAPI", "React", "PostgreSQL", "Supabase", "PWA"],
    links: [
      { kind: "demo", url: "https://tv-7-app.vercel.app" },
      { kind: "repo", url: "https://github.com/sallcheikh1492/TV7-App" },
    ],
  },
  {
    icon: "🎓", featured: true, badge: { fr: "Mémoire Master 2", en: "M.Sc. thesis" },
    title: "BI &amp; ML — Optimisation des centres d'appels",
    img: "assets/memoire-preview.png",
    metrics: ["AUC 0,72", "MAPE 12,6 %", "444k appels"],
    fr: "Application décisionnelle complète sur ~444 000 appels : ETL, tableaux de bord KPI, prévision du volume (SARIMA/LSTM), prédiction de l'abandon (XGBoost + SHAP), analyse de survie (Kaplan-Meier/Cox) et dimensionnement Erlang.",
    en: "End-to-end decision app on ~444k calls: ETL, KPI dashboards, volume forecasting (SARIMA/LSTM), churn/abandonment prediction (XGBoost + SHAP), survival analysis (Kaplan-Meier/Cox) and Erlang staffing.",
    tags: ["Python", "Streamlit", "XGBoost", "SHAP", "SARIMA", "Erlang"],
    links: [
      { kind: "demo", url: "https://cheikh-sall1492.streamlit.app" },
      { kind: "repo", url: "https://github.com/sallcheikh1492/memoire-master2-bi-ucad" },
    ],
  },
  {
    icon: "📡", badge: { fr: "Télécom · Web", en: "Telecom · Web" },
    title: "Guide interactif d'analyse réseau télécom",
    img: "https://sallcheikh1492.github.io/reseau-telecom/cover.svg",
    metrics: ["2G → 5G", "PWA hors-ligne", "Données ARTP"],
    fr: "Application web (PWA) de référence et de révision sur la performance des réseaux mobiles : KPI (CSSR, DCR…), diagnostic d'alarmes, arbres de décision, optimisation radio, drive test, données de marché ARTP, quiz et simulateur NOC. Conçue de A à Z en HTML/CSS/JS, installable et utilisable hors-ligne.",
    en: "Reference & revision web app (PWA) on mobile-network performance: KPIs (CSSR, DCR…), alarm troubleshooting, decision trees, radio optimization, drive test, ARTP market data, quiz and NOC simulator. Built from scratch in HTML/CSS/JS, installable and offline-ready.",
    tags: ["JavaScript", "HTML/CSS", "PWA", "Télécom", "KPI"],
    links: [
      { kind: "demo", url: "https://sallcheikh1492.github.io/reseau-telecom/" },
      { kind: "repo", url: "https://github.com/sallcheikh1492/reseau-telecom" },
    ],
  },
  {
    icon: "📉", badge: { fr: "Data Science", en: "Data Science" },
    img: "assets/churn.png",
    metrics: ["AUC 0,846", "6 modèles comparés", "scoring du risque"],
    title: "Prédiction du churn client",
    fr: "Identification des clients à risque de départ pour réduire les pertes : 6 modèles comparés (meilleur : Gradient Boosting, AUC 0,846), scoring de probabilité par client et liste des clients prioritaires à contacter (dashboard Power BI).",
    en: "Identifying at-risk customers to reduce churn: 6 models compared (best: Gradient Boosting, AUC 0.846), per-customer probability scoring and a priority call list (Power BI dashboard).",
    tags: ["Python", "Gradient Boosting", "XGBoost", "Power BI"],
    links: [
      { kind: "demo", url: "https://sallcheikh1492.github.io/customer-churn-prediction/" },
      { kind: "repo", url: "https://github.com/sallcheikh1492/customer-churn-prediction" },
      { kind: "dataset", url: "https://www.kaggle.com/datasets/blastchar/telco-customer-churn" },
    ],
  },
  {
    icon: "💹", badge: { fr: "Business Intelligence", en: "Business Intelligence" },
    img: "assets/finance.png",
    metrics: ["CA ≈ 117 M$", "5 segments", "multi-pays"],
    title: "Dashboard financier",
    fr: "Analyse du chiffre d'affaires, des marges et des profits : évolution mensuelle CA/profit, profit par produit, répartition par segment client (Government, Small Business, Enterprise…) et CA par pays.",
    en: "Revenue, margin and profit analysis: monthly revenue/profit trend, profit by product, breakdown by customer segment (Government, Small Business, Enterprise…) and revenue by country.",
    tags: ["Power BI", "DAX", "SQL", "Modélisation"],
    links: [
      { kind: "demo", url: "https://sallcheikh1492.github.io/financial-analysis-dashboard/" },
      { kind: "repo", url: "https://github.com/sallcheikh1492/financial-analysis-dashboard" },
    ],
  },
  {
    icon: "👥", badge: { fr: "People Analytics", en: "People Analytics" },
    img: "assets/hr.png",
    metrics: ["Attrition 33,4 %", "311 employés", "6 départements"],
    title: "Dashboard RH",
    fr: "Suivi de l'attrition (33,4 %), du turnover et de l'absentéisme : analyse par département (Production 39,7 %…) et par ancienneté (0-2 ans : 96,8 %) pour cibler la rétention.",
    en: "Attrition (33.4%), turnover and absenteeism tracking: analysis by department (Production 39.7%…) and tenure (0-2 yrs: 96.8%) to target retention.",
    tags: ["Power BI", "DAX", "People Analytics"],
    links: [
      { kind: "demo", url: "https://sallcheikh1492.github.io/hr-analytics-dashboard/" },
      { kind: "repo", url: "https://github.com/sallcheikh1492/hr-analytics-dashboard" },
    ],
  },
  {
    icon: "🛒", badge: { fr: "Business Intelligence", en: "Business Intelligence" },
    img: "assets/ecommerce.png",
    metrics: ["CA £9M", "19K commandes", "réachat 65,6 %"],
    title: "Analyse e-commerce",
    fr: "Analyse des ventes e-commerce (dataset UCI Online Retail) : CA £9M, 19K commandes, 4 338 clients, panier moyen £480, taux de réachat 65,6 %, évolution mensuelle et top pays.",
    en: "E-commerce sales analysis (UCI Online Retail dataset): £9M revenue, 19K orders, 4,338 customers, £480 average basket, 65.6% repeat rate, monthly trend and top countries.",
    tags: ["Power BI", "DAX", "Analyse", "Segmentation"],
    links: [
      { kind: "demo", url: "https://sallcheikh1492.github.io/ecommerce-sales-analysis/reports/dashboard.html" },
      { kind: "repo", url: "https://github.com/sallcheikh1492/ecommerce-sales-analysis" },
      { kind: "dataset", url: "https://archive.ics.uci.edu/dataset/352/online+retail" },
    ],
  },
  {
    icon: "💰", badge: { fr: "Business Intelligence", en: "Business Intelligence" },
    img: "https://sallcheikh1492.github.io/cost-of-living-senegal/assets/site_hero.png",
    metrics: ["Inflation +9,9 % (2022)", "Oignon +96 %", "Panier +37 % (2018-26)"],
    title: "Coût de la vie & inflation au Sénégal",
    fr: "Évolution du coût de la vie et de l'inflation (2018–2026) à partir des données réelles ANSD/Banque mondiale : produits les plus inflationnistes, désinflation 2023→2024 et prévision SARIMA/Prophet à 12 mois.",
    en: "Cost-of-living and inflation trends in Senegal (2018–2026) from real ANSD/World Bank data: most inflationary products, 2023→2024 disinflation, and 12-month SARIMA/Prophet forecast.",
    tags: ["Python", "SQL", "Power BI", "SARIMA", "Prophet"],
    links: [
      { kind: "demo", url: "https://sallcheikh1492.github.io/cost-of-living-senegal/" },
      { kind: "repo", url: "https://github.com/sallcheikh1492/cost-of-living-senegal" },
    ],
  },
  {
    icon: "🏥", badge: { fr: "Data Analytics", en: "Data Analytics" },
    img: "https://sallcheikh1492.github.io/senegal-demographie/assets/site_hero.png",
    metrics: ["Fécondité 6,4 → 4,0", "Mortalité -5ans 203‰ → 41‰", "Pauvreté ≈ 37,5 %"],
    title: "Démographie & santé au Sénégal",
    fr: "Transition démographique et conditions de vie au Sénégal (1986–2023) via les enquêtes EDS/DHS et la Banque mondiale : fécondité, mortalité infantile, pauvreté, disparités régionales et projection à 2035.",
    en: "Demographic transition and living conditions in Senegal (1986–2023) via DHS/EDS surveys and World Bank data: fertility, child mortality, poverty, regional disparities and 2035 projection.",
    tags: ["Python", "SQL", "Cartographie", "DHS/EDS", "Banque mondiale"],
    links: [
      { kind: "demo", url: "https://sallcheikh1492.github.io/senegal-demographie/" },
      { kind: "repo", url: "https://github.com/sallcheikh1492/senegal-demographie" },
    ],
  },
  {
    icon: "🌾", badge: { fr: "Business Intelligence", en: "Business Intelligence" },
    img: "https://sallcheikh1492.github.io/senegal-food-prices/assets/site_hero.png",
    metrics: ["2007→2026, 64 marchés", "Crise 2008 +25 %", "Corrélation WFP↔BM 0,91"],
    title: "Prix des céréales & inflation alimentaire",
    fr: "Prix réels de 64 marchés (WFP) sur 14 régions du Sénégal (2007–2026) : inflation alimentaire vs officielle, chocs de 2008 et 2022, disparités régionales et prévision à 12 mois.",
    en: "Real market prices from 64 markets (WFP) across 14 Senegal regions (2007–2026): food vs. official inflation, 2008 and 2022 shocks, regional disparities and 12-month forecast.",
    tags: ["Python", "SQL", "WFP", "SARIMA", "Cartographie"],
    links: [
      { kind: "demo", url: "https://sallcheikh1492.github.io/senegal-food-prices/" },
      { kind: "repo", url: "https://github.com/sallcheikh1492/senegal-food-prices" },
    ],
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
      ${p.img ? `<img class="pc-img" src="${p.img}" alt="${p.title}" loading="lazy" onerror="this.remove()"/>` : ""}
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
