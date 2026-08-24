
class AppHeader extends HTMLElement {
  connectedCallback() {
    const isAuth = localStorage.getItem("festivo_auth") === "true";
    
    let authLinks = `
      <li><a href="login.html" class="nav-login">Login</a></li>
      <li><a href="register.html" class="nav-signup">Sign Up</a></li>
      <li><a href="login.html?redirect=services.html" class="btn btn-accent ms-2">Plan My Event</a></li>
    `;
    let authLinksMobile = `
      <li class="mt-4 d-flex gap-4">
        <a href="login.html" class="btn w-full" style="border: 1px solid var(--shadow-dark-color); justify-content: center;">Login</a>
        <a href="register.html" class="btn btn-primary w-full" style="justify-content: center;">Sign Up</a>
      </li>
      <li><a href="login.html?redirect=services.html" class="btn btn-accent w-full mt-2" style="justify-content: center;">Plan My Event</a></li>
    `;

    if (isAuth) {
      authLinks = `
        <li><a href="dashboard.html" class="nav-login">Dashboard</a></li>
        <li><a href="services.html" class="btn btn-accent ms-2">Plan My Event</a></li>
        <li><a href="#" class="btn btn-primary nav-logout ms-2">Logout</a></li>
      `;
      authLinksMobile = `
        <li class="mt-4 d-flex gap-4">
          <a href="dashboard.html" class="btn btn-primary w-full" style="justify-content: center;">Dashboard</a>
          <a href="#" class="btn nav-logout w-full" style="border: 1px solid var(--danger); color: var(--danger); justify-content: center;">Logout</a>
        </li>
        <li><a href="services.html" class="btn btn-accent w-full mt-2" style="justify-content: center;">Plan My Event</a></li>
      `;
    }

    const logoSvg = `
      <svg class="logo-mark" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">
        <circle cx="20" cy="20" r="19" fill="currentColor"/>
        <path d="M13.5 27.6L20 12.4L26.5 27.6M16.25 22.15H23.75" stroke="#FFFFFF" stroke-width="2.35" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    `;

    this.innerHTML = `
      <header class="app-header">
        <div class="container d-flex align-center justify-between">
          <a href="index.html" class="logo d-flex align-center text-accent" aria-label="Aura home">
            ${logoSvg}
            <h2 class="serif" style="margin-bottom: 0;">Aura.</h2>
          </a>
          <nav class="desktop-nav">
            <ul class="nav-links d-flex gap-4 align-center">
              <li class="dropdown">
                <a href="#" class="d-flex align-center gap-1 dropdown-toggle">Home <i class="bi bi-chevron-down" style="font-size: 0.75rem;"></i></a>
                <ul class="dropdown-menu card">
                  <li><a href="index.html">Home 1 (Classic)</a></li>
                  <li><a href="index-2.html">Home 2 (Creative)</a></li>
                </ul>
              </li>
              <li><a href="services.html">Services</a></li>
              <li><a href="themes.html">Themes</a></li>
              <li><a href="packages.html">Packages</a></li>
              <li><a href="vendors.html">Vendors</a></li>
              <li><a href="about.html">About</a></li>
              
              <li class="d-flex gap-2 align-center ms-4">
                <button class="icon-btn theme-toggle" title="Toggle Dark Mode"><i class="bi bi-moon"></i></button>
                <button class="icon-btn rtl-toggle" title="Toggle RTL"><i class="bi bi-translate"></i></button>
              </li>
              <div style="width: 1px; height: 24px; background: var(--shadow-dark-color); margin: 0 0.5rem;"></div>
              ${authLinks}
            </ul>
          </nav>
          <div class="d-flex align-center gap-2">
            <div class="mobile-only-icons">
              <button class="icon-btn theme-toggle"><i class="bi bi-moon"></i></button>
              <button class="icon-btn rtl-toggle"><i class="bi bi-translate"></i></button>
            </div>
            <button class="mobile-menu-btn" aria-label="Toggle menu">
              <i class="bi bi-list"></i>
            </button>
          </div>
        </div>
        
        <div class="mobile-nav">
          <ul class="mobile-nav-links">
            <li>
              <div class="mobile-dropdown-toggle d-flex justify-between align-center" style="cursor:pointer; font-weight:500;">
                Home <i class="bi bi-chevron-down"></i>
              </div>
              <ul class="mobile-dropdown-menu" style="display:none; padding-left: 1rem; margin-top: 0.5rem; flex-direction: column; gap: 0.5rem;">
                <li><a href="index.html" class="text-muted">Home 1 (Classic)</a></li>
                <li><a href="index-2.html" class="text-muted">Home 2 (Creative)</a></li>
              </ul>
            </li>
            <li><a href="services.html">Services</a></li>
            <li><a href="themes.html">Themes</a></li>
            <li><a href="packages.html">Packages</a></li>
            <li><a href="vendors.html">Vendors</a></li>
            <li><a href="about.html">About</a></li>
            ${authLinksMobile}
          </ul>
        </div>
      </header>
    `;

    const style = document.createElement("style");
    style.textContent = `
      .app-header {
        position: sticky;
        top: 0;
        z-index: 100;
        background: rgba(var(--bg-rgb, 244, 245, 247), 0.8);
        backdrop-filter: blur(12px);
        padding: 1rem 0;
        box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05);
      }
      .logo { text-decoration: none; gap: 0.6rem; flex-shrink: 0; }
      .logo-mark { width: 2rem; height: 2rem; flex: 0 0 2rem; display: block; }
      .logo h2 { margin: 0; font-size: 1.75rem; line-height: 1; color: inherit; letter-spacing: -0.025em; }
      @media (max-width: 480px) {
        .logo { gap: 0.5rem; }
        .logo-mark { width: 1.8rem; height: 1.8rem; flex-basis: 1.8rem; }
        .logo h2 { font-size: 1.55rem; }
      }
      
      .nav-links { list-style: none; margin: 0; padding: 0; }
      .nav-links a:not(.btn) { font-weight: 500; color: var(--text-dark); }
      .nav-links a:not(.btn):hover { color: var(--accent-color); }
      
      /* Desktop Dropdown Styles */
      .dropdown { position: relative; padding: 0.5rem 0; }
      .dropdown::after { content: ''; position: absolute; top: 100%; left: 0; width: 100%; height: 10px; }
      .dropdown-menu { 
        display: none; 
        position: absolute; 
        top: 100%; 
        left: -1rem; 
        min-width: 220px; 
        padding: 1rem; 
        flex-direction: column; 
        gap: 0.5rem;
        z-index: 1000;
      }
      .dropdown:hover .dropdown-menu { display: flex; }
      .dropdown-menu li { list-style: none; }
      .dropdown-menu li a { display: block; padding: 0.5rem 1rem; border-radius: var(--radius-sm); font-weight: 500; }
      .dropdown-menu li a:hover { background: var(--bg-color); box-shadow: var(--neo-inset-sm); color: var(--accent-color); }

      .nav-login, .nav-signup { padding: 0.5rem 1rem; border-radius: var(--radius-full); box-shadow: var(--neo-shadow-sm); transition: var(--transition); }
      .nav-login:hover, .nav-signup:hover { box-shadow: var(--neo-inset-sm); color: var(--accent-color); }
      .icon-btn { width: 36px; height: 36px; border-radius: 50%; border: none; background: var(--bg-color); box-shadow: var(--neo-shadow-sm); color: var(--text-dark); display: flex; align-items: center; justify-content: center; cursor: pointer; transition: var(--transition); }
      .icon-btn:hover { box-shadow: var(--neo-inset-sm); color: var(--accent-color); }
      .ms-2 { margin-inline-start: 0.5rem; }
      .ms-4 { margin-inline-start: 1rem; }
      
      .mobile-menu-btn { display: none; background: var(--bg-color); border: none; border-radius: var(--radius-sm); width: 44px; height: 44px; font-size: 1.5rem; color: var(--text-dark); box-shadow: var(--neo-shadow-sm); cursor: pointer; }
      .mobile-menu-btn:active { box-shadow: var(--neo-inset-sm); }
      
      .mobile-nav { display: none; padding: 1.5rem; background: var(--bg-color); position: absolute; top: 100%; left: 0; width: 100%; box-shadow: 0 10px 15px -3px rgba(0,0,0,0.1); max-height: calc(100vh - 80px); overflow-y: auto; }
      .mobile-nav.active { display: block; }
      .mobile-nav-links { display: flex; flex-direction: column; gap: 1.25rem; }
      .mobile-nav-links a:not(.btn) { color: var(--text-dark); font-weight: 500; }
      .mobile-nav-links .text-muted { color: var(--text-muted); }
      
      
      .mobile-only-icons { display: none; }
      @media (max-width: 1024px) {

        .desktop-nav { display: none; }
        .mobile-only-icons { display: flex; gap: 0.5rem; }
        .mobile-menu-btn { display: flex; align-items: center; justify-content: center; }
      }
    `;
    this.appendChild(style);

    const btn = this.querySelector(".mobile-menu-btn");
    const mobileNav = this.querySelector(".mobile-nav");
    btn.addEventListener("click", () => {
      mobileNav.classList.toggle("active");
    });

    // Mobile Dropdown Logic
    const mobileDropdownToggle = this.querySelector(".mobile-dropdown-toggle");
    if(mobileDropdownToggle) {
      mobileDropdownToggle.addEventListener("click", () => {
        const menu = this.querySelector(".mobile-dropdown-menu");
        if(menu.style.display === "none") {
          menu.style.display = "flex";
          mobileDropdownToggle.querySelector("i").classList.replace("bi-chevron-down", "bi-chevron-up");
        } else {
          menu.style.display = "none";
          mobileDropdownToggle.querySelector("i").classList.replace("bi-chevron-up", "bi-chevron-down");
        }
      });
    }

    const logouts = this.querySelectorAll(".nav-logout");
    logouts.forEach(l => l.addEventListener("click", (e) => {
      e.preventDefault();
      localStorage.removeItem("festivo_auth");
      window.location.href = "login.html";
    }));

    const themeToggles = this.querySelectorAll(".theme-toggle");
    const currentTheme = localStorage.getItem("festivo_theme") || "light";
    if (currentTheme === "dark") {
      document.documentElement.setAttribute("data-theme", "dark");
      themeToggles.forEach(btn => btn.innerHTML = `<i class="bi bi-sun"></i>`);
    }

    themeToggles.forEach(toggle => {
      toggle.addEventListener("click", () => {
        if (document.documentElement.getAttribute("data-theme") === "dark") {
          document.documentElement.removeAttribute("data-theme");
          localStorage.setItem("festivo_theme", "light");
          themeToggles.forEach(btn => btn.innerHTML = `<i class="bi bi-moon"></i>`);
        } else {
          document.documentElement.setAttribute("data-theme", "dark");
          localStorage.setItem("festivo_theme", "dark");
          themeToggles.forEach(btn => btn.innerHTML = `<i class="bi bi-sun"></i>`);
        }
      });
    });

    const rtlToggles = this.querySelectorAll(".rtl-toggle");
    const currentDir = localStorage.getItem("festivo_dir") || "ltr";
    if (currentDir === "rtl") {
      document.documentElement.setAttribute("dir", "rtl");
    }

    rtlToggles.forEach(toggle => {
      toggle.addEventListener("click", () => {
        if (document.documentElement.getAttribute("dir") === "rtl") {
          document.documentElement.setAttribute("dir", "ltr");
          localStorage.setItem("festivo_dir", "ltr");
        } else {
          document.documentElement.setAttribute("dir", "rtl");
          localStorage.setItem("festivo_dir", "rtl");
        }
      });
    });

    // Update global "Plan My Event" buttons dynamically
    setTimeout(() => {
      const planBtns = document.querySelectorAll('a[href="dashboard.html"]');
      planBtns.forEach(btn => {
        const text = btn.textContent.trim().toLowerCase();
        if (text === "plan my event" || text === "start planning" || text === "start planning now") {
          btn.href = isAuth ? "services.html" : "login.html?redirect=services.html";
        }
      });
    }, 0);
  }
}
customElements.define("app-header", AppHeader);




