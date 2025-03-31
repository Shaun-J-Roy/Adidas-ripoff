// Products page functionality

// Combine all products from different categories
const allProducts = [
    // Men's products
    {
      id: "m1",
      name: "Adidas Ultraboost 22",
      price: 180,
      category: "footwear",
      subcategory: "running",
      gender: "men",
      image: "https://via.placeholder.com/300",
      description: "Premium running shoes with responsive cushioning.",
    },
    {
      id: "m2",
      name: "Adidas Tiro Track Pants",
      price: 45,
      category: "clothing",
      subcategory: "pants",
      gender: "men",
      image: "https://via.placeholder.com/300",
      description: "Comfortable track pants for training or casual wear.",
    },
    {
      id: "m3",
      name: "Adidas Predator Edge",
      price: 150,
      category: "footwear",
      subcategory: "football",
      gender: "men",
      image: "https://via.placeholder.com/300",
      description: "Precision football boots for the ultimate control.",
    },
    {
      id: "m4",
      name: "Adidas Essentials Hoodie",
      price: 60,
      category: "clothing",
      subcategory: "hoodies",
      gender: "men",
      image: "https://via.placeholder.com/300",
      description: "Comfortable cotton blend hoodie with kangaroo pocket.",
    },
    {
      id: "m5",
      name: "Adidas Stan Smith",
      price: 90,
      category: "footwear",
      subcategory: "originals",
      gender: "men",
      image: "https://via.placeholder.com/300",
      description: "Iconic tennis-inspired sneakers with a clean look.",
    },
    {
      id: "m6",
      name: "Adidas 3-Stripes Tee",
      price: 30,
      category: "clothing",
      subcategory: "tshirts",
      gender: "men",
      image: "https://via.placeholder.com/300",
      description: "Classic cotton t-shirt with the iconic 3-stripes design.",
    },
  
    // Women's products
    {
      id: "w1",
      name: "Adidas Ultraboost 22 Women",
      price: 180,
      category: "footwear",
      subcategory: "running",
      gender: "women",
      image: "https://via.placeholder.com/300",
      description: "Premium running shoes designed specifically for women.",
    },
    {
      id: "w2",
      name: "Adidas Believe This Leggings",
      price: 50,
      category: "clothing",
      subcategory: "leggings",
      gender: "women",
      image: "https://via.placeholder.com/300",
      description: "High-waisted leggings with supportive compression fit.",
    },
    {
      id: "w3",
      name: "Adidas Don't Rest Sports Bra",
      price: 35,
      category: "clothing",
      subcategory: "sportsbras",
      gender: "women",
      image: "https://via.placeholder.com/300",
      description: "Medium-support sports bra for everyday training.",
    },
    {
      id: "w4",
      name: "Adidas Cloudfoam Pure Shoes",
      price: 75,
      category: "footwear",
      subcategory: "training",
      gender: "women",
      image: "https://via.placeholder.com/300",
      description: "Lightweight training shoes with memory foam sockliner.",
    },
    {
      id: "w5",
      name: "Adidas Essentials Hoodie Women",
      price: 60,
      category: "clothing",
      subcategory: "hoodies",
      gender: "women",
      image: "https://via.placeholder.com/300",
      description: "Soft cotton blend hoodie with a relaxed fit.",
    },
    {
      id: "w6",
      name: "Adidas Superstar Women",
      price: 90,
      category: "footwear",
      subcategory: "originals",
      gender: "women",
      image: "https://via.placeholder.com/300",
      description: "Iconic shell-toe sneakers with a sleek design.",
    },
  
    // Kids' products
    {
      id: "k1",
      name: "Adidas Duramo SL Kids",
      price: 55,
      category: "footwear",
      subcategory: "running",
      gender: "kids",
      age: "youth",
      image: "https://via.placeholder.com/300",
      description: "Lightweight running shoes for active kids.",
    },
    {
      id: "k2",
      name: "Adidas Essentials 3-Stripes Pants",
      price: 35,
      category: "clothing",
      subcategory: "pants",
      gender: "kids",
      age: "youth",
      image: "https://via.placeholder.com/300",
      description: "Comfortable cotton blend pants with iconic 3-stripes.",
    },
    {
      id: "k3",
      name: "Adidas Predator Junior",
      price: 65,
      category: "footwear",
      subcategory: "football",
      gender: "kids",
      age: "youth",
      image: "https://via.placeholder.com/300",
      description: "Junior football boots for enhanced control and power.",
    },
    {
      id: "k4",
      name: "Adidas Graphic Tee",
      price: 25,
      category: "clothing",
      subcategory: "tshirts",
      gender: "kids",
      age: "children",
      image: "https://via.placeholder.com/300",
      description: "Soft cotton t-shirt with fun graphic print.",
    },
    {
      id: "k5",
      name: "Adidas Hoops Mid 2.0",
      price: 50,
      category: "footwear",
      subcategory: "sneakers",
      gender: "kids",
      age: "children",
      image: "https://via.placeholder.com/300",
      description: "Mid-cut sneakers with a classic basketball-inspired look.",
    },
    {
      id: "k6",
      name: "Adidas Essentials Hoodie Kids",
      price: 40,
      category: "clothing",
      subcategory: "hoodies",
      gender: "kids",
      age: "youth",
      image: "https://via.placeholder.com/300",
      description: "Warm and comfortable hoodie for everyday wear.",
    },
  ]
  
  // DOM Elements
  const productsGrid = document.getElementById("products-grid")
  const noProductsMessage = document.getElementById("no-products")
  const categoryFilter = document.getElementById("category-filter")
  const sortFilter = document.getElementById("sort-filter")
  const resetFiltersBtn = document.getElementById("reset-filters")
  const resetFiltersEmptyBtn = document.getElementById("reset-filters-empty")
  
  // Mock addToCart function (replace with your actual implementation)
  function addToCart(productId) {
    console.log(`Product ${productId} added to cart`)
    // In a real application, you would update the cart state here
  }
  
  // Filter and sort products
  function filterAndSortProducts() {
    // Get filter values
    const categoryValue = categoryFilter.value
    const sortValue = sortFilter.value
  
    // Filter products by category
    let filteredProducts = [...allProducts]
    if (categoryValue !== "all") {
      filteredProducts = allProducts.filter(
        (product) => product.category === categoryValue || product.subcategory === categoryValue,
      )
    }
  
    // Sort products
    if (sortValue === "price-low") {
      filteredProducts.sort((a, b) => a.price - b.price)
    } else if (sortValue === "price-high") {
      filteredProducts.sort((a, b) => b.price - a.price)
    } else if (sortValue === "newest") {
      // In a real app, you would sort by date added
      // For demo purposes, we'll just reverse the array
      filteredProducts.reverse()
    }
  
    // Display products or no products message
    if (filteredProducts.length > 0) {
      renderProducts(filteredProducts)
      productsGrid.style.display = "grid"
      noProductsMessage.style.display = "none"
    } else {
      productsGrid.style.display = "none"
      noProductsMessage.style.display = "block"
    }
  }
  
  // Render products to the grid
  function renderProducts(products) {
    productsGrid.innerHTML = ""
  
    products.forEach((product) => {
      const productCard = document.createElement("div")
      productCard.classList.add("product-card")
  
      productCard.innerHTML = `
              <img src="${product.image}" alt="${product.name}">
              <h3>${product.name}</h3>
              <p>$${product.price}</p>
              <button class="add-to-cart-btn" data-product-id="${product.id}">Add to Cart</button>
          `
  
      productsGrid.appendChild(productCard)
    })
  
    // Add event listeners to Add to Cart buttons
    const addToCartButtons = document.querySelectorAll(".add-to-cart-btn")
    addToCartButtons.forEach((button) => {
      button.addEventListener("click", function () {
        const productId = this.getAttribute("data-product-id")
        addToCart(productId)
      })
    })
  }
  
  // Reset filters
  function resetFilters() {
    categoryFilter.value = "all"
    sortFilter.value = "featured"
    filterAndSortProducts()
  }
  
  // Initialize products page
  function initProductsPage() {
    // Get URL parameters
    const urlParams = new URLSearchParams(window.location.search)
    const category = urlParams.get("category")
  
    // Set initial filter value if category parameter exists
    if (category && categoryFilter) {
      categoryFilter.value = category
    }
  
    // Render initial products
    filterAndSortProducts()
  
    // Add event listeners
    if (categoryFilter) {
      categoryFilter.addEventListener("change", filterAndSortProducts)
    }
  
    if (sortFilter) {
      sortFilter.addEventListener("change", filterAndSortProducts)
    }
  
    if (resetFiltersBtn) {
      resetFiltersBtn.addEventListener("click", resetFilters)
    }
  
    if (resetFiltersEmptyBtn) {
      resetFiltersEmptyBtn.addEventListener("click", resetFilters)
    }
  }
  
  // Initialize on page load
  document.addEventListener("DOMContentLoaded", initProductsPage)
  
  