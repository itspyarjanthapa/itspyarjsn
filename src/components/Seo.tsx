import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import seo from "@/data/seo.json";
import { PROJECTS } from "@/data/projects";

type RouteSeo = {
  title: string;
  description: string;
  image?: string;
  imageAlt?: string;
  type?: string;
};

const SITE = seo.site;
const ROUTES = seo.routes as Record<string, RouteSeo>;
const SITE_URL = SITE.url.replace(/\/+$/, "");

const setMeta = (attr: "name" | "property", key: string, content: string) => {
  let el = document.head.querySelector<HTMLMetaElement>(
    `meta[${attr}="${key}"]`,
  );
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
};

const removeMeta = (attr: "name" | "property", key: string) => {
  document.head.querySelector(`meta[${attr}="${key}"]`)?.remove();
};

const setCanonical = (href: string) => {
  let el = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
  if (!el) {
    el = document.createElement("link");
    el.rel = "canonical";
    document.head.appendChild(el);
  }
  el.href = href;
};

const setJsonLd = (data: Record<string, unknown> | null) => {
  const ID = "route-jsonld";
  document.getElementById(ID)?.remove();
  if (!data) return;

  const script = document.createElement("script");
  script.type = "application/ld+json";
  script.id = ID;
  script.text = JSON.stringify(data);
  document.head.appendChild(script);
};

/**
 * Keeps the document head in sync with the active route so shared links and
 * client-side navigations always carry the right title, description and image.
 */
const Seo = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    const path = pathname === "/" ? "/" : pathname.replace(/\/+$/, "");
    const route = ROUTES[path];
    const project = path.startsWith("/work/")
      ? PROJECTS.find((p) => path === `/work/${p.slug}`)
      : undefined;

    const title = route?.title ?? "Page not found — Pyarjan Thapa";
    const description =
      route?.description ??
      "This page doesn't exist. Head back to the portfolio to see selected work by Pyarjan Thapa.";
    const imagePath = route?.image ?? SITE.defaultImage;
    const imageAlt = route?.imageAlt ?? SITE.defaultImageAlt;
    const image = `${SITE_URL}${imagePath}`;
    const url = `${SITE_URL}${path === "/" ? "/" : path}`;
    const type = route?.type ?? "website";

    document.title = title;
    setMeta("name", "description", description);
    setMeta(
      "name",
      "robots",
      route ? "index, follow, max-image-preview:large" : "noindex, follow",
    );
    // An unknown route is a soft 404: point crawlers back at the home page.
    setCanonical(route ? url : `${SITE_URL}/`);

    setMeta("property", "og:type", type);
    setMeta("property", "og:site_name", SITE.name);
    setMeta("property", "og:locale", SITE.locale);
    setMeta("property", "og:url", url);
    setMeta("property", "og:title", title);
    setMeta("property", "og:description", description);
    setMeta("property", "og:image", image);
    setMeta("property", "og:image:alt", imageAlt);

    setMeta("property", "og:image:width", "1200");
    setMeta("property", "og:image:height", "630");

    setMeta("name", "twitter:card", "summary_large_image");
    setMeta("name", "twitter:title", title);
    setMeta("name", "twitter:description", description);
    setMeta("name", "twitter:image", image);
    setMeta("name", "twitter:image:alt", imageAlt);

    if (!route) {
      document.title = "Page not found — Pyarjan Thapa";
      removeMeta("name", "twitter:image:alt");
    }

    setJsonLd(
      project
        ? {
            "@context": "https://schema.org",
            "@type": "CreativeWork",
            name: project.name,
            description: project.desc,
            url,
            image,
            keywords: project.tags.join(", "),
            creator: {
              "@type": "Person",
              name: SITE.name,
              url: `${SITE_URL}/`,
            },
            ...(project.link ? { sameAs: project.link } : {}),
          }
        : null,
    );
  }, [pathname]);

  return null;
};

export default Seo;
