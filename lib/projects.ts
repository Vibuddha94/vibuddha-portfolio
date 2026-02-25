export type Project = {
  id: number;
  name: string;
  slug: string;
  category: "Backend" | "Frontend" | "Full Stack";
  shortDescription: string;
  details: string;
  tech: string[];
  githubUrl: string;
  imagePath: string;
};

export const PROJECTS: Project[] = [
  {
    id: 1,
    name: "Nexivus POS Backend",
    slug: "nexivus-pos-backend",
    category: "Backend",
    shortDescription:
      "Spring Boot POS backend with JWT authentication and RESTful endpoints.",
    details:
      "A structured backend for a point-of-sale domain, with role-based auth, product and order flows, and clean layered architecture suitable for production APIs.",
    tech: ["Spring Boot", "MySQL", "JWT", "JPA", "REST API"],
    githubUrl: "https://github.com/Vibuddha94/Nexivus-spring.git",
    imagePath: "/assets/project1.svg",
  },
  {
    id: 2,
    name: "Nexivus POS Frontend",
    slug: "nexivus-pos-frontend",
    category: "Frontend",
    shortDescription:
      "React-based frontend for POS dashboards and day-to-day transaction workflows.",
    details:
      "A responsive dashboard-focused frontend that integrates with backend services and delivers fast, clear UX for key POS operations.",
    tech: ["React", "Tailwind CSS", "Vite", "Axios"],
    githubUrl: "https://github.com/Vibuddha94/Nexivus-frontend.git",
    imagePath: "/assets/project2.svg",
  },
  {
    id: 3,
    name: "Course Management Backend",
    slug: "course-management-backend",
    category: "Backend",
    shortDescription:
      "Backend system for course and user flows with JWT and role-based access.",
    details:
      "Enterprise-style service design with secure authentication, authorization, and domain endpoints for course, enrollment, and management use cases.",
    tech: ["Spring Boot", "JWT", "MySQL", "JPA", "Role-Based Access"],
    githubUrl:
      "https://github.com/Vibuddha94/course-management-system-backend.git",
    imagePath: "/assets/project3.svg",
  },
  {
    id: 4,
    name: "Course Management Frontend",
    slug: "course-management-frontend",
    category: "Frontend",
    shortDescription:
      "Material UI powered frontend with role-specific views and workflow screens.",
    details:
      "A modern frontend implementation with reusable component patterns, protected routes, and practical CRUD experiences for education management features.",
    tech: ["React", "Material UI", "Vite", "Axios"],
    githubUrl:
      "https://github.com/Vibuddha94/course-management-system-frontend",
    imagePath: "/assets/project4.svg",
  },
  {
    id: 5,
    name: "Quiz Web App",
    slug: "quiz-web-app",
    category: "Frontend",
    shortDescription:
      "Interactive quiz app with timers, feedback, and local progress persistence.",
    details:
      "A lightweight browser-based learning app focused on interaction quality and simple state persistence for repeat sessions.",
    tech: ["JavaScript", "HTML5", "Tailwind CSS", "Local Storage"],
    githubUrl: "https://github.com/Vibuddha94/quiz-web-app",
    imagePath: "/assets/project5.svg",
  },
  {
    id: 6,
    name: "NIC Detail Extractor",
    slug: "nic-detail-extractor",
    category: "Frontend",
    shortDescription:
      "Parser and validator for Sri Lankan NIC formats with a clean React UI.",
    details:
      "An input-driven utility app that validates NIC values and extracts user-friendly details with real-time checks and clear visual output.",
    tech: ["React", "Vite", "CSS3", "lanka-nic"],
    githubUrl: "https://github.com/Vibuddha94/nic-detail",
    imagePath: "/assets/project6.svg",
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return PROJECTS.find((project) => project.slug === slug);
}
