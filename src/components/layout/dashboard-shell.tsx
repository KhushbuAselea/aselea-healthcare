import { NavLink, Outlet } from "@tanstack/react-router";
import {
  CalendarDays,
  ChevronRight,
  CircleDollarSign,
  ClipboardList,
  Globe,
  Image,
  LayoutDashboard,
  LifeBuoy,
  LogOut,
  MessageSquare,
  Settings,
  Sparkles,
  Stethoscope,
  Users,
  Wand2,
  BarChart3,
  Globe2,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const AseleaMark = ({ compact = false }: { compact?: boolean }) => (
  <div className="flex items-center gap-2.5">
    <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary/15">
      <Sparkles className="h-4.5 w-4.5 text-primary" />
    </div>
    {!compact && (
      <div className="leading-tight">
        <p className="font-display text-[15px] font-semibold tracking-tight text-foreground">
          Aselea Healthcare
        </p>
        <p className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
          Aselea Network
        </p>
      </div>
    )}
  </div>
);

export interface NavItem {
  label: string;
  icon: LucideIcon;
  to: string;
  end?: boolean;
}

export function DashboardShell({
  variant,
  items,
  children,
  footerNote,
}: {
  variant: "admin" | "client";
  items: NavItem[];
  children: React.ReactNode;
  footerNote?: string;
}) {
  const isAdmin = variant === "admin";
  return (
    <div className="flex min-h-screen bg-background">
      {/* Sidebar */}
      <aside className="fixed inset-y-0 left-0 z-30 hidden w-64 flex-col border-r border-border bg-sidebar lg:flex">
        <div className="flex h-16 items-center border-b border-border px-5">
          <AseleaMark />
        </div>
        <nav className="scrollbar-slim flex-1 space-y-1 overflow-y-auto px-3 py-4">
          {items.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.end}
              className={({ isActive }) =>
                cn(
                  "group flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-colors",
                  isActive
                    ? "bg-primary/12 text-primary"
                    : "text-muted-foreground hover:bg-sidebar-accent hover:text-foreground",
                )
              }
            >
              {({ isActive }) => (
                <>
                  <item.icon
                    className={cn("h-4.5 w-4.5", isActive ? "text-primary" : "text-blush/70")}
                  />
                  <span className="flex-1">{item.label}</span>
                  {isActive && <ChevronRight className="h-3.5 w-3.5" />}
                </>
              )}
            </NavLink>
          ))}
        </nav>
        <div className="border-t border-border p-3">
          <div className="mb-2 rounded-xl bg-card/60 px-3 py-2.5">
            <p className="text-[11px] text-muted-foreground">
              {footerNote ?? "Platform v1.0 — mock data"}
            </p>
          </div>
          <Button
            variant="ghost"
            className="w-full justify-start gap-3 text-muted-foreground hover:text-foreground"
            asChild
          >
            <a href="/">
              <LogOut className="h-4 w-4" />
              Back to site
            </a>
          </Button>
        </div>
      </aside>

      {/* Top bar (mobile) */}
      <div className="fixed inset-x-0 top-0 z-40 flex h-16 items-center justify-between border-b border-border bg-sidebar/95 px-4 backdrop-blur lg:hidden">
        <AseleaMark />
      </div>

      {/* Content */}
      <main className="min-w-0 flex-1 px-4 pb-12 pt-20 lg:pl-72 lg:pr-8 lg:pt-8">
        <div className="mx-auto max-w-6xl">{children}</div>
      </main>
    </div>
  );
}

export const adminNav: NavItem[] = [
  { label: "Overview", icon: LayoutDashboard, to: "/admin", end: true },
  { label: "Clients", icon: Users, to: "/admin/clients" },
  { label: "Websites", icon: Globe, to: "/admin/websites" },
  { label: "Templates", icon: LayoutDashboard, to: "/admin/templates" },
  { label: "Website Builder", icon: Wand2, to: "/admin/builder" },
  { label: "Domains", icon: Globe2, to: "/admin/domains" },
  { label: "Appointments", icon: CalendarDays, to: "/admin/appointments" },
  { label: "Subscriptions", icon: CircleDollarSign, to: "/admin/subscriptions" },
  { label: "Support", icon: LifeBuoy, to: "/admin/support" },
  { label: "Settings", icon: Settings, to: "/admin/settings" },
];

export const clientNav: NavItem[] = [
  { label: "Overview", icon: LayoutDashboard, to: "/client", end: true },
  { label: "My Website", icon: Globe, to: "/client/my-website" },
  { label: "Website Editor", icon: Wand2, to: "/client/website-editor" },
  { label: "Doctors", icon: Stethoscope, to: "/client/doctors" },
  { label: "Services", icon: ClipboardList, to: "/client/services" },
  { label: "Appointments", icon: CalendarDays, to: "/client/appointments" },
  { label: "Inquiries", icon: MessageSquare, to: "/client/inquiries" },
  { label: "Media Library", icon: Image, to: "/client/media-library" },
  { label: "Analytics", icon: BarChart3, to: "/client/analytics" },
  { label: "Billing", icon: CircleDollarSign, to: "/client/billing" },
  { label: "Support", icon: LifeBuoy, to: "/client/support" },
];

export function AdminLayout() {
  return (
    <DashboardShell variant="admin" items={adminNav} footerNote="Super Admin · Platform v1.0">
      <Outlet />
    </DashboardShell>
  );
}

export function ClientLayout() {
  return (
    <DashboardShell variant="client" items={clientNav} footerNote="Rosewood Dental Studio · Professional plan">
      <Outlet />
    </DashboardShell>
  );
}
