import glob

for f in glob.glob('admin/*.html'):
    with open(f, 'r', encoding='utf-8') as file:
        content = file.read()
    
    content = content.replace('<a href="#" class="admin-nav-link"><i class="bi bi-palette"></i> Themes</a>', '<a href="themes.html" class="admin-nav-link"><i class="bi bi-palette"></i> Themes</a>')
    content = content.replace('<a href="#" class="admin-nav-link"><i class="bi bi-box"></i> Packages</a>', '<a href="packages.html" class="admin-nav-link"><i class="bi bi-box"></i> Packages</a>')
    content = content.replace('<a href="#" class="admin-nav-link"><i class="bi bi-shop"></i> Vendors</a>', '<a href="vendors.html" class="admin-nav-link"><i class="bi bi-shop"></i> Vendors</a>')
    
    with open(f, 'w', encoding='utf-8') as file:
        file.write(content)

print('Sidebar links updated')
