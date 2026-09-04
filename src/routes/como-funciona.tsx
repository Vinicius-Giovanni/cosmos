import { createFileRoute } from "@tanstack/react-router";
import { FinalCta, PageHero, SectionHeading } from "@/components/cosmos/ui";
import { pageHead } from "@/lib/seo";

const title = "Como funciona | Cosmos";
const description =
  "Entendemos, estruturamos, conectamos, coordenamos e entregamos: o processo da Cosmos do primeiro contato à solução final.";

export const Route = createFileRoute("/como-funciona")({
  head: () => pageHead({ title, description, path: "/como-funciona" }),
  component: ComoFunciona,
});

const steps = [
  {
    n: "01",
    t: "Entendemos",
    d: "Você apresenta sua necessidade.",
    detail:
      "A conversa começa pelo problema, não pela tecnologia. Ouvimos o contexto, as restrições e o resultado esperado.",
  },
  {
    n: "02",
    t: "Estruturamos",
    d: "Transformamos a necessidade em um projeto claro.",
    detail:
      "Definimos escopo, etapas, critérios de sucesso e o que é essencial na primeira entrega.",
  },
  {
    n: "03",
    t: "Conectamos",
    d: "Selecionamos especialistas, empresas e recursos adequados.",
    detail:
      "Reunimos competências próprias e da nossa rede conforme o que o projeto exige — nem mais, nem menos.",
  },
  {
    n: "04",
    t: "Coordenamos",
    d: "Centralizamos a comunicação e acompanhamos a execução.",
    detail:
      "Você continua falando com um único ponto de contato. A articulação entre as partes é responsabilidade nossa.",
  },
  {
    n: "05",
    t: "Entregamos",
    d: "A solução é entregue de acordo com o objetivo definido.",
    detail:
      "Validamos a entrega contra os critérios acordados e definimos os próximos passos, quando existirem.",
  },
];

function ComoFunciona() {
  return (
    <>
      <PageHero
        eyebrow="Como funciona"
        title="Um processo simples para necessidades complexas."
        lead="Cinco etapas, um único responsável pela condução. Você acompanha o avanço sem gerenciar fornecedores."
      />

      <section className="border-b border-hairline py-20 lg:py-28">
        <div className="shell">
          {steps.map((s) => (
            <article
              key={s.n}
              className="grid gap-6 border-b border-hairline py-12 last:border-b-0 md:grid-cols-[8rem_1fr_1.3fr] md:gap-10"
            >
              <span className="font-display text-4xl font-extralight text-accent">{s.n}</span>
              <div>
                <h2 className="font-display text-3xl font-light text-foreground">{s.t}</h2>
                <p className="mt-3 text-sm text-muted-foreground">{s.d}</p>
              </div>
              <p className="text-base leading-relaxed text-muted-foreground md:pt-2">{s.detail}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="border-b border-hairline bg-surface py-20 lg:py-28">
        <div className="shell">
          <SectionHeading
            eyebrow="O que muda para você"
            title="Uma única conversa em vez de várias negociações"
            lead="Sem cotações paralelas, sem intermediação fragmentada e sem risco de escopo dividido entre fornecedores que não se falam."
          />
          <div className="mt-14 grid gap-x-16 gap-y-10 md:grid-cols-3">
            {[
              { t: "Antes", d: "Procurar, comparar, contratar e coordenar cada parte separadamente." },
              { t: "Com a Cosmos", d: "Apresentar a necessidade e acompanhar a execução em um só lugar." },
              { t: "Resultado", d: "Menos tempo de gestão, menos risco de escopo e entrega coerente." },
            ].map((b) => (
              <div key={b.t} className="border-t border-border pt-6">
                <h3 className="eyebrow">{b.t}</h3>
                <p className="mt-4 text-base leading-relaxed text-muted-foreground">{b.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FinalCta />
    </>
  );
}
