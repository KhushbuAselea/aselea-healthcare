import { Link } from "@tanstack/react-router";
import { Menu, Sparkles, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function AseleaMark({ light = false }: { light?: boolean }) {
  return (
    <Link to="/" className="flex items-center gap-2.5">
      <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary/15">
        <Sparkles className="h-4.5 w-4.5 text-primary" />
      </div>
      <div className="leading-tight">
        <p className={cn("font-display text-[15px] font-semibold tracking-tight", light ? "text-foreground" : "text-foreground")}>
          Aselea Healthcare
        </p>
        <p className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
          by Aselea Network
        </p>
      </div>
    </Link>
  );
}

const navLinks = [
  { label: "Solutions", href: "#solutions" },
  { label: "Websites", href: "#websites" },
  { label: "Platform", href: "#platform" },
  { label: "Why Aselea", href: "#why" },
  { label: "Contact", href: "#contact" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <AseleaMark />
        <nav className="hidden items-center gap-7 md:flex">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {l.label}
            </a>
          ))}
        </nav>
        <div className="hidden items-center gap-2 md:flex">
          <Button variant="ghost" asChild>
            <Link to="/admin" className="text-muted-foreground hover:text-foreground">
              Super Admin
            </Link>
          </Button>
          <Button variant="hero" asChild>
            <Link to="/admin">Get Started</Link>
          </Button>
        </div>
        <button
          className="rounded-lg p-2 text-foreground md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>
      {open && (
        <div className="border-t border-border bg-background px-4 pb-4 pt-2 md:hidden">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block rounded-lg px-2 py-2.5 text-sm font-medium text-muted-foreground hover:text-foreground"
            >
              {l.label}
            </a>
          ))}
          <Button variant="hero" className="mt-3 w-full" asChild>
            <Link to="/admin">Get Started</Link>
          </Button>
        </div>
      )}
    </header>
  );
}

export function SiteFooter() {
  const cols = [
    {
      title: "Solutions",
      links: ["Clinic Websites", "Appointment Management", "Clinic Management + POS", "Mobile Applications", "Digital Growth"],
    },
    {
      title: "Company",
      links: ["About Aselea Network", "Why Aselea", "How It Works", "Contact"],
    },
    {
      title: "Get Started",
      links: ["Super Admin", "Client Dashboard", "Template Library", "Website Builder"],
    },
  ];
  return (
    <footer className="border-t border-border/60 bg-card/40">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="grid gap-10 md:grid-cols-[1.4fr_repeat(3,1fr)]">
          <div>
            <AseleaMark />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
              Technology that brings your clinic together. From your first discovery to the next
              follow-up.
            </p>
          </div>
          {cols.map((c) => (
            <div key={c.title}>
              <p className="text-xs font-semibold uppercase tracking-widest text-foreground">
                {c.title}
              </p>
              <ul className="mt-4 space-y-2.5">
                {c.links.map((l) => (
                  <li key={l}>
                    {l === "Super Admin" || l === "Client Dashboard" || l === "Template Library" || l === "Website Builder" ? (
                      <Link
                        to={l === "Client Dashboard" ? "/client" : "/admin"}
                        className="text-sm text-muted-foreground transition-colors hover:text-primary"
                      >
                        {l}
                      </Link>
                    ) : (
                      <span className="text-sm text-muted-foreground">{l}</span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-12 flex flex-wrap items-center justify-between gap-3 border-t border-border/60 pt-6">
          <p className="text-xs text-muted-foreground">
            © 2026 Aselea Network. Aselea Healthcare — by Aselea Network.
          </p>
          <p className="text-xs text-muted-foreground">Privacy · Terms · Security</p>
        </div>
      </div>
    </footer>
  );
}
