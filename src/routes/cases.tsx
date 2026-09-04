import { createFileRoute } from "@tanstack/react-router";
import { CtaPrimary, FinalCta, PageHero } from "@/components/cosmos/ui";
import { cases } from "@/data/cases";

const title = "Casos demonstrativos | Cosmos";
const description =
  "Projetos demonstrativos que ilustram como a Cosmos estrutura problema, solução, processo e resultado esperado em cada tipo de necessidade.";

export const Route = createFileRoute("/cases")({
  head: () => pageHead({ title, description, path: "/cases" }),
  component: CasesPage,
});

function CasesPage() {
  return (
    <>
      <PageHero
        eyebrow="Cases"
        title="Projetos demonstrativos"
        lead="Os exemplos abaixo são projetos demonstrativos, criados para ilustrar escopo, processo e resultado esperado. Não representam trabalhos realizados para clientes."
      />

      {cases.map((c, i) => (
        <section
          key={c.slug}
          id={c.slug}
          className={`scroll-mt-24 border-b border-hairline py-20 lg:py-28 ${i % 2 === 1 ? "bg-surface" : ""}`}
        >
          <div className="shell">
            <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
              <div>
                <span className="inline-block border border-border px-3 py-1 text-[0.625rem] uppercase tracking-[0.2em] text-muted-foreground">
                  Projeto demonstrativo
                </span>
                <h2 className="display-lg mt-8 text-foreground">{c.title}</h2>
                <p className="mt-4 text-xs uppercase tracking-[0.18em] text-muted-foreground">
                  {c.area}
                </p>
                <div className="mt-10">
                  <h3 className="eyebrow">Tecnologias</h3>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {c.technologies.map((t) => (
                      <span key={t} className="border border-border px-3 py-1.5 text-xs text-muted-foreground">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="space-y-8">
                {[
                  { label: "Problema", value: c.problem },
                  { label: "Contexto", value: c.context },
                  { label: "Solução", value: c.solution },
                ].map((b) => (
                  <div key={b.label} className="border-t border-hairline pt-5">
                    <h3 className="eyebrow">{b.label}</h3>
                    <p className="mt-3 text-base leading-relaxed text-muted-foreground">{b.value}</p>
                  </div>
                ))}

                <div className="border-t border-hairline pt-5">
                  <h3 className="eyebrow">Processo</h3>
                  <ol className="mt-4 space-y-3">
                    {c.process.map((p, idx) => (
                      <li key={p} className="flex gap-4 text-base leading-relaxed text-muted-foreground">
                        <span className="font-display text-xs tracking-[0.2em] text-accent">
                          {String(idx + 1).padStart(2, "0")}
                        </span>
                        {p}
                      </li>
                    ))}
                  </ol>
                </div>

                <div className="border-t border-border pt-5">
                  <h3 className="eyebrow">Resultado esperado</h3>
                  <p className="mt-3 font-display text-xl font-light leading-snug text-foreground">
                    {c.result}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      <section className="py-20 lg:py-28">
        <div className="shell flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
          <p className="max-w-xl font-display text-2xl font-light leading-snug text-foreground">
            Seu caso é diferente? A composição da solução também será.
          </p>
          <CtaPrimary to="/contato">Encontrar uma solução</CtaPrimary>
        </div>
      </section>

      <FinalCta />
    </>
  );
}
