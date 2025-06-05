// Portfolio JavaScript - Interactive Features and Animations

// Smooth scrolling for navigation links
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

// Intersection Observer for scroll-triggered animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.animationPlayState = "running";
      entry.target.classList.add("animate-in-view");
    }
  });
}, observerOptions);

// Initialize animation observer
function initializeAnimations() {
  // Observe all animated elements
  document.querySelectorAll('[class*="animate-"]').forEach((el) => {
    el.style.animationPlayState = "paused";
    observer.observe(el);
  });
}

// Parallax effect for floating elements
function handleParallaxScroll() {
  const scrolled = window.pageYOffset;
  const rate = scrolled * -0.5;

  document.querySelectorAll(".animate-float").forEach((el, index) => {
    const parallaxRate = rate * (index + 1) * 0.1;
    el.style.transform = `translateY(${parallaxRate}px)`;
  });
}

// Throttle function for performance
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

// Mobile menu toggle
function initializeMobileMenu() {
  const mobileMenuBtn = document.querySelector(".md\\:hidden");
  let mobileMenuOpen = false;

  if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener("click", () => {
      mobileMenuOpen = !mobileMenuOpen;
      const mobileMenu = document.getElementById("mobile-menu");

      if (mobileMenuOpen) {
        // Toggle mobile menu visibility
        mobileMenu.classList.remove("hidden");
        mobileMenuBtn.innerHTML = "✕";
      } else {
        // Hide mobile menu
        mobileMenu.classList.add("hidden");
        mobileMenuBtn.innerHTML = "☰";
      }
    });
  }
}

// close mobile menu on link click
document.querySelectorAll("#mobile-menu a").forEach((link) => {
  link.addEventListener("click", () => {
    const mobileMenu = document.getElementById("mobile-menu");
    mobileMenu.classList.add("hidden");
    const mobileMenuBtn = document.querySelector(".md\\:hidden");
    mobileMenuBtn.innerHTML = "☰";
    initializeMobileMenu(); // Reset state
  });
});

// Form handling
function initializeContactForm() {
  const form = document.querySelector("form");

  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();

      // Get form data
      const formData = new FormData(form);
      const name = form.querySelector('input[type="text"]').value;
      const email = form.querySelector('input[type="email"]').value;
      const message = form.querySelector("textarea").value;

      // Simple validation
      if (!name || !email || !message) {
        showNotification("Please fill in all fields", "error");
        return;
      }

      // Simulate form submission
      const submitBtn = form.querySelector('button[type="submit"]');
      const originalText = submitBtn.textContent;

      submitBtn.textContent = "Sending...";
      submitBtn.disabled = true;

      emailjs
        .send("service_kuhcvag", "template_6vnjjdi", {
          title: "",
          name: `${name}`,
          from_email: `${email}`,
          message: `${message}`,
        })
        .then(
          () => {
            setTimeout(() => {
              submitBtn.textContent = originalText;
              submitBtn.disabled = false;
              showNotification("Message sent successfully!", "success");
              form.reset();
            }, 2000);
          },
          (error) => {
            setTimeout(() => {
              submitBtn.textContent = originalText;
              submitBtn.disabled = false;
              showNotification("Error sending message!", "error");
              console.error("Error sending email:", error);
              form.reset();
            }, 2000);
          }
        );
    });
  }
}

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

// Skill progress animation
function animateSkillBars() {
  const skillItems = document.querySelectorAll(".skill-item");

  skillItems.forEach((item, index) => {
    item.addEventListener("mouseenter", () => {
      // Add a subtle pulse effect
      item.style.animation = "pulse 0.5s ease-in-out";
    });

    item.addEventListener("mouseleave", () => {
      item.style.animation = "";
    });
  });
}

// Project card interactions
function initializeProjectCards() {
  const projectCards = document.querySelectorAll(".project-card");

  projectCards.forEach((card) => {
    const button = card.querySelector("button");

    if (button) {
      button.addEventListener("click", () => {
        const projectTitle = card.querySelector("h3").textContent;
        showNotification(`Opening ${projectTitle}...`, "info");

        // Add some visual feedback
        card.style.transform = "scale(0.95)";
        setTimeout(() => {
          card.style.transform = "";
        }, 150);
      });
    }
  });
}

// Initialize everything when DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  initializeAnimations();
  initializeMobileMenu();
  initializeContactForm();
  animateSkillBars();
  initializeProjectCards();

  // Add scroll event listener with throttling
  window.addEventListener("scroll", throttle(handleParallaxScroll, 16));

  console.log("Portfolio initialized successfully! 🚀");
});

// Performance optimization: Reduce animations on low-end devices
if (navigator.hardwareConcurrency && navigator.hardwareConcurrency <= 2) {
  document.documentElement.style.setProperty("--animation-duration", "0.1s");

  // Disable heavy animations
  const heavyAnimations = document.querySelectorAll(
    ".animate-gradient, .animate-float"
  );
  heavyAnimations.forEach((el) => {
    el.style.animation = "none";
  });
}

// Prefers reduced motion check
if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  // Disable all animations for users who prefer reduced motion
  const allAnimatedElements = document.querySelectorAll('[class*="animate-"]');
  allAnimatedElements.forEach((el) => {
    el.style.animation = "none";
    el.style.transition = "none";
  });
}

// Easter egg: Konami code
let konamiCode = [];
const konamiSequence = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "KeyB",
  "KeyA",
];

document.addEventListener("keydown", (e) => {
  konamiCode.push(e.code);

  if (konamiCode.length > konamiSequence.length) {
    konamiCode.shift();
  }

  if (JSON.stringify(konamiCode) === JSON.stringify(konamiSequence)) {
    activateEasterEgg();
  }
});

function activateEasterEgg() {
  // Create rainbow effect
  document.body.style.background =
    "linear-gradient(45deg, #ff0000, #ff7f00, #ffff00, #00ff00, #0000ff, #4b0082, #9400d3)";
  document.body.style.backgroundSize = "400% 400%";
  document.body.style.animation = "gradient-shift 2s ease infinite";

  showNotification(
    "🎉 Konami Code Activated! Welcome to the Rainbow Zone! 🌈",
    "success"
  );

  // Reset after 5 seconds
  setTimeout(() => {
    document.body.style.background = "";
    document.body.style.animation = "";
  }, 5000);

  konamiCode = [];
}

// Lazy loading for images (if any are added later)
function initializeLazyLoading() {
  if ("IntersectionObserver" in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.src = img.dataset.src;
          img.classList.remove("lazy");
          observer.unobserve(img);
        }
      });
    });

    document.querySelectorAll("img[data-src]").forEach((img) => {
      imageObserver.observe(img);
    });
  }
}

// Scroll progress indicator
function createScrollProgress() {
  const progressBar = document.createElement("div");
  progressBar.className =
    "fixed top-0 left-0 h-1 bg-gradient-to-r from-purple-500 to-pink-500 z-50 transition-all duration-150";
  progressBar.style.width = "0%";
  document.body.appendChild(progressBar);

  window.addEventListener(
    "scroll",
    throttle(() => {
      const scrollTop = window.pageYOffset;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollTop / docHeight) * 100;
      progressBar.style.width = scrollPercent + "%";
    }, 16)
  );
}

// Initialize scroll progress
createScrollProgress();

// Export functions for potential external use
window.PortfolioUtils = {
  showNotification,
  throttle,
  initializeLazyLoading,
};
