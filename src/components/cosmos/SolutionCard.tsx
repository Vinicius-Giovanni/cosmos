import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import type { Solution } from "@/data/solutions";

export function SolutionCard({ solution }: { solution: Solution }) {
  return (
    <Link
      to={solution.path}
      className="hairline-cell group flex flex-col justify-between p-8 transition-colors duration-500 hover:bg-surface lg:p-10"
    >
      <div>
        <span className="eyebrow">{solution.index}</span>
        <h3 className="mt-6 font-display text-2xl font-light leading-snug text-foreground">
          {solution.title}
        </h3>
        <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{solution.short}</p>
      </div>
      <span className="mt-10 inline-flex items-center gap-2 text-[0.7rem] uppercase tracking-[0.2em] text-foreground transition-colors group-hover:text-accent">
        Conhecer solução
        <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </span>
    </Link>
  );
}
