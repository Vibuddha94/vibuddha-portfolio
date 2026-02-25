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
            const response = await fetch(src);
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
    };

    runLegacyPage();

    return () => {
      cancelled = true;
    };
  }, [markup]);

  return <div ref={containerRef} suppressHydrationWarning />;
}
