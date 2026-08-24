document.addEventListener('DOMContentLoaded', () => {
  // Theme Selection Logic for Theme Details Pages
  const selectThemeBtn = document.getElementById('btn-select-theme');
  const favoriteThemeBtn = document.getElementById('btn-favorite-theme');

  if (selectThemeBtn) {
    selectThemeBtn.addEventListener('click', (e) => {
      e.preventDefault();
      
      // Get theme details from the page
      const themeName = document.querySelector('h1.serif').innerText;
      const themeDesc = document.querySelector('p.text-muted.mb-6').innerText;
      // Get the main image
      const themeImgSrc = document.querySelector('.main-img') ? document.querySelector('.main-img').src : 'assets/Boho Celebration.jpg'; 
      // If we don't have a main image class, try to get the first image in the grid
      const backupImgSrc = document.querySelector('.gallery-grid img') ? document.querySelector('.gallery-grid img').src : 'assets/Boho Celebration.jpg';

      const themeData = {
        name: themeName,
        description: themeDesc,
        image: themeImgSrc || backupImgSrc,
        dateSelected: new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })
      };

      localStorage.setItem('aura_selected_theme', JSON.stringify(themeData));
      
      // Change button state to show loading/success
      const originalText = selectThemeBtn.innerHTML;
      selectThemeBtn.innerHTML = '<i class="bi bi-check2-circle"></i> Theme Selected!';
      selectThemeBtn.classList.replace('btn-accent', 'btn-success');
      
      setTimeout(() => {
        window.location.href = 'dashboard-theme.html';
      }, 800);
    });
  }

  if (favoriteThemeBtn) {
    const themeName = document.querySelector('h1.serif') ? document.querySelector('h1.serif').innerText : '';
    
    // Check if already favorited
    const favorites = JSON.parse(localStorage.getItem('aura_favorite_themes')) || [];
    let isFavorite = favorites.includes(themeName);
    
    if (isFavorite) {
      favoriteThemeBtn.innerHTML = '<i class="bi bi-heart-fill text-accent"></i> Saved to Favorites';
    }

    favoriteThemeBtn.addEventListener('click', () => {
      let currentFavorites = JSON.parse(localStorage.getItem('aura_favorite_themes')) || [];
      
      if (isFavorite) {
        // Remove from favorites
        currentFavorites = currentFavorites.filter(name => name !== themeName);
        favoriteThemeBtn.innerHTML = '<i class="bi bi-heart"></i> Save to Favorites';
        isFavorite = false;
      } else {
        // Add to favorites
        currentFavorites.push(themeName);
        favoriteThemeBtn.innerHTML = '<i class="bi bi-heart-fill text-accent"></i> Saved to Favorites';
        isFavorite = true;
      }
      
      localStorage.setItem('aura_favorite_themes', JSON.stringify(currentFavorites));
    });
  }
});
