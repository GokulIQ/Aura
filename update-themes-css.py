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

css_update = """
    /* ── Responsive safety for Theme Details ── */
    .theme-info-grid { display: grid; grid-template-columns: 2fr 1fr; gap: 4rem; align-items: start; width: 100%; max-width: 100%; box-sizing: border-box; }
    .theme-info-grid > div { min-width: 0; max-width: 100%; box-sizing: border-box; }
    .card-inset { box-sizing: border-box; max-width: 100%; overflow: hidden; padding: 1.5rem; }
    
    @media (max-width: 1024px) {
      .theme-gallery { grid-template-columns: 1fr; gap: 1rem; margin-bottom: 2rem; }
      .theme-gallery-main { height: 350px; }
      .theme-gallery-side { flex-direction: row; height: 150px; gap: 1rem; }
      .theme-gallery-side-img { height: 100%; flex: 1; }
      .theme-info-grid { grid-template-columns: 1fr; gap: 2rem; }
    }
    @media (max-width: 768px) {
      .theme-gallery-main { height: 250px; }
      .theme-gallery-side { height: 100px; }
      .card-inset { padding: 1.25rem; margin-bottom: 2rem; }
      .theme-info-grid { gap: 1.5rem; }
      html, body { max-width: 100vw; overflow-x: hidden; }
    }
"""

for file in files:
    path = os.path.join(base_path, file)
    with open(path, 'r', encoding='utf-8') as f:
        content = f.read()

    # Replace the old CSS with updated responsive CSS
    content = re.sub(
        r'\.theme-info-grid\s*\{.*?\}\s*@media\s*\(max-width:\s*1024px\)\s*\{.*?\}\s*@media\s*\(max-width:\s*600px\)\s*\{.*?\}',
        css_update,
        content,
        flags=re.DOTALL
    )

    with open(path, 'w', encoding='utf-8') as f:
        f.write(content)
        
    print(f"Updated CSS in {file}")
