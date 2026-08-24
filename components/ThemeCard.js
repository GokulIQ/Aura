
class ThemeCard extends HTMLElement {
  connectedCallback() {
    const title = this.getAttribute("title") || "Theme Title";
    const category = this.getAttribute("category") || "Category";
    const img = this.getAttribute("img") || "assets/placeholder.jpg";
    const price = this.getAttribute("price") || "Price";
    const link = this.getAttribute("link") || "theme-details.html";

    this.innerHTML = `
      <div class="card theme-card-wrapper">
        <div class="theme-card-img">
          <img src="${img}" alt="${title}" loading="lazy">
        </div>
        <div class="theme-card-content mt-4">
          <div class="d-flex justify-between align-center mb-2">
            <span class="badge info">${category}</span>
            <span class="text-accent font-semibold">${price}</span>
          </div>
          <h3 class="mb-2">${title}</h3>
          <p class="text-muted text-sm mb-4">Perfect for birthdays, anniversaries, and more.</p>
          <a href="${link}" class="btn btn-primary w-full">View Details</a>
        </div>
      </div>
    `;

    if (!this.querySelector("style")) {
      const style = document.createElement("style");
      style.textContent = `
        .theme-card-wrapper {
          padding: 1rem;
        }
        .theme-card-img {
          height: 200px;
          border-radius: var(--radius-md);
          overflow: hidden;
          box-shadow: var(--neo-inset-sm);
        }
        .theme-card-img img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }
        .theme-card-wrapper:hover .theme-card-img img {
          transform: scale(1.05);
        }
        .text-sm {
          font-size: 0.875rem;
        }
        .font-semibold {
          font-weight: 600;
        }
      `;
      this.appendChild(style);
    }
  }
}
customElements.define("theme-card", ThemeCard);

