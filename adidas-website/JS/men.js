// Men's page functionality

// Additional products data for men's page
const menProducts = [
    {
      id: "m1",
      name: "Adidas Ultraboost 22",
      price: 180,
      category: "footwear",
      subcategory: "running",
      image: "https://via.placeholder.com/300",
      description: "Premium running shoes with responsive cushioning.",
    },
    {
      id: "m2",
      name: "Adidas Tiro Track Pants",
      price: 45,
      category: "clothing",
      subcategory: "pants",
      image: "https://via.placeholder.com/300",
      description: "Comfortable track pants for training or casual wear.",
    },
    {
      id: "m3",
      name: "Adidas Predator Edge",
      price: 150,
      category: "footwear",
      subcategory: "football",
      image: "https://via.placeholder.com/300",
      description: "Precision football boots for the ultimate control.",
    },
    {
      id: "m4",
      name: "Adidas Essentials Hoodie",
      price: 60,
      category: "clothing",
      subcategory: "hoodies",
      image: "https://via.placeholder.com/300",
      description: "Comfortable cotton blend hoodie with kangaroo pocket.",
    },
    {
      id: "m5",
      name: "Adidas Stan Smith",
      price: 90,
      category: "footwear",
      subcategory: "originals",
      image: "https://via.placeholder.com/300",
      description: "Iconic tennis-inspired sneakers with a clean look.",
    },
    {
      id: "m6",
      name: "Adidas 3-Stripes Tee",
      price: 30,
      category: "clothing",
      subcategory: "tshirts",
      image: "https://via.placeholder.com/300",
      description: "Classic cotton t-shirt with the iconic 3-stripes design.",
    },
  ]
  
  // DOM Elements
  const menNewProductsGrid = document.getElementById("men-new-products")
  const menBestsellerProductsGrid = document.getElementById("men-bestseller-products")
  
  // Function to render products to a grid
  function renderProducts(gridElement, products) {
    gridElement.innerHTML = "" // Clear existing content
    products.forEach((product) => {
      const productCard = document.createElement("div")
      productCard.classList.add("product-card") // Add a class for styling
  
      productCard.innerHTML = `
              <img src="${product.image}" alt="${product.name}">
              <h3>${product.name}</h3>
              <p>$${product.price}</p>
              <button>Add to Cart</button>
          `
      gridElement.appendChild(productCard)
    })
  }
  
  // Filter products by category and featured status
  function filterMenProducts(filterType, filterValue) {
    if (filterType === "category") {
      return menProducts.filter((product) => product.category === filterValue || product.subcategory === filterValue)
    } else if (filterType === "featured") {
      // In a real app, you would have a featured flag or date added
      // For demo purposes, we'll just return the first 3 products for new arrivals
      // and the last 3 for bestsellers
      if (filterValue === "new") {
        return menProducts.slice(0, 3)
      } else if (filterValue === "bestsellers") {
        return menProducts.slice(3, 6)
      }
    }
    return menProducts
  }
  
  // Initialize men's page
  function initMenPage() {
    // Get URL parameters
    const urlParams = new URLSearchParams(window.location.search)
    const category = urlParams.get("category")
    const featured = urlParams.get("featured")
  
    // Render new arrivals
    if (menNewProductsGrid) {
      const newProducts = filterMenProducts("featured", "new")
      renderProducts(menNewProductsGrid, newProducts)
    }
  
    // Render bestsellers
    if (menBestsellerProductsGrid) {
      const bestsellerProducts = filterMenProducts("featured", "bestsellers")
      renderProducts(menBestsellerProductsGrid, bestsellerProducts)
    }
  
    // If category parameter exists, highlight the corresponding tab
    if (category) {
      const categoryTabs = document.querySelectorAll(".category-nav-item")
      categoryTabs.forEach((tab) => {
        const href = tab.getAttribute("href")
        if (href && href.includes(`category=${category}`)) {
          tab.classList.add("active")
        }
      })
    }
  }
  
  // Initialize on page load
  document.addEventListener("DOMContentLoaded", initMenPage)
  
  