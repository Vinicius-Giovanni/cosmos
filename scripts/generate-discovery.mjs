import { readFile, writeFile } from "node:fs/promises";

const siteUrl = "https://www.cosmos.com.br";
const solutions = await readFile(new URL("../src/data/solutions.ts", import.meta.url), "utf8");
const slugs = [...solutions.matchAll(/slug:\s*"([a-z0-9-]+)"/g)].map((match) => match[1]);
const paths = ["/", "/sobre", "/como-funciona", "/cases", "/contato", "/solucoes", ...slugs.map((slug) => `/solucoes/${slug}`)];

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${paths
  .map((path) => `  <url><loc>${siteUrl}${path}</loc></url>`)
  .join("\n")}\n</urlset>\n`;

const llms = `# Grupo Cosmos\n\nEmpresa de soluções que conecta pessoas e organizações a especialistas, empresas e tecnologias para transformar necessidades em soluções completas.\n\n## Páginas públicas\n\n${paths
  .map((path) => `- ${siteUrl}${path}`)
  .join("\n")}\n\nEste arquivo auxilia a descoberta por sistemas de IA e não substitui os mecanismos tradicionais de SEO ou indexação.\n`;

await Promise.all([
  writeFile(new URL("../public/sitemap.xml", import.meta.url), sitemap),
  writeFile(new URL("../public/llms.txt", import.meta.url), llms),
]);