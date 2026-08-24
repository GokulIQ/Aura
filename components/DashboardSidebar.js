
class DashboardSidebar extends HTMLElement {
  connectedCallback() {
    const userName = localStorage.getItem("aura_registered_name") || "Sarah Jenkins";

    const active = this.getAttribute("active") || "overview";
    
    this.innerHTML = `
      <aside class="dashboard-sidebar card">
        <div class="user-profile mb-6 text-center">
          <div class="avatar mb-4">
            <i class="bi bi-person-fill"></i>
          </div>
          <div class="user-info">
            <h4>${userName}</h4>
            <p class="text-muted text-sm">Client Portal</p>
          </div>
        </div>
        <nav class="dash-nav">
          <ul>
            <li><a href="dashboard.html" class="${active === "overview" ? "active" : ""}"><i class="bi bi-grid-1x2"></i> Overview</a></li>
            <li><a href="dashboard-theme.html" class="${active === "theme" ? "active" : ""}"><i class="bi bi-palette"></i> Theme</a></li>
            <li><a href="dashboard-vendors.html" class="${active === "vendors" ? "active" : ""}"><i class="bi bi-people"></i> Vendors</a></li>
            <li><a href="dashboard-timeline.html" class="${active === "timeline" ? "active" : ""}"><i class="bi bi-clock-history"></i> Timeline</a></li>
            <li><a href="dashboard-checklist.html" class="${active === "checklist" ? "active" : ""}"><i class="bi bi-check2-square"></i> Checklist</a></li>
            <li><a href="dashboard-invoices.html" class="${active === "invoices" ? "active" : ""}"><i class="bi bi-receipt"></i> Invoices</a></li>
            <li class="nav-logout-item"><a href="login.html" class="text-danger"><i class="bi bi-box-arrow-right"></i> Logout</a></li>
          </ul>
        </nav>
      </aside>
    `;

    const style = document.createElement("style");
    style.textContent = `
      /* ── Host element must not overflow ── */
      dashboard-sidebar {
        display: block;
        min-width: 0;
        max-width: 100%;
        width: 100%;
        box-sizing: border-box;
      }
      .dashboard-sidebar {
        padding: 1.5rem 1.25rem;
        width: 100%;
        max-width: 100%;
        box-sizing: border-box;
      }
      .avatar {
        width: 64px;
        height: 64px;
        border-radius: 50%;
        margin: 0 auto;
        background: var(--bg-color);
        box-shadow: var(--neo-shadow-sm);
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 1.5rem;
        color: var(--accent-color);
        flex-shrink: 0;
      }
      .user-profile {
        padding-bottom: 1.25rem;
        border-bottom: 1px solid var(--shadow-dark-color);
      }
      .user-info h4 { margin-bottom: 0.2rem; }
      .dash-nav {
        width: 100%;
        max-width: 100%;
        box-sizing: border-box;
      }
      .dash-nav ul {
        display: flex;
        flex-direction: column;
        gap: 0.25rem;
        width: 100%;
        max-width: 100%;
        box-sizing: border-box;
      }
      .dash-nav li.nav-logout-item { margin-top: 1rem; }
      .dash-nav a {
        display: flex;
        align-items: center;
        gap: 0.65rem;
        padding: 0.7rem 0.875rem;
        border-radius: var(--radius-sm);
        color: var(--text-dark);
        font-weight: 500;
        font-size: 0.875rem;
        transition: var(--transition);
        white-space: nowrap;
      }
      .dash-nav a i {
        font-size: 1rem;
        width: 20px;
        text-align: center;
        flex-shrink: 0;
      }
      .dash-nav a:hover {
        background: rgba(var(--bg-rgb), 0.5);
      }
      .dash-nav a.active {
        background: var(--accent-color);
        color: var(--white);
        box-shadow: 0 4px 10px rgba(122, 40, 59, 0.2);
      }
      .dash-nav a.active i {
        color: var(--white);
      }
      .text-danger {
        color: var(--danger) !important;
      }

      /* ── Tablet: sidebar goes horizontal ── */
      @media (max-width: 1024px) {
        .dashboard-sidebar {
          padding: 1rem;
          margin-bottom: 0;
        }
        .user-profile {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          text-align: left !important;
          padding-bottom: 0.75rem;
        }
        .avatar {
          margin: 0 !important;
          width: 44px;
          height: 44px;
          font-size: 1.1rem;
          box-shadow: none;
        }
        .user-profile .mb-4 { margin-bottom: 0 !important; }
        .user-info { display: flex; flex-direction: column; }
        .dash-nav ul {
          flex-direction: row;
          flex-wrap: wrap;
          gap: 0.4rem;
        }
        .dash-nav li.nav-logout-item { margin-top: 0; }
        .dash-nav a {
          padding: 0.45rem 0.7rem;
          font-size: 0.8rem;
          border-radius: var(--radius-full);
        }
      }

      /* ── Mobile: scrollable nav tabs ── */
      @media (max-width: 768px) {
        .dashboard-sidebar {
          padding: 0.75rem;
        }
        .user-profile {
          gap: 0.5rem;
          padding-bottom: 0.5rem;
          margin-bottom: 0.5rem !important;
        }
        .avatar {
          width: 36px;
          height: 36px;
          font-size: 0.95rem;
        }
        .user-info h4 { font-size: 0.85rem; }
        .user-info .text-sm { font-size: 0.7rem; }
        .dash-nav ul {
          flex-wrap: nowrap;
          overflow-x: auto;
          -webkit-overflow-scrolling: touch;
          scrollbar-width: none;
          padding-bottom: 0.15rem;
          gap: 0.35rem;
        }
        .dash-nav ul::-webkit-scrollbar { display: none; }
        .dash-nav a {
          padding: 0.4rem 0.6rem;
          font-size: 0.7rem;
        }
        .dash-nav li.nav-logout-item {
          display: none;
        }
      }
    `;
    this.appendChild(style);
  }
}
customElements.define("dashboard-sidebar", DashboardSidebar);
