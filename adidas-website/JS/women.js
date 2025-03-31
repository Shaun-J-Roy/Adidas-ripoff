// Women's page functionality

// Additional products data for women's page
const womenProducts = [
    {
      id: "w1",
      name: "Adidas Ultraboost 22 Women",
      price: 180,
      category: "footwear",
      subcategory: "running",
      image: "https://via.placeholder.com/300",
      description: "Premium running shoes designed specifically for women.",
    },
    {
      id: "w2",
      name: "Adidas Believe This Leggings",
      price: 50,
      category: "clothing",
      subcategory: "leggings",
      image: "https://via.placeholder.com/300",
      description: "High-waisted leggings with supportive compression fit.",
    },
    {
      id: "w3",
      name: "Adidas Don't Rest Sports Bra",
      price: 35,
      category: "clothing",
      subcategory: "sportsbras",
      image: "https://via.placeholder.com/300",
      description: "Medium-support sports bra for everyday training.",
    },
    {
      id: "w4",
      name: "Adidas Cloudfoam Pure Shoes",
      price: 75,
      category: "footwear",
      subcategory: "training",
      image: "https://via.placeholder.com/300",
      description: "Lightweight training shoes with memory foam sockliner.",
    },
    {
      id: "w5",
      name: "Adidas Essentials Hoodie Women",
      price: 60,
      category: "clothing",
      subcategory: "hoodies",
      image: "https://via.placeholder.com/300",
      description: "Soft cotton blend hoodie with a relaxed fit.",
    },
    {
      id: "w6",
      name: "Adidas Superstar Women",
      price: 90,
      category: "footwear",
      subcategory: "originals",
      image: "https://via.placeholder.com/300",
      description: "Iconic shell-toe sneakers with a sleek design.",
    },
  ]
  
  // DOM Elements
  const womenNewProductsGrid = document.getElementById("women-new-products")
  const womenBestsellerProductsGrid = document.getElementById("women-bestseller-products")
  
  // Function to render products to the DOM
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
  function filterWomenProducts(filterType, filterValue) {
    if (filterType === "category") {
      return womenProducts.filter((product) => product.category === filterValue || product.subcategory === filterValue)
    } else if (filterType === "featured") {
      // In a real app, you would have a featured flag or date added
      // For demo purposes, we'll just return the first 3 products for new arrivals
      // and the last 3 for bestsellers
      if (filterValue === "new") {
        return womenProducts.slice(0, 3)
      } else if (filterValue === "bestsellers") {
        return womenProducts.slice(3, 6)
      }
    }
    return womenProducts
  }
  
  // Initialize women's page
  function initWomenPage() {
    // Get URL parameters
    const urlParams = new URLSearchParams(window.location.search)
    const category = urlParams.get("category")
    const featured = urlParams.get("featured")
  
    // Render new arrivals
    if (womenNewProductsGrid) {
      const newProducts = filterWomenProducts("featured", "new")
      renderProducts(womenNewProductsGrid, newProducts)
    }
  
    // Render bestsellers
    if (womenBestsellerProductsGrid) {
      const bestsellerProducts = filterWomenProducts("featured", "bestsellers")
      renderProducts(womenBestsellerProductsGrid, bestsellerProducts)
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
  document.addEventListener("DOMContentLoaded", initWomenPage)
  
  