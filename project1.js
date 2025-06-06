// Nexivus Project Page - Interactive JavaScript

document.addEventListener("DOMContentLoaded", function () {
  // Initialize all features
  initNavigation();
  initHeroAnimations();
  initScrollAnimations();
  initTypewriterEffect();
  initCodeDisplay();
  initSmoothScrolling();
  initMobileMenu();
  initInteractiveFeatures();
  initParticleBackground();
});

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
