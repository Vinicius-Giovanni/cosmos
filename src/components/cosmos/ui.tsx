import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { ArrowRight } from "lucide-react";
import { trackEvent } from "@/lib/analytics";

export function CtaPrimary({
  to,
  children,
  className = "",
}: {
  to: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <Link
      to={to}
      onClick={() => {
        if (to === "/contato") trackEvent("click_contact");
      }}
      className={`group inline-flex items-center gap-3 bg-primary px-7 py-4 text-[0.75rem] uppercase tracking-[0.2em] text-primary-foreground transition-opacity hover:opacity-85 ${className}`}
    >
      {children}
      <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
    </Link>
  );
}

export function CtaGhost({
  to,
  children,
  className = "",
}: {
  to: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <Link
      to={to}
      className={`group inline-flex items-center gap-3 border border-border px-7 py-4 text-[0.75rem] uppercase tracking-[0.2em] text-foreground transition-colors hover:border-accent hover:text-accent ${className}`}
    >
      {children}
      <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
    </Link>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  lead,
  align = "left",
}: {
  eyebrow: string;
  title: ReactNode;
  lead?: ReactNode;
  align?: "left" | "center";
}) {
  return (
    <div className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="display-lg mt-6 text-foreground">{title}</h2>
      {lead && <p className="mt-6 text-base leading-relaxed text-muted-foreground">{lead}</p>}
    </div>
  );
}

export function PageHero({
  eyebrow,
  title,
  lead,
}: {
  eyebrow: string;
  title: ReactNode;
  lead?: ReactNode;
}) {
  return (
    <section className="relative border-b border-hairline pb-20 pt-36 lg:pb-28 lg:pt-48">
      <div className="star-field pointer-events-none absolute inset-0 opacity-60" aria-hidden />
      <div className="shell relative">
        <p className="eyebrow reveal">{eyebrow}</p>
        <h1 className="display-xl reveal mt-8 max-w-4xl text-foreground">{title}</h1>
        {lead && (
          <p className="reveal mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            {lead}
          </p>
        )}
      </div>
    </section>
  );
}

export function FinalCta() {
  return (
    <section className="relative overflow-hidden border-t border-hairline">
      <div className="star-field pointer-events-none absolute inset-0 opacity-70" aria-hidden />
      <div className="shell relative py-28 text-center lg:py-40">
        <p className="eyebrow">Próximo passo</p>
        <h2 className="display-xl mx-auto mt-8 max-w-3xl text-foreground">Tem uma necessidade?</h2>
        <p className="mx-auto mt-7 max-w-xl text-lg text-muted-foreground">
          Conte para a Cosmos. Nós encontramos o caminho.
        </p>
        <div className="mt-12 flex justify-center">
          <CtaPrimary to="/contato">Falar com a Cosmos</CtaPrimary>
        </div>
      </div>
    </section>
  );
}
