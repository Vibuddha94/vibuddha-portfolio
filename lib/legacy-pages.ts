import { LEGACY_PAGE_MARKUP, type LegacyPageKey } from "@/lib/legacy-content";

export type ProjectSlug =
  | "nexivus-pos-backend"
  | "nexivus-pos-frontend"
  | "course-management-backend"
  | "course-management-frontend"
  | "quiz-web-app"
  | "nic-detail-extractor";

export const PROJECT_PAGES: Record<
  ProjectSlug,
  { key: LegacyPageKey; title: string; description: string }
> = {
  "nexivus-pos-backend": {
    key: "nexivus-pos-backend",
    title: "Nexivus - Point of Sale System",
    description: "Nexivus backend architecture and API features.",
  },
  "nexivus-pos-frontend": {
    key: "nexivus-pos-frontend",
    title: "Nexivus - Frontend Application",
    description: "Nexivus frontend application overview.",
  },
  "course-management-backend": {
    key: "course-management-backend",
    title: "Course Management System - Backend Architecture",
    description: "Course management backend architecture and APIs.",
  },
  "course-management-frontend": {
    key: "course-management-frontend",
    title: "Course Management - Frontend Application",
    description: "Course management frontend features and UI.",
  },
  "quiz-web-app": {
    key: "quiz-web-app",
    title: "Quiz Web App - Interactive Learning Platform",
    description: "Interactive quiz platform and learning workflow.",
  },
  "nic-detail-extractor": {
    key: "nic-detail-extractor",
    title: "NIC Detail Extractor - Sri Lankan NIC Parser",
    description: "NIC detail parsing and validation tool.",
  },
};

export const HOME_PAGE = {
  key: "home" as LegacyPageKey,
  title: "Vibuddha Vidarshana - Full Stack Developer",
  description: "Portfolio of Vibuddha Vidarshana.",
};

export function getHomeMarkup() {
  return LEGACY_PAGE_MARKUP[HOME_PAGE.key];
}

export function getProjectMarkup(slug: ProjectSlug) {
  return LEGACY_PAGE_MARKUP[PROJECT_PAGES[slug].key];
}
