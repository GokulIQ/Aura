
    const vendors = [
      { name: "Elite Decorations", category: "Decorator", location: "Mumbai", price: 20000, img: "assets/Boho Celebration.jpg", rating: 4.9, reviews: 124, desc: "Premium bespoke event styling and complete venue transformations.", date: "2023-05-01", popular: 95 },
      { name: "Lens Magic Studios", category: "Photographer", location: "Mumbai", price: 15000, img: "assets/Corporate Event Decoration Trends 2024.jpg", rating: 4.8, reviews: 89, desc: "Candid photography and cinematic videography for all occasions.", date: "2023-08-12", popular: 80 },
      { name: "Gourmet Bites", category: "Caterer", location: "Mumbai", price: 800, img: "assets/Rustic Romance.jpg", rating: 4.7, reviews: 210, desc: "Multi-cuisine catering specializing in live counters and fine dining.", date: "2022-11-20", popular: 100 },
      { name: "Bloom Floral Design", category: "Florist", location: "Navi Mumbai", price: 10000, img: "assets/Pink Blossom.jpg", rating: 4.9, reviews: 156, desc: "Exquisite floral arrangements and fresh flower wall installations.", date: "2024-01-15", popular: 90 },
      { name: "Sweet Sensations", category: "Baker", location: "Mumbai", price: 2500, img: "assets/Princess Royale.jpg", rating: 5.0, reviews: 340, desc: "Custom fondant cakes and dessert tables for special celebrations.", date: "2021-06-30", popular: 110 },
      { name: "DJ Soundscapes", category: "DJs / Music", location: "Thane", price: 12000, img: "assets/Team Celebration.jpg", rating: 4.6, reviews: 75, desc: "High-energy beats and professional lighting setup for parties.", date: "2023-09-05", popular: 65 },
      { name: "Classic Clicks", category: "Photographer", location: "Pune", price: 18000, img: "assets/Minimal White Wedding.jpg", rating: 4.8, reviews: 115, desc: "Timeless wedding and pre-wedding photography services.", date: "2022-03-10", popular: 85 },
      { name: "Royal Decor", category: "Decorator", location: "Mumbai", price: 25000, img: "assets/Royal Wedding.jpg", rating: 4.9, reviews: 205, desc: "Luxury wedding setups, mandaps, and grand entrance designs.", date: "2021-01-22", popular: 120 },
      { name: "Flawless Faces", category: "Makeup Artist", location: "Mumbai", price: 8000, img: "assets/About.jpg", rating: 4.9, reviews: 142, desc: "Bridal and party makeup by certified professional artists.", date: "2024-02-10", popular: 88 },
      { name: "Beats & Bass", category: "DJs / Music", location: "Pune", price: 15000, img: "assets/Festival Lights.jpg", rating: 4.7, reviews: 60, desc: "Corporate event and festival DJ with premium sound systems.", date: "2023-11-01", popular: 70 },
      { name: "Petal Pushers", category: "Florist", location: "Thane", price: 8000, img: "assets/Bohemian Floral Backdrop1.jpg", rating: 4.6, reviews: 90, desc: "Boho dried florals and unique pampas grass decorations.", date: "2024-03-20", popular: 75 },
      { name: "Spice Route Caterers", category: "Caterer", location: "Navi Mumbai", price: 1200, img: "assets/Wedding Table Centrepiece Set (10pc) 2.jpg", rating: 4.8, reviews: 175, desc: "Authentic regional cuisines and premium banquet catering.", date: "2022-08-14", popular: 95 }
    ];

    let currentCategory = "All";
    let searchQuery = "";
    let currentSort = "recommended";

    const grid = document.getElementById('vendorsGrid');
    const emptyState = document.getElementById('emptyState');
    const resultCount = document.getElementById('resultCount');
    const searchInput = document.getElementById('searchInput');
    const sortSelect = document.getElementById('sortSelect');
    const filterBtns = document.querySelectorAll('.filter-btn');
    const clearFiltersBtn = document.getElementById('clearFiltersBtn');

    function formatPrice(price, category) {
      const formatted = new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumSignificantDigits: 3 }).format(price);
      return category === 'Caterer' ? formatted + '/plate' : formatted;
    }

    function renderVendors() {
      // 1. Filter
      let filtered = vendors.filter(v => {
        const matchCategory = currentCategory === "All" || v.category === currentCategory;
        const searchLower = searchQuery.toLowerCase();
        const matchSearch = v.name.toLowerCase().includes(searchLower) || 
                            v.category.toLowerCase().includes(searchLower) ||
                            v.location.toLowerCase().includes(searchLower) ||
                            v.desc.toLowerCase().includes(searchLower);
        return matchCategory && matchSearch;
      });

      // 2. Sort
      filtered.sort((a, b) => {
        if (currentSort === "rating-desc") return b.rating - a.rating;
        if (currentSort === "price-asc") return a.price - b.price;
        if (currentSort === "price-desc") return b.price - a.price;
        if (currentSort === "popular") return b.popular - a.popular;
        if (currentSort === "newest") return new Date(b.date) - new Date(a.date);
        return 0; // recommended (default array order)
      });

      // 3. Render
      grid.classList.add('fade-out');
      setTimeout(() => {
        if (filtered.length === 0) {
          grid.style.display = 'none';
          emptyState.classList.add('active');
          resultCount.textContent = "0 Vendors Found";
        } else {
          grid.style.display = 'grid';
          emptyState.classList.remove('active');
          
          const activeBtnText = document.querySelector('.filter-btn.active').textContent;
          const label = activeBtnText === "All" ? "Vendors" : activeBtnText;
          resultCount.textContent = `${filtered.length} ${label} Found`;
          
          grid.innerHTML = filtered.map(v => `
            <vendor-card 
              name="${v.name}" 
              category="${v.category}" 
              location="${v.location}" 
              price="${formatPrice(v.price, v.category)}" 
              img="${v.img}" 
              rating="${v.rating}" 
              reviews="${v.reviews}" 
              desc="${v.desc}">
            </vendor-card>
          `).join('');
        }
        grid.classList.remove('fade-out');
      }, 150); // slight delay for smooth transition
    }

    // Event Listeners
    filterBtns.forEach(btn => {
      btn.addEventListener('click', (e) => {
        filterBtns.forEach(b => b.classList.remove('active'));
        e.target.classList.add('active');
        currentCategory = e.target.getAttribute('data-cat');
        renderVendors();
      });
    });

    searchInput.addEventListener('input', (e) => {
      searchQuery = e.target.value;
      renderVendors();
    });

    sortSelect.addEventListener('change', (e) => {
      currentSort = e.target.value;
      renderVendors();
    });

    clearFiltersBtn.addEventListener('click', () => {
      searchInput.value = "";
      searchQuery = "";
      currentCategory = "All";
      currentSort = "recommended";
      sortSelect.value = "recommended";
      filterBtns.forEach(b => b.classList.remove('active'));
      document.querySelector('.filter-btn[data-cat="All"]').classList.add('active');
      renderVendors();
    });

    // Initial render
    renderVendors();
  