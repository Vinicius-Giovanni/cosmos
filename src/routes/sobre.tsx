import { createFileRoute } from "@tanstack/react-router";
import { FinalCta, PageHero } from "@/components/cosmos/ui";
import { OrbitMark } from "@/components/cosmos/OrbitMark";

const title = "Sobre a Cosmos | Empresa de soluções";
const description =
  "A Cosmos é uma empresa de soluções criada para simplificar a forma como pessoas e organizações encontram, desenvolvem e implementam soluções.";

export const Route = createFileRoute("/sobre")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: "/sobre" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
    links: [{ rel: "canonical", href: "/sobre" }],
  }),
  component: Sobre,
});

const principles = [
  { t: "Integradora, não intermediária", d: "Assumimos a estruturação e a condução do projeto, não apenas a indicação de fornecedores." },
  { t: "Curadoria antes de execução", d: "Só entra no projeto quem tem competência comprovada para a etapa." },
  { t: "Clareza de escopo", d: "Necessidade traduzida em projeto, com critérios de sucesso definidos." },
  { t: "Responsabilidade de ponta a ponta", d: "Uma gestão acompanha do diagnóstico à entrega." },
];

function Sobre() {
  return (
    <>
      <PageHero
        eyebrow="Sobre a Cosmos"
        title="Uma empresa de soluções."
        lead="Existimos para que uma necessidade não precise se transformar em uma busca por fornecedores."
      />

      <section className="border-b border-hairline py-20 lg:py-28">
        <div className="shell grid gap-14 lg:grid-cols-[1.2fr_0.8fr] lg:gap-24">
          <div className="space-y-7 text-lg leading-relaxed text-muted-foreground">
            <p>
              A Cosmos é uma empresa de soluções criada para simplificar a forma como pessoas e
              organizações encontram, desenvolvem e implementam soluções para suas necessidades.
            </p>
            <p className="font-display text-2xl font-light leading-snug text-foreground">
              Acreditamos que ninguém deveria precisar conhecer todas as respostas para transformar
              uma necessidade em realidade.
            </p>
            <p>
              Para isso, combinamos competências próprias com uma rede de profissionais e empresas
              especializadas. Entendemos a necessidade, estruturamos a solução, identificamos quem
              precisa estar envolvido e coordenamos a execução até a entrega.
            </p>
            <p>
              Não somos uma agência, uma software house ou um marketplace. Somos a integradora que
              organiza o caminho entre o problema e a solução.
            </p>
          </div>
          <div className="flex items-start justify-center text-foreground/25">
            <OrbitMark className="spin-slow size-64 lg:size-80" />
          </div>
        </div>
      </section>

      <section className="border-b border-hairline bg-surface py-20 lg:py-28">
        <div className="shell">
          <p className="eyebrow">Princípios</p>
          <div className="mt-12 grid gap-x-16 gap-y-10 md:grid-cols-2">
            {principles.map((p) => (
              <div key={p.t} className="border-t border-border pt-6">
                <h2 className="font-display text-xl font-light text-foreground">{p.t}</h2>
                <p className="mt-3 text-base leading-relaxed text-muted-foreground">{p.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-hairline py-24 text-center lg:py-36">
        <div className="shell mx-auto max-w-2xl">
          <p className="eyebrow">Manifesto</p>
          <p className="display-lg mt-8 text-foreground">Toda necessidade começa com uma pergunta.</p>
          <p className="mt-8 text-lg leading-relaxed text-muted-foreground">
            A resposta pode estar em uma pessoa, uma tecnologia, uma ideia ou na combinação de várias
            delas. A Cosmos existe para encontrar o caminho.
          </p>
          <p className="mt-14 font-display text-xl font-light tracking-wide text-foreground">
            Um contato. Uma gestão. Uma solução.
          </p>
        </div>
      </section>

      <FinalCta />
    </>
  );
}
