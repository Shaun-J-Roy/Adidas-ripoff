// Kids' page functionality

// Additional products data for kids' page
const kidsProducts = [
    {
      id: "k1",
      name: "Adidas Duramo SL Kids",
      price: 55,
      category: "footwear",
      subcategory: "running",
      age: "youth",
      gender: "unisex",
      image: "https://via.placeholder.com/300",
      description: "Lightweight running shoes for active kids.",
    },
    {
      id: "k2",
      name: "Adidas Essentials 3-Stripes Pants",
      price: 35,
      category: "clothing",
      subcategory: "pants",
      age: "youth",
      gender: "boys",
      image: "https://via.placeholder.com/300",
      description: "Comfortable cotton blend pants with iconic 3-stripes.",
    },
    {
      id: "k3",
      name: "Adidas Predator Junior",
      price: 65,
      category: "footwear",
      subcategory: "football",
      age: "youth",
      gender: "unisex",
      image: "https://via.placeholder.com/300",
      description: "Junior football boots for enhanced control and power.",
    },
    {
      id: "k4",
      name: "Adidas Graphic Tee",
      price: 25,
      category: "clothing",
      subcategory: "tshirts",
      age: "children",
      gender: "girls",
      image: "https://via.placeholder.com/300",
      description: "Soft cotton t-shirt with fun graphic print.",
    },
    {
      id: "k5",
      name: "Adidas Hoops Mid 2.0",
      price: 50,
      category: "footwear",
      subcategory: "sneakers",
      age: "children",
      gender: "unisex",
      image: "https://via.placeholder.com/300",
      description: "Mid-cut sneakers with a classic basketball-inspired look.",
    },
    {
      id: "k6",
      name: "Adidas Essentials Hoodie Kids",
      price: 40,
      category: "clothing",
      subcategory: "hoodies",
      age: "youth",
      gender: "unisex",
      image: "https://via.placeholder.com/300",
      description: "Warm and comfortable hoodie for everyday wear.",
    },
  ]
  
  // DOM Elements
  const kidsNewProductsGrid = document.getElementById("kids-new-products")
  const kidsBestsellerProductsGrid = document.getElementById("kids-bestseller-products")
  
  // Mock renderProducts function (replace with your actual implementation)
  function renderProducts(gridElement, products) {
    if (!gridElement) {
      console.error("Grid element is null or undefined.")
      return
    }
  
    gridElement.innerHTML = "" // Clear existing content
  
    products.forEach((product) => {
      const productElement = document.createElement("div")
      productElement.classList.add("product-item") // Add a class for styling
  
      // Create image element
      const imgElement = document.createElement("img")
      imgElement.src = product.image
      imgElement.alt = product.name
      productElement.appendChild(imgElement)
  
      // Create name element
      const nameElement = document.createElement("h3")
      nameElement.textContent = product.name
      productElement.appendChild(nameElement)
  
      // Create price element
      const priceElement = document.createElement("p")
      priceElement.textContent = `$${product.price}`
      productElement.appendChild(priceElement)
  
      gridElement.appendChild(productElement)
    })
  }
  
  // Filter products by category, age, gender, and featured status
  function filterKidsProducts(filterType, filterValue) {
    if (filterType === "category") {
      return kidsProducts.filter((product) => product.category === filterValue || product.subcategory === filterValue)
    } else if (filterType === "age") {
      return kidsProducts.filter((product) => product.age === filterValue)
    } else if (filterType === "gender") {
      return kidsProducts.filter((product) => product.gender === filterValue || product.gender === "unisex")
    } else if (filterType === "featured") {
      // In a real app, you would have a featured flag or date added
      // For demo purposes, we'll just return the first 3 products for new arrivals
      // and the last 3 for bestsellers
      if (filterValue === "new") {
        return kidsProducts.slice(0, 3)
      } else if (filterValue === "bestsellers") {
        return kidsProducts.slice(3, 6)
      }
    }
    return kidsProducts
  }
  
  // Initialize kids' page
  function initKidsPage() {
    // Get URL parameters
    const urlParams = new URLSearchParams(window.location.search)
    const category = urlParams.get("category")
    const age = urlParams.get("age")
    const gender = urlParams.get("gender")
    const featured = urlParams.get("featured")
  
    // Render new arrivals
    if (kidsNewProductsGrid) {
      const newProducts = filterKidsProducts("featured", "new")
      renderProducts(kidsNewProductsGrid, newProducts)
    }
  
    // Render bestsellers
    if (kidsBestsellerProductsGrid) {
      const bestsellerProducts = filterKidsProducts("featured", "bestsellers")
      renderProducts(kidsBestsellerProductsGrid, bestsellerProducts)
    }
  
    // If age parameter exists, highlight the corresponding tab
    if (age) {
      const ageTabs = document.querySelectorAll(".age-group-tab")
      ageTabs.forEach((tab) => {
        const href = tab.getAttribute("href")
        if (href && href.includes(`age=${age}`)) {
          tab.classList.add("active")
        }
      })
    }
  
    // If category or gender parameter exists, highlight the corresponding tab
    if (category || gender) {
      const categoryTabs = document.querySelectorAll(".category-nav-item")
      categoryTabs.forEach((tab) => {
        const href = tab.getAttribute("href")
        if (
          (category && href && href.includes(`category=${category}`)) ||
          (gender && href && href.includes(`gender=${gender}`))
        ) {
          tab.classList.add("active")
        }
      })
    }
  }
  
  // Initialize on page load
  document.addEventListener("DOMContentLoaded", initKidsPage)
  
  