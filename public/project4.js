// Course Management System Frontend Project Page - Interactive JavaScript
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
  initComponentPreview();
  initFileUploadDemo();
});

// Enhanced typewriter effect
function initTypewriterEffect() {
  const typewriterText = document.querySelector(".typing-animation");
  if (!typewriterText) return;

  const phrases = [
    "Built with React 19",
    "Material-UI v7 Components",
    "Role-based Dashboards",
    "Advanced File Management",
    "Optimistic UI Patterns",
    "React Frontend Application",
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
      typeSpeed = 500; // Pause before next phrase
    }

    setTimeout(typeWriter, typeSpeed);
  }

  typeWriter();
}

// Mobile menu functionality
function initMobileMenu() {
  const mobileMenuToggle = document.getElementById("mobile-menu-toggle");
  const mobileMenu = document.getElementById("mobile-menu");

  if (mobileMenuToggle && mobileMenu) {
    mobileMenuToggle.addEventListener("click", function () {
      mobileMenu.classList.toggle("hidden");
      mobileMenu.classList.toggle("show");

      // Animate toggle button
      const icon = this.querySelector("i");
      if (mobileMenu.classList.contains("show")) {
        icon.classList.remove("fa-bars");
        icon.classList.add("fa-times");
        this.style.transform = "rotate(90deg)";
      } else {
        icon.classList.remove("fa-times");
        icon.classList.add("fa-bars");
        this.style.transform = "rotate(0deg)";
      }
    });
  }
}

// Close mobile menu
function closeMobileMenu() {
  const mobileMenu = document.getElementById("mobile-menu");
  const mobileMenuToggle = document.getElementById("mobile-menu-toggle");

  if (mobileMenu) {
    mobileMenu.classList.add("hidden");
    mobileMenu.classList.remove("show");
  }

  if (mobileMenuToggle) {
    const icon = mobileMenuToggle.querySelector("i");
    icon.classList.remove("fa-times");
    icon.classList.add("fa-bars");
    mobileMenuToggle.style.transform = "rotate(0deg)";
  }
}

// Smooth scrolling for navigation links
function initSmoothScrolling() {
  const navLinks = document.querySelectorAll('a[href^="#"]');

  navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href");
      const targetSection = document.querySelector(targetId);

      if (targetSection) {
        const offsetTop = targetSection.offsetTop - 80; // Account for fixed nav

        window.scrollTo({
          top: offsetTop,
          behavior: "smooth",
        });

        // Close mobile menu if open
        closeMobileMenu();
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
    'import { ThemeProvider, createTheme } from "@mui/material/styles";',
    'import { Grid, Box, Typography } from "@mui/material";',
    "",
    "const Dashboard: React.FC = () => {",
    "  const [courses, setCourses] = useState<Course[]>([]);",
    "  const [loading, setLoading] = useState(true);",
    "",
    "  useEffect(() => {",
    "    fetchCourses();",
    "  }, []);",
    "",
    "  const fetchCourses = async () => {",
    "    try {",
    "      const response = await apiService.getCourses();",
    "      setCourses(response.data);",
    "    } catch (error) {",
    '      console.error("Error:", error);',
    "    } finally {",
    "      setLoading(false);",
    "    }",
    "  };",
    "",
    "  return (",
    "    <Grid container spacing={3}>",
    "      <CourseManagement courses={courses} />",
    "    </Grid>",
    "  );",
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
        codeLines[currentLine].includes("useEffect") ||
        codeLines[currentLine].includes("Material") ||
        codeLines[currentLine].includes("Grid") ||
        codeLines[currentLine].includes("ThemeProvider")
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

// Scroll-triggered animations
function initScrollAnimations() {
  const animateElements = document.querySelectorAll(
    ".feature-card, .tech-category, .api-card"
  );

  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.style.opacity = "1";
          entry.target.style.transform = "translateY(0)";
        }, index * 100);
      }
    });
  }, observerOptions);

  animateElements.forEach((element) => {
    element.style.opacity = "0";
    element.style.transform = "translateY(20px)";
    element.style.transition = "all 0.6s cubic-bezier(0.4, 0, 0.2, 1)";
    observer.observe(element);
  });
}

// Interactive button effects
function initInteractiveButtons() {
  const buttons = document.querySelectorAll("button, .interactive-element");

  buttons.forEach((button) => {
    button.addEventListener("mouseenter", function () {
      this.style.transform = "translateY(-2px) scale(1.05)";
    });

    button.addEventListener("mouseleave", function () {
      this.style.transform = "translateY(0) scale(1)";
    });

    button.addEventListener("mousedown", function () {
      this.style.transform = "translateY(0) scale(0.98)";
    });

    button.addEventListener("mouseup", function () {
      this.style.transform = "translateY(-2px) scale(1.05)";
    });
  });
}

// Parallax scrolling effects
function initParallaxEffects() {
  const parallaxElements = document.querySelectorAll("[data-parallax]");

  if (parallaxElements.length > 0) {
    window.addEventListener("scroll", () => {
      const scrolled = window.pageYOffset;
      const rate = scrolled * -0.5;

      parallaxElements.forEach((element) => {
        element.style.transform = `translateY(${rate}px)`;
      });
    });
  }
}

// Tech badge hover effects
function initTechBadgeEffects() {
  const techItems = document.querySelectorAll(".tech-item");

  techItems.forEach((item) => {
    item.addEventListener("mouseenter", function () {
      this.style.transform = "translateX(8px) scale(1.05)";
      this.style.boxShadow = "0 8px 25px rgba(139, 92, 246, 0.15)";
    });

    item.addEventListener("mouseleave", function () {
      this.style.transform = "translateX(0) scale(1)";
      this.style.boxShadow = "0 4px 12px rgba(0, 0, 0, 0.1)";
    });
  });
}

// Component preview effects
function initComponentPreview() {
  const componentCards = document.querySelectorAll(".component-preview");

  componentCards.forEach((card) => {
    card.addEventListener("click", function () {
      // Add ripple effect
      const ripple = document.createElement("div");
      ripple.classList.add("ripple");
      this.appendChild(ripple);

      setTimeout(() => {
        ripple.remove();
      }, 600);
    });
  });

  // Add ripple CSS
  const style = document.createElement("style");
  style.textContent = `
    .ripple {
      position: absolute;
      border-radius: 50%;
      background: rgba(139, 92, 246, 0.3);
      transform: scale(0);
      animation: ripple-animation 600ms linear;
      pointer-events: none;
    }
    
    @keyframes ripple-animation {
      to {
        transform: scale(4);
        opacity: 0;
      }
    }
  `;
  document.head.appendChild(style);
}

// File upload demo functionality
function initFileUploadDemo() {
  const uploadZones = document.querySelectorAll(".upload-zone");

  uploadZones.forEach((zone) => {
    zone.addEventListener("dragover", function (e) {
      e.preventDefault();
      this.classList.add("dragover");
    });

    zone.addEventListener("dragleave", function (e) {
      e.preventDefault();
      this.classList.remove("dragover");
    });

    zone.addEventListener("drop", function (e) {
      e.preventDefault();
      this.classList.remove("dragover");

      // Demo upload animation
      const files = e.dataTransfer.files;
      if (files.length > 0) {
        this.innerHTML = `
          <div class="upload-progress">
            <i class="fas fa-cloud-upload-alt text-purple-600 text-4xl mb-4"></i>
            <p class="text-gray-600 mb-4">Uploading ${files.length} file(s)...</p>
            <div class="w-full bg-gray-200 rounded-full h-2 mb-4">
              <div class="bg-purple-600 h-2 rounded-full progress-bar" style="width: 0%"></div>
            </div>
          </div>
        `;

        // Animate progress bar
        const progressBar = this.querySelector(".progress-bar");
        let progress = 0;
        const interval = setInterval(() => {
          progress += Math.random() * 20;
          if (progress >= 100) {
            progress = 100;
            clearInterval(interval);
            setTimeout(() => {
              this.innerHTML = `
                <i class="fas fa-check-circle text-green-600 text-4xl mb-4"></i>
                <p class="text-green-600 font-semibold">Upload complete!</p>
              `;
            }, 500);
          }
          progressBar.style.width = progress + "%";
        }, 200);
      }
    });
  });
}

// Scroll progress indicator
function initScrollProgress() {
  const progressBar = document.createElement("div");
  progressBar.className = "scroll-indicator";
  document.body.appendChild(progressBar);

  window.addEventListener("scroll", () => {
    const scrollTop = document.documentElement.scrollTop;
    const scrollHeight =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    const scrolled = (scrollTop / scrollHeight) * 100;

    progressBar.style.transform = `scaleX(${scrolled / 100})`;
  });
}

// Component stats counter animation
function initStatsCounter() {
  const statNumbers = document.querySelectorAll(".stat-number");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const target = parseInt(entry.target.textContent);
          let current = 0;
          const increment = target / 50;

          const timer = setInterval(() => {
            current += increment;
            entry.target.textContent = Math.floor(current);

            if (current >= target) {
              entry.target.textContent = target;
              clearInterval(timer);
            }
          }, 50);

          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.5 }
  );

  statNumbers.forEach((number) => observer.observe(number));
}

// React component highlight effects
function initReactHighlights() {
  const reactElements = document.querySelectorAll(".react-highlight");

  reactElements.forEach((element) => {
    element.addEventListener("mouseenter", function () {
      this.style.animation = "pulse 1s infinite";
    });

    element.addEventListener("mouseleave", function () {
      this.style.animation = "none";
    });
  });

  // Add pulse animation
  const style = document.createElement("style");
  style.textContent = `
    @keyframes pulse {
      0%, 100% { transform: scale(1); }
      50% { transform: scale(1.05); }
    }
  `;
  document.head.appendChild(style);
}

// Material-UI theme demonstration
function initMaterialUIDemo() {
  const colorElements = document.querySelectorAll("[class*='mui-']");

  colorElements.forEach((element) => {
    element.addEventListener("click", function () {
      // Create color tooltip
      const tooltip = document.createElement("div");
      tooltip.className =
        "fixed bg-black text-white px-2 py-1 rounded text-sm z-50 pointer-events-none";
      tooltip.textContent = this.className
        .split(" ")
        .find((cls) => cls.startsWith("mui-"));

      document.body.appendChild(tooltip);

      // Position tooltip
      const rect = this.getBoundingClientRect();
      tooltip.style.left = rect.left + "px";
      tooltip.style.top = rect.top - 30 + "px";

      // Remove tooltip after 2 seconds
      setTimeout(() => {
        tooltip.remove();
      }, 2000);
    });
  });
}

// Initialize all advanced features
function initAdvancedFeatures() {
  initScrollProgress();
  initStatsCounter();
  initReactHighlights();
  initMaterialUIDemo();
}

// Call advanced features after DOM is loaded
document.addEventListener("DOMContentLoaded", initAdvancedFeatures);

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

// Optimized scroll handler
const optimizedScrollHandler = debounce(() => {
  // Handle scroll-based animations here
  const scrolled = window.pageYOffset;
  const rate = scrolled * -0.3;

  // Apply parallax to hero section
  const heroSection = document.querySelector(".gradient-bg");
  if (heroSection) {
    heroSection.style.transform = `translateY(${rate}px)`;
  }
}, 10);

window.addEventListener("scroll", optimizedScrollHandler);

// Error handling for interactive features
window.addEventListener("error", (e) => {
  console.error("Frontend interaction error:", e.error);
});

// Accessibility enhancements
function initAccessibility() {
  // Add keyboard navigation for interactive elements
  const interactiveElements = document.querySelectorAll(
    "button, .feature-card, .tech-item"
  );

  interactiveElements.forEach((element) => {
    element.setAttribute("tabindex", "0");

    element.addEventListener("keydown", function (e) {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        this.click();
      }
    });

    element.addEventListener("focus", function () {
      this.style.outline = "2px solid #8b5cf6";
      this.style.outlineOffset = "2px";
    });

    element.addEventListener("blur", function () {
      this.style.outline = "none";
    });
  });
}

// Initialize accessibility features
document.addEventListener("DOMContentLoaded", initAccessibility);

// Export functions for external use
window.ProjectFrontendUtils = {
  closeMobileMenu,
  initTypewriterEffect,
  initScrollAnimations,
  initInteractiveButtons,
};

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
            <p class="text-gray-600 font-medium">Loading Course Management Frontend...</p>
        </div>
    `;

  document.body.appendChild(loader);

  setTimeout(() => {
    loader.style.opacity = "0";
    loader.style.transition = "opacity 0.5s ease";
    setTimeout(() => loader.remove(), 500);
  }, 1000);
});
