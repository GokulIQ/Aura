
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
          <h4>${userName}</h4>
          <p class="text-muted text-sm">Client Portal</p>
        </div>
        <nav class="dash-nav">
          <ul>
            <li><a href="dashboard.html" class="${active === "overview" ? "active" : ""}"><i class="bi bi-grid-1x2"></i> Overview</a></li>
            <li><a href="dashboard-theme.html" class="${active === "theme" ? "active" : ""}"><i class="bi bi-palette"></i> Theme Selection</a></li>
            <li><a href="dashboard-vendors.html" class="${active === "vendors" ? "active" : ""}"><i class="bi bi-people"></i> Vendors</a></li>
            <li><a href="dashboard-timeline.html" class="${active === "timeline" ? "active" : ""}"><i class="bi bi-clock-history"></i> Timeline</a></li>
            <li><a href="dashboard-checklist.html" class="${active === "checklist" ? "active" : ""}"><i class="bi bi-check2-square"></i> Checklist</a></li>
            <li><a href="dashboard-invoices.html" class="${active === "invoices" ? "active" : ""}"><i class="bi bi-receipt"></i> Invoices & Payments</a></li>
            <li class="mt-6"><a href="login.html" class="text-danger"><i class="bi bi-box-arrow-right"></i> Logout</a></li>
          </ul>
        </nav>
      </aside>
    `;

    const style = document.createElement("style");
    style.textContent = `
      .dashboard-sidebar {
        padding: 2rem 1.5rem;
      }
      .avatar {
        width: 80px;
        height: 80px;
        border-radius: 50%;
        margin: 0 auto;
        background: var(--bg-color);
        box-shadow: var(--neo-shadow-sm);
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 2rem;
        color: var(--accent-color);
      }
      .dash-nav ul {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
      }
      .dash-nav a {
        display: flex;
        align-items: center;
        gap: 0.75rem;
        padding: 0.875rem 1rem;
        border-radius: var(--radius-md);
        color: var(--text-dark);
        font-weight: 500;
        transition: var(--transition);
      }
      .dash-nav a:hover, .dash-nav a.active {
        background: var(--bg-color);
        box-shadow: var(--neo-inset-sm);
        color: var(--accent-color);
      }
      .text-danger {
        color: var(--danger) !important;
      }
    `;
    this.appendChild(style);
  }
}
customElements.define("dashboard-sidebar", DashboardSidebar);


