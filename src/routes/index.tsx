import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { CtaGhost, CtaPrimary, FinalCta, SectionHeading } from "@/components/cosmos/ui";
import { SolutionCard } from "@/components/cosmos/SolutionCard";
import { OrbitMark } from "@/components/cosmos/OrbitMark";
import { solutions } from "@/data/solutions";
import { cases } from "@/data/cases";

const title = "Cosmos | Um contato. Uma gestão. Uma solução.";
const description =
  "A Cosmos conecta pessoas e organizações às soluções certas, reunindo especialistas, tecnologia e parceiros em um único lugar.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: "/" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

const flow = ["Necessidade", "Diagnóstico", "Solução", "Especialistas", "Gestão", "Entrega"];

const steps = [
  { n: "01", t: "Entendemos", d: "Você apresenta sua necessidade." },
  { n: "02", t: "Estruturamos", d: "Transformamos a necessidade em um projeto claro." },
  { n: "03", t: "Conectamos", d: "Selecionamos especialistas, empresas e recursos adequados." },
  { n: "04", t: "Coordenamos", d: "Centralizamos a comunicação e acompanhamos a execução." },
  { n: "05", t: "Entregamos", d: "A solução é entregue de acordo com o objetivo definido." },
];

const reasons = [
  { t: "Um único ponto de contato", d: "Você fala com a Cosmos. A Cosmos fala com todos os envolvidos." },
  { t: "Curadoria de especialistas", d: "Selecionamos quem tem competência real para cada etapa." },
  { t: "Soluções sob medida", d: "O escopo nasce da necessidade, não de um pacote pré-definido." },
  { t: "Gestão centralizada", d: "Uma coordenação responsável do início à entrega." },
  { t: "Múltiplas especialidades", d: "Tecnologia, dados, automação, design, marketing e consultoria." },
  { t: "Foco em resultados", d: "O critério de sucesso é o objetivo definido no começo." },
];

function Home() {
  return (
    <>
      <section className="relative overflow-hidden">
        <div className="star-field pointer-events-none absolute inset-0 opacity-70" aria-hidden />
        <div
          className="pointer-events-none absolute -right-24 top-24 hidden text-foreground/25 lg:block"
          aria-hidden
        >
          <OrbitMark className="spin-slow size-[34rem]" />
        </div>

        <div className="shell relative grid min-h-[92vh] items-center py-32 lg:py-40">
          <div className="max-w-4xl">
            <p className="eyebrow reveal">Empresa de soluções</p>
            <h1 className="display-xl reveal mt-8 text-foreground">
              Um contato.
              <br />
              Uma gestão.
              <br />
              <span className="text-muted-foreground">Uma solução.</span>
            </h1>
            <p className="reveal mt-10 max-w-xl font-display text-xl font-light leading-relaxed text-foreground lg:text-2xl">
              Você apresenta a necessidade. Nós encontramos o caminho.
            </p>
            <p className="reveal mt-6 max-w-xl text-base leading-relaxed text-muted-foreground">
              A Cosmos conecta pessoas e organizações a especialistas, empresas e tecnologias para
              transformar necessidades em soluções completas.
            </p>
            <div className="reveal mt-14 flex flex-col gap-4 sm:flex-row">
              <CtaPrimary to="/contato">Encontrar uma solução</CtaPrimary>
              <CtaGhost to="/sobre">Conhecer a Cosmos</CtaGhost>
            </div>
          </div>
        </div>
      </section>

      {/* Você apresenta. Nós resolvemos. */}
      <section className="border-t border-hairline py-24 lg:py-32">
        <div className="shell">
          <div className="grid gap-14 lg:grid-cols-[1fr_1fr] lg:gap-24">
            <SectionHeading
              eyebrow="O problema"
              title={
                <>
                  Você apresenta.
                  <br />
                  Nós resolvemos.
                </>
              }
            />
            <div className="space-y-6 text-base leading-relaxed text-muted-foreground lg:pt-16">
              <p>
                Encontrar uma solução costuma exigir procurar profissionais, comparar fornecedores,
                entender tecnologias e coordenar entregas que não conversam entre si.
              </p>
              <p>
                A Cosmos simplifica esse processo: um único ponto de contato entende a necessidade,
                estrutura a solução, reúne quem precisa estar envolvido e conduz a execução até o
                fim.
              </p>
              <p className="font-display text-xl font-light text-foreground">
                Não vendemos complexidade. Entregamos soluções.
              </p>
            </div>
          </div>

          <ol className="mt-20 grid grid-cols-1 border-t border-hairline sm:grid-cols-2 lg:grid-cols-6">
            {flow.map((step, i) => (
              <li
                key={step}
                className="group relative border-b border-l border-hairline px-6 py-10 last:border-r lg:border-r-0"
              >
                <span className="font-display text-xs tracking-[0.2em] text-accent">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="mt-4 font-display text-lg font-light text-foreground">{step}</p>
                <span
                  className="absolute bottom-0 left-0 h-px w-0 bg-accent transition-all duration-700 group-hover:w-full"
                  aria-hidden
                />
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Soluções */}
      <section className="border-t border-hairline py-24 lg:py-32">
        <div className="shell">
          <SectionHeading
            eyebrow="Nossas soluções"
            title="Áreas em que atuamos"
            lead="Seis frentes que se combinam conforme a necessidade. Você não precisa escolher a categoria certa — apenas descrever o problema."
          />
          <div className="hairline-grid mt-16 grid sm:grid-cols-2 lg:grid-cols-3">
            {solutions.map((s) => (
              <SolutionCard key={s.slug} solution={s} />
            ))}
          </div>
        </div>
      </section>

      {/* Como funciona */}
      <section className="border-t border-hairline py-24 lg:py-32">
        <div className="shell">
          <SectionHeading eyebrow="Como funciona" title="Do primeiro contato à entrega" />
          <div className="mt-16 border-t border-hairline">
            {steps.map((s) => (
              <div
                key={s.n}
                className="group grid gap-4 border-b border-hairline py-9 transition-colors duration-500 hover:bg-surface md:grid-cols-[6rem_1fr_1.2fr] md:items-baseline md:gap-8 md:px-4"
              >
                <span className="font-display text-sm tracking-[0.2em] text-muted-foreground transition-colors group-hover:text-accent">
                  {s.n}
                </span>
                <h3 className="font-display text-2xl font-light text-foreground">{s.t}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{s.d}</p>
              </div>
            ))}
          </div>
          <div className="mt-12">
            <CtaGhost to="/como-funciona">Ver o processo completo</CtaGhost>
          </div>
        </div>
      </section>

      {/* Por que Cosmos */}
      <section className="border-t border-hairline py-24 lg:py-36">
        <div className="shell">
          <SectionHeading eyebrow="Por que Cosmos" title="Estrutura, curadoria e condução" />
          <div className="mt-20 grid gap-x-16 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
            {reasons.map((r) => (
              <div key={r.t} className="border-t border-border pt-7">
                <h3 className="font-display text-xl font-light text-foreground">{r.t}</h3>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{r.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Conceito */}
      <section className="relative overflow-hidden border-t border-hairline bg-surface py-28 lg:py-40">
        <div className="shell relative grid gap-16 lg:grid-cols-[1.1fr_1fr]">
          <div>
            <p className="eyebrow">Não vendemos complexidade</p>
            <h2 className="display-lg mt-8 text-foreground">
              Você não precisa saber quem contratar.
            </h2>
            <p className="mt-8 max-w-xl text-base leading-relaxed text-muted-foreground">
              Não importa onde esteja a resposta. A Cosmos encontra os especialistas, recursos e
              tecnologias necessários para construir a solução.
            </p>
          </div>
          <div className="flex items-center border-l border-hairline pl-8 lg:pl-16">
            <p className="font-display text-2xl font-light leading-snug text-foreground lg:text-3xl">
              A tecnologia é o meio.
              <br />
              <span className="text-accent">A solução é o objetivo.</span>
            </p>
          </div>
        </div>
      </section>

      {/* Cases */}
      <section className="border-t border-hairline py-24 lg:py-32">
        <div className="shell">
          <SectionHeading
            eyebrow="Cases"
            title="Projetos demonstrativos"
            lead="Exemplos que representam o tipo de solução que estruturamos e coordenamos. São projetos demonstrativos, criados para ilustrar escopo, processo e resultado esperado."
          />
          <div className="hairline-grid mt-16 grid sm:grid-cols-2">
            {cases.map((c) => (
              <Link
                key={c.slug}
                to="/cases"
                hash={c.slug}
                className="hairline-cell group flex flex-col p-8 transition-colors duration-500 hover:bg-surface lg:p-10"
              >
                <span className="border border-border px-3 py-1 text-[0.625rem] uppercase tracking-[0.2em] text-muted-foreground self-start">
                  Projeto demonstrativo
                </span>
                <h3 className="mt-8 font-display text-2xl font-light text-foreground">{c.title}</h3>
                <p className="mt-2 text-xs uppercase tracking-[0.16em] text-muted-foreground">
                  {c.area}
                </p>
                <p className="mt-6 text-sm leading-relaxed text-muted-foreground">{c.problem}</p>
                <span className="mt-8 inline-flex items-center gap-2 text-[0.7rem] uppercase tracking-[0.2em] text-foreground transition-colors group-hover:text-accent">
                  Ver case
                  <ArrowUpRight className="size-4" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Sobre */}
      <section className="border-t border-hairline py-24 lg:py-32">
        <div className="shell grid gap-14 lg:grid-cols-[1fr_1.2fr] lg:gap-24">
          <SectionHeading eyebrow="Sobre a Cosmos" title="Uma empresa de soluções" />
          <div className="space-y-6 text-base leading-relaxed text-muted-foreground">
            <p>
              A Cosmos é uma empresa de soluções criada para simplificar a forma como pessoas e
              organizações encontram, desenvolvem e implementam soluções para suas necessidades.
            </p>
            <p>
              Acreditamos que ninguém deveria precisar conhecer todas as respostas para transformar
              uma necessidade em realidade.
            </p>
            <p>
              Para isso, combinamos competências próprias com uma rede de profissionais e empresas
              especializadas, mantendo a gestão do projeto sempre em um único lugar.
            </p>
            <div className="pt-4">
              <CtaGhost to="/sobre">Conhecer a Cosmos</CtaGhost>
            </div>
          </div>
        </div>
      </section>

      {/* Manifesto */}
      <section className="relative overflow-hidden border-t border-hairline py-32 lg:py-44">
        <div className="star-field pointer-events-none absolute inset-0 opacity-60" aria-hidden />
        <div
          className="pointer-events-none absolute inset-0 flex items-center justify-center text-foreground/10"
          aria-hidden
        >
          <OrbitMark className="spin-slow size-[40rem]" />
        </div>
        <div className="shell relative mx-auto max-w-3xl text-center">
          <p className="eyebrow">Manifesto</p>
          <p className="display-lg mt-10 text-foreground">Toda necessidade começa com uma pergunta.</p>
          <p className="mt-10 text-lg leading-relaxed text-muted-foreground">
            A resposta pode estar em uma pessoa, uma tecnologia, uma ideia ou na combinação de várias
            delas.
          </p>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            A Cosmos existe para encontrar o caminho.
          </p>
          <p className="mt-16 font-display text-xl font-light tracking-wide text-foreground lg:text-2xl">
            Um contato. Uma gestão. Uma solução.
          </p>
        </div>
      </section>

      <FinalCta />
    </>
  );
}
