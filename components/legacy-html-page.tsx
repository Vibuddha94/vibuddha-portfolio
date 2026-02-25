"use client";

import { useEffect, useRef } from "react";

type LegacyHtmlPageProps = {
  markup: string;
};

export default function LegacyHtmlPage({ markup }: LegacyHtmlPageProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let cancelled = false;
    const cleanups: Array<() => void> = [];

    const runLegacyPage = async () => {
      const template = document.createElement("template");
      template.innerHTML = markup;

      const scriptNodes = Array.from(template.content.querySelectorAll("script"));
      for (const scriptNode of scriptNodes) {
        scriptNode.parentNode?.removeChild(scriptNode);
      }

      container.innerHTML = "";
      container.appendChild(template.content.cloneNode(true));

      for (const scriptNode of scriptNodes) {
        if (cancelled) return;

        const src = scriptNode.getAttribute("src");
        const inlineCode = scriptNode.textContent ?? "";

        try {
          let code = inlineCode;

          if (src) {
            if (!src.startsWith("/legacy-scripts/")) {
              continue;
            }
            const response = await fetch(src, { cache: "no-store" });
            code = await response.text();
          }

          // Run inside a function scope to avoid top-level global redeclaration errors.
          // eslint-disable-next-line no-new-func
          const runner = new Function(code);
          runner();
        } catch (error) {
          // Keep page usable even if one optional script fails.
          console.error("Legacy script execution failed:", error);
        }
      }

      document.dispatchEvent(new Event("DOMContentLoaded", { bubbles: true }));

      const navLinks = Array.from(
        document.querySelectorAll("nav a[href]")
      ) as HTMLAnchorElement[];

      if (navLinks.length === 0) return;

      const setActiveLink = (activeLink: HTMLAnchorElement | null) => {
        const activeHref = activeLink?.getAttribute("href") ?? null;
        navLinks.forEach((link) => {
          const isActive =
            !!activeHref && link.getAttribute("href") === activeHref;
          link.classList.toggle("is-active", isActive);
          if (isActive) {
            link.setAttribute("aria-current", "page");
            link.style.setProperty(
              "background",
              "rgba(242, 248, 239, 0.24)",
              "important"
            );
            link.style.setProperty("color", "#f2f8ef", "important");
            link.style.setProperty("border-radius", "999px", "important");
            link.style.setProperty("padding-inline", "0.85rem", "important");
            link.style.setProperty("font-weight", "800", "important");
            link.style.setProperty("text-decoration", "underline", "important");
            link.style.setProperty(
              "text-decoration-thickness",
              "2px",
              "important"
            );
            link.style.setProperty(
              "text-underline-offset",
              "4px",
              "important"
            );
            link.style.setProperty(
              "box-shadow",
              "inset 0 0 0 1px rgba(242, 248, 239, 0.35), 0 0 0 1px rgba(242, 248, 239, 0.2)",
              "important"
            );
          } else {
            link.removeAttribute("aria-current");
            link.style.removeProperty("background");
            link.style.removeProperty("color");
            link.style.removeProperty("border-radius");
            link.style.removeProperty("padding-inline");
            link.style.removeProperty("font-weight");
            link.style.removeProperty("text-decoration");
            link.style.removeProperty("text-decoration-thickness");
            link.style.removeProperty("text-underline-offset");
            link.style.removeProperty("box-shadow");
          }
        });
      };

      const hashLinks = navLinks.filter((link) => {
        const href = link.getAttribute("href");
        return !!href && href.startsWith("#") && href.length > 1;
      });

      const routeLinks = navLinks.filter((link) => {
        const href = link.getAttribute("href");
        return !!href && !href.startsWith("#");
      });

      const pathname = window.location.pathname;
      const matchedRouteLink =
        routeLinks.find((link) => {
          try {
            const url = new URL(link.href, window.location.origin);
            return url.pathname === pathname;
          } catch {
            return false;
          }
        }) ?? null;

      if (matchedRouteLink) {
        setActiveLink(matchedRouteLink);
      }

      if (hashLinks.length > 0) {
        const sectionElements = hashLinks
          .map((link) => {
            const hash = link.getAttribute("href") as string;
            const id = hash.slice(1);
            const section = document.getElementById(id);
            return section ? { link, section } : null;
          })
          .filter((item): item is { link: HTMLAnchorElement; section: HTMLElement } => !!item);

        if (sectionElements.length > 0) {
          const updateFromHash = () => {
            const currentHash = window.location.hash;
            const activeFromHash =
              sectionElements.find(({ link }) => link.getAttribute("href") === currentHash)
                ?.link ?? null;
            if (activeFromHash) {
              setActiveLink(activeFromHash);
            }
          };

          const observer = new IntersectionObserver(
            (entries) => {
              const visible = entries
                .filter((entry) => entry.isIntersecting)
                .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

              if (!visible) return;

              const matched = sectionElements.find(
                ({ section }) => section === visible.target
              );
              if (matched) {
                setActiveLink(matched.link);
              }
            },
            {
              rootMargin: "-25% 0px -60% 0px",
              threshold: [0.2, 0.4, 0.6],
            }
          );

          sectionElements.forEach(({ section }) => observer.observe(section));
          updateFromHash();
          window.addEventListener("hashchange", updateFromHash);
          cleanups.push(() => {
            observer.disconnect();
            window.removeEventListener("hashchange", updateFromHash);
          });
        }
      }
    };

    runLegacyPage();

    return () => {
      cancelled = true;
      cleanups.forEach((cleanup) => cleanup());
    };
  }, [markup]);

  return <div ref={containerRef} suppressHydrationWarning />;
}
