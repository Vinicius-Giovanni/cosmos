import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { z } from "zod";
import { toast } from "sonner";
import { MessageCircle } from "lucide-react";
import { PageHero } from "@/components/cosmos/ui";

const title = "Contato | Cosmos";
const description =
  "Conte para a Cosmos o que você precisa. Um único ponto de contato para estruturar, conectar e coordenar a sua solução.";

export const Route = createFileRoute("/contato")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: "/contato" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
    links: [{ rel: "canonical", href: "/contato" }],
  }),
  component: Contato,
});

const schema = z.object({
  nome: z.string().trim().min(2, "Informe seu nome").max(100, "Nome muito longo"),
  empresa: z.string().trim().max(120, "Nome da empresa muito longo").optional(),
  email: z.string().trim().email("Informe um e-mail válido").max(255),
  whatsapp: z.string().trim().min(8, "Informe um WhatsApp válido").max(20),
  mensagem: z
    .string()
    .trim()
    .min(20, "Descreva sua necessidade com um pouco mais de detalhe")
    .max(2000, "Mensagem muito longa"),
});

const fieldClass =
  "w-full border-b border-input bg-transparent py-3 text-base text-foreground outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-accent";

function Contato() {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sending, setSending] = useState(false);

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    const parsed = schema.safeParse(data);

    if (!parsed.success) {
      const next: Record<string, string> = {};
      for (const issue of parsed.error.issues) {
        const key = String(issue.path[0]);
        if (!next[key]) next[key] = issue.message;
      }
      setErrors(next);
      toast.error("Revise os campos destacados.");
      return;
    }

    setErrors({});
    setSending(true);

    const linhas = [
      `Nome: ${parsed.data.nome}`,
      parsed.data.empresa ? `Empresa: ${parsed.data.empresa}` : null,
      `E-mail: ${parsed.data.email}`,
      `WhatsApp: ${parsed.data.whatsapp}`,
      "",
      parsed.data.mensagem,
    ]
      .filter(Boolean)
      .join("\n");

    window.open(
      `https://wa.me/?text=${encodeURIComponent(`Olá, Cosmos.\n\n${linhas}`)}`,
      "_blank",
      "noopener,noreferrer",
    );

    toast.success("Necessidade registrada. Vamos dar sequência pelo WhatsApp.");
    form.reset();
    setSending(false);
  };

  return (
    <>
      <PageHero
        eyebrow="Contato"
        title="Conte para a Cosmos. Nós encontramos o caminho."
        lead="Você não precisa saber quem contratar nem qual tecnologia usar. Descreva a necessidade — a estruturação é nossa."
      />

      <section className="border-b border-hairline py-20 lg:py-28">
        <div className="shell grid gap-16 lg:grid-cols-[1.2fr_0.8fr] lg:gap-24">
          <form onSubmit={onSubmit} noValidate className="space-y-10">
            <div className="grid gap-10 sm:grid-cols-2">
              <div>
                <label htmlFor="nome" className="eyebrow">
                  Nome
                </label>
                <input id="nome" name="nome" className={`${fieldClass} mt-3`} placeholder="Seu nome" />
                {errors["nome"] && <p className="mt-2 text-xs text-destructive">{errors["nome"]}</p>}
              </div>
              <div>
                <label htmlFor="empresa" className="eyebrow">
                  Empresa (opcional)
                </label>
                <input
                  id="empresa"
                  name="empresa"
                  className={`${fieldClass} mt-3`}
                  placeholder="Nome da empresa"
                />
              </div>
              <div>
                <label htmlFor="email" className="eyebrow">
                  E-mail
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  className={`${fieldClass} mt-3`}
                  placeholder="nome@empresa.com"
                />
                {errors["email"] && <p className="mt-2 text-xs text-destructive">{errors["email"]}</p>}
              </div>
              <div>
                <label htmlFor="whatsapp" className="eyebrow">
                  WhatsApp
                </label>
                <input
                  id="whatsapp"
                  name="whatsapp"
                  inputMode="tel"
                  className={`${fieldClass} mt-3`}
                  placeholder="(00) 00000-0000"
                />
                {errors["whatsapp"] && (
                  <p className="mt-2 text-xs text-destructive">{errors["whatsapp"]}</p>
                )}
              </div>
            </div>

            <div>
              <label htmlFor="mensagem" className="eyebrow">
                Conte-nos o que você precisa
              </label>
              <textarea
                id="mensagem"
                name="mensagem"
                rows={8}
                className={`${fieldClass} mt-3 resize-y`}
                placeholder="Descreva a necessidade, o contexto e o resultado que você espera."
              />
              {errors["mensagem"] && (
                <p className="mt-2 text-xs text-destructive">{errors["mensagem"]}</p>
              )}
            </div>

            <button
              type="submit"
              disabled={sending}
              className="inline-flex items-center gap-3 bg-primary px-8 py-4 text-[0.75rem] uppercase tracking-[0.2em] text-primary-foreground transition-opacity hover:opacity-85 disabled:opacity-60"
            >
              Encontrar uma solução
            </button>
          </form>

          <aside className="space-y-10 lg:border-l lg:border-hairline lg:pl-16">
            <div>
              <h2 className="eyebrow">Prefere conversar agora?</h2>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                Fale com a Cosmos pelo WhatsApp e apresente sua necessidade em poucas linhas.
              </p>
              <a
                href="https://wa.me/?text=Ol%C3%A1%2C%20Cosmos.%20Tenho%20uma%20necessidade%20e%20gostaria%20de%20conversar."
                target="_blank"
                rel="noopener noreferrer"
                className="group mt-7 inline-flex items-center gap-3 border border-border px-6 py-4 text-[0.75rem] uppercase tracking-[0.2em] text-foreground transition-colors hover:border-accent hover:text-accent"
              >
                <MessageCircle className="size-4" />
                Falar pelo WhatsApp
              </a>
            </div>

            <div className="border-t border-hairline pt-8">
              <h2 className="eyebrow">O que acontece depois</h2>
              <ol className="mt-6 space-y-4 text-sm leading-relaxed text-muted-foreground">
                <li>01 — Entendemos a necessidade e o contexto.</li>
                <li>02 — Estruturamos a solução e o escopo.</li>
                <li>03 — Apresentamos o caminho e os próximos passos.</li>
              </ol>
            </div>

            <p className="border-t border-hairline pt-8 font-display text-xl font-light leading-snug text-foreground">
              Um contato. Uma gestão. Uma solução.
            </p>
          </aside>
        </div>
      </section>
    </>
  );
}
