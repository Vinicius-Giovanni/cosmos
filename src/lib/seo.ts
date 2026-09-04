export const SITE_URL = "https://www.cosmos.com.br";
export const DEFAULT_OG_IMAGE = `${SITE_URL}/og-image.png`;

export function absoluteUrl(path = "/") {
  return new URL(path, SITE_URL).toString();
}

type PageMetadata = {
  title: string;
  description: string;
  path: string;
  type?: "website" | "article";
  schema?: Record<string, unknown> | Record<string, unknown>[];
};

export function pageHead({ title, description, path, type = "website", schema }: PageMetadata) {
  const url = absoluteUrl(path);
  const schemas = schema ? (Array.isArray(schema) ? schema : [schema]) : [];

  return {
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: url },
      { property: "og:type", content: type },
      { property: "og:image", content: DEFAULT_OG_IMAGE },
      { property: "og:image:alt", content: "Marca do Grupo Cosmos" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
      { name: "twitter:image", content: DEFAULT_OG_IMAGE },
    ],
    links: [{ rel: "canonical", href: url }],
    scripts: schemas.map((item) => ({
      type: "application/ld+json",
      children: JSON.stringify(item),
    })),
  };
}

export function breadcrumbSchema(items: Array<{ name: string; path: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}