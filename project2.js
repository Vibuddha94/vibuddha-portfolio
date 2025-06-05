// Nexivus Frontend Showcase - Interactive JavaScript
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
});

// Enhanced typewriter effect
function initTypewriterEffect() {
  const typewriterText = document.querySelector(".typing-animation");
  if (!typewriterText) return;

  const phrases = [
    "Built with Vite for Speed",
    "Modern UI with Tailwind CSS",
    "Interactive Features",
    "Responsive Design for All Devices",
    "Optimized for Performance",
    "React + TypeScript Frontend",
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

// Mobile Menu Functionality
function initMobileMenu() {
  const mobileMenuToggle = document.getElementById("mobile-menu-toggle");
  const mobileMenu = document.getElementById("mobile-menu");

  if (mobileMenuToggle && mobileMenu) {
    mobileMenuToggle.addEventListener("click", function () {
      mobileMenu.classList.toggle("hidden");

      // Animate the hamburger icon
      const icon = this.querySelector("i");
      if (mobileMenu.classList.contains("hidden")) {
        icon.classList.remove("fa-times");
        icon.classList.add("fa-bars");
      } else {
        icon.classList.remove("fa-bars");
        icon.classList.add("fa-times");
      }
    });
  }
}

// Close mobile menu function (called from HTML)
function closeMobileMenu() {
  const mobileMenu = document.getElementById("mobile-menu");
  const mobileMenuToggle = document.getElementById("mobile-menu-toggle");

  if (mobileMenu && mobileMenuToggle) {
    mobileMenu.classList.add("hidden");
    const icon = mobileMenuToggle.querySelector("i");
    icon.classList.remove("fa-times");
    icon.classList.add("fa-bars");
  }
}

// Smooth Scrolling for Navigation Links
function initSmoothScrolling() {
  const navLinks = document.querySelectorAll('a[href^="#"]');

  navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();

      const targetId = this.getAttribute("href");
      const targetSection = document.querySelector(targetId);

      if (targetSection) {
        const navHeight = document.querySelector("nav").offsetHeight;
        const targetPosition = targetSection.offsetTop - navHeight - 20;

        window.scrollTo({
          top: targetPosition,
          behavior: "smooth",
        });

        // Close mobile menu if open
        closeMobileMenu();
      }
    });
  });
}

// Animated Code Display
function initCodeAnimation() {
  const codeDisplay = document.getElementById("code-display");

  if (codeDisplay) {
    const codeLines = [
      'import React from "react";',
      'import { useState, useEffect } from "react";',
      'import axios from "axios";',
      "",
      "const App: React.FC = () => {",
      "  const [data, setData] = useState([]);",
      "  const [loading, setLoading] = useState(true);",
      "",
      "  useEffect(() => {",
      "    fetchData();",
      "  }, []);",
      "",
      "  const fetchData = async () => {",
      "    try {",
      '      const response = await axios.get("/api/items");',
      "      setData(response.data);",
      "      setLoading(false);",
      "    } catch (error) {",
      '      console.error("Error:", error);',
      "    }",
      "  };",
      "",
      "  return (",
      '    <div className="app">',
      "      <h1>Nexivus Frontend</h1>",
      "      {loading ? <Spinner /> : <ItemList data={data} />}",
      "    </div>",
      "  );",
      "};",
      "",
      "export default App;",
    ];

    let currentLine = 0;

    function displayNextLine() {
      if (currentLine < codeLines.length) {
        const lineElement = document.createElement("div");
        lineElement.textContent = codeLines[currentLine];
        lineElement.style.opacity = "0";
        lineElement.style.transform = "translateX(-10px)";
        lineElement.style.transition = "all 0.3s ease";

        codeDisplay.appendChild(lineElement);

        // Animate in
        setTimeout(() => {
          lineElement.style.opacity = "1";
          lineElement.style.transform = "translateX(0)";
        }, 50);

        currentLine++;

        // Continue with next line
        setTimeout(displayNextLine, 150);
      } else {
        // Restart animation after delay
        setTimeout(() => {
          codeDisplay.innerHTML = "";
          currentLine = 0;
          setTimeout(displayNextLine, 1000);
        }, 5000);
      }
    }

    // Start the animation
    setTimeout(displayNextLine, 2000);
  }
}

// Scroll-triggered Animations
function initScrollAnimations() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("slide-in");

        // Add staggered animation for feature cards
        if (entry.target.classList.contains("feature-card")) {
          const cards =
            entry.target.parentElement.querySelectorAll(".feature-card");
          cards.forEach((card, index) => {
            setTimeout(() => {
              card.style.animationDelay = `${index * 0.1}s`;
              card.classList.add("slide-in");
            }, index * 100);
          });
        }
      }
    });
  }, observerOptions);

  // Observe all animatable elements
  const animatableElements = document.querySelectorAll(
    ".feature-card, .modern-card, .tech-category"
  );
  animatableElements.forEach((el) => observer.observe(el));
}

// Interactive Button Effects
function initInteractiveButtons() {
  const interactiveButtons = document.querySelectorAll(".interactive-demo");

  interactiveButtons.forEach((button) => {
    button.addEventListener("click", function (e) {
      // Create ripple effect
      const ripple = document.createElement("span");
      const rect = this.getBoundingClientRect();
      const size = Math.max(rect.width, rect.height);
      const x = e.clientX - rect.left - size / 2;
      const y = e.clientY - rect.top - size / 2;

      ripple.style.cssText = `
                position: absolute;
                width: ${size}px;
                height: ${size}px;
                left: ${x}px;
                top: ${y}px;
                background: rgba(255,255,255,0.5);
                border-radius: 50%;
                transform: scale(0);
                animation: ripple 0.6s linear;
                pointer-events: none;
            `;

      this.style.position = "relative";
      this.style.overflow = "hidden";
      this.appendChild(ripple);

      setTimeout(() => {
        ripple.remove();
      }, 600);

      // Simulate demo interaction
      showDemoNotification();
    });
  });

  // Add CSS for ripple animation
  const style = document.createElement("style");
  style.textContent = `
        @keyframes ripple {
            to {
                transform: scale(4);
                opacity: 0;
            }
        }
    `;
  document.head.appendChild(style);
}

// Demo Notification
function showDemoNotification() {
  // Create notification
  const notification = document.createElement("div");
  notification.className =
    "fixed top-4 right-4 bg-blue-600 text-white px-6 py-3 rounded-lg shadow-lg z-50 transform translate-x-full transition-transform duration-300";
  notification.innerHTML = `
        <div class="flex items-center space-x-2">
            <i class="fas fa-rocket"></i>
            <span>Demo would launch here! 🚀</span>
            <button onclick="this.parentElement.parentElement.remove()" class="ml-2 text-blue-200 hover:text-white">
                <i class="fas fa-times"></i>
            </button>
        </div>
    `;

  document.body.appendChild(notification);

  // Animate in
  setTimeout(() => {
    notification.classList.remove("translate-x-full");
  }, 100);

  // Auto remove after 3 seconds
  setTimeout(() => {
    if (document.body.contains(notification)) {
      notification.classList.add("translate-x-full");
      setTimeout(() => {
        notification.remove();
      }, 300);
    }
  }, 3000);
}

// Parallax Effects
function initParallaxEffects() {
  let ticking = false;

  function updateParallax() {
    const scrolled = window.pageYOffset;
    const parallaxElements = document.querySelectorAll(".floating");

    parallaxElements.forEach((element) => {
      const speed = 0.5;
      const yPos = -(scrolled * speed);
      element.style.transform = `translate3d(0, ${yPos}px, 0)`;
    });

    ticking = false;
  }

  function requestTick() {
    if (!ticking) {
      requestAnimationFrame(updateParallax);
      ticking = true;
    }
  }

  window.addEventListener("scroll", requestTick);
}

// Navbar scroll effect
window.addEventListener("scroll", function () {
  const nav = document.querySelector("nav");
  const scrolled = window.pageYOffset;

  if (scrolled > 50) {
    nav.style.background = "rgba(255, 255, 255, 0.95)";
    nav.style.backdropFilter = "blur(20px)";
    nav.style.boxShadow = "0 4px 6px -1px rgba(0, 0, 0, 0.1)";
  } else {
    nav.style.background = "rgba(255, 255, 255, 0.1)";
    nav.style.backdropFilter = "blur(10px)";
    nav.style.boxShadow = "none";
  }
});

// Tech badge hover effects
document.addEventListener("DOMContentLoaded", function () {
  const techBadges = document.querySelectorAll(
    ".tech-badge, .react-badge, .vite-badge, .typescript-badge, .tailwind-badge"
  );

  techBadges.forEach((badge) => {
    badge.addEventListener("mouseenter", function () {
      this.style.transform = "scale(1.05) translateY(-2px)";
      this.style.boxShadow = "0 10px 20px rgba(0,0,0,0.2)";
    });

    badge.addEventListener("mouseleave", function () {
      this.style.transform = "scale(1) translateY(0)";
      this.style.boxShadow = "none";
    });
  });
});

// API endpoint hover effects
document.addEventListener("DOMContentLoaded", function () {
  const apiEndpoints = document.querySelectorAll(".api-endpoint");

  apiEndpoints.forEach((endpoint) => {
    endpoint.addEventListener("mouseenter", function () {
      this.style.backgroundColor = "rgba(59, 130, 246, 0.05)";
      this.style.transform = "translateX(8px)";
      this.style.paddingLeft = "20px";
    });

    endpoint.addEventListener("mouseleave", function () {
      this.style.backgroundColor = "transparent";
      this.style.transform = "translateX(0)";
      this.style.paddingLeft = "16px";
    });
  });
});

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

// Easter egg: Konami code
(function () {
  const konamiCode = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];
  let userInput = [];

  document.addEventListener("keydown", function (e) {
    userInput.push(e.keyCode);
    userInput = userInput.slice(-konamiCode.length);

    if (userInput.join(",") === konamiCode.join(",")) {
      // Easter egg activated!
      const body = document.body;
      body.style.animation = "rainbow 2s infinite";

      const style = document.createElement("style");
      style.textContent = `
                @keyframes rainbow {
                    0% { filter: hue-rotate(0deg); }
                    100% { filter: hue-rotate(360deg); }
                }
            `;
      document.head.appendChild(style);

      setTimeout(() => {
        body.style.animation = "";
        style.remove();
      }, 5000);

      showDemoNotification();
    }
  });
})();

// Console welcome message
console.log(`
🚀 Welcome to Nexivus Frontend!
Built with React 18 + TypeScript + Vite

Features:
• Modern React hooks and components
• Type-safe development with TypeScript
• Lightning-fast builds with Vite
• Responsive design with Tailwind CSS
• Smooth animations and interactions

Try the Konami Code for a surprise! ⬆⬆⬇⬇⬅➡⬅➡BA
`);

// Export functions for global access
window.closeMobileMenu = closeMobileMenu;
