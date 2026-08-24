
class AppFooter extends HTMLElement {
  connectedCallback() {
    const logoSvg = `
      <svg class="footer-logo-mark" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">
        <circle cx="20" cy="20" r="19" fill="currentColor"/>
        <path d="M13.5 27.6L20 12.4L26.5 27.6M16.25 22.15H23.75" stroke="#FFFFFF" stroke-width="2.35" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    `;

    this.innerHTML = `
      <footer class="app-footer section">
        <div class="container">
          <div class="grid grid-cols-4 gap-8">
            <div class="footer-col">
              <a href="index.html" class="logo d-flex align-center text-accent mb-4" aria-label="Aura home">
                ${logoSvg}
                <h2 class="serif" style="margin-bottom: 0;">Aura.</h2>
              </a>
              <p class="text-muted mb-6">Your Celebration. Perfectly Planned. We manage birthdays, anniversaries, corporate events, and more with end-to-end execution.</p>
              <div class="social-links d-flex gap-4">
                <a href="https://www.instagram.com/accounts/login/" target="_blank" rel="noopener noreferrer" class="social-icon"><i class="bi bi-instagram"></i></a>
                <a href="https://www.facebook.com/login/" target="_blank" rel="noopener noreferrer" class="social-icon"><i class="bi bi-facebook"></i></a>
                <a href="https://www.pinterest.com/login/" target="_blank" rel="noopener noreferrer" class="social-icon"><i class="bi bi-pinterest"></i></a>
              </div>
            </div>
            <div class="footer-col">
              <h4 class="mb-4">Services</h4>
              <ul class="footer-links">
                <li><a href="services.html">Birthday Planning</a></li>
                <li><a href="services.html">Anniversary Planning</a></li>
                <li><a href="services.html">Baby Shower</a></li>
                <li><a href="services.html">Corporate Events</a></li>
              </ul>
            </div>
            <div class="footer-col">
              <h4 class="mb-4">Quick Links</h4>
              <ul class="footer-links">
                <li><a href="themes.html">Themes Gallery</a></li>
                <li><a href="packages.html">Packages</a></li>
                <li><a href="vendors.html">Our Vendors</a></li>
                <li><a href="about.html">About Us</a></li>
              </ul>
            </div>
            <div class="footer-col">
              <h4 class="mb-4">Contact</h4>
              <ul class="footer-links">
                <li><i class="bi bi-telephone text-accent"></i> +91 98765 43210</li>
                <li><i class="bi bi-envelope text-accent"></i> hello@aura.com</li>
                <li><i class="bi bi-geo-alt text-accent"></i> 123 Celebration Ave, Mumbai</li>
              </ul>
            </div>
          </div>
          <div class="footer-bottom mt-8 text-center text-muted">
            <p>&copy; 2026 Aura Event Planners. All rights reserved.</p>
          </div>
        </div>
      </footer>
    `;

    const style = document.createElement("style");
    style.textContent = `
      .app-footer {
        background: var(--bg-color);
        box-shadow: 0 -10px 30px -10px rgba(0,0,0,0.05);
        margin-top: 4rem;
        padding-bottom: 2rem;
      }
      .app-footer .logo { text-decoration: none; gap: 0.6rem; }
      .footer-logo-mark { width: 2rem; height: 2rem; flex: 0 0 2rem; display: block; }
      .app-footer .logo h2 { margin: 0; font-size: 1.75rem; line-height: 1; color: inherit; letter-spacing: -0.025em; }
      @media (max-width: 480px) {
        .app-footer .logo { gap: 0.5rem; }
        .footer-logo-mark { width: 1.8rem; height: 1.8rem; flex-basis: 1.8rem; }
        .app-footer .logo h2 { font-size: 1.55rem; }
      }
      .footer-links {
        display: flex;
        flex-direction: column;
        gap: 0.75rem;
      }
      .footer-links a, .footer-links li {
        color: var(--text-muted);
        display: flex;
        align-items: center;
        gap: 0.5rem;
      }
      .footer-links a:hover {
        color: var(--accent-color);
      }
      .social-icon {
        width: 40px;
        height: 40px;
        border-radius: var(--radius-full);
        background: var(--bg-color);
        box-shadow: var(--neo-shadow-sm);
        display: flex;
        align-items: center;
        justify-content: center;
        color: var(--text-dark);
        transition: var(--transition);
      }
      .social-icon:hover {
        box-shadow: var(--neo-inset-sm);
        color: var(--accent-color);
      }
      .footer-bottom {
        border-top: 1px solid var(--shadow-dark-color);
        padding-top: 2rem;
      }
    `;
    this.appendChild(style);
  }
}
customElements.define("app-footer", AppFooter);

