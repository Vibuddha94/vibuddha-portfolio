import type { Metadata } from "next";
import { notFound } from "next/navigation";
import LegacyHtmlPage from "@/components/legacy-html-page";
import { PROJECT_PAGES, type ProjectSlug, getProjectMarkup } from "@/lib/legacy-pages";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return Object.keys(PROJECT_PAGES).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = PROJECT_PAGES[slug as ProjectSlug];

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: project.title,
    description: project.description,
  };
}

export default async function ProjectRoutePage({ params }: Props) {
  const { slug } = await params;
  const project = PROJECT_PAGES[slug as ProjectSlug];

  if (!project) {
    notFound();
  }

  return <LegacyHtmlPage markup={getProjectMarkup(slug as ProjectSlug)} />;
}
