import os
import re

files = [
    'theme-details-anniversary.html',
    'theme-details-baby.html',
    'theme-details-corporate.html',
    'theme-details-festival.html',
    'theme-details-wedding.html'
]

base_path = r'd:\Desktop\IQ-CRM projects\party-supplies'

for file in files:
    path = os.path.join(base_path, file)
    with open(path, 'r', encoding='utf-8') as f:
        content = f.read()

    # Add main-img class to first img if it's the hero image
    content = re.sub(r'(<div class="theme-gallery-main">.*?)<img (.*?)>', r'\1<img class="main-img" \2>', content, flags=re.DOTALL)
    
    # Replace buttons
    content = content.replace(
        '<a href="dashboard.html" class="btn btn-accent w-full mb-4">Select This Theme</a>',
        '<a href="#" id="btn-select-theme" class="btn btn-accent w-full mb-4">Select This Theme</a>'
    )
    content = content.replace(
        '<button class="btn btn-primary w-full"><i class="bi bi-heart"></i> Save to Favorites</button>',
        '<button id="btn-favorite-theme" class="btn btn-primary w-full"><i class="bi bi-heart"></i> Save to Favorites</button>'
    )
    
    # Add script
    if 'theme-selection.js' not in content:
        content = content.replace(
            '<script src="components/AppFooter.js" defer></script>',
            '<script src="components/AppFooter.js" defer></script>\n  <script src="assets/js/theme-selection.js" defer></script>'
        )

    with open(path, 'w', encoding='utf-8') as f:
        f.write(content)
        
    print(f"Updated {file}")
