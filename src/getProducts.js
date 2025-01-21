const productsdb =
[
    {
      id: "1",
      name: "Wireless Headphones",
      description: "Over-ear wireless headphones with noise cancellation, deep bass, and 30-hour battery life.",
      price: 89.99,
      rating: 5,
      image: "https://images.unsplash.com/photo-1577174881658-0f30ed549adc?q=80&w=1920&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id: "2",
      name: "Smartphone 6.5 inch",
      description: "Latest 6.5-inch smartphone with 128GB storage, 6GB RAM, and 12MP camera.",
      price: 499.99,
      rating: 3,
      image: "https://images.unsplash.com/photo-1616332544207-7f3888d0373a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id: "3",
      name: "Bluetooth Speaker",
      description: "Portable Bluetooth speaker with rich sound, waterproof, and 12-hour playtime.",
      price: 29.99,
      rating: 4,
      image: "https://images.unsplash.com/photo-1561930661-20c9650e3e25?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id: "4",
      name: "4K Smart TV",
      description: "55-inch 4K Ultra HD Smart TV with Alexa built-in and streaming capabilities.",
      price: 399.99,
      rating: 4,
      image: "https://plus.unsplash.com/premium_photo-1664302212245-3213e01fca75?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3Dttps://example.com/images/smart-tv.jpg"
    },
    {
      id: "5",
      name: "Laptop - i7 Processor",
      description: "14-inch laptop with Intel Core i7 processor, 16GB RAM, and 512GB SSD.",
      price: 999.99,
      rating: 2,
      image: "https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id: "6",
      name: "Coffee Maker",
      description: "Single-serve coffee maker with a sleek design and brew strength control.",
      price: 49.99,
      rating: 4,
      image: "https://media.istockphoto.com/id/1586611322/photo/modern-silver-professional-espresso-coffee-maker-machine-toaster-with-bread-on-wooden.jpg?s=1024x1024&w=is&k=20&c=SGyrUg87FpfW6NoMD-SqI95odbYnZ-y3tLL-q5jFLGM="
    },
    {
      id: "7",
      name: "Smart Watch",
      description: "Fitness tracker with heart rate monitor, sleep tracking, and 7-day battery life.",
      price: 149.99,
      rating: 4,
      image: "https://images.unsplash.com/photo-1664610225312-ba25cd8dbe5f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id: "8",
      name: "Air Fryer",
      description: "Compact air fryer with 6 preset cooking modes and adjustable temperature control.",
      price: 79.99,
      rating: 4,
      image: "https://media.istockphoto.com/id/2165236143/photo/woman-cooking-food-with-air-fryer-in-the-kitchen.jpg?s=1024x1024&w=is&k=20&c=ERZsCD_beDL2pKQI1gYy6nz5uw-KVa6DPjDq343kyS0="
    },
    {
      id: "9",
      name: "Wireless Mouse",
      description: "Ergonomic wireless mouse with adjustable DPI and long battery life.",
      price: 19.99,
      rating: 4,
      image: "https://images.unsplash.com/photo-1527814050087-3793815479db?q=80&w=1928&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id: "10",
      name: "Gaming Console",
      description: "Next-gen gaming console with 4K UHD gaming, streaming, and backward compatibility.",
      price: 499.99,
      rating: 4,
      image: "https://images.unsplash.com/photo-1621259182978-fbf93132d53d?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id: "11",
      name: "Electric Toothbrush",
      description: "Rechargeable electric toothbrush with 5 modes and a pressure sensor for optimal brushing.",
      price: 49.99,
      rating: 4,
      image: "https://media.istockphoto.com/id/1464395102/photo/electric-toothbrush-top-view-flat-lay-copy-space-dental-care-supplies-on-beige-pastel-studio.jpg?s=1024x1024&w=is&k=20&c=VSKPxVyDK_LugOwn0sJCs8dvsBVunnjOJ8QbLbn-TKM="
    },
    {
      id: "12",
      name: "Portable Power Bank",
      description: "Portable 10,000mAh power bank with dual USB ports and fast charging capabilities.",
      price: 29.99,
      rating: 5,
      image: "https://media.istockphoto.com/id/1816490321/photo/power-bank-for-charging-mobile-devices-white-smart-phone-charger-with-power-bank-battery-bank.jpg?s=1024x1024&w=is&k=20&c=3gzlSSO7A6wLHx-YzvnsCEwEDwx8iZFnGlHMWOWm3fA="
    },
    {
      id: "13",
      name: "Digital Camera",
      description: "Compact 20MP digital camera with 4K video recording, zoom lens, and built-in WiFi.",
      price: 299.99,
      rating: 4,
      image: "https://images.unsplash.com/photo-1471293413508-2cb95f2d2e9a?q=80&w=1910&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id: "14",
      name: "Gaming Laptop",
      description: "15.6-inch gaming laptop with NVIDIA GTX graphics, 16GB RAM, and 1TB HDD.",
      price: 1299.99,
      rating: 4,
      image: "https://media.istockphoto.com/id/1406679220/photo/a-portable-gaming-laptop-with-racing-game.jpg?s=1024x1024&w=is&k=20&c=c0IgUV8iGtXlDahnB1j6vWa9kOHbm583CxuZ-TLZRWQ="
    },
    {
      id: "15",
      name: "Robotic Vacuum Cleaner",
      description: "Automatic robotic vacuum cleaner with smart mapping and multi-surface cleaning.",
      price: 199.99,
      rating: 3,
      image: "https://media.istockphoto.com/id/901484636/photo/robotic-vacuum-cleaner-on-laminate-wood-floor-smart-cleaning-technology.jpg?s=1024x1024&w=is&k=20&c=nSIxVCOWi_6txbGcs9X6n6h2TVVntlZ6IXizroQUTmM="
    },
    {
      id: "16",
      name: "Smart Doorbell",
      description: "Wi-Fi enabled smart doorbell with HD video, two-way audio, and motion detection.",
      price: 99.99,
      rating: 4,
      image: "https://media.istockphoto.com/id/1757670792/photo/internet-video-doorbell-which-records-video-of-movement-and-alerts-users-via-their-smartphone.jpg?s=1024x1024&w=is&k=20&c=qfBhY0gTn1ydYuwwbM4Rl3LFodWiLe64XZ9U1x4mMvY="
    },
    {
      id: "17",
      name: "Electric Kettle",
      description: "Cordless electric kettle with 1.7L capacity, auto shut-off, and temperature control.",
      price: 39.99,
      rating: 5,
      image: "https://media.istockphoto.com/id/891596906/photo/kettle.jpg?s=1024x1024&w=is&k=20&c=ap90-qcPMsAP0NtBjm8kBpI2Gy0oDoetc1QfbL0tjBE="
    },
    {
      id: "18",
      name: "Standing Desk",
      description: "Height adjustable standing desk for ergonomic workstations with spacious work surface.",
      price: 179.99,
      rating: 4,
      image: "https://media.istockphoto.com/id/1499742355/photo/modern-standing-desk-pc-workplace-in-daylight-downtown-skyline-office-home-decoration-desing.jpg?s=1024x1024&w=is&k=20&c=_u7gFYDtL4q9Jq0Vt9hQuer9F2S5RVXRDL9fvh86vJM="
    },
    {
      id: "19",
      name: "LED Desk Lamp",
      description: "Adjustable LED desk lamp with touch control, dimming feature, and multiple lighting modes.",
      price: 29.99,
      rating: 3,
      image: "https://media.istockphoto.com/id/1340500823/photo/still-life-desk-lamp-on-white-background.jpg?s=1024x1024&w=is&k=20&c=lX2BVAcyUEC61KJJYC_Bq_cScbSbJSMalSMLso1NSco="
    },
    {
      id: "20",
      name: "Compact Refrigerator",
      description: "Mini refrigerator with 3.2 cubic feet of space and energy-efficient design.",
      price: 149.99,
      rating: 1,
      image: "https://media.istockphoto.com/id/1421202130/photo/mini-bar-filled-with-food-and-drinks-near-brown-wall-indoors.jpg?s=1024x1024&w=is&k=20&c=sC2UIsWDUY5tVUunpT8eW0830wG0NzWDORWzQLVfYd8="
    }
  ]
  
  const getProducts = () =>
    new Promise(resolve => setTimeout(() => resolve(productsdb), 500));
  
  export default getProducts;