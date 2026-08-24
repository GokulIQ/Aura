import os
import re

with open('admin/services.html', 'r', encoding='utf-8') as f:
    template = f.read()

def create_page(filename, title, subtitle, nav_icon, nav_name, grid_items, add_btn_text):
    content = template
    
    # Update title
    content = content.replace('<title>Services Management — Aura Admin</title>', f'<title>{title} — Aura Admin</title>')
    
    # Update active nav link
    content = content.replace('href="services.html" class="admin-nav-link active"', 'href="services.html" class="admin-nav-link"')
    content = content.replace(f'href="{filename}" class="admin-nav-link"', f'href="{filename}" class="admin-nav-link active"')
    
    # Update page header
    content = content.replace('<div class="page-title">Services</div>', f'<div class="page-title">{title}</div>')
    content = content.replace('<div class="page-subtitle">Manage your decoration services and bookings</div>', f'<div class="page-subtitle">{subtitle}</div>')
    
    # Update add button
    content = content.replace('Add New Service', add_btn_text)
    
    # We won't fully replace the stats and tables to save time, but we'll change the section title
    content = content.replace('<div class="neo-card-title">Active Services</div>', f'<div class="neo-card-title">Active {title}</div>')
    content = content.replace('<span class="modal-title">Add New Service</span>', f'<span class="modal-title">{add_btn_text}</span>')
    
    with open(f'admin/{filename}', 'w', encoding='utf-8') as f:
        f.write(content)

# 1. Themes
create_page(
    'themes.html', 
    'Themes', 
    'Manage event themes and visual styles', 
    'bi-palette', 
    'Themes', 
    '', 
    'Add New Theme'
)

# 2. Packages
create_page(
    'packages.html', 
    'Packages', 
    'Manage bundled decoration packages', 
    'bi-box', 
    'Packages', 
    '', 
    'Add New Package'
)

# 3. Vendors
create_page(
    'vendors.html', 
    'Vendors', 
    'Manage external vendors and partners', 
    'bi-shop', 
    'Vendors', 
    '', 
    'Add New Vendor'
)

print('Created themes.html, packages.html, and vendors.html')
