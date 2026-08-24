
// Load all Web Components
const components = [
  "components/AppHeader.js",
  "components/AppFooter.js",
  "components/ThemeCard.js",
  "components/VendorCard.js",
  "components/DashboardSidebar.js"
];

components.forEach(src => {
  const script = document.createElement("script");
  script.src = src;
  script.defer = true;
  document.head.appendChild(script);
});

