const links = [
    {
      name: "PupSpace",
      category: "App / Communauté",
      url: "https://www.pupspace.net/fr-FR/",
      price: "$"
    },
    {
      name: "Wruff Stuff – Bandanas",
      category: "Accessoires",
      url: "https://wruffstuff.com/neckwear/bandanas",
      price: "$$"
    },
    {
      name: "Wruff Stuff – Bodysuits",
      category: "Vêtements",
      url: "https://wruffstuff.com/clothing/bodysuits",
      price: "$$$"
    },
    {
      name: "Wruff Stuff – Caps",
      category: "Accessoires",
      url: "https://wruffstuff.com/caps",
      price: "$$"
    },
    {
      name: "Wruff Stuff – Collars",
      category: "Colliers",
      url: "https://wruffstuff.com/neckwear/collars",
      price: "$$"
    },
    {
        name: "Andrew Fox Craft",
        category: "Harness and Collars Custom",
        url: "https://www.andrewfoxcrafts.com/",
        price: "$$"
    },
    {
      name: "Mister B – Puppy Collars",
      category: "Colliers",
      url: "https://www.misterb.com/en/fetish/puppy-play/collars",
      price: "$$$"
    },
    {
      name: "Underground Fetish – Collars & Leashes",
      category: "Colliers & Laisses",
      url: "https://www.underground-fetish.com/category/puppy-park/collars-leashes/",
      price: "$$$"
    },
    {
      name: "Pup & Co (France)",
      category: "Assos France",
      url: "https://www.pupandco.fr/",
      price: "$$"
    },
    {
      name: "Puppy Play France",
      category: "Assos France",
      url: "https://puppy-play.com/",
      price: "$$"
    },
    {
      name: "Puppy Germany",
      category: "Shop Allemagne",
      url: "https://puppygermany.de/en/home-en/",
      price: "$$"
    },
    {
      name: "Mister B – Harness",
      category: "Harness",
      url: "https://www.misterb.com/en/catalogsearch/result/?q=Harness",
      price: "$$$"
    },
    {
      name: "Wruff Stuff – Harness",
      category: "Harness",
      url: "https://wruffstuff.com/harnesses",
      price: "$$$"
    },
    {
      name: "AliExpress – Puppy Hoods",
      category: "Hoods",
      url: "https://fr.aliexpress.com/w/wholesale-puppy-play-hood.html",
      price: "$"
    },
    {
      name: "Underground Fetish – Classic Hoods",
      category: "Hoods",
      url: "https://www.underground-fetish.com/category/puppy-park/neoprene-puppy-hoods/original-puppy-hoods/",
      price: "$$$"
    },
    {
      name: "Tailspace – Designer Hood",
      category: "Hoods Designer",
      url: "https://tailspace.net/mrs-hood-designer/",
      price: "$$$"
    },
    {
      name: "Underground Fetish – Frisky Hoods",
      category: "Hoods",
      url: "https://www.underground-fetish.com/category/puppy-park/neoprene-puppy-hoods/frisky-puppy-hoods/",
      price: "$$$"
    },
    {
      name: "Underground Fetish – K9 Hoods",
      category: "Hoods",
      url: "https://www.underground-fetish.com/category/puppy-park/neoprene-puppy-hoods/k9-puppy-hoods/",
      price: "$$$"
    },
    {
      name: "Underground Fetish – Leather Hoods",
      category: "Hoods Cuir",
      url: "https://www.underground-fetish.com/category/puppy-park/leather-puppy-hoods/",
      price: "$$$"
    },
    {
      name: "Underground Fetish – Muzzles",
      category: "Hoods",
      url: "https://www.underground-fetish.com/category/puppy-park/muzzles/",
      price: "$$$"
    },
    {
      name: "Mister B – Masks & Hoods",
      category: "Hoods",
      url: "https://www.misterb.com/en/fetish/puppy-play/masks-and-hoods",
      price: "$$$"
    },
    {
      name: "GayStore – Puppy Hoods",
      category: "Hoods",
      url: "https://www.gaystore.fr/fr/365-puppy-pony-play",
      price: "$$"
    },
    {
      name: "Wruff Stuff – Hoods",
      category: "Hoods",
      url: "https://wruffstuff.com/hoods",
      price: "$$$"
    },
    {
      name: "Mister B – Mitts",
      category: "Mitts",
      url: "https://www.misterb.com/en/fetish/puppy-play/mitts",
      price: "$$"
    },
    {
      name: "Underground Fetish – Mitts & Tails",
      category: "Mitts & Tails",
      url: "https://www.underground-fetish.com/category/puppy-park/tails-mitts/",
      price: "$$"
    },
    {
      name: "Wruff Stuff – Nose Ring",
      category: "Accessoires",
      url: "https://wruffstuff.com/accessories/detachable-nose-ring",
      price: "$"
    },
    {
      name: "GayStore – Puppy Tails",
      category: "Tails",
      url: "https://www.gaystore.fr/fr/recherche?search_query=queue",
      price: "$$"
    },
    {
      name: "Amazon – Puppy Tail",
      category: "Tails",
      url: "https://www.amazon.fr/dp/B0BDF7HCC3",
      price: "$"
    },
    {
      name: "Oxballs – Tails",
      category: "Tails",
      url: "https://oxballs.com/shop/ols/search?keywords=tails",
      price: "$$$"
    },
    {
      name: "Mister B – Dog Tails",
      category: "Tails",
      url: "https://www.misterb.com/en/fetish/puppy-play/dog-tails",
      price: "$$$"
    },
    {
      name: "GayStore – Puppy Play Low Price",
      category: "Accessoires",
      url: "https://www.gaystore.fr/fr/1827-puppy-play",
      price: "$"
    },
    {
      name: "Wruff Stuff – T-Shirts",
      category: "Vêtements",
      url: "https://wruffstuff.com/clothing/tshirts",
      price: "$$"
    },
    {
      name: "Wruff Stuff – Collar Tags",
      category: "Accessoires",
      url: "https://wruffstuff.com/neckwear/collartags",
      price: "$"
    }
    
  ];
  
  
  


  const container = document.getElementById("cards-container");
const priceFilters = document.querySelectorAll(".price-filter");

let currentPrice = "all";

/* =========================
   Filtres prix uniquement
========================= */
priceFilters.forEach(btn => {
  btn.addEventListener("click", () => {
    priceFilters.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    currentPrice = btn.dataset.price;
    render();
  });
});

/* =========================
   Render
========================= */
function render() {
  container.innerHTML = "";

  links
    .filter(link => currentPrice === "all" || link.price === currentPrice)
    .forEach(link => {
      const domain = new URL(link.url).hostname.replace("www.", "");
      const logo = `https://www.google.com/s2/favicons?sz=64&domain=${domain}`;

      const card = document.createElement("div");
      card.className = "card";

      card.innerHTML = `
        <div class="card-header">
          <img src="${logo}" alt="${link.name} logo" loading="lazy" />
          <div>
            <h3>${link.name}</h3>
            <span class="category">${link.category}</span>
            <span class="price">${link.price}</span>
          </div>
        </div>

        <a href="${link.url}" target="_blank" rel="noopener">
          Visiter le site →
        </a>
      `;

      container.appendChild(card);
    });
}

/* =========================
   Init
========================= */
render();
