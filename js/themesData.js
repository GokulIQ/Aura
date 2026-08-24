const themes = [
  {
    id: "bohemian-dream",
    name: "Bohemian Dream",
    category: "Birthday / Adult",
    price: 15000,
    rating: 4.9,
    reviews: 120,
    heroImage: "assets/Boho Celebration.jpg",
    gallery: [
      "assets/Bohemian Floral Backdrop1.jpg",
      "assets/Bohemian Floral Backdrop2.jpg",
      "assets/Bohemian Floral Backdrop3.jpg",
      "assets/Boho Dreamer.jpg"
    ],
    description: "An earthy celebration concept combining dried florals, macramé textures, warm candlelight, and relaxed floor seating for an intimate evening gathering.",
    highlights: {
      style: "Bohemian / Earthy",
      bestFor: "Adult Birthdays & Intimate Parties",
      mood: "Warm & Intimate",
      capacity: "20–80 Guests"
    },
    included: [
      "Custom floral backdrop",
      "Dried floral arrangements",
      "Warm ambient lighting",
      "Macramé decorations",
      "Floor seating setup",
      "Personalized signage",
      "Table styling",
      "Cake table decoration"
    ],
    perfectFor: [
      "Adult Birthday",
      "Anniversary",
      "Evening Celebration",
      "Private Party",
      "Couple Celebration"
    ],
    relatedThemes: [
      "bohemian-floral-backdrop",
      "rustic-romance",
      "golden-anniversary"
    ]
  },
  {
    id: "unicorn-magic",
    name: "Unicorn Magic",
    category: "Kids",
    price: 12000,
    rating: 4.8,
    reviews: 85,
    heroImage: "assets/Unicorn Dreams.jpg",
    gallery: [
      "assets/Unicorn Dreams Birthday Set1.jpg",
      "assets/Unicorn Dreams Birthday Set2.jpg",
      "assets/Unicorn Dreams Birthday Set3.jpg",
      "assets/Unicorn Party Kit.jpg"
    ],
    description: "Bring the magic to life with our Unicorn themed setup! Featuring pastel rainbow balloons, glittering accents, and whimsical decor that will make any child's birthday unforgettable.",
    highlights: {
      style: "Whimsical / Pastel",
      bestFor: "Kids Birthdays",
      mood: "Magical & Playful",
      capacity: "10–50 Guests"
    },
    included: [
      "Pastel balloon arch",
      "Unicorn themed backdrop",
      "Themed cake table",
      "Glittering table centrepieces",
      "Fairy lights setup",
      "Custom welcome board"
    ],
    perfectFor: [
      "Kids Birthday",
      "Toddler Party",
      "School Events",
      "Playdates"
    ],
    relatedThemes: [
      "princess-royale",
      "pastel-paradise",
      "jungle-safari"
    ]
  },
  {
    id: "princess-royale",
    name: "Princess Royale",
    category: "Kids",
    price: 12000,
    rating: 4.9,
    reviews: 92,
    heroImage: "assets/Princess Royale.jpg",
    gallery: [
      "assets/Princess Birthday DIY Kit1.jpg",
      "assets/Princess Birthday DIY Kit2.jpg",
      "assets/Princess Birthday DIY Kit3.jpg",
      "assets/Pink Blossom.jpg"
    ],
    description: "A royal setup fit for a princess! Combining soft pinks, gold accents, and elegant drapery to create a fairy tale atmosphere.",
    highlights: {
      style: "Royal / Elegant",
      bestFor: "Kids Birthdays",
      mood: "Fairy Tale",
      capacity: "20–60 Guests"
    },
    included: [
      "Royal pink and gold backdrop",
      "Crown centrepieces",
      "Elegant drapery",
      "Pink balloon garlands",
      "Throne chair rental",
      "Themed dessert table styling"
    ],
    perfectFor: [
      "Kids Birthday",
      "First Birthday",
      "Costume Party"
    ],
    relatedThemes: [
      "unicorn-magic",
      "pink-blossom",
      "pastel-paradise"
    ]
  },
  {
    id: "jungle-safari",
    name: "Jungle Safari",
    category: "Kids",
    price: 13000,
    rating: 4.7,
    reviews: 78,
    heroImage: "assets/Jungle Safari.jpg",
    gallery: [
      "assets/Jungle Safari Party Decorations1.jpg",
      "assets/Jungle Safari Party Decorations2.jpg",
      "assets/Jungle Safari Party Decorations3.jpg",
      "assets/Jungle Safari Kit.jpg"
    ],
    description: "Embark on an adventure with our vibrant Jungle Safari theme! Bursting with tropical greens, animal motifs, and playful decor perfect for little explorers.",
    highlights: {
      style: "Tropical / Playful",
      bestFor: "Kids & Toddler Birthdays",
      mood: "Adventurous",
      capacity: "15–50 Guests"
    },
    included: [
      "Tropical green balloon arch",
      "Safari animal cutouts",
      "Faux leaf decor",
      "Wooden crate props",
      "Themed welcome signage",
      "Rustic table styling"
    ],
    perfectFor: [
      "Kids Birthday",
      "First Birthday",
      "Outdoor Celebration"
    ],
    relatedThemes: [
      "unicorn-magic",
      "pastel-paradise",
      "bohemian-dream"
    ]
  },
  {
    id: "silver-jubilee-elegance",
    name: "Silver Jubilee Elegance",
    category: "Anniversary",
    price: 25000,
    rating: 4.9,
    reviews: 110,
    heroImage: "assets/Silver Jubilee (25th).jpg",
    gallery: [
      "assets/Metallic Fringe Curtain.jpg",
      "assets/Fairy Light Backdrop 2x2m1.jpg",
      "assets/Confetti Balloon Arch Kit2.jpg"
    ],
    description: "Celebrate 25 years of love with this elegant silver-themed setup. Crisp whites, metallic silvers, and sparkling lights create a sophisticated atmosphere.",
    highlights: {
      style: "Elegant / Silver",
      bestFor: "25th Anniversaries",
      mood: "Sophisticated & Sparkling",
      capacity: "50–150 Guests"
    },
    included: [
      "Silver and white balloon arch",
      "Metallic fringe backdrop",
      "Fairy lighting installation",
      "Silver table runners",
      "Crystal centrepieces",
      "Custom anniversary signage"
    ],
    perfectFor: [
      "25th Anniversary",
      "Milestone Celebration",
      "Gala Dinner"
    ],
    relatedThemes: [
      "golden-anniversary",
      "romantic-evening",
      "minimalist-white"
    ]
  },
  {
    id: "golden-anniversary",
    name: "Golden Anniversary (50th)",
    category: "Anniversary",
    price: 28000,
    rating: 5.0,
    reviews: 145,
    heroImage: "assets/Golden Anniversary (50th).jpg",
    gallery: [
      "assets/Royal Wedding Backdrop Panel3.jpg",
      "assets/Fairy Light Curtain.jpg",
      "assets/Wedding Table Centrepiece Set (10pc)3.jpg"
    ],
    description: "Honor a lifetime of love with our opulent Golden Anniversary setup. Rich golds, warm lighting, and luxurious floral arrangements for an unforgettable milestone.",
    highlights: {
      style: "Opulent / Gold",
      bestFor: "50th Anniversaries",
      mood: "Luxurious & Warm",
      capacity: "50–200 Guests"
    },
    included: [
      "Gold sequin backdrop",
      "Warm ambient uplighting",
      "Gold-accented floral arrangements",
      "Elegant table settings",
      "Premium chair sashes",
      "Custom golden welcome board"
    ],
    perfectFor: [
      "50th Anniversary",
      "Milestone Celebration",
      "Luxury Banquet"
    ],
    relatedThemes: [
      "silver-jubilee-elegance",
      "royal-luxury-decor",
      "rustic-romance"
    ]
  },
  {
    id: "romantic-evening",
    name: "Romantic Evening",
    category: "Anniversary",
    price: 18000,
    rating: 4.8,
    reviews: 95,
    heroImage: "assets/Romantic Evening.jpg",
    gallery: [
      "assets/Heart Shaped Balloons.jpg",
      "assets/Neon Sign Happy Birthday.jpg",
      "assets/Fairy Light Backdrop 2x2m2.jpg"
    ],
    description: "A perfect setup for intimate proposals or romantic anniversaries. Featuring rich reds, dim ambient lighting, and romantic floral touches.",
    highlights: {
      style: "Intimate / Romantic",
      bestFor: "Proposals & Anniversaries",
      mood: "Passionate & Cozy",
      capacity: "2–20 Guests"
    },
    included: [
      "Red rose petal walkway",
      "Candlelight arrangements",
      "Heart-shaped balloon accents",
      "Fairy light curtain",
      "Champagne table setup",
      "Custom romantic signage"
    ],
    perfectFor: [
      "Proposals",
      "First Anniversary",
      "Valentine's Day",
      "Intimate Dinner"
    ],
    relatedThemes: [
      "bohemian-dream",
      "rustic-romance",
      "pink-blossom"
    ]
  },
  {
    id: "minimalist-white",
    name: "Minimalist White",
    category: "Luxury",
    price: 35000,
    rating: 4.9,
    reviews: 130,
    heroImage: "assets/Minimal White Wedding.jpg",
    gallery: [
      "assets/Minimal & Modern.jpg",
      "assets/Wedding Table Centrepiece Set (10pc)1.jpg",
      "assets/Flower Wall Backdrop.jpg"
    ],
    description: "Clean lines, pure whites, and understated elegance. This luxury setup is perfect for modern weddings and high-end corporate events where less is more.",
    highlights: {
      style: "Modern / Minimalist",
      bestFor: "Weddings & Galas",
      mood: "Clean & Elegant",
      capacity: "100–300 Guests"
    },
    included: [
      "Seamless white backdrop",
      "Modern structural centrepieces",
      "Crisp white floral arrangements",
      "Premium white linens",
      "Acrylic chairs & signage",
      "Professional spotlighting"
    ],
    perfectFor: [
      "Modern Wedding",
      "Corporate Gala",
      "Luxury Banquet"
    ],
    relatedThemes: [
      "royal-luxury-decor",
      "royal-wedding",
      "premium-table-decor"
    ]
  },
  {
    id: "royal-luxury-decor",
    name: "Royal Luxury Decor",
    category: "Luxury",
    price: 80000,
    rating: 5.0,
    reviews: 210,
    heroImage: "assets/Royal Wedding Backdrop Panel2.jpg",
    gallery: [
      "assets/Royal Wedding Backdrop Panel1.png",
      "assets/Royal Wedding Backdrop Panel3.jpg",
      "assets/Royal Velvet Backdrop.jpg",
      "assets/Royal Grandeur.jpg"
    ],
    description: "Experience unparalleled grandeur with our Royal Luxury Decor. Featuring velvet drapes, towering floral installations, and crystal chandeliers for a truly majestic event.",
    highlights: {
      style: "Grand / Majestic",
      bestFor: "Large Weddings & VIP Events",
      mood: "Opulent & Breathtaking",
      capacity: "200–500+ Guests"
    },
    included: [
      "Custom velvet and gold panel backdrop",
      "Crystal chandelier installations",
      "Massive floral arches",
      "Premium stage design",
      "VIP lounge seating areas",
      "Ornate table centrepieces"
    ],
    perfectFor: [
      "Grand Wedding",
      "VIP Gala",
      "Luxury Reception"
    ],
    relatedThemes: [
      "royal-wedding",
      "golden-anniversary",
      "minimalist-white"
    ]
  },
  {
    id: "premium-table-decor",
    name: "Premium Table Decor",
    category: "Luxury",
    price: 12000,
    rating: 4.8,
    reviews: 65,
    heroImage: "assets/Wedding Table Centrepiece Set (10pc) 2.jpg",
    gallery: [
      "assets/Wedding Table Centrepiece Set (10pc)1.jpg",
      "assets/Wedding Table Centrepiece Set (10pc)3.jpg",
      "assets/Wedding Table Centrepiece Set (10pc)4.jpg"
    ],
    description: "Elevate your dining experience with our exquisite table decor packages. Perfect for transforming any standard venue into a premium dining space.",
    highlights: {
      style: "Detailed / Refined",
      bestFor: "Dinner Parties & Banquets",
      mood: "Sophisticated",
      capacity: "20–100 Guests"
    },
    included: [
      "Premium table linens and runners",
      "Crystal or floral centrepieces",
      "Elegant charger plates",
      "Custom menu cards",
      "Ambient table lighting",
      "Coordinated napkins and rings"
    ],
    perfectFor: [
      "Dinner Party",
      "Corporate Banquet",
      "Wedding Reception"
    ],
    relatedThemes: [
      "minimalist-white",
      "royal-luxury-decor",
      "romantic-evening"
    ]
  },
  {
    id: "pastel-paradise",
    name: "Pastel Paradise",
    category: "Baby Shower",
    price: 18000,
    rating: 4.9,
    reviews: 155,
    heroImage: "assets/Pastel Birthday.jpg",
    gallery: [
      "assets/Pastel Birthday Balloon Garland Kit1.jpg",
      "assets/Pastel Birthday Balloon Garland Kit2.jpg",
      "assets/Pastel Birthday Balloon Garland Kit3.jpg",
      "assets/Pastel Balloon Arch Kit.jpg"
    ],
    description: "A soft and dreamy pastel setup, ideal for baby showers and gentle birthday celebrations. Features a harmonious blend of muted tones and elegant soft lighting.",
    highlights: {
      style: "Soft / Dreamy",
      bestFor: "Baby Showers & 1st Birthdays",
      mood: "Gentle & Joyful",
      capacity: "30–80 Guests"
    },
    included: [
      "Large pastel balloon garland",
      "Custom arched backdrops",
      "Soft ambient lighting",
      "Themed cake pedestals",
      "Floral pastel accents",
      "Welcome easel and board"
    ],
    perfectFor: [
      "Baby Shower",
      "Gender Reveal",
      "First Birthday"
    ],
    relatedThemes: [
      "baby-blue-dream",
      "baby-welcome-celebration",
      "unicorn-magic"
    ]
  },
  {
    id: "baby-blue-dream",
    name: "Baby Blue Dream",
    category: "Baby Shower",
    price: 16000,
    rating: 4.8,
    reviews: 112,
    heroImage: "assets/Baby Blue Dream.jpg",
    gallery: [
      "assets/Baby Shower Blue Theme Kit1.jpg",
      "assets/Baby Shower Blue Theme Kit2.jpg",
      "assets/Baby Shower Blue Theme Kit3.jpg",
      "assets/Baby Shower Kit — Blue.jpg"
    ],
    description: "A charming blue and white themed setup. Perfect for welcoming a baby boy or hosting a serene, cloud-like celebration.",
    highlights: {
      style: "Serene / Blue",
      bestFor: "Baby Boy Showers",
      mood: "Calm & Sweet",
      capacity: "20–60 Guests"
    },
    included: [
      "Blue and white balloon arch",
      "Cloud or star themed backdrops",
      "Blue floral arrangements",
      "Themed dessert table setup",
      "Custom baby blocks props",
      "Teddy bear accents"
    ],
    perfectFor: [
      "Baby Boy Shower",
      "First Birthday",
      "Christening"
    ],
    relatedThemes: [
      "pastel-paradise",
      "baby-welcome-celebration",
      "princess-royale"
    ]
  },
  {
    id: "baby-welcome-celebration",
    name: "Baby Welcome Celebration",
    category: "Baby Shower",
    price: 14500,
    rating: 4.7,
    reviews: 88,
    heroImage: "assets/Baby Welcome.jpg",
    gallery: [
      "assets/Baby Shower Pink Theme Complete Kit1.jpg",
      "assets/Baby Shower Pink Theme Complete Kit2.jpg",
      "assets/Baby Shower Pink Theme Complete Kit3.jpg",
      "assets/Baby Shower Kit — Pink.jpg"
    ],
    description: "A warm and inviting pink-themed setup designed to celebrate the arrival of a new family member with joy and elegance.",
    highlights: {
      style: "Warm / Pink",
      bestFor: "Baby Girl Showers",
      mood: "Joyous & Loving",
      capacity: "20–60 Guests"
    },
    included: [
      "Pink and gold balloon garland",
      "Floral welcome ring",
      "Soft draping",
      "Themed cake stand",
      "Custom welcome baby signage",
      "Soft seating for parents"
    ],
    perfectFor: [
      "Baby Girl Shower",
      "Welcome Home Party",
      "Naming Ceremony"
    ],
    relatedThemes: [
      "pastel-paradise",
      "baby-blue-dream",
      "pink-blossom"
    ]
  },
  {
    id: "corporate-gala",
    name: "Corporate Gala",
    category: "Corporate",
    price: 45000,
    rating: 4.9,
    reviews: 60,
    heroImage: "assets/Corporate.jpg",
    gallery: [
      "assets/Corporate Event Decoration Trends 2024.jpg",
      "assets/Product Launch.jpg",
      "assets/Office Party.jpg"
    ],
    description: "Professional, polished, and on-brand. Our Corporate Gala theme ensures your company's event makes a lasting impression on clients and employees alike.",
    highlights: {
      style: "Professional / Polished",
      bestFor: "Annual Meets & Awards",
      mood: "Inspiring & High-End",
      capacity: "100–500+ Guests"
    },
    included: [
      "Custom branded backdrops",
      "Stage design and lighting",
      "Professional audio/visual setup",
      "Corporate centerpieces",
      "Red carpet entrance",
      "Branded photo booths"
    ],
    perfectFor: [
      "Annual Dinner",
      "Awards Gala",
      "Product Launch"
    ],
    relatedThemes: [
      "office-party",
      "team-celebration",
      "minimalist-white"
    ]
  },
  {
    id: "office-party",
    name: "Office Party",
    category: "Corporate",
    price: 20000,
    rating: 4.8,
    reviews: 75,
    heroImage: "assets/Office Party.jpg",
    gallery: [
      "assets/Team Celebration.jpg",
      "assets/Corporate.jpg",
      "assets/Balloon Arch Ideas That Will Wow Your Guests.jpg"
    ],
    description: "Transform your office space into a vibrant celebration area. Perfect for end-of-quarter parties, holiday celebrations, or casual team get-togethers.",
    highlights: {
      style: "Casual / Vibrant",
      bestFor: "In-Office Events",
      mood: "Fun & Engaging",
      capacity: "30–150 Guests"
    },
    included: [
      "Ceiling balloon installations",
      "Breakroom transformation decor",
      "Fun photo backdrops",
      "Branded color balloons",
      "Snack table styling",
      "Casual seating additions"
    ],
    perfectFor: [
      "Holiday Office Party",
      "Quarterly Celebration",
      "Employee Appreciation"
    ],
    relatedThemes: [
      "team-celebration",
      "corporate-gala",
      "festival-lights"
    ]
  },
  {
    id: "team-celebration",
    name: "Team Celebration",
    category: "Corporate",
    price: 18000,
    rating: 4.7,
    reviews: 55,
    heroImage: "assets/Team Celebration.jpg",
    gallery: [
      "assets/Office Party.jpg",
      "assets/Confetti Balloons Set 50pc.jpg",
      "assets/Jumbo Balloon Bouquet.jpg"
    ],
    description: "A dynamic and lively setup to boost team morale. Great for offsites, team building days, or celebrating major milestones.",
    highlights: {
      style: "Energetic / Dynamic",
      bestFor: "Team Milestones",
      mood: "Lively & Motivating",
      capacity: "20–80 Guests"
    },
    included: [
      "Milestone banner setups",
      "Interactive decor elements",
      "Casual lounge areas",
      "Branded table styling",
      "Motivational signage",
      "Activity area decor"
    ],
    perfectFor: [
      "Team Building",
      "Milestone Celebration",
      "Offsite Retreat"
    ],
    relatedThemes: [
      "office-party",
      "corporate-gala",
      "diwali-glow"
    ]
  },
  {
    id: "diwali-glow",
    name: "Diwali Glow",
    category: "Festivals",
    price: 20000,
    rating: 4.9,
    reviews: 165,
    heroImage: "assets/Diwali Glow.jpg",
    gallery: [
      "assets/Diwali Festival Lights Kit1.jpg",
      "assets/Diwali Festival Lights Kit2.jpg",
      "assets/Diwali Festival Lights Kit3.jpg",
      "assets/Diwali Decoration Kit.jpg"
    ],
    description: "Bring the festival of lights to life with stunning marigold installations, diya arrangements, and brilliant lighting to create a festive atmosphere.",
    highlights: {
      style: "Traditional / Vibrant",
      bestFor: "Diwali Parties",
      mood: "Festive & Bright",
      capacity: "30–100 Guests"
    },
    included: [
      "Marigold floral backdrops",
      "Extensive fairy lighting",
      "Traditional brass lamps",
      "Rangoli decor arrangements",
      "Fabric draping",
      "Festive table styling"
    ],
    perfectFor: [
      "Diwali Party",
      "Traditional Gathering",
      "Cultural Event"
    ],
    relatedThemes: [
      "festival-lights",
      "bohemian-floral-backdrop",
      "office-party"
    ]
  },
  {
    id: "christmas-magic",
    name: "Christmas Magic",
    category: "Festivals",
    price: 22000,
    rating: 4.9,
    reviews: 140,
    heroImage: "assets/Christmas Magic.jpg",
    gallery: [
      "assets/Christmas Wreath & Decor Set1.jpg",
      "assets/Christmas Wreath & Decor Set2.jpg",
      "assets/Christmas Decor Kit.jpg",
      "assets/New Year Countdown.jpg"
    ],
    description: "Create a winter wonderland with our Christmas Magic setup. Featuring elegant pines, sparkling ornaments, and warm lighting to capture the holiday spirit.",
    highlights: {
      style: "Winter / Festive",
      bestFor: "Holiday Parties",
      mood: "Cozy & Magical",
      capacity: "20–150 Guests"
    },
    included: [
      "Decorated Christmas tree setup",
      "Pine and berry garlands",
      "Snowflake projections",
      "Red and gold accents",
      "Festive photo booth",
      "Fireplace/mantle styling"
    ],
    perfectFor: [
      "Christmas Party",
      "Holiday Dinner",
      "Winter Gathering"
    ],
    relatedThemes: [
      "festival-lights",
      "diwali-glow",
      "romantic-evening"
    ]
  },
  {
    id: "festival-lights",
    name: "Festival Lights",
    category: "Festivals",
    price: 15000,
    rating: 4.7,
    reviews: 95,
    heroImage: "assets/Festival Lights.jpg",
    gallery: [
      "assets/Fairy Light Backdrop 2x2m3.jpg",
      "assets/Fairy Light Backdrop 2x2m4.jpg",
      "assets/Neon Sign Happy Birthday.jpg"
    ],
    description: "A versatile lighting-focused setup perfect for any nighttime celebration. Transforms spaces with curtains of light, colorful uplighting, and glowing accents.",
    highlights: {
      style: "Luminous / Modern",
      bestFor: "Night Parties",
      mood: "Vibrant & Glowing",
      capacity: "30–200 Guests"
    },
    included: [
      "Fairy light canopy",
      "Color-changing uplights",
      "Neon sign rentals",
      "Glow-in-the-dark accents",
      "Light-up cocktail tables",
      "Illuminated entrance"
    ],
    perfectFor: [
      "New Year's Eve",
      "Night Party",
      "Cocktail Event"
    ],
    relatedThemes: [
      "diwali-glow",
      "christmas-magic",
      "office-party"
    ]
  },
  {
    id: "rustic-romance",
    name: "Rustic Romance",
    category: "Wedding",
    price: 40000,
    rating: 4.9,
    reviews: 180,
    heroImage: "assets/Rustic Romance.jpg",
    gallery: [
      "assets/Boho Wedding DIY Kit.jpg",
      "assets/Bohemian Floral Backdrop2.jpg",
      "assets/Macramé Boho Backdrop.jpg"
    ],
    description: "Earthy tones, natural woods, and lush greenery combined with warm lighting. Ideal for barn weddings, outdoor ceremonies, and nature-lovers.",
    highlights: {
      style: "Rustic / Earthy",
      bestFor: "Outdoor Weddings",
      mood: "Natural & Romantic",
      capacity: "50–200 Guests"
    },
    included: [
      "Wooden arch with florals",
      "Wine barrel decor",
      "Pampas grass arrangements",
      "String lighting overhead",
      "Rustic wooden signage",
      "Burlap and lace runners"
    ],
    perfectFor: [
      "Outdoor Wedding",
      "Barn Reception",
      "Engagement Party"
    ],
    relatedThemes: [
      "boho-wedding",
      "bohemian-dream",
      "minimalist-white"
    ]
  },
  {
    id: "royal-wedding",
    name: "Royal Wedding",
    category: "Wedding",
    price: 55000,
    rating: 5.0,
    reviews: 225,
    heroImage: "assets/Royal Wedding.jpg",
    gallery: [
      "assets/Royal Wedding Backdrop Panel1.png",
      "assets/Royal Wedding Backdrop Panel4.jpg",
      "assets/Flower Wall Backdrop.jpg"
    ],
    description: "Give your special day the royal treatment. Deep reds, rich golds, and luxurious floral walls create a majestic setting for an unforgettable wedding.",
    highlights: {
      style: "Regal / Luxurious",
      bestFor: "Grand Weddings",
      mood: "Opulent & Majestic",
      capacity: "200–500+ Guests"
    },
    included: [
      "Premium floral wall backdrops",
      "Gold-accented stage design",
      "Crystal and floral centrepieces",
      "Royal seating arrangements",
      "Ornate entrance decor",
      "Premium drapery"
    ],
    perfectFor: [
      "Grand Wedding",
      "Luxury Reception",
      "Sangeet / Mehendi"
    ],
    relatedThemes: [
      "royal-luxury-decor",
      "rustic-romance",
      "golden-anniversary"
    ]
  },
  {
    id: "boho-wedding",
    name: "Boho Wedding",
    category: "Wedding",
    price: 38000,
    rating: 4.8,
    reviews: 140,
    heroImage: "assets/Boho Wedding DIY Kit.jpg",
    gallery: [
      "assets/Macramé Boho Backdrop.jpg",
      "assets/Bohemian Floral Backdrop1.jpg",
      "assets/Neutral Rainbow.jpg"
    ],
    description: "Free-spirited and deeply romantic. Our Boho Wedding theme brings together macramé, dried palms, and muted colors for a perfectly relaxed yet beautiful celebration.",
    highlights: {
      style: "Bohemian / Relaxed",
      bestFor: "Intimate Weddings",
      mood: "Free-spirited & Warm",
      capacity: "40–150 Guests"
    },
    included: [
      "Macramé ceremonial backdrop",
      "Dried palm and pampas decor",
      "Vintage rug aisle runner",
      "Rattan furniture rentals",
      "Muted color floral styling",
      "Low seating lounge areas"
    ],
    perfectFor: [
      "Intimate Wedding",
      "Beach Wedding",
      "Engagement"
    ],
    relatedThemes: [
      "rustic-romance",
      "bohemian-dream",
      "bohemian-floral-backdrop"
    ]
  },
  {
    id: "pink-blossom",
    name: "Pink Blossom",
    category: "Floral",
    price: 15000,
    rating: 4.8,
    reviews: 110,
    heroImage: "assets/Pink Blossom.jpg",
    gallery: [
      "assets/Flower Wall Backdrop.jpg",
      "assets/Baby Shower Pink Theme Complete Kit1.jpg",
      "assets/Heart Shaped Balloons.jpg"
    ],
    description: "Immerse yourself in a sea of pink blossoms. This floral-heavy theme is lush, romantic, and perfect for creating stunning photo opportunities.",
    highlights: {
      style: "Floral / Lush",
      bestFor: "Birthdays & Bridal Showers",
      mood: "Romantic & Vibrant",
      capacity: "20–80 Guests"
    },
    included: [
      "Dense pink floral wall",
      "Cherry blossom tree props",
      "Pink ambient lighting",
      "Floral table runners",
      "Elegant pink draping",
      "Custom floral signage"
    ],
    perfectFor: [
      "Bridal Shower",
      "Sweet 16",
      "Ladies Brunch"
    ],
    relatedThemes: [
      "bohemian-floral-backdrop",
      "pastel-paradise",
      "flower-wall-backdrop"
    ]
  },
  {
    id: "bohemian-floral-backdrop",
    name: "Bohemian Floral Backdrop",
    category: "Floral",
    price: 21000,
    rating: 4.9,
    reviews: 135,
    heroImage: "assets/Bohemian Floral Backdrop1.jpg",
    gallery: [
      "assets/Bohemian Floral Backdrop2.jpg",
      "assets/Bohemian Floral Backdrop3.jpg",
      "assets/Bohemian Floral Backdrop4.jpg",
      "assets/Macramé Boho Backdrop.jpg"
    ],
    description: "A spectacular fusion of fresh florals, dried elements, and bohemian textures. This setup acts as the perfect focal point for any upscale event.",
    highlights: {
      style: "Textured / Earthy",
      bestFor: "Upscale Parties",
      mood: "Artistic & Refined",
      capacity: "30–100 Guests"
    },
    included: [
      "Custom mixed floral backdrop",
      "Dried floral accents",
      "Textured fabric swags",
      "Coordinating table centrepieces",
      "Floor lanterns",
      "Boho prop styling"
    ],
    perfectFor: [
      "Engagement Party",
      "Milestone Birthday",
      "Photo Shoot Setup"
    ],
    relatedThemes: [
      "pink-blossom",
      "bohemian-dream",
      "flower-wall-backdrop"
    ]
  },
  {
    id: "flower-wall-backdrop",
    name: "Flower Wall Backdrop",
    category: "Floral",
    price: 24000,
    rating: 4.9,
    reviews: 190,
    heroImage: "assets/Flower Wall Backdrop.jpg",
    gallery: [
      "assets/Pink Blossom.jpg",
      "assets/Romantic Evening.jpg",
      "assets/Royal Wedding Backdrop Panel3.jpg"
    ],
    description: "Make a massive statement with our premium dense flower walls. Packed with thousands of high-quality silk or fresh blooms to create the ultimate luxury backdrop.",
    highlights: {
      style: "Luxurious / Dense",
      bestFor: "Weddings & Galas",
      mood: "Extravagant & Beautiful",
      capacity: "50–200+ Guests"
    },
    included: [
      "8x8ft dense flower wall",
      "Custom neon sign rental (optional)",
      "Uplighting for the wall",
      "Matching floral arrangements",
      "Red or white carpet runner",
      "Stanchions and ropes"
    ],
    perfectFor: [
      "Wedding Reception",
      "Corporate Gala",
      "Red Carpet Event"
    ],
    relatedThemes: [
      "pink-blossom",
      "bohemian-floral-backdrop",
      "royal-luxury-decor"
    ]
  }
];
