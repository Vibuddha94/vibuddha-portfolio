// Nexivus Frontend Project Page - Interactive JavaScript
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
    "Built with React 18",
    "TypeScript Integration",
    "Modern UI Components",
    "Responsive Design",
    "Vite Build System",
    "React TypeScript Application",
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
    'import React, { useState, useEffect } from "react";',
    'import { BrowserRouter, Routes, Route } from "react-router-dom";',
    "",
    "const Dashboard: React.FC = () => {",
    "  const [inventory, setInventory] = useState<Item[]>([]);",
    "  const [loading, setLoading] = useState(true);",
    "",
    "  useEffect(() => {",
    "    fetchInventory();",
    "  }, []);",
    "",
    "  const fetchInventory = async () => {",
    "    try {",
    "      const response = await apiService.getInventory();",
    "      setInventory(response.data);",
    "    } catch (error) {",
    '      console.error("Error:", error);',
    "    } finally {",
    "      setLoading(false);",
    "    }",
    "  };",
    "",
    "  return <InventoryGrid items={inventory} />;",
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
        codeLines[currentLine].includes("import") ||
        codeLines[currentLine].includes("export") ||
        codeLines[currentLine].includes("const") ||
        codeLines[currentLine].includes("return")
      ) {
        lineElement.classList.add("text-purple-400");
      } else if (
        codeLines[currentLine].includes("React") ||
        codeLines[currentLine].includes("useState") ||
        codeLines[currentLine].includes("useEffect")
      ) {
        lineElement.classList.add("text-blue-400");
      } else if (
        codeLines[currentLine].includes("async") ||
        codeLines[currentLine].includes("await") ||
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

    // Add click event for API endpoint demonstration
    endpoint.addEventListener("click", function () {
      const method = this.querySelector("span")?.textContent || "GET";
      const endpoint = this.querySelector("code")?.textContent || "/api";
      showApiDemo(method, endpoint);
    });
  });
}

// Show API demonstration
function showApiDemo(method, endpoint) {
  const demoContent = `
    <div class="bg-gray-800 text-green-400 p-4 rounded-lg font-mono text-sm">
      <div class="text-yellow-400 mb-2">$ curl -X ${method} \\</div>
      <div class="text-blue-400 mb-2">  -H "Authorization: Bearer jwt_token" \\</div>
      <div class="text-purple-400 mb-2">  -H "Content-Type: application/json" \\</div>
      <div class="text-white">  http://localhost:3000${endpoint}</div>
      <div class="mt-3 text-gray-400">// Example API call for ${endpoint}</div>
    </div>
  `;

  showNotification(`API Demo: ${method} ${endpoint}`, "success", demoContent);
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
    const title = this.querySelector("h3")?.textContent || "Feature";
    const description = this.querySelector("p")?.textContent || "Description";

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

// Easter egg: Nexivus Frontend developer info
let clickCount = 0;
document.querySelector("h1")?.addEventListener("click", function () {
  clickCount++;
  if (clickCount === 5) {
    showNotification(
      "⚛️ Nexivus Frontend Developer",
      "success",
      `
      <div class="bg-white/10 p-3 rounded mt-2">
        <p class="text-white/90 text-sm">
          Built with modern React ecosystem!<br>
          Features: TypeScript, Vite, Tailwind CSS, Modern Hooks<br>
          Stack: React 18, TypeScript, Vite, Tailwind CSS
        </p>
      </div>
    `
    );
    clickCount = 0;
  }
});

// Console welcome message
console.log(`
⚛️ Welcome to Nexivus Frontend!
Built with React 18 + TypeScript + Vite

Features:
• Modern React hooks and components
• Type-safe development with TypeScript
• Lightning-fast builds with Vite
• Responsive design with Tailwind CSS
• Smooth animations and interactions
• Component-based architecture

Architecture:
• React 18 with modern hooks (useState, useEffect, useContext)
• TypeScript for type safety
• Vite for fast development and building
• Tailwind CSS for styling
• Component-based modular design

Click on any feature card or component to explore more!
`);

// Export functions for global access
window.closeMobileMenu = closeMobileMenu;

// Add loading animation
window.addEventListener("load", () => {
  const loader = document.createElement("div");
  loader.className =
    "fixed inset-0 bg-white flex items-center justify-center z-50";
  loader.innerHTML = `
        <div class="text-center">
            <div class="w-16 h-16 border-4 border-purple-200 border-t-purple-600 rounded-full animate-spin mb-4"></div>
            <p class="text-gray-600 font-medium">Loading Nexivus Frontend...</p>
        </div>
    `;

  document.body.appendChild(loader);

  setTimeout(() => {
    loader.style.opacity = "0";
    loader.style.transition = "opacity 0.5s ease";
    setTimeout(() => loader.remove(), 500);
  }, 1000);
});
