// Nexivus Project Page - Interactive JavaScript
// Enhanced with modern ES6+ features and smooth animations

document.addEventListener("DOMContentLoaded", function () {
  // Initialize all interactive features
  initMobileMenu();
  initSmoothScrolling();
  initCodeAnimation();
  initScrollAnimations();
  initInteractiveButtons();
  initParallaxEffects();
  initTypewriterEffect();
  initTechBadgeEffects();
  initApiEndpointEffects();
});

// Enhanced typewriter effect
function initTypewriterEffect() {
  const typewriterText = document.querySelector(".typing-animation");
  if (!typewriterText) return;

  const phrases = [
    "Built with Spring Boot",
    "JWT Authentication System",
    "Point of Sale Solution",
    "Inventory Management",
    "RESTful API Architecture",
    "Point of Sale System",
  ];

  let currentPhrase = 0;
  let currentChar = 0;
  let isDeleting = false;

  function typeWriter() {
    const current = phrases[currentPhrase];

    if (isDeleting) {
      typewriterText.textContent = current.substring(0, currentChar - 1);
      currentChar--;
    } else {
      typewriterText.textContent = current.substring(0, currentChar + 1);
      currentChar++;
    }

    let typeSpeed = isDeleting ? 100 : 150;

    if (!isDeleting && currentChar === current.length) {
      typeSpeed = 2000; // Pause at end
      isDeleting = true;
    } else if (isDeleting && currentChar === 0) {
      isDeleting = false;
      currentPhrase = (currentPhrase + 1) % phrases.length;
      typeSpeed = 500;
    }

    setTimeout(typeWriter, typeSpeed);
  }

  // Start typewriter after initial animation
  setTimeout(typeWriter, 3500);
}

// Enhanced mobile menu functionality
function initMobileMenu() {
  const mobileMenuBtn = document.getElementById("mobile-menu-toggle");
  const nav = document.querySelector("nav");
  const mobileMenu = document.getElementById("mobile-menu");
  let isMenuOpen = false;

  if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener("click", () => {
      isMenuOpen = !isMenuOpen;
      const icon = document.querySelector("#mobile-menu-toggle i");

      if (isMenuOpen) {
        mobileMenu.classList.remove("hidden");
        mobileMenu.classList.add("flex");
        nav.classList.add("bg-white/90");
        nav.classList.remove("glass-effect");
        icon.classList.remove("fa-bars");
        icon.classList.add("fa-times");
      } else {
        mobileMenu.classList.add("hidden");
        mobileMenu.classList.remove("flex");
        nav.classList.remove("bg-white/90");
        nav.classList.add("glass-effect");
        icon.classList.remove("fa-times");
        icon.classList.add("fa-bars");
      }
    });
  }
}

// Close mobile menu when clicking outside
function closeMobileMenu() {
  const mobileMenu = document.getElementById("mobile-menu");
  const nav = document.querySelector("nav");
  const icon = document.querySelector("#mobile-menu-toggle i");

  if (mobileMenu) {
    mobileMenu.classList.add("hidden");
    mobileMenu.classList.remove("flex");
    nav.classList.remove("bg-white/90");
    nav.classList.add("glass-effect");
    icon.classList.remove("fa-times");
    icon.classList.add("fa-bars");
  }
}

// Smooth scrolling for navigation links
function initSmoothScrolling() {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    });
  });
}

// Code animation display
function initCodeAnimation() {
  const codeDisplay = document.getElementById("code-display");
  if (!codeDisplay) return;

  const codeLines = [
    "@RestController",
    '@RequestMapping("/api/v1/inventory")',
    "public class InventoryController {",
    "",
    "  @Autowired",
    "  private InventoryService inventoryService;",
    "",
    "  @GetMapping",
    "  public List<ItemDto> getAllItems() {",
    "    return inventoryService.getAllItems();",
    "  }",
    "",
    "  @PreAuthorize(\"hasRole('ADMIN')\")",
    "  @PostMapping",
    "  public ItemDto saveItem(",
    "    @RequestBody ItemDto itemDto) {",
    "    return inventoryService.saveItem(itemDto);",
    "  }",
    "",
    '  @DeleteMapping("/{id}")',
    "  public Boolean deleteItem(@PathVariable Integer id) {",
    "    return inventoryService.deleteItem(id);",
    "  }",
    "}",
  ];

  let currentLine = 0;
  function displayNextLine() {
    if (currentLine < codeLines.length) {
      const lineElement = document.createElement("div");
      lineElement.className = "code-line text-xs sm:text-sm";
      lineElement.textContent = codeLines[currentLine];

      // Color coding for different elements
      if (
        codeLines[currentLine].includes("@RestController") ||
        codeLines[currentLine].includes("@RequestMapping") ||
        codeLines[currentLine].includes("@Autowired") ||
        codeLines[currentLine].includes("@GetMapping") ||
        codeLines[currentLine].includes("@PostMapping") ||
        codeLines[currentLine].includes("@DeleteMapping") ||
        codeLines[currentLine].includes("@PreAuthorize")
      ) {
        lineElement.classList.add("text-yellow-400");
      } else if (
        codeLines[currentLine].includes("public") ||
        codeLines[currentLine].includes("private") ||
        codeLines[currentLine].includes("class")
      ) {
        lineElement.classList.add("text-purple-400");
      } else if (codeLines[currentLine].includes("return")) {
        lineElement.classList.add("text-pink-400");
      } else if (
        codeLines[currentLine].includes("InventoryController") ||
        codeLines[currentLine].includes("InventoryService") ||
        codeLines[currentLine].includes("ItemDto")
      ) {
        lineElement.classList.add("text-blue-400");
      } else {
        lineElement.classList.add("text-green-300");
      }

      codeDisplay.appendChild(lineElement);
      currentLine++;
      setTimeout(displayNextLine, 120);
    }
  }

  setTimeout(displayNextLine, 1000);
}

// Scroll animations with Intersection Observer
function initScrollAnimations() {
  const observerOptions = {
    threshold: 0.15,
    rootMargin: "0px 0px -50px 0px",
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animate-fade-in-up");
        if (entry.target.classList.contains("feature-card")) {
          entry.target.style.animationDelay = `${Math.random() * 0.5}s`;
        }
      }
    });
  }, observerOptions);

  // Observe cards and sections for animation
  document
    .querySelectorAll(".feature-card, .tech-category, .api-section")
    .forEach((el) => {
      observer.observe(el);
    });
}

// Interactive button effects
function initInteractiveButtons() {
  const buttons = document.querySelectorAll("button, .btn");

  buttons.forEach((btn) => {
    btn.addEventListener("mouseenter", function () {
      this.style.transform = "translateY(-2px)";
      this.style.boxShadow = "0 8px 25px rgba(0,0,0,0.15)";
    });

    btn.addEventListener("mouseleave", function () {
      this.style.transform = "translateY(0)";
      this.style.boxShadow = "none";
    });
  });
}

// Parallax effects for enhanced user experience
function initParallaxEffects() {
  window.addEventListener("scroll", () => {
    const scrolled = window.pageYOffset;
    const parallax = document.querySelector(".floating");

    if (parallax) {
      const speed = scrolled * 0.5;
      parallax.style.transform = `translateY(${speed}px)`;
    }
  });
}

// Navigation scroll effect
window.addEventListener("scroll", function () {
  const nav = document.querySelector("nav");
  if (window.scrollY > 50) {
    nav.style.background = "rgba(255, 255, 255, 0.95)";
    nav.style.backdropFilter = "blur(20px)";
    nav.style.boxShadow = "0 2px 20px rgba(0,0,0,0.1)";
  } else {
    nav.style.background = "rgba(255, 255, 255, 0.1)";
    nav.style.backdropFilter = "blur(10px)";
    nav.style.boxShadow = "none";
  }
});

// Tech badge hover effects
function initTechBadgeEffects() {
  const techBadges = document.querySelectorAll(".tech-badge");

  techBadges.forEach((badge) => {
    badge.addEventListener("mouseenter", function () {
      this.style.transform = "scale(1.05) translateY(-2px)";
      this.style.boxShadow = "0 10px 20px rgba(0,0,0,0.2)";
    });

    badge.addEventListener("mouseleave", function () {
      this.style.transform = "scale(1) translateY(0)";
      this.style.boxShadow = "none";
    });

    // Add click event for tech badge interaction
    badge.addEventListener("click", function () {
      const techName = this.textContent.trim();
      showNotification(`Learning more about ${techName}...`, "info");
    });
  });
}

// API endpoint hover effects and modal system
function initApiEndpointEffects() {
  const apiEndpoints = document.querySelectorAll(".api-endpoint");

  apiEndpoints.forEach((endpoint) => {
    endpoint.addEventListener("mouseenter", function () {
      this.style.backgroundColor = "rgba(59, 130, 246, 0.05)";
      this.style.transform = "translateX(8px)";
      this.style.paddingLeft = "20px";
      this.style.borderLeft = "3px solid #3b82f6";
    });

    endpoint.addEventListener("mouseleave", function () {
      this.style.backgroundColor = "transparent";
      this.style.transform = "translateX(0)";
      this.style.paddingLeft = "16px";
      this.style.borderLeft = "1px solid #e5e7eb";
    });

    // Add click event for API endpoint modal
    endpoint.addEventListener("click", function () {
      const method = this.querySelector("span").textContent;
      const endpoint = this.querySelector("code").textContent;
      const description = this.querySelector("p").textContent;
      showApiDialog(method, endpoint, description);
    });
  });
}

// Comprehensive API details database based on Nexivus Postman collection
const apiDetails = {
  "POST /auth/login": {
    title: "User Authentication",
    description:
      "Authenticate user and generate JWT access token for protected endpoints",
    requestBody: {
      username: "vibuddha",
      password: "Error@123",
    },
    responseExample: {
      message: "Login successful",
      token:
        "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ2aWJ1ZGRoYSIsImlhdCI6MTcyOTI3NjkzNiwiZXhwIjoxNzI5MzYzMzM2fQ.Gj_ZTX50ot_tUk9krD190hVLCmD27oKmypvyqem1KTE",
      user: {
        id: 1,
        username: "vibuddha",
        fullname: "Vibuddha Vidarshana",
      },
    },
    headers: {
      "Content-Type": "application/json",
    },
  },
  "GET /category": {
    title: "Get All Categories",
    description: "Retrieve all product categories for inventory organization",
    requestBody: null,
    responseExample: [
      {
        id: 1,
        name: "Electronics",
      },
      {
        id: 2,
        name: "Beverages",
      },
      {
        id: 6,
        name: "Medicine",
      },
    ],
    headers: {
      "Content-Type": "application/json",
    },
  },
  "POST /category": {
    title: "Create New Category",
    description: "Create a new product category for inventory classification",
    requestBody: {
      name: "Medicine",
    },
    responseExample: {
      id: 6,
      name: "Medicine",
      message: "Category created successfully",
    },
    headers: {
      "Content-Type": "application/json",
    },
  },
  "GET /items": {
    title: "Get All Items",
    description:
      "Retrieve all inventory items with category information (JWT required)",
    requestBody: null,
    responseExample: [
      {
        id: 1,
        name: "Curry Powder",
        description: "100g",
        price: 350.0,
        category: {
          id: 6,
          name: "Medicine",
        },
      },
      {
        id: 2,
        name: "CocaCola",
        description: "400ml",
        price: 150.0,
        category: {
          id: 2,
          name: "Beverages",
        },
      },
    ],
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ2aWJ1ZGRoYSIsImlhdCI6MTcyOTI3NjkzNiwiZXhwIjoxNzI5MzYzMzM2fQ.Gj_ZTX50ot_tUk9krD190hVLCmD27oKmypvyqem1KTE",
      "Content-Type": "application/json",
    },
  },
  "POST /items": {
    title: "Create New Item",
    description:
      "Add a new product item to the inventory with pricing and category",
    requestBody: {
      name: "Curry Powder",
      description: "100g",
      price: 350,
      categoryId: 6,
    },
    responseExample: {
      id: 7,
      name: "Curry Powder",
      description: "100g",
      price: 350.0,
      category: {
        id: 6,
        name: "Medicine",
      },
      message: "Item created successfully",
    },
    headers: {
      "Content-Type": "application/json",
    },
  },
  "PUT /items/{id}": {
    title: "Update Item",
    description:
      "Update existing inventory item details including name, description, price, and category",
    requestBody: {
      name: "CocaCola",
      description: "400ml",
      price: 150,
      categoryId: 2,
    },
    responseExample: {
      id: 2,
      name: "CocaCola",
      description: "400ml",
      price: 150.0,
      category: {
        id: 2,
        name: "Beverages",
      },
      message: "Item updated successfully",
    },
    headers: {
      "Content-Type": "application/json",
    },
  },
  "DELETE /items/{id}": {
    title: "Delete Item",
    description: "Remove an inventory item from the system permanently",
    requestBody: null,
    responseExample: {
      message: "Item deleted successfully",
      deletedItemId: 4,
    },
    headers: {
      "Content-Type": "application/json",
    },
  },
  "GET /stock": {
    title: "Get Stock Information",
    description: "Retrieve current stock levels for all inventory items",
    requestBody: null,
    responseExample: [
      {
        id: 1,
        item: {
          id: 1,
          name: "Curry Powder",
          description: "100g",
          price: 350.0,
        },
        qty: 320,
      },
      {
        id: 2,
        item: {
          id: 2,
          name: "CocaCola",
          description: "400ml",
          price: 150.0,
        },
        qty: 120,
      },
    ],
    headers: {
      "Content-Type": "application/json",
    },
  },
  "POST /stock": {
    title: "Create Stock Entry",
    description: "Create initial stock entry for a new inventory item",
    requestBody: {
      itemId: 1,
      qty: 100,
    },
    responseExample: {
      id: 3,
      item: {
        id: 1,
        name: "Curry Powder",
        description: "100g",
        price: 350.0,
      },
      qty: 100,
      message: "Stock entry created successfully",
    },
    headers: {
      "Content-Type": "application/json",
    },
  },
  "PUT /stock/addto": {
    title: "Add Stock Quantity",
    description:
      "Increase stock quantities for multiple items (JWT required for inventory management)",
    requestBody: [
      {
        id: 1,
        qty: 20,
      },
      {
        id: 2,
        qty: 100,
      },
    ],
    responseExample: {
      message: "Stock quantities added successfully",
      updatedItems: [
        {
          id: 1,
          previousQty: 300,
          newQty: 320,
          addedQty: 20,
        },
        {
          id: 2,
          previousQty: 20,
          newQty: 120,
          addedQty: 100,
        },
      ],
    },
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ2aWJ1ZGRoYSIsImlhdCI6MTcyOTY3NzMyOCwiZXhwIjoxNzI5NzYzNzI4fQ._fptreCXcwvuUyzUGjO9VJ9BLrf7cgP2xZswL7PlQKo",
      "Content-Type": "application/json",
    },
  },
  "PUT /stock/getfrom": {
    title: "Reduce Stock Quantity",
    description:
      "Decrease stock quantities for multiple items (JWT required for sales transactions)",
    requestBody: [
      {
        id: 1,
        qty: 100,
      },
      {
        id: 2,
        qty: 20,
      },
    ],
    responseExample: {
      message: "Stock quantities reduced successfully",
      updatedItems: [
        {
          id: 1,
          previousQty: 320,
          newQty: 220,
          reducedQty: 100,
        },
        {
          id: 2,
          previousQty: 120,
          newQty: 100,
          reducedQty: 20,
        },
      ],
    },
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ2aWJ1ZGRoYSIsImlhdCI6MTcyOTY3NzMyOCwiZXhwIjoxNzI5NzYzNzI4fQ._fptreCXcwvuUyzUGjO9VJ9BLrf7cgP2xZswL7PlQKo",
      "Content-Type": "application/json",
    },
  },
  "PUT /stock": {
    title: "Update Stock Quantity",
    description: "Set exact stock quantity for a specific item (JWT required)",
    requestBody: {
      id: 1,
      qty: 300,
    },
    responseExample: {
      id: 1,
      item: {
        id: 1,
        name: "Curry Powder",
        description: "100g",
        price: 350.0,
      },
      qty: 300,
      message: "Stock quantity updated successfully",
    },
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ2aWJ1ZGRoYSIsImlhdCI6MTcyOTY3NzMyOCwiZXhwIjoxNzI5NzYzNzI4fQ._fptreCXcwvuUyzUGjO9VJ9BLrf7cgP2xZswL7PlQKo",
      "Content-Type": "application/json",
    },
  },
  "GET /users": {
    title: "Get All Users",
    description: "Retrieve all system users for management and administration",
    requestBody: null,
    responseExample: [
      {
        id: 1,
        username: "vibuddha",
        fullname: "Vibuddha Vidarshana",
        role: "ADMIN",
      },
      {
        id: 2,
        username: "bvibuddha",
        fullname: "Vibuddha Vidarshana",
        role: "USER",
      },
    ],
    headers: {
      "Content-Type": "application/json",
    },
  },
  "POST /users": {
    title: "Create New User",
    description:
      "Register a new user account with credentials and profile information",
    requestBody: {
      username: "bvibuddha",
      fullname: "Vibuddha Vidarshana",
      password: "Error@123",
    },
    responseExample: {
      id: 2,
      username: "bvibuddha",
      fullname: "Vibuddha Vidarshana",
      role: "USER",
      message: "User created successfully",
    },
    headers: {
      "Content-Type": "application/json",
    },
  },
  "GET /orders": {
    title: "Get All Orders",
    description:
      "Retrieve all sales orders with item details and totals (JWT required)",
    requestBody: null,
    responseExample: [
      {
        id: 1,
        orderDate: "2024-10-18T10:30:00",
        items: [
          {
            id: 1,
            name: "Curry Powder",
            quantity: 3,
            unitPrice: 350.0,
            subtotal: 1050.0,
          },
          {
            id: 2,
            name: "CocaCola",
            quantity: 2,
            unitPrice: 150.0,
            subtotal: 300.0,
          },
        ],
        totalAmount: 1350.0,
        user: {
          id: 1,
          username: "vibuddha",
          fullname: "Vibuddha Vidarshana",
        },
      },
    ],
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ2aWJ1ZGRoYSIsImlhdCI6MTcyOTI3NjkzNiwiZXhwIjoxNzI5MzYzMzM2fQ.Gj_ZTX50ot_tUk9krD190hVLCmD27oKmypvyqem1KTE",
      "Content-Type": "application/json",
    },
  },
  "POST /orders": {
    title: "Create Sales Order",
    description:
      "Process a new sales transaction with multiple items (JWT required)",
    requestBody: {
      itemIds: [1, 1, 1, 2, 2, 3, 3],
    },
    responseExample: {
      id: 2,
      orderDate: "2024-10-18T14:45:00",
      items: [
        {
          id: 1,
          name: "Curry Powder",
          quantity: 3,
          unitPrice: 350.0,
          subtotal: 1050.0,
        },
        {
          id: 2,
          name: "CocaCola",
          quantity: 2,
          unitPrice: 150.0,
          subtotal: 300.0,
        },
        {
          id: 3,
          name: "Another Item",
          quantity: 2,
          unitPrice: 200.0,
          subtotal: 400.0,
        },
      ],
      totalAmount: 1750.0,
      message: "Order created successfully",
      stockUpdated: true,
    },
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ2aWJ1ZGRoYSIsImlhdCI6MTcyOTI3NjkzNiwiZXhwIjoxNzI5MzYzMzM2fQ.Gj_ZTX50ot_tUk9krD190hVLCmD27oKmypvyqem1KTE",
      "Content-Type": "application/json",
    },
  },
};

// Show API details dialog
function showApiDialog(method, endpoint, description) {
  const key = `${method} ${endpoint}`;
  const details = apiDetails[key] || {
    title: "API Endpoint",
    description: description,
    requestBody: null,
    responseExample: "Response data",
    headers: {
      "Content-Type": "application/json",
    },
  };

  const modal = document.createElement("div");
  modal.className =
    "fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4 modal-backdrop";
  modal.addEventListener("click", function (e) {
    if (e.target === modal) {
      closeModal();
    }
  });

  const dialog = document.createElement("div");
  dialog.className =
    "bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl api-modal";

  const methodColor =
    method === "GET"
      ? "bg-blue-500"
      : method === "POST"
      ? "bg-green-500"
      : method === "PUT"
      ? "bg-yellow-500"
      : method === "DELETE"
      ? "bg-red-500"
      : "bg-gray-500";

  dialog.innerHTML = `
    <div class="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between rounded-t-2xl">
      <div class="flex items-center space-x-3">
        <span class="px-3 py-1 ${methodColor} text-white text-sm rounded-lg font-mono font-semibold">${method}</span>
        <h2 class="text-xl font-bold text-gray-800">${details.title}</h2>
      </div>
      <button onclick="closeModal()" class="text-gray-400 hover:text-gray-600 text-2xl hover:bg-gray-100 rounded-full w-8 h-8 flex items-center justify-center transition-colors">&times;</button>
    </div>
    
    <div class="p-6 space-y-6">
      <!-- Endpoint Information -->
      <div class="bg-gray-50 rounded-lg p-4">
        <h3 class="font-semibold text-gray-800 mb-2 flex items-center">
          <i class="fas fa-link text-gray-600 mr-2"></i>
          Endpoint
        </h3>
        <code class="text-sm bg-gray-800 text-green-400 px-3 py-2 rounded block font-mono">
          ${method} http://127.0.0.1:8085${endpoint}
        </code>
        <p class="text-gray-600 mt-2 text-sm">${details.description}</p>
      </div>

      <!-- Headers -->
      <div class="bg-blue-50 rounded-lg p-4">
        <h3 class="font-semibold text-gray-800 mb-3 flex items-center">
          <i class="fas fa-key text-blue-600 mr-2"></i>
          Headers
        </h3>
        <div class="bg-gray-800 text-green-400 p-3 rounded font-mono text-sm">
${Object.entries(details.headers)
  .map(([key, value]) => `          ${key}: ${value}`)
  .join("\n")}
        </div>
      </div>

      ${
        details.requestBody
          ? `
      <!-- Request Body -->
      <div class="bg-green-50 rounded-lg p-4">
        <h3 class="font-semibold text-gray-800 mb-3 flex items-center">
          <i class="fas fa-arrow-up text-green-600 mr-2"></i>
          Request Body
        </h3>
        <div class="bg-gray-800 text-green-400 p-3 rounded font-mono text-sm overflow-x-auto">
          <pre>${
            typeof details.requestBody === "string"
              ? details.requestBody
              : JSON.stringify(details.requestBody, null, 2)
          }</pre>
        </div>
      </div>
      `
          : ""
      }

      <!-- Response Example -->
      <div class="bg-purple-50 rounded-lg p-4">
        <h3 class="font-semibold text-gray-800 mb-3 flex items-center">
          <i class="fas fa-arrow-down text-purple-600 mr-2"></i>
          Response Example
        </h3>
        <div class="bg-gray-800 text-green-400 p-3 rounded font-mono text-sm overflow-x-auto">
          <pre>${
            typeof details.responseExample === "string"
              ? details.responseExample
              : JSON.stringify(details.responseExample, null, 2)
          }</pre>
        </div>
      </div>

      <!-- cURL Example -->
      <div class="bg-orange-50 rounded-lg p-4">
        <h3 class="font-semibold text-gray-800 mb-3 flex items-center">
          <i class="fas fa-terminal text-orange-600 mr-2"></i>
          cURL Example
        </h3>
        <div class="bg-gray-800 text-green-400 p-3 rounded font-mono text-sm overflow-x-auto">
          <pre>curl -X ${method} \\
${Object.entries(details.headers)
  .map(([key, value]) => `  -H "${key}: ${value}" \\`)
  .join("\n")}${
    details.requestBody && typeof details.requestBody === "object"
      ? `\n  -d '${JSON.stringify(details.requestBody)}' \\`
      : ""
  }
  http://127.0.0.1:8085${endpoint}</pre>
        </div>
      </div>

      <!-- Additional Info -->
      <div class="bg-yellow-50 rounded-lg p-4">
        <h3 class="font-semibold text-gray-800 mb-3 flex items-center">
          <i class="fas fa-info-circle text-yellow-600 mr-2"></i>
          Additional Information
        </h3>
        <div class="text-sm text-gray-600">
          <p><strong>Base URL:</strong> http://127.0.0.1:8085</p>
          <p><strong>Authentication:</strong> JWT Bearer Token required for protected endpoints</p>
          <p><strong>Content-Type:</strong> application/json</p>
          <p class="mt-2 text-xs text-gray-500">
            <i class="fas fa-lightbulb mr-1"></i>
            Click outside the dialog or press Escape to close
          </p>
        </div>
      </div>
    </div>
  `;

  modal.appendChild(dialog);
  document.body.appendChild(modal);

  // Animate in
  setTimeout(() => {
    dialog.classList.add("show");
  }, 10);

  // Store reference for closing
  window.currentModal = modal;

  // Add keyboard support
  document.addEventListener("keydown", handleModalKeydown);

  // Prevent body scroll
  document.body.style.overflow = "hidden";
}

// Handle keyboard events for modal
function handleModalKeydown(e) {
  if (e.key === "Escape") {
    closeModal();
  }
}

// Close modal function
function closeModal() {
  const modal = window.currentModal;
  if (modal) {
    const dialog = modal.querySelector(".api-modal");
    dialog.classList.remove("show");
    setTimeout(() => {
      modal.remove();
      window.currentModal = null;
      document.removeEventListener("keydown", handleModalKeydown);
      document.body.style.overflow = "";
    }, 200);
  }
}

// Enhanced notification system
function showNotification(message, type = "info", customContent = null) {
  const notification = document.createElement("div");
  notification.className = `fixed top-20 right-6 z-50 p-4 rounded-lg shadow-lg transform translate-x-full transition-transform duration-300 max-w-md ${
    type === "success"
      ? "bg-green-500"
      : type === "error"
      ? "bg-red-500"
      : "bg-blue-500"
  }`;

  if (customContent) {
    notification.innerHTML = `
      <div class="text-white font-semibold mb-2">${message}</div>
      ${customContent}
    `;
  } else {
    notification.textContent = message;
    notification.style.color = "white";
  }

  document.body.appendChild(notification);

  // Slide in
  setTimeout(() => {
    notification.style.transform = "translateX(0)";
  }, 100);

  // Slide out and remove
  setTimeout(
    () => {
      notification.style.transform = "translateX(full)";
      setTimeout(() => {
        notification.remove();
      }, 300);
    },
    customContent ? 5000 : 3000
  );
}

// Performance optimization: Throttle scroll events
function throttle(func, limit) {
  let inThrottle;
  return function () {
    const args = arguments;
    const context = this;
    if (!inThrottle) {
      func.apply(context, args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
}

// Feature card click interactions
document.querySelectorAll(".feature-card").forEach((card) => {
  card.addEventListener("click", function () {
    const title = this.querySelector("h3").textContent;
    const description = this.querySelector("p").textContent;

    showNotification(
      `Feature: ${title}`,
      "info",
      `
      <div class="bg-white/10 p-3 rounded mt-2">
        <p class="text-white/90 text-sm">${description}</p>
      </div>
    `
    );
  });
});

// Easter egg: Nexivus developer info
let clickCount = 0;
document.querySelector("h1").addEventListener("click", function () {
  clickCount++;
  if (clickCount === 5) {
    showNotification(
      "🚀 Nexivus POS System Developer",
      "success",
      `
      <div class="bg-white/10 p-3 rounded mt-2">
        <p class="text-white/90 text-sm">
          Built with passion for retail technology!<br>
          Features: JWT Auth, Inventory Management, POS Operations<br>
          Stack: Spring Boot, MySQL, JPA/Hibernate
        </p>
      </div>
    `
    );
    clickCount = 0;
  }
});

// Console welcome message
console.log(`
🚀 Welcome to Nexivus POS System!
Built with Spring Boot + Modern Architecture

Features:
• Secure JWT authentication system
• Complete inventory management
• Point of sale operations
• User management with roles
• Secure RESTful API endpoints
• JPA/Hibernate with MySQL integration

Architecture:
• Spring Security for authentication & authorization
• BCrypt password encryption
• CORS configuration for cross-origin requests
• Organized service layer architecture
• Role-based method security

Click on any feature card or API endpoint to explore more!
`);

// Export functions for global access
window.closeMobileMenu = closeMobileMenu;

// Navigation functionality
function initNavigation() {
  const nav = document.querySelector("nav");
  const navLinks = document.querySelectorAll(".nav-link");

  // Change nav background on scroll
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      nav.classList.add("bg-white/90");
      nav.classList.remove("glass-effect");
    } else {
      nav.classList.remove("bg-white/90");
      nav.classList.add("glass-effect");
    }
  });

  // Active link highlighting
  navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      navLinks.forEach((l) =>
        l.classList.remove("text-blue-600", "font-semibold")
      );
      this.classList.add("text-blue-600", "font-semibold");
    });
  });
}

// Hero section animations
function initHeroAnimations() {
  // Animate hero elements on load
  setTimeout(() => {
    const heroElements = document.querySelectorAll(".slide-in");
    heroElements.forEach((el, index) => {
      setTimeout(() => {
        el.style.animationDelay = `${index * 0.2}s`;
        el.classList.add("animate");
      }, index * 200);
    });
  }, 500);

  // Interactive demo and github buttons
  const demoBtn = document.querySelector(".demo-btn");
  const githubBtn = document.querySelector(".github-btn");

  if (demoBtn) {
    demoBtn.addEventListener("click", () => {
      showModal(
        "Demo",
        "This would typically open a live demo of the Nexivus application with interactive features and sample data."
      );
    });
  }

  if (githubBtn) {
    githubBtn.addEventListener("click", () => {
      showNotification(`Opening GitHub Repository...`, "info");
    });
  }
}

// Scroll-triggered animations
function initScrollAnimations() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animate-fade-in-up");

        // Special animations for different elements
        if (entry.target.classList.contains("feature-card")) {
          entry.target.style.animationDelay = `${Math.random() * 0.5}s`;
        }

        if (entry.target.classList.contains("tech-badge")) {
          entry.target.style.animationDelay = `${Math.random() * 0.3}s`;
        }
      }
    });
  }, observerOptions);

  // Observe elements for animation
  const animateElements = document.querySelectorAll(
    ".feature-card, .overview-card, .tech-badge, .api-section"
  );
  animateElements.forEach((el) => observer.observe(el));
}

// Enhanced typewriter effect
function initTypewriterEffect() {
  const typewriterText = document.querySelector(".typing-animation");
  if (!typewriterText) return;

  const phrases = [
    "Inventory Management",
    "Spring Boot Application",
    "JWT Authentication Ready",
    "RESTful API Design",
    "Modern Tech Stack",
    "Point Of Sale System",
  ];

  let currentPhrase = 0;
  let currentChar = 0;
  let isDeleting = false;

  function typeWriter() {
    const current = phrases[currentPhrase];

    if (isDeleting) {
      typewriterText.textContent = current.substring(0, currentChar - 1);
      currentChar--;
    } else {
      typewriterText.textContent = current.substring(0, currentChar + 1);
      currentChar++;
    }

    let typeSpeed = isDeleting ? 100 : 150;

    if (!isDeleting && currentChar === current.length) {
      typeSpeed = 2000; // Pause at end
      isDeleting = true;
    } else if (isDeleting && currentChar === 0) {
      isDeleting = false;
      currentPhrase = (currentPhrase + 1) % phrases.length;
      typeSpeed = 500;
    }

    setTimeout(typeWriter, typeSpeed);
  }

  // Start typewriter after initial animation
  setTimeout(typeWriter, 3500);
}

// Animated code display
function initCodeDisplay() {
  const codeDisplay = document.getElementById("code-display");
  if (!codeDisplay) return;

  const codeSnippets = [
    "@RestController",
    '@RequestMapping("/api")',
    "public class InventoryController {",
    "",
    "  @Autowired",
    "  private ItemService itemService;",
    "",
    '  @GetMapping("/items")',
    "  public ResponseEntity<List<Item>> getAllItems() {",
    "    return ResponseEntity.ok(itemService.findAll());",
    "  }",
    "",
    '  @PostMapping("/items")',
    "  public ResponseEntity<Item> createItem(@RequestBody Item item) {",
    "    return ResponseEntity.ok(itemService.save(item));",
    "  }",
    "}",
  ];

  let currentLine = 0;

  function displayNextLine() {
    if (currentLine < codeSnippets.length) {
      const line = document.createElement("div");
      line.textContent = codeSnippets[currentLine];
      line.style.opacity = "0";
      line.style.transform = "translateX(-10px)";

      codeDisplay.appendChild(line);

      // Animate line in
      setTimeout(() => {
        line.style.transition = "all 0.3s ease";
        line.style.opacity = "1";
        line.style.transform = "translateX(0)";
      }, 50);

      currentLine++;
      setTimeout(displayNextLine, 300);
    } else {
      // Reset and start over
      setTimeout(() => {
        codeDisplay.innerHTML = "";
        currentLine = 0;
        setTimeout(displayNextLine, 1000);
      }, 3000);
    }
  }

  // Start code animation
  setTimeout(displayNextLine, 2000);
}

// Smooth scrolling for navigation links
function initSmoothScrolling() {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    });
  });
}

// Mobile menu functionality
function initMobileMenu() {
  const mobileMenuBtn = document.getElementById("mobile-menu-toggle");
  const nav = document.querySelector("nav");
  const mobileMenu = document.getElementById("mobile-menu");
  let isMenuOpen = false;

  if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener("click", () => {
      isMenuOpen = !isMenuOpen;
      const icon = document.querySelector("#mobile-menu-toggle i");

      if (isMenuOpen) {
        mobileMenu.classList.remove("hidden");
        mobileMenu.classList.add("flex");
        nav.classList.add("bg-white/90");
        nav.classList.remove("glass-effect");
        icon.classList.remove("fa-bars");
        icon.classList.add("fa-times");
      } else {
        mobileMenu.classList.add("hidden");
        mobileMenu.classList.remove("flex");
        nav.classList.remove("bg-white/90");
        nav.classList.add("glass-effect");
        icon.classList.remove("fa-times");
        icon.classList.add("fa-bars");
      }
    });
  }
}
// Close mobile menu when clicking outside
function closeMobileMenu() {
  const mobileMenu = document.getElementById("mobile-menu");
  const nav = document.querySelector("nav");
  const icon = document.querySelector("#mobile-menu-toggle i");
  if (mobileMenu) {
    mobileMenu.classList.add("hidden");
    mobileMenu.classList.remove("flex");
    nav.classList.remove("bg-white/90");
    nav.classList.add("glass-effect");
    icon.classList.remove("fa-times");
    icon.classList.add("fa-bars");
    initMobileMenu(); // Reset state
  }
}

// Interactive features and hover effects
function initInteractiveFeatures() {
  // Feature cards hover effects
  const featureCards = document.querySelectorAll(".feature-card");
  featureCards.forEach((card) => {
    card.addEventListener("mouseenter", function () {
      this.style.transform = "translateY(-8px) scale(1.02)";
      this.style.boxShadow = "0 20px 40px rgba(0,0,0,0.1)";
    });

    card.addEventListener("mouseleave", function () {
      this.style.transform = "translateY(0) scale(1)";
      this.style.boxShadow = "0 4px 6px rgba(0,0,0,0.1)";
    });
  });

  // API endpoint interactions - Updated with actual endpoints
  const apiEndpoints = document.querySelectorAll(".api-endpoint");
  apiEndpoints.forEach((endpoint) => {
    endpoint.addEventListener("click", function () {
      const methodElement = this.querySelector(".font-mono");
      const pathElement = this.querySelector(".font-mono:last-child");

      if (!methodElement || !pathElement) return;

      const method = methodElement.textContent.trim();
      const path = pathElement.textContent.trim();

      // Get endpoint details based on the actual API
      const endpointDetails = getEndpointDetails(method, path);

      showModal(
        "API Endpoint Details",
        `
            <div class="text-left">
              <h3 class="font-bold text-lg mb-2">${method} ${path}</h3>
              <p class="text-gray-600 mb-4">${endpointDetails.description}</p>
              
              ${
                endpointDetails.requiresAuth
                  ? '<div class="bg-yellow-50 border border-yellow-200 rounded-lg p-3 mb-4"><span class="text-yellow-800 font-semibold">🔐 Authentication Required</span><br><span class="text-sm text-yellow-700">This endpoint requires a valid JWT token.</span></div>'
                  : ""
              }
              
              <div class="bg-gray-100 p-4 rounded-lg mb-4">
                <strong>Base URL:</strong><br>
                <code class="text-sm">http://127.0.0.1:8085</code>
              </div>
              
              ${
                endpointDetails.requestBody
                  ? `<div class="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-4">
                  <strong>Request Body Example:</strong><br>
                  <pre class="text-sm mt-2 overflow-x-auto"><code>${JSON.stringify(
                    endpointDetails.requestBody,
                    null,
                    2
                  )}</code></pre>
                </div>`
                  : ""
              }
              
              <div class="bg-gray-900 text-green-400 p-4 rounded-lg text-sm font-mono">
                <strong>cURL Example:</strong><br>
                <code class="whitespace-pre-wrap">${
                  endpointDetails.curlExample
                }</code>
              </div>
              
              ${
                endpointDetails.notes
                  ? `<div class="mt-4 p-3 bg-blue-50 border-l-4 border-blue-400">
                  <p class="text-sm text-blue-800"><strong>Note:</strong> ${endpointDetails.notes}</p>
                </div>`
                  : ""
              }
            </div>
            `
      );
    });
  });

  // Tech badges pulse effect
  const techBadges = document.querySelectorAll(".tech-badge");
  techBadges.forEach((badge, index) => {
    setTimeout(() => {
      badge.style.animation = "pulse 2s infinite";
    }, index * 200);
  });
}

// Function to get detailed information about each endpoint
function getEndpointDetails(method, path) {
  const endpoints = {
    // Authentication
    "POST /auth/login": {
      description:
        "Authenticate user and receive JWT token for protected endpoints",
      requiresAuth: false,
      requestBody: {
        username: "vibuddha",
        password: "Error@123",
      },
      curlExample: `curl -X POST "http://127.0.0.1:8085/auth/login" \\
      -H "Content-Type: application/json" \\
      -d '{
        "username": "vibuddha",
        "password": "Error@123"
      }'`,
      notes:
        "Returns JWT token that expires in 24 hours. Use this token for authenticated requests.",
    },

    // Categories
    "GET /category": {
      description: "Retrieve all product categories available in the system",
      requiresAuth: true,
      curlExample: `curl -X GET "http://127.0.0.1:8085/category" \\
      -H "Authorization: Bearer YOUR_JWT_TOKEN"`,
    },
    "POST /category": {
      description: "Create a new product category",
      requiresAuth: true,
      requestBody: {
        name: "Medicine",
      },
      curlExample: `curl -X POST "http://127.0.0.1:8085/category" \\
      -H "Authorization: Bearer YOUR_JWT_TOKEN" \\
      -H "Content-Type: application/json" \\
      -d '{
        "name": "Medicine"
      }'`,
    },

    // Items
    "GET /items": {
      description: "Retrieve all items in the inventory with category details",
      requiresAuth: true,
      curlExample: `curl -X GET "http://127.0.0.1:8085/items" \\
      -H "Authorization: Bearer YOUR_JWT_TOKEN"`,
    },
    "POST /items": {
      description: "Add a new item to the inventory",
      requiresAuth: true,
      requestBody: {
        name: "Curry Powder",
        description: "100g",
        price: 350,
        categoryId: 6,
      },
      curlExample: `curl -X POST "http://127.0.0.1:8085/items" \\
      -H "Authorization: Bearer YOUR_JWT_TOKEN" \\
      -H "Content-Type: application/json" \\
      -d '{
        "name": "Curry Powder",
        "description": "100g",
        "price": 350,
        "categoryId": 6
      }'`,
    },
    "PUT /items/{id}": {
      description: "Update an existing item by ID",
      requiresAuth: true,
      requestBody: {
        name: "CocaCola",
        description: "400ml",
        price: 150,
        categoryId: 2,
      },
      curlExample: `curl -X PUT "http://127.0.0.1:8085/items/2" \\
      -H "Authorization: Bearer YOUR_JWT_TOKEN" \\
      -H "Content-Type: application/json" \\
      -d '{
        "name": "CocaCola",
        "description": "400ml",
        "price": 150,
        "categoryId": 2
      }'`,
    },
    "DELETE /items/{id}": {
      description: "Delete an item from the inventory",
      requiresAuth: true,
      curlExample: `curl -X DELETE "http://127.0.0.1:8085/items/4" \\
      -H "Authorization: Bearer YOUR_JWT_TOKEN"`,
    },

    // Stock Management
    "GET /stock": {
      description: "Retrieve current stock levels for all items",
      requiresAuth: true,
      curlExample: `curl -X GET "http://127.0.0.1:8085/stock" \\
      -H "Authorization: Bearer YOUR_JWT_TOKEN"`,
      notes: "Shows current quantity available for each item",
    },
    "POST /stock": {
      description: "Initialize stock for a new item",
      requiresAuth: true,
      requestBody: {
        itemId: 1,
        qty: 100,
      },
      curlExample: `curl -X POST "http://127.0.0.1:8085/stock" \\
      -H "Authorization: Bearer YOUR_JWT_TOKEN" \\
      -H "Content-Type: application/json" \\
      -d '{
        "itemId": 1,
        "qty": 100
      }'`,
    },
    "PUT /stock/addto": {
      description: "Add stock quantity for multiple items (restocking)",
      requiresAuth: true,
      requestBody: [
        {
          id: 1,
          qty: 20,
        },
        {
          id: 2,
          qty: 100,
        },
      ],
      curlExample: `curl -X PUT "http://127.0.0.1:8085/stock/addto" \\
      -H "Authorization: Bearer YOUR_JWT_TOKEN" \\
      -H "Content-Type: application/json" \\
      -d '[
        {"id": 1, "qty": 20},
        {"id": 2, "qty": 100}
      ]'`,
      notes: "Increases stock quantities - used for receiving new inventory",
    },
    "PUT /stock/getfrom": {
      description: "Reduce stock quantity for multiple items (sales/usage)",
      requiresAuth: true,
      requestBody: [
        {
          id: 1,
          qty: 100,
        },
        {
          id: 2,
          qty: 20,
        },
      ],
      curlExample: `curl -X PUT "http://127.0.0.1:8085/stock/getfrom" \\
      -H "Authorization: Bearer YOUR_JWT_TOKEN" \\
      -H "Content-Type: application/json" \\
      -d '[
        {"id": 1, "qty": 100},
        {"id": 2, "qty": 20}
      ]'`,
      notes: "Decreases stock quantities - used for sales or consumption",
    },
    "PUT /stock": {
      description:
        "Update stock quantity for a specific item (set absolute value)",
      requiresAuth: true,
      requestBody: {
        id: 1,
        qty: 300,
      },
      curlExample: `curl -X PUT "http://127.0.0.1:8085/stock" \\
      -H "Authorization: Bearer YOUR_JWT_TOKEN" \\
      -H "Content-Type: application/json" \\
      -d '{
        "id": 1,
        "qty": 300
      }'`,
      notes: "Sets exact stock quantity - overwrites current value",
    },

    // User Management
    "GET /users": {
      description: "Retrieve all registered users in the system",
      requiresAuth: true,
      curlExample: `curl -X GET "http://127.0.0.1:8085/users" \\
      -H "Authorization: Bearer YOUR_JWT_TOKEN"`,
    },
    "POST /users": {
      description: "Register a new user account",
      requiresAuth: true,
      requestBody: {
        username: "bvibuddha",
        fullname: "Vibuddha Vidarshana",
        password: "Error@123",
      },
      curlExample: `curl -X POST "http://127.0.0.1:8085/users" \\
      -H "Authorization: Bearer YOUR_JWT_TOKEN" \\
      -H "Content-Type: application/json" \\
      -d '{
        "username": "bvibuddha",
        "fullname": "Vibuddha Vidarshana",
        "password": "Error@123"
      }'`,
    },

    // Orders/Sales
    "GET /orders": {
      description: "Retrieve all orders/sales transactions",
      requiresAuth: true,
      curlExample: `curl -X GET "http://127.0.0.1:8085/orders" \\
      -H "Authorization: Bearer YOUR_JWT_TOKEN"`,
    },
    "POST /orders": {
      description: "Create a new order/sale transaction",
      requiresAuth: true,
      requestBody: {
        itemIds: [1, 1, 1, 2, 2, 3, 3],
      },
      curlExample: `curl -X POST "http://127.0.0.1:8085/orders" \\
      -H "Authorization: Bearer YOUR_JWT_TOKEN" \\
      -H "Content-Type: application/json" \\
      -d '{
        "itemIds": [1, 1, 1, 2, 2, 3, 3]
      }'`,
      notes:
        "Item IDs can be repeated to indicate quantity. This automatically reduces stock.",
    },
  };

  // Try exact match first
  const key = `${method} ${path}`;
  if (endpoints[key]) {
    return endpoints[key];
  }

  // Try to match with parameter patterns
  for (const [endpointKey, details] of Object.entries(endpoints)) {
    const pattern = endpointKey.replace(/\{[^}]+\}/g, "\\d+");
    const regex = new RegExp(`^${pattern}$`);
    if (regex.test(key)) {
      return details;
    }
  }

  // Default fallback
  return {
    description: "API endpoint for the Nexivus inventory management system",
    requiresAuth: false,
    curlExample: `curl -X ${
      method.split(" ")[0]
    } "http://127.0.0.1:8085${path}"`,
    notes: "Refer to the API documentation for detailed usage information",
  };
}

// Particle background animation
function initParticleBackground() {
  const heroSection = document.querySelector(".gradient-bg");
  if (!heroSection) return;

  // Create particles container
  const particlesContainer = document.createElement("div");
  particlesContainer.style.position = "absolute";
  particlesContainer.style.top = "0";
  particlesContainer.style.left = "0";
  particlesContainer.style.width = "100%";
  particlesContainer.style.height = "100%";
  particlesContainer.style.pointerEvents = "none";
  particlesContainer.style.zIndex = "1";

  heroSection.appendChild(particlesContainer);

  // Create floating particles
  for (let i = 0; i < 20; i++) {
    createParticle(particlesContainer);
  }
}

function createParticle(container) {
  const particle = document.createElement("div");
  particle.style.position = "absolute";
  particle.style.width = Math.random() * 4 + 2 + "px";
  particle.style.height = particle.style.width;
  particle.style.backgroundColor = "rgba(255, 255, 255, 0.1)";
  particle.style.borderRadius = "50%";
  particle.style.left = Math.random() * 100 + "%";
  particle.style.top = Math.random() * 100 + "%";

  container.appendChild(particle);

  // Animate particle
  animateParticle(particle);
}

function animateParticle(particle) {
  const duration = Math.random() * 3000 + 2000;
  const startX = parseFloat(particle.style.left);
  const startY = parseFloat(particle.style.top);
  const endX = startX + (Math.random() - 0.5) * 20;
  const endY = startY + (Math.random() - 0.5) * 20;

  particle.animate(
    [
      { transform: `translate(0, 0)`, opacity: 0.1 },
      {
        transform: `translate(${endX - startX}vw, ${endY - startY}vh)`,
        opacity: 0.3,
      },
      {
        transform: `translate(${(endX - startX) * 2}vw, ${
          (endY - startY) * 2
        }vh)`,
        opacity: 0.1,
      },
    ],
    {
      duration: duration,
      iterations: Infinity,
      direction: "alternate",
      easing: "ease-in-out",
    }
  );
}

// Modal functionality
function showModal(title, content) {
  // Create modal overlay
  const overlay = document.createElement("div");
  overlay.className =
    "pop fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 overflow-y-auto";
  overlay.style.animation = "fadeIn 0.3s ease";

  // Create modal content
  const modal = document.createElement("div");
  modal.className = "bg-white rounded-2xl p-8 max-w-md mx-4 transform scale-95";
  modal.style.animation = "scaleIn 0.3s ease forwards";

  modal.innerHTML = `
        <div class="flex justify-between items-center mb-4">
            <h3 class="text-xl font-bold text-gray-800">${title}</h3>
            <button class="close-modal text-gray-500 hover:text-gray-700 text-2xl">&times;</button>
        </div>
        <div class="text-gray-600">${content}</div>
        <div class="mt-6 flex justify-end">
            <button class="close-modal bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                Close
            </button>
        </div>
    `;

  overlay.appendChild(modal);
  document.body.appendChild(overlay);

  // Close modal functionality
  const closeButtons = modal.querySelectorAll(".close-modal");
  closeButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      overlay.style.animation = "fadeOut 0.3s ease forwards";
      setTimeout(() => overlay.remove(), 300);
    });
  });

  // Close on overlay click
  const pops = document.querySelectorAll(".pop");
  pops.forEach((pop) => {
    pop.addEventListener("click", () => {
      overlay.style.animation = "fadeOut 0.3s ease forwards";
      setTimeout(() => pop.remove(), 300);
    });
  });
}

// Add custom CSS animations
const style = document.createElement("style");
style.textContent = `
    @keyframes fadeIn {
        from { opacity: 0; }
        to { opacity: 1; }
    }
    
    @keyframes fadeOut {
        from { opacity: 1; }
        to { opacity: 0; }
    }
    
    @keyframes scaleIn {
        from { transform: scale(0.95); opacity: 0; }
        to { transform: scale(1); opacity: 1; }
    }
    
    @keyframes animate-fade-in-up {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
    
    .animate-fade-in-up {
        animation: animate-fade-in-up 0.8s ease forwards;
    }
    
    @keyframes pulse {
        0%, 100% { transform: scale(1); }
        50% { transform: scale(1.05); }
    }
    
    .feature-card {
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    }
    
    .api-endpoint {
        cursor: pointer;
        transition: all 0.2s ease;
    }
    
    .api-endpoint:hover {
        background-color: #f8fafc;
        transform: translateX(4px);
    }
    
    .tech-badge {
        transition: all 0.3s ease;
    }
    
    .tech-badge:hover {
        transform: scale(1.05);
        box-shadow: 0 4px 12px rgba(59, 130, 246, 0.3);
    }
`;

document.head.appendChild(style);

// Scroll progress indicator
function initScrollProgress() {
  const progressBar = document.createElement("div");
  progressBar.style.position = "fixed";
  progressBar.style.top = "0";
  progressBar.style.left = "0";
  progressBar.style.width = "0%";
  progressBar.style.height = "3px";
  progressBar.style.background = "linear-gradient(90deg, #3b82f6, #8b5cf6)";
  progressBar.style.zIndex = "9999";
  progressBar.style.transition = "width 0.1s ease";

  document.body.appendChild(progressBar);

  window.addEventListener("scroll", () => {
    const scrolled =
      (window.scrollY /
        (document.documentElement.scrollHeight - window.innerHeight)) *
      100;
    progressBar.style.width = scrolled + "%";
  });
}

// Initialize scroll progress
initScrollProgress();

// Performance optimization: Debounced scroll handler
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// Add loading animation
window.addEventListener("load", () => {
  const loader = document.createElement("div");
  loader.className =
    "fixed inset-0 bg-white flex items-center justify-center z-50";
  loader.innerHTML = `
        <div class="text-center">
            <div class="w-16 h-16 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin mb-4"></div>
            <p class="text-gray-600 font-medium">Loading Nexivus...</p>
        </div>
    `;

  document.body.appendChild(loader);

  setTimeout(() => {
    loader.style.opacity = "0";
    loader.style.transition = "opacity 0.5s ease";
    setTimeout(() => loader.remove(), 500);
  }, 1000);
});

// Notification system
function showNotification(message, type = "info") {
  const notification = document.createElement("div");
  notification.className = `fixed top-20 right-6 z-50 p-4 rounded-lg shadow-lg transform translate-x-full transition-transform duration-300 ${
    type === "success"
      ? "bg-green-500"
      : type === "error"
      ? "bg-red-500"
      : "bg-blue-500"
  }`;
  notification.textContent = message;

  document.body.appendChild(notification);

  // Slide in
  setTimeout(() => {
    notification.style.transform = "translateX(0)";
  }, 100);

  // Slide out and remove
  setTimeout(() => {
    notification.style.transform = "translateX(full)";
    setTimeout(() => {
      notification.remove();
    }, 300);
  }, 3000);
}

console.log("🚀 Nexivus Interactive Features Loaded Successfully!");

// Enhanced functions from project3 for consistency

// Enhanced typewriter effect
function initTypewriterEffect() {
  const typewriterText = document.querySelector(".typing-animation");
  if (!typewriterText) return;

  const phrases = [
    "Built with React & Vite",
    "Modern UI Components",
    "Real-time Inventory",
    "User Management System",
    "RESTful API Integration",
    "Nexivus Inventory System",
  ];

  let currentPhrase = 0;
  let currentChar = 0;
  let isDeleting = false;

  function typeWriter() {
    const current = phrases[currentPhrase];

    if (isDeleting) {
      typewriterText.textContent = current.substring(0, currentChar - 1);
      currentChar--;
    } else {
      typewriterText.textContent = current.substring(0, currentChar + 1);
      currentChar++;
    }

    let typeSpeed = isDeleting ? 100 : 150;

    if (!isDeleting && currentChar === current.length) {
      typeSpeed = 2000; // Pause at end
      isDeleting = true;
    } else if (isDeleting && currentChar === 0) {
      isDeleting = false;
      currentPhrase = (currentPhrase + 1) % phrases.length;
      typeSpeed = 500;
    }

    setTimeout(typeWriter, typeSpeed);
  }

  // Start typewriter after initial animation
  setTimeout(typeWriter, 3500);
}

// Code animation display
function initCodeAnimation() {
  const codeDisplay = document.getElementById("code-display");
  if (!codeDisplay) return;

  const codeLines = [
    "const [inventory, setInventory] = useState([]);",
    "",
    "const fetchInventory = async () => {",
    "  try {",
    '    const response = await fetch("/inventory", {',
    "      headers: {",
    '        "Authorization": `Bearer ${token}`,',
    '        "Content-Type": "application/json"',
    "      }",
    "    });",
    "    const data = await response.json();",
    "    setInventory(data);",
    "  } catch (error) {",
    '    console.error("Error fetching inventory:", error);',
    "  }",
    "};",
  ];

  let currentLine = 0;
  function displayNextLine() {
    if (currentLine < codeLines.length) {
      const lineElement = document.createElement("div");
      lineElement.className = "code-line text-xs sm:text-sm";
      lineElement.textContent = codeLines[currentLine];

      // Color coding for different elements
      if (
        codeLines[currentLine].includes("const") ||
        codeLines[currentLine].includes("async") ||
        codeLines[currentLine].includes("await")
      ) {
        lineElement.classList.add("text-purple-400");
      } else if (
        codeLines[currentLine].includes("fetch") ||
        codeLines[currentLine].includes("response") ||
        codeLines[currentLine].includes("error")
      ) {
        lineElement.classList.add("text-blue-400");
      } else if (
        codeLines[currentLine].includes("try") ||
        codeLines[currentLine].includes("catch")
      ) {
        lineElement.classList.add("text-yellow-400");
      } else {
        lineElement.classList.add("text-green-300");
      }

      codeDisplay.appendChild(lineElement);
      currentLine++;
      setTimeout(displayNextLine, 120);
    }
  }

  setTimeout(displayNextLine, 1000);
}

// Scroll animations with Intersection Observer
function initScrollAnimations() {
  const observerOptions = {
    threshold: 0.15,
    rootMargin: "0px 0px -50px 0px",
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animate-fade-in-up");
        if (entry.target.classList.contains("feature-card")) {
          entry.target.style.animationDelay = `${Math.random() * 0.5}s`;
        }
      }
    });
  }, observerOptions);

  // Observe cards and sections for animation
  document
    .querySelectorAll(".feature-card, .tech-category, .api-section")
    .forEach((el) => {
      observer.observe(el);
    });
}

// Interactive button effects
function initInteractiveButtons() {
  const buttons = document.querySelectorAll("button, .btn");

  buttons.forEach((btn) => {
    btn.addEventListener("mouseenter", function () {
      this.style.transform = "translateY(-2px)";
      this.style.boxShadow = "0 8px 25px rgba(0,0,0,0.15)";
    });

    btn.addEventListener("mouseleave", function () {
      this.style.transform = "translateY(0)";
      this.style.boxShadow = "none";
    });
  });
}

// Parallax effects for enhanced user experience
function initParallaxEffects() {
  window.addEventListener("scroll", () => {
    const scrolled = window.pageYOffset;
    const parallax = document.querySelector(".floating");

    if (parallax) {
      const speed = scrolled * 0.5;
      parallax.style.transform = `translateY(${speed}px)`;
    }
  });
}

// Tech badge hover effects
function initTechBadgeEffects() {
  const techBadges = document.querySelectorAll(".tech-badge");

  techBadges.forEach((badge) => {
    badge.addEventListener("mouseenter", function () {
      this.style.transform = "scale(1.05) translateY(-2px)";
      this.style.boxShadow = "0 10px 20px rgba(0,0,0,0.2)";
    });

    badge.addEventListener("mouseleave", function () {
      this.style.transform = "scale(1) translateY(0)";
      this.style.boxShadow = "none";
    });

    // Add click event for tech badge interaction
    badge.addEventListener("click", function () {
      const techName = this.textContent.trim();
      showNotification(`Learning more about ${techName}...`, "info");
    });
  });
}

// API endpoint hover effects
function initApiEndpointEffects() {
  const apiEndpoints = document.querySelectorAll(".api-endpoint");

  apiEndpoints.forEach((endpoint) => {
    endpoint.addEventListener("mouseenter", function () {
      this.style.backgroundColor = "rgba(59, 130, 246, 0.05)";
      this.style.transform = "translateX(8px)";
      this.style.paddingLeft = "20px";
      this.style.borderLeft = "3px solid #3b82f6";
    });

    endpoint.addEventListener("mouseleave", function () {
      this.style.backgroundColor = "transparent";
      this.style.transform = "translateX(0)";
      this.style.paddingLeft = "16px";
      this.style.borderLeft = "1px solid #e5e7eb";
    });
  });
}

// Performance optimization: Throttle scroll events
function throttle(func, limit) {
  let inThrottle;
  return function () {
    const args = arguments;
    const context = this;
    if (!inThrottle) {
      func.apply(context, args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
}

// Export functions for global access
window.closeMobileMenu = closeMobileMenu;
