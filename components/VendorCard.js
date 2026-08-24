
class VendorCard extends HTMLElement {
  connectedCallback() {
    const name = this.getAttribute("name") || "Vendor Name";
    const category = this.getAttribute("category") || "Category";
    const rating = this.getAttribute("rating") || "5.0";
    const location = this.getAttribute("location") || "Mumbai";
    const price = this.getAttribute("price") || "?0";
    const img = this.getAttribute("img") || "assets/placeholder.jpg";
    const link = this.getAttribute("link") || "#";

    this.innerHTML = `
      <div class="card vendor-card">
        <div class="vendor-img">
          <img src="${img}" alt="${name}" loading="lazy">
          <div class="vendor-rating"><i class="bi bi-star-fill text-warning"></i> ${rating}</div>
        </div>
        <div class="vendor-content mt-4">
          <div class="d-flex justify-between align-center mb-1">
            <span class="text-sm text-accent font-semibold">${category}</span>
            <span class="text-sm text-muted"><i class="bi bi-geo-alt"></i> ${location}</span>
          </div>
          <h3 class="mb-2">${name}</h3>
          <p class="text-sm text-muted mb-4">Starting from <strong class="text-dark">${price}</strong></p>
          <a href="${link}" class="btn btn-primary w-full">View Profile</a>
        </div>
      </div>
    `;

    if (!this.querySelector("style")) {
      const style = document.createElement("style");
      style.textContent = `
        .vendor-card { padding: 1rem; }
        .vendor-img { height: 180px; border-radius: var(--radius-md); overflow: hidden; position: relative; box-shadow: var(--neo-inset-sm); }
        .vendor-img img { width: 100%; height: 100%; object-fit: cover; }
        .vendor-rating { position: absolute; bottom: 10px; right: 10px; background: rgba(255,255,255,0.9); padding: 0.25rem 0.5rem; border-radius: var(--radius-full); font-size: 0.75rem; font-weight: 700; color: #1F2228; box-shadow: var(--neo-shadow-sm); }
        .text-dark { color: var(--text-dark); }
      `;
      this.appendChild(style);
    }
  }
}
customElements.define("vendor-card", VendorCard);


