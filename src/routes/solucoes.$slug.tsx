import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { CtaPrimary, FinalCta, PageHero } from "@/components/cosmos/ui";
import { getSolution, solutions } from "@/data/solutions";

export const Route = createFileRoute("/solucoes/$slug")({
  loader: ({ params }) => {
    const solution = getSolution(params.slug);
    if (!solution) throw notFound();
    return { solution };
  },
  head: ({ loaderData, params }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Solução não encontrada | Cosmos" }, { name: "robots", content: "noindex" }],
      };
    }
    const title = `${loaderData.solution.title} | Cosmos`;
    const description = loaderData.solution.short;
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:url", content: `/solucoes/${params.slug}` },
        { name: "twitter:title", content: title },
        { name: "twitter:description", content: description },
      ],
      links: [{ rel: "canonical", href: `/solucoes/${params.slug}` }],
    };
  },
  component: SolutionPage,
});

function SolutionPage() {
  const { solution } = Route.useLoaderData();
  const others = solutions.filter((s) => s.slug !== solution.slug);

  return (
    <>
      <PageHero
        eyebrow={`Soluções — ${solution.index}`}
        title={solution.title}
        lead={solution.description}
      />

      <section className="border-b border-hairline py-20 lg:py-28">
        <div className="shell grid gap-14 lg:grid-cols-2 lg:gap-24">
          <div>
            <h2 className="eyebrow">Problemas que resolve</h2>
            <ul className="mt-8 border-t border-hairline">
              {solution.problems.map((p) => (
                <li
                  key={p}
                  className="border-b border-hairline py-5 text-base leading-relaxed text-muted-foreground"
                >
                  {p}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="eyebrow">Exemplos de soluções</h2>
            <ul className="mt-8 border-t border-hairline">
              {solution.examples.map((e) => (
                <li
                  key={e}
                  className="border-b border-hairline py-5 text-base leading-relaxed text-muted-foreground"
                >
                  {e}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="border-b border-hairline bg-surface py-20 lg:py-28">
        <div className="shell grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <h2 className="display-lg text-foreground">Serviços relacionados</h2>
          <div className="hairline-grid grid sm:grid-cols-2">
            {solution.services.map((sv) => (
              <div key={sv} className="hairline-cell px-6 py-6 text-sm text-muted-foreground">
                {sv}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-hairline py-20 lg:py-24">
        <div className="shell flex flex-col items-start gap-8 md:flex-row md:items-center md:justify-between">
          <p className="max-w-xl font-display text-2xl font-light leading-snug text-foreground">
            Descreva a necessidade. Estruturamos a solução e conduzimos a execução.
          </p>
          <CtaPrimary to="/contato">Solicitar uma solução</CtaPrimary>
        </div>
      </section>

      <section className="py-20 lg:py-24">
        <div className="shell">
          <h2 className="eyebrow">Outras áreas</h2>
          <div className="mt-8 grid gap-x-12 gap-y-6 sm:grid-cols-2 lg:grid-cols-3">
            {others.map((s) => (
              <Link
                key={s.slug}
                to={s.path}
                className="link-underline border-t border-border pt-5 font-display text-lg font-light text-muted-foreground transition-colors hover:text-foreground"
              >
                {s.title}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <FinalCta />
    </>
  );
}
