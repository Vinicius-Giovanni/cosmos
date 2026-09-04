import { createFileRoute } from "@tanstack/react-router";
import { CtaGhost, CtaPrimary, FinalCta, PageHero } from "@/components/cosmos/ui";
import { solutions } from "@/data/solutions";
import { pageHead } from "@/lib/seo";

const title = "Soluções | Cosmos";
const description =
  "Tecnologia, dados, automação, design, marketing e consultoria: as áreas em que a Cosmos estrutura, conecta e coordena soluções sob medida.";

export const Route = createFileRoute("/solucoes/")({
  head: () => pageHead({ title, description, path: "/solucoes" }),
  component: SolucoesPage,
});

function SolucoesPage() {
  return (
    <>
      <PageHero
        eyebrow="Soluções"
        title="Uma necessidade. Todas as especialidades necessárias."
        lead="Cada área existe para resolver um tipo de problema — e a maioria dos projetos combina mais de uma. Você descreve a necessidade; nós definimos a composição."
      />

      {solutions.map((s) => (
        <section key={s.slug} className="border-b border-hairline py-20 lg:py-28">
          <div className="shell grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
            <div>
              <span className="eyebrow">{s.index}</span>
              <h2 className="display-lg mt-6 text-foreground">{s.title}</h2>
              <p className="mt-7 max-w-lg text-base leading-relaxed text-muted-foreground">
                {s.description}
              </p>
              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <CtaGhost to={s.path}>Conhecer solução</CtaGhost>
              </div>
            </div>

            <div className="grid gap-10 sm:grid-cols-2">
              <div>
                <h3 className="eyebrow">Problemas que resolve</h3>
                <ul className="mt-5 space-y-3">
                  {s.problems.map((p) => (
                    <li key={p} className="border-t border-hairline pt-3 text-sm text-muted-foreground">
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="eyebrow">Exemplos de soluções</h3>
                <ul className="mt-5 space-y-3">
                  {s.examples.map((e) => (
                    <li key={e} className="border-t border-hairline pt-3 text-sm text-muted-foreground">
                      {e}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="sm:col-span-2">
                <h3 className="eyebrow">Serviços relacionados</h3>
                <div className="mt-5 flex flex-wrap gap-2">
                  {s.services.map((sv) => (
                    <span
                      key={sv}
                      className="border border-border px-3 py-1.5 text-xs text-muted-foreground"
                    >
                      {sv}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      <section className="py-20 lg:py-28">
        <div className="shell flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-display text-2xl font-light text-foreground">
            Ainda não sabe em qual área a sua necessidade se encaixa?
          </p>
          <CtaPrimary to="/contato">Solicitar uma solução</CtaPrimary>
        </div>
      </section>

      <FinalCta />
    </>
  );
}
