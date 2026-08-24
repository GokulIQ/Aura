import os
import glob
import re

sidebar_html = """  <!-- Sidebar -->
  <aside class="admin-sidebar" id="adminSidebar">
    <div class="admin-sidebar-header">
      <a href="dashboard.html" class="admin-sidebar-logo">
        <img src="../assets/icons/favicon.svg" alt="Aura" width="28" height="28">
        <div>Aura. <span style="font-size:0.75rem; font-family:'Plus Jakarta Sans', sans-serif; font-weight:600; color:var(--muted); text-transform:uppercase; letter-spacing:1px; display:block; line-height:1;">Admin</span></div>
      </a>
    </div>
    <nav>
      <div class="admin-nav-section">
        <div class="admin-nav-label">Main</div>
        <a href="dashboard.html" class="admin-nav-link"><i class="bi bi-grid-1x2"></i> Dashboard</a>
        <a href="products.html" class="admin-nav-link"><i class="bi bi-box-seam"></i> Products</a>
        <a href="orders.html" class="admin-nav-link"><i class="bi bi-receipt"></i> Orders <span class="admin-nav-badge">12</span></a>
        <a href="customers.html" class="admin-nav-link"><i class="bi bi-people"></i> Customers</a>
      </div>
      
      <div class="admin-nav-section">
        <div class="admin-nav-label">Event Management</div>
        <a href="themes.html" class="admin-nav-link"><i class="bi bi-palette"></i> Themes</a>
        <a href="packages.html" class="admin-nav-link"><i class="bi bi-box"></i> Packages</a>
        <a href="vendors.html" class="admin-nav-link"><i class="bi bi-shop"></i> Vendors</a>
      </div>

      <div class="admin-nav-section">
        <div class="admin-nav-label">Content</div>
        <a href="bulk-enquiries.html" class="admin-nav-link"><i class="bi bi-envelope-paper"></i> Bulk Enquiries <span class="admin-nav-badge">5</span></a>
        <a href="messages.html" class="admin-nav-link"><i class="bi bi-chat-dots"></i> Messages <span class="admin-nav-badge">8</span></a>
        <a href="blog.html" class="admin-nav-link"><i class="bi bi-file-earmark-text"></i> Blog</a>
        <a href="services.html" class="admin-nav-link"><i class="bi bi-stars"></i> Services</a>
      </div>
      
      <div class="admin-nav-section">
        <div class="admin-nav-label">System</div>
        <a href="settings.html" class="admin-nav-link"><i class="bi bi-gear"></i> Settings</a>
        <a href="../index.html" class="admin-nav-link" target="_blank"><i class="bi bi-box-arrow-up-right"></i> View Store</a>
      </div>
    </nav>
    <div style="padding: 1.5rem; border-top: 1px solid var(--shadow-dark-color);">
      <div style="display: flex; align-items: center; gap: 1rem; margin-bottom: 1rem;">
        <div style="width: 40px; height: 40px; border-radius: 50%; background: var(--bg-color); box-shadow: var(--neo-inset-sm); display: flex; align-items: center; justify-content: center; font-weight: 700; color: var(--primary);">A</div>
        <div>
          <div style="font-weight: 700; font-size: 0.875rem;">Admin User</div>
          <div style="font-size: 0.75rem; color: var(--muted);">Super Admin</div>
        </div>
      </div>
      <a href="../login.html" class="btn" style="width: 100%; color: var(--danger);"><i class="bi bi-box-arrow-right"></i> Logout</a>
    </div>
  </aside>
"""

topbar_html = """    <div class="admin-topbar">
      <button id="sidebarToggle" class="hdr-btn d-lg-none" style="margin-right: 0.5rem;"><i class="bi bi-list"></i></button>
      
      <div class="admin-search">
        <i class="bi bi-search"></i>
        <input type="text" placeholder="Search...">
      </div>
      
      <div style="flex:1;"></div>
      
      <button class="hdr-btn" id="themeToggle"><i class="bi bi-moon"></i></button>
      <button class="hdr-btn" style="position:relative;">
        <i class="bi bi-bell"></i>
        <span style="position:absolute; top:8px; right:8px; width:8px; height:8px; background:var(--danger); border-radius:50%;"></span>
      </button>
    </div>
"""

scripts_html = """<script>
  const sidebarToggle = document.getElementById('sidebarToggle');
  const sidebar = document.getElementById('adminSidebar');
  if(sidebarToggle && sidebar) {
    sidebarToggle.addEventListener('click', () => {
      sidebar.classList.toggle('open');
    });
  }
  const themeToggle = document.getElementById('themeToggle');
  if(themeToggle) {
    themeToggle.addEventListener('click', () => {
      const currentTheme = document.documentElement.getAttribute('data-theme');
      if (currentTheme === 'dark') {
        document.documentElement.removeAttribute('data-theme');
        themeToggle.innerHTML = '<i class="bi bi-moon"></i>';
        localStorage.setItem('admin_theme', 'light');
      } else {
        document.documentElement.setAttribute('data-theme', 'dark');
        themeToggle.innerHTML = '<i class="bi bi-sun"></i>';
        localStorage.setItem('admin_theme', 'dark');
      }
    });
    if (localStorage.getItem('admin_theme') === 'dark') {
      document.documentElement.setAttribute('data-theme', 'dark');
      themeToggle.innerHTML = '<i class="bi bi-sun"></i>';
    }
  }
</script>
</body>"""

def clean_css(css_content):
    bad_prefixes = [
        'body', '.admin-layout', '.admin-sidebar', '.sidebar-', 
        '.admin-main', '.admin-topbar', '.topbar-', '.breadcrumb', '.admin-content',
        '*,', '.btn ', '.btn-', '.page-', '.stats-row {', '@media'
    ]
    
    cleaned_lines = []
    lines = css_content.split('\\n') if '\\n' in css_content else css_content.split('\n')
    skip_mode = False
    
    for line in lines:
        line_stripped = line.strip()
        
        # very simple skip mode for multi-line media queries that override sidebar
        if line_stripped.startswith('@media (max-width'):
            skip_mode = True
            continue
        if skip_mode and line_stripped == '}':
            skip_mode = False
            continue
        if skip_mode:
            continue
            
        is_bad = False
        for prefix in bad_prefixes:
            if line_stripped.startswith(prefix):
                is_bad = True
                break
        
        if not is_bad:
            cleaned_lines.append(line)
            
    return '\n'.join(cleaned_lines)

for filepath in glob.glob("admin/*.html"):
    
    # Removed git checkout to preserve our manual fixes
    
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # 1. Add admin.css link in head
    if "admin.css" not in content:
        content = content.replace("</head>", '  <link rel="stylesheet" href="../assets/css/admin.css">\n</head>')
    
    # 2. Clean inline <style>...</style> block
    def style_replacer(match):
        css = match.group(1)
        cleaned = clean_css(css)
        return f"<style>\n{cleaned}\n</style>"
        
    content = re.sub(r'<style>(.*?)</style>', style_replacer, content, flags=re.DOTALL)
    
    # 3. Replace sidebar: match <aside> ... </aside>
    content = re.sub(r'<aside.*?</aside>', sidebar_html, content, flags=re.DOTALL)
    
    # 4. Replace topbar: match <header class="admin-topbar">...</header> OR <div class="admin-topbar">...</div> 
    if re.search(r'<header class="admin-topbar">.*?</header>', content, flags=re.DOTALL):
        content = re.sub(r'<header class="admin-topbar">.*?</header>', topbar_html, content, flags=re.DOTALL)
    else:
        content = re.sub(r'<div class="admin-topbar">.*?<div class="admin-content">', topbar_html + '\n    <div class="admin-content">', content, flags=re.DOTALL)

    # 5. Fix titles: Replace Festivo Admin with Aura Admin
    content = content.replace("Festivo Admin", "Aura Admin")
    content = content.replace("Festivo", "Aura")
    
    # 6. Replace `main class="admin-content"` with `div class="admin-content"`
    content = content.replace('<main class="admin-content">', '<div class="admin-content">')
    content = content.replace('</main>', '</div>')
    
    # 7. Add neo-card classes to specific elements to keep them looking like Neomorphism but preserving custom css
    content = content.replace('class="table-card"', 'class="neo-card" style="padding:0; overflow:hidden;"')
    content = content.replace('class="table-card-header"', 'class="neo-card-header" style="padding: 1.5rem 1.5rem 0 1.5rem;"')
    content = content.replace('class="table-card-title"', 'class="neo-card-title"')
    
    # Convert their standard table HTML to bootstrap-like .table
    content = content.replace('<div class="table-wrapper">', '<div class="table-responsive" style="border-radius:0; box-shadow:none; padding:1.5rem;">')
    content = re.sub(r'<table>', '<table class="table">', content)

    # Convert generic cards
    content = content.replace('class="stat-card"', 'class="analytics-card" style="padding:1rem 1.5rem;"')
    content = content.replace('class="blog-stat"', 'class="analytics-card" style="padding:1rem 1.5rem;"')
    content = content.replace('class="service-card"', 'class="neo-card" style="display:flex;align-items:flex-start;gap:1rem;padding:1.5rem;"')
    content = content.replace('class="settings-tabs"', 'class="neo-card" style="padding:0;overflow:hidden;width:240px;"')
    content = content.replace('class="settings-content"', 'class="neo-card" style="flex:1;"')
    
    # 8. Add script tag logic
    if "sidebarToggle" not in content:
        content = content.replace("</body>", scripts_html)
    
    # Remove active from all nav links
    content = content.replace('class="admin-nav-link active"', 'class="admin-nav-link"')
    # Add active to current
    filename = os.path.basename(filepath)
    content = content.replace(f'href="{filename}" class="admin-nav-link"', f'href="{filename}" class="admin-nav-link active"')

    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)

print("Updated all admin pages properly with CSS intact!")
