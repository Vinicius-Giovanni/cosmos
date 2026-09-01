import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/cosmos-logo.png.asset.json";

const links = [
  { to: "/solucoes", label: "Soluções" },
  { to: "/como-funciona", label: "Como funciona" },
  { to: "/cases", label: "Cases" },
  { to: "/sobre", label: "Sobre" },
  { to: "/contato", label: "Contato" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${
        scrolled || open
          ? "border-b border-hairline bg-background/85 backdrop-blur-xl"
          : "border-b border-transparent"
      }`}
    >
      <div className="shell grid h-[72px] grid-cols-[minmax(0,1fr)_auto] items-center gap-4 lg:h-20">
        <Link to="/" className="flex min-w-0 items-center" aria-label="Cosmos — página inicial">
          <img src={logo.url} alt="Cosmos" className="h-7 w-auto shrink-0 lg:h-8" />
        </Link>

        <nav className="hidden items-center gap-9 lg:flex">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="link-underline text-[0.8125rem] tracking-wide text-muted-foreground transition-colors hover:text-foreground"
              activeProps={{ className: "text-foreground" }}
            >
              {l.label}
            </Link>
          ))}
          <Link
            to="/contato"
            className="border border-border px-5 py-2.5 text-[0.75rem] uppercase tracking-[0.18em] text-foreground transition-colors hover:border-accent hover:text-accent"
          >
            Encontrar uma solução
          </Link>
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
          className="shrink-0 p-2 text-foreground lg:hidden"
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {open && (
        <nav className="shell flex flex-col gap-1 border-t border-hairline pb-8 pt-4 lg:hidden">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              onClick={() => setOpen(false)}
              className="border-b border-hairline py-4 font-display text-lg font-light text-foreground"
            >
              {l.label}
            </Link>
          ))}
          <Link
            to="/contato"
            onClick={() => setOpen(false)}
            className="mt-6 border border-border px-5 py-4 text-center text-[0.75rem] uppercase tracking-[0.18em]"
          >
            Encontrar uma solução
          </Link>
        </nav>
      )}
    </header>
  );
}
