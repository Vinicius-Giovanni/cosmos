import { Link } from "@tanstack/react-router";
import logo from "@/assets/cosmos-logo.png.asset.json";
import { solutions } from "@/data/solutions";

export function Footer() {
  return (
    <footer className="border-t border-hairline">
      <div className="shell grid gap-14 py-20 md:grid-cols-[1.4fr_1fr_1fr] md:py-24">
        <div>
          <img src={logo.url} alt="Cosmos" className="h-7 w-auto" />
          <p className="mt-8 max-w-sm text-sm leading-relaxed text-muted-foreground">
            Empresa de soluções. Um único ponto de contato entre a sua necessidade e os
            especialistas, tecnologias e recursos que a resolvem.
          </p>
          <p className="mt-8 font-display text-base font-light tracking-wide text-foreground">
            Um contato. Uma gestão. Uma solução.
          </p>
        </div>

        <div>
          <h2 className="eyebrow">Soluções</h2>
          <ul className="mt-6 space-y-3">
            {solutions.map((s) => (
              <li key={s.slug}>
                <Link
                  to={s.path}
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="eyebrow">Cosmos</h2>
          <ul className="mt-6 space-y-3">
            {[
              { to: "/como-funciona", label: "Como funciona" },
              { to: "/cases", label: "Cases" },
              { to: "/sobre", label: "Sobre" },
              { to: "/contato", label: "Contato" },
            ].map((l) => (
              <li key={l.to}>
                <Link
                  to={l.to}
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="shell flex flex-col gap-2 border-t border-hairline py-8 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
        <span>© {new Date().getFullYear()} Cosmos. Todos os direitos reservados.</span>
        <span>Você apresenta a necessidade. Nós encontramos o caminho.</span>
      </div>
    </footer>
  );
}