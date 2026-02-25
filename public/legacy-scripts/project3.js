// Course Management System Project Page - Interactive JavaScript
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
    "Role-based Access Control",
    "File Upload & Management",
    "RESTful API Architecture",
    "Spring Boot Backend System",
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
    '@RequestMapping("/api/v1/course")',
    "public class CourseController {",
    "",
    "  @Autowired",
    "  private CourseService courseService;",
    "",
    "  @GetMapping",
    "  public List<CourseDto> getAllCourses() {",
    "    return courseService.getAllCourses();",
    "  }",
    "",
    "  @PreAuthorize(\"hasRole('INSTRUCTOR')\")",
    '  @PostMapping("/{id}")',
    "  public CourseDto saveCourse(",
    "    @PathVariable Integer id,",
    "    @RequestBody CourseDto courseDto) {",
    "    return courseService.saveCourse(id, courseDto);",
    "  }",
    "",
    "  @PreAuthorize(\"hasRole('ADMIN') or hasRole('INSTRUCTOR')\")",
    '  @DeleteMapping("/{id}")',
    "  public Boolean deleteCourse(@PathVariable Integer id) {",
    "    return courseService.deleteCourse(id);",
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
        codeLines[currentLine].includes("CourseController") ||
        codeLines[currentLine].includes("CourseService") ||
        codeLines[currentLine].includes("CourseDto")
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

// API endpoint hover effects
function initApiEndpointEffects() {
  const apiEndpoints = document.querySelectorAll(".api-endpoint");

  apiEndpoints.forEach((endpoint) => {
    endpoint.addEventListener("mouseenter", function () {
      this.style.backgroundColor = "rgba(16, 185, 129, 0.05)";
      this.style.transform = "translateX(8px)";
      this.style.paddingLeft = "20px";
      this.style.borderLeft = "3px solid #10b981";
    });

    endpoint.addEventListener("mouseleave", function () {
      this.style.backgroundColor = "transparent";
      this.style.transform = "translateX(0)";
      this.style.paddingLeft = "16px";
      this.style.borderLeft = "1px solid #e5e7eb";
    });

    // Add click event for API endpoint details
    endpoint.addEventListener("click", function () {
      const method = this.querySelector("span").textContent.trim();
      const endpointPath = this.querySelector("code").textContent.trim();
      const description = this.querySelector("p").textContent.trim();
      showApiDialog(method, endpointPath, description);
    });
  });
}

// API endpoint details database
const apiDetails = {
  "POST /api/v1/auth/login": {
    title: "User Authentication",
    description:
      "Authenticate user credentials and receive JWT token for accessing protected endpoints.",
    requestBody: {
      email: "admin@admin.com",
      password: "admin123",
    },
    responseExample: {
      id: 1,
      name: "Admin Admin",
      role: "ROLE_ADMIN",
      token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
    },
    headers: {
      "Content-Type": "application/json",
    },
  },
  "POST /api/v1/auth/register": {
    title: "Student Registration",
    description:
      "Register a new student account. Only students can register through this endpoint.",
    requestBody: {
      name: "Yasiru Lakshan",
      email: "yasiru@gmail.com",
      password: "vibs123",
      role: "ROLE_STUDENT",
      contactNumber: 714565238,
      student: {
        address: "Matara",
        age: 23,
      },
    },
    responseExample: {
      id: 5,
      name: "Yasiru Lakshan",
      email: "yasiru@gmail.com",
      role: "ROLE_STUDENT",
      contactNumber: 714565238,
    },
    headers: {
      "Content-Type": "application/json",
    },
  },
  "GET /api/v1/user": {
    title: "Get All Users",
    description: "Retrieve a list of all registered users in the system.",
    requestBody: null,
    responseExample: [
      {
        id: 1,
        name: "Admin Admin",
        email: "admin@admin.com",
        role: "ROLE_ADMIN",
      },
      {
        id: 2,
        name: "John Instructor",
        email: "john@example.com",
        role: "ROLE_INSTRUCTOR",
      },
    ],
    headers: {
      Authorization: "Bearer jwt_token",
      "Content-Type": "application/json",
    },
  },
  "GET /api/v1/user/{id}": {
    title: "Get User by ID",
    description:
      "Retrieve detailed information about a specific user by their ID.",
    requestBody: null,
    responseExample: {
      id: 5,
      name: "Yasiru Lakshan",
      email: "yasiru@gmail.com",
      role: "ROLE_STUDENT",
      contactNumber: 714565238,
      student: {
        address: "Matara",
        age: 23,
      },
    },
    headers: {
      Authorization: "Bearer jwt_token",
      "Content-Type": "application/json",
    },
  },
  "GET /api/v1/user/getAll-by-role/{role}": {
    title: "Get Users by Role",
    description:
      "Retrieve all users with a specific role (ROLE_ADMIN, ROLE_INSTRUCTOR, ROLE_STUDENT).",
    requestBody: null,
    responseExample: [
      {
        id: 3,
        name: "Student One",
        email: "student1@example.com",
        role: "ROLE_STUDENT",
      },
    ],
    headers: {
      Authorization: "Bearer jwt_token",
      "Content-Type": "application/json",
    },
  },
  "POST /api/v1/user": {
    title: "Create New User",
    description: "Create a new user account. Admin access required.",
    requestBody: {
      name: "Rumesh Kumara",
      email: "rumesh@gmail.com",
      password: "rume123",
      role: "ROLE_STUDENT",
      contactNumber: 789456123,
      student: {
        address: "Gampaha",
        age: 23,
      },
    },
    responseExample: {
      id: 6,
      name: "Rumesh Kumara",
      email: "rumesh@gmail.com",
      role: "ROLE_STUDENT",
      contactNumber: 789456123,
    },
    headers: {
      Authorization: "Bearer jwt_token",
      "Content-Type": "application/json",
    },
  },
  "PUT /api/v1/user/{id}": {
    title: "Update User",
    description:
      "Update user information including profile details and role assignments.",
    requestBody: {
      name: "Admin Admin Updated",
      email: "admin@admin.com",
      password: "admin123",
      role: "ROLE_ADMIN",
      contactNumber: null,
    },
    responseExample: {
      id: 4,
      name: "Admin Admin Updated",
      email: "admin@admin.com",
      role: "ROLE_ADMIN",
    },
    headers: {
      Authorization: "Bearer jwt_token",
      "Content-Type": "application/json",
    },
  },
  "DELETE /api/v1/user/{id}": {
    title: "Delete User",
    description: "Remove a user from the system. Admin access required.",
    requestBody: null,
    responseExample: true,
    headers: {
      Authorization: "Bearer jwt_token",
    },
  },
  "GET /api/v1/course": {
    title: "Get All Courses",
    description:
      "Retrieve a list of all available courses with instructor information.",
    requestBody: null,
    responseExample: [
      {
        id: 1,
        name: "Web Development",
        description: "HTML/CSS/JavaScript Fundamentals",
        instructor: {
          id: 1,
          qualification: "Master in Computer Science",
        },
      },
    ],
    headers: {
      Authorization: "Bearer jwt_token",
      "Content-Type": "application/json",
    },
  },
  "GET /api/v1/course/{id}": {
    title: "Get Course by ID",
    description: "Retrieve detailed information about a specific course.",
    requestBody: null,
    responseExample: {
      id: 2,
      name: "Web Development",
      description: "HTML/CSS/JavaScript Fundamentals",
      instructor: {
        id: 1,
        qualification: "Master in Computer Science",
      },
    },
    headers: {
      Authorization: "Bearer jwt_token",
      "Content-Type": "application/json",
    },
  },
  "POST /api/v1/course/{id}": {
    title: "Create Course",
    description: "Create a new course. Instructor access required.",
    requestBody: {
      name: "Web Development",
      description: "HTML/CSS/JavaScript Fundamentals",
    },
    responseExample: {
      id: 2,
      name: "Web Development",
      description: "HTML/CSS/JavaScript Fundamentals",
    },
    headers: {
      Authorization: "Bearer jwt_token",
      "Content-Type": "application/json",
    },
  },
  "PUT /api/v1/course/{id}": {
    title: "Update Course",
    description:
      "Update course information. Admin or Instructor access required.",
    requestBody: {
      name: "Advanced Art",
      description: "Drawing and sketching fundamentals",
    },
    responseExample: {
      id: 2,
      name: "Advanced Art",
      description: "Drawing and sketching fundamentals",
    },
    headers: {
      Authorization: "Bearer jwt_token",
      "Content-Type": "application/json",
    },
  },
  "DELETE /api/v1/course/{id}": {
    title: "Delete Course",
    description:
      "Remove a course from the system. Admin or Instructor access required.",
    requestBody: null,
    responseExample: true,
    headers: {
      Authorization: "Bearer jwt_token",
    },
  },
  "GET /api/v1/course-modules/get/all/{courseId}": {
    title: "Get Course Materials",
    description: "Retrieve all materials associated with a specific course.",
    requestBody: null,
    responseExample: [
      {
        id: 1,
        originalName: "lesson1.pdf",
        courseMaterial: {
          id: 2,
          name: "Web Development",
        },
      },
    ],
    headers: {
      Authorization: "Bearer jwt_token",
      "Content-Type": "application/json",
    },
  },
  "GET /api/v1/course-modules/{id}": {
    title: "Download Course Material",
    description: "Download a specific course material file by its ID.",
    requestBody: null,
    responseExample: "Binary file content",
    headers: {
      Authorization: "Bearer jwt_token",
    },
  },
  "POST /api/v1/course-modules/{courseId}": {
    title: "Upload Course Materials",
    description:
      "Upload multiple files as course materials. Admin or Instructor access required.",
    requestBody:
      "Multipart form data with 'files' field containing multiple files",
    responseExample: [
      {
        id: 1,
        originalName: "lesson1.pdf",
      },
      {
        id: 2,
        originalName: "assignment1.docx",
      },
    ],
    headers: {
      Authorization: "Bearer jwt_token",
      "Content-Type": "multipart/form-data",
    },
  },
  "DELETE /api/v1/course-modules/{id}": {
    title: "Delete Course Material",
    description:
      "Remove a specific course material file. Admin or Instructor access required.",
    requestBody: null,
    responseExample: "File deleted successfully",
    headers: {
      Authorization: "Bearer jwt_token",
    },
  },
  "DELETE /api/v1/course-modules/delete/all/{courseId}": {
    title: "Delete All Course Materials",
    description:
      "Remove all materials associated with a course. Admin or Instructor access required.",
    requestBody: null,
    responseExample: "All files deleted successfully",
    headers: {
      Authorization: "Bearer jwt_token",
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
      Authorization: "Bearer jwt_token",
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
          ${method} http://localhost:8080${endpoint}
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
  http://localhost:8080${endpoint}</pre>
        </div>
      </div>

      <!-- Additional Info -->
      <div class="bg-yellow-50 rounded-lg p-4">
        <h3 class="font-semibold text-gray-800 mb-3 flex items-center">
          <i class="fas fa-info-circle text-yellow-600 mr-2"></i>
          Additional Information
        </h3>
        <div class="text-sm text-gray-600">
          <p><strong>Base URL:</strong> http://localhost:8080</p>
          <p><strong>Authentication:</strong> JWT Bearer Token required for protected endpoints</p>
          <p><strong>Content-Type:</strong> application/json (unless multipart/form-data for file uploads)</p>
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

// Enhanced notification system (kept for other notifications)
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

// Easter egg: Course Management System developer info
let clickCount = 0;
document.querySelector("h1").addEventListener("click", function () {
  clickCount++;
  if (clickCount === 5) {
    showNotification(
      "🎓 Course Management System Developer",
      "success",
      `
      <div class="bg-white/10 p-3 rounded mt-2">
        <p class="text-white/90 text-sm">
          Built with passion for education technology!<br>
          Features: JWT Auth, Role-based Access, File Management<br>
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
🎓 Welcome to Course Management System!
Built with Spring Boot + Modern Architecture

Features:
• Multi-role user management (Admin, Instructor, Student)
• JWT authentication with role-based access control
• Course management with file upload capabilities
• Secure RESTful API endpoints
• JPA/Hibernate with MySQL integration

Architecture:
• Spring Security for authentication & authorization
• BCrypt password encryption
• CORS configuration for cross-origin requests
• Organized file storage system
• Role-based method security

Click on any feature card or API endpoint to explore more!
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
            <div class="w-16 h-16 border-4 border-green-200 border-t-green-600 rounded-full animate-spin mb-4"></div>
            <p class="text-gray-600 font-medium">Loading Course Management...</p>
        </div>
    `;

  document.body.appendChild(loader);

  setTimeout(() => {
    loader.style.opacity = "0";
    loader.style.transition = "opacity 0.5s ease";
    setTimeout(() => loader.remove(), 500);
  }, 1000);
});
