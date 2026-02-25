import type { Metadata } from "next";
import LegacyHtmlPage from "@/components/legacy-html-page";
import { getHomeMarkup, HOME_PAGE } from "@/lib/legacy-pages";

export const metadata: Metadata = {
  title: HOME_PAGE.title,
  description: HOME_PAGE.description,
};

export default function HomePage() {
  return <LegacyHtmlPage markup={getHomeMarkup()} />;
}
