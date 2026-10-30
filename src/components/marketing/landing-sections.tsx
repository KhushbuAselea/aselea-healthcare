import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  CalendarCheck,
  CheckCircle2,
  Globe,
  Laptop,
  LineChart,
  Mail,
  MapPin,
  Phone,
  ScanHeart,
  Smartphone,
  Sparkles,
  Stethoscope,
  Store,
  type LucideIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImg from "@/assets/hero.jpg";
import { cn } from "@/lib/utils";

const fiveServices = [
  { label: "Website", icon: Globe },
  { label: "Appointments", icon: CalendarCheck },
  { label: "Clinic Management + POS", icon: Store },
  { label: "Mobile Applications", icon: Smartphone },
  { label: "Digital Growth", icon: LineChart },
];

export function Hero() {
  return (
    <section className="hero-veil relative overflow-hidden">
      <div className="mx-auto max-w-6xl px-4 pb-20 pt-16 sm:px-6 lg:pt-24">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="animate-rise">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">
              Aselea Healthcare · by Aselea Network
            </p>
            <h1 className="mt-4 font-display text-4xl font-medium leading-[1.08] tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Your Entire Clinic.
              <br />
              <span className="text-gradient">Beautifully Connected.</span>
            </h1>
            <p className="mt-6 max-w-lg text-base leading-relaxed text-muted-foreground sm:text-lg">
              Technology that brings your clinic together. From your first discovery to the next
              follow-up.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Button size="lg" variant="hero" asChild>
                <Link to="/admin">
                  Get Started
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="#solutions">Explore Our Solutions</a>
              </Button>
            </div>
            <ul className="mt-10 flex flex-wrap gap-x-6 gap-y-3">
              {fiveServices.map((s, i) => (
                <li
                  key={s.label}
                  className={cn(
                    "animate-rise flex items-center gap-2 text-sm text-muted-foreground",
                    i === 0 && "delay-75",
                    i === 1 && "delay-150",
                    i === 2 && "delay-225",
                    i === 3 && "delay-300",
                    i === 4 && "delay-300",
                  )}
                  style={i === 4 ? { animationDelay: "375ms" } : undefined}
                >
                  <s.icon className="h-4 w-4 text-primary" />
                  {s.label}
                </li>
              ))}
            </ul>
          </div>
          <div className="animate-rise delay-150 relative">
            <div className="absolute -inset-6 rounded-3xl bg-plum-glow/20 blur-3xl" />
            <img
              src={heroImg}
              alt="Clinic connected through the Aselea platform"
              className="relative w-full rounded-3xl border border-border object-cover shadow-elegant"
              width={1024}
              height={1024}
            />
            <div className="animate-float-soft absolute -bottom-5 left-6 hidden rounded-2xl border border-border bg-card/90 px-4 py-3 shadow-elegant backdrop-blur sm:block">
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary/15">
                  <CalendarCheck className="h-4.5 w-4.5 text-primary" />
                </div>
                <div>
                  <p className="text-xs font-medium text-foreground">Appointment confirmed</p>
                  <p className="text-[11px] text-muted-foreground">Today · 4:30 PM · Video consult</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SolutionCard({
  icon: Icon,
  title,
  text,
  href,
}: {
  icon: LucideIcon;
  title: string;
  text: string;
  href?: string;
}) {
  return (
    <div className="panel group relative overflow-hidden p-6 transition-colors hover:border-primary/40">
      <div className="absolute -right-10 -top-10 h-24 w-24 rounded-full bg-primary/10 blur-2xl transition-opacity group-hover:bg-primary/20" />
      <div className="relative">
        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/12">
          <Icon className="h-5 w-5 text-primary" />
        </div>
        <h3 className="mt-4 font-display text-lg font-medium text-foreground">{title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{text}</p>
        {href ? (
          <a
            href={href}
            className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-primary opacity-0 transition-opacity group-hover:opacity-100"
          >
            Learn more <ArrowRight className="h-3.5 w-3.5" />
          </a>
        ) : null}
      </div>
    </div>
  );
}

export function Solutions() {
  return (
    <section id="solutions" className="scroll-mt-20 py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Our healthcare technology solutions"
          title="Everything a modern clinic runs on"
          text="Five connected products, one platform. Pick what you need today and grow into the rest."
        />
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          <SolutionCard
            icon={Globe}
            title="Website"
            text="Beautiful, fast clinic websites built from premium templates — with content you control."
            href="#websites"
          />
          <SolutionCard
            icon={CalendarCheck}
            title="Appointments"
            text="Online booking, smart reminders and a calendar your front desk will actually enjoy."
            href="#appointments"
          />
          <SolutionCard
            icon={Store}
            title="Clinic Management + POS"
            text="Patients, billing, inventory and point of sale — tied together in one clean workspace."
            href="#clinic-management"
          />
          <SolutionCard
            icon={Smartphone}
            title="Mobile Applications"
            text="Your own branded patient app for bookings, records and follow-up care."
            href="#mobile-apps"
          />
          <SolutionCard
            icon={LineChart}
            title="Digital Growth"
            text="SEO, local discovery and campaigns that turn searches into appointments."
            href="#digital-growth"
          />
          <div className="panel relative overflow-hidden border-primary/30 bg-gradient-to-br from-primary/15 via-card to-card p-6">
            <Sparkles className="h-5 w-5 text-primary" />
            <h3 className="mt-4 font-display text-lg font-medium text-foreground">
              One connected platform
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Every product shares the same patient record, so nothing falls through the cracks.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function SectionHeading({
  eyebrow,
  title,
  text,
}: {
  eyebrow: string;
  title: string;
  text?: string;
}) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">{eyebrow}</p>
      <h2 className="mt-3 font-display text-3xl font-medium tracking-tight text-foreground sm:text-4xl">
        {title}
      </h2>
      {text ? <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">{text}</p> : null}
    </div>
  );
}

function FeatureBlock({
  id,
  eyebrow,
  title,
  text,
  bullets,
  icon: Icon,
  reverse,
}: {
  id: string;
  eyebrow: string;
  title: string;
  text: string;
  bullets: string[];
  icon: LucideIcon;
  reverse?: boolean;
}) {
  return (
    <section id={id} className="scroll-mt-20 border-t border-border/50 py-20">
      <div
        className={cn(
          "mx-auto grid max-w-6xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-2",
        )}
      >
        <div className={cn(reverse && "lg:order-2")}>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">{eyebrow}</p>
          <h2 className="mt-3 font-display text-3xl font-medium tracking-tight text-foreground">
            {title}
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">{text}</p>
          <ul className="mt-6 space-y-3">
            {bullets.map((b) => (
              <li key={b} className="flex items-start gap-2.5 text-sm text-foreground/90">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                {b}
              </li>
            ))}
          </ul>
        </div>
        <div className={cn("relative", reverse && "lg:order-1")}>
          <div className="panel hero-veil relative flex h-64 items-center justify-center overflow-hidden sm:h-80">
            <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-primary/15 shadow-glow">
              <Icon className="h-9 w-9 text-primary" />
            </div>
            <div className="absolute bottom-5 left-5 right-5 flex gap-2">
              {bullets.slice(0, 3).map((b) => (
                <div
                  key={b}
                  className="flex-1 rounded-xl border border-border/70 bg-card/70 px-3 py-2 text-[11px] leading-snug text-muted-foreground backdrop-blur"
                >
                  {b}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export const WebsiteSolutions = () => (
  <FeatureBlock
    id="websites"
    eyebrow="Website solutions for clinics"
    title="A website that feels like your best room"
    text="Choose a premium template, hand us your content and go live in days — not months. Every site is fast, mobile-first and built to convert visitors into appointments."
    bullets={[
      "Curated, healthcare-specific templates",
      "Edit text, images and sections yourself",
      "Custom domain, hosting and SSL included",
    ]}
    icon={Laptop}
  />
);

export const AppointmentManagement = () => (
  <FeatureBlock
    id="appointments"
    eyebrow="Appointment management"
    title="Bookings without the back-and-forth"
    text="Patients book online, your calendar updates instantly and reminders go out automatically. No-shows drop, chairs stay full."
    bullets={[
      "Online booking on your website and app",
      "Automatic SMS and email reminders",
      "Doctor-wise schedules and video consults",
    ]}
    icon={CalendarCheck}
    reverse
  />
);

export const ClinicManagement = () => (
  <FeatureBlock
    id="clinic-management"
    eyebrow="Clinic management + POS"
    title="The front desk, reimagined"
    text="Patient records, prescriptions, billing, stock and point of sale in one workspace — designed with (and for) real clinic teams."
    bullets={[
      "Unified patient records across every touchpoint",
      "Billing, invoices and POS in a few taps",
      "Pharmacy and inventory tracking built in",
    ]}
    icon={Store}
  />
);

export const MobileApplications = () => (
  <FeatureBlock
    id="mobile-apps"
    eyebrow="Mobile applications"
    title="Your clinic, in your patient's pocket"
    text="Launch a branded patient app for appointments, reports and follow-up care — fully synced with your website and front desk."
    bullets={[
      "Your logo, your colours, your app",
      "Bookings, reports and prescriptions",
      "Push notifications for reminders and offers",
    ]}
    icon={Smartphone}
    reverse
  />
);

export const DigitalGrowth = () => (
  <FeatureBlock
    id="digital-growth"
    eyebrow="Digital growth"
    title="Be found when it matters"
    text="We help clinics rank locally, show up beautifully on search and turn attention into booked appointments — measured, not guessed."
    bullets={[
      "Local SEO and Google Business management",
      "Performance dashboards for every channel",
      "Campaigns crafted for healthcare compliance",
    ]}
    icon={LineChart}
  />
);

const whyPoints = [
  {
    icon: ScanHeart,
    title: "Healthcare-native",
    text: "Built exclusively for clinics and hospitals — not a generic website tool retrofitted.",
  },
  {
    icon: Sparkles,
    title: "Premium by default",
    text: "Design standards clinics rarely get: crafted templates, considered typography, zero clutter.",
  },
  {
    icon: Stethoscope,
    title: "One platform, many tenants",
    text: "Every clinic gets an isolated space — branding, data and users that never mix.",
  },
  {
    icon: LineChart,
    title: "Measured outcomes",
    text: "From discovery to follow-up, every step is tracked so growth is a number, not a feeling.",
  },
];

export function WhyAselea() {
  return (
    <section id="why" className="scroll-mt-20 border-t border-border/50 py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Why choose Aselea Healthcare?"
          title="A technology partner, not just a vendor"
          text="We run the technology so your team can run the clinic."
        />
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {whyPoints.map((w) => (
            <div key={w.title} className="panel p-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/12">
                <w.icon className="h-5 w-5 text-primary" />
              </div>
              <h3 className="mt-4 font-display text-base font-medium text-foreground">{w.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{w.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const steps = [
  {
    n: "01",
    title: "Share your clinic's story",
    text: "Tell us about your practice, services and team. We set up your workspace and branding.",
  },
  {
    n: "02",
    title: "Choose your template",
    text: "Pick from premium, healthcare-specific templates and we tailor it to your brand.",
  },
  {
    n: "03",
    title: "Review & approve",
    text: "See your live website preview, request changes and approve when it feels right.",
  },
  {
    n: "04",
    title: "Go live & grow",
    text: "Publish on your own domain, take bookings and watch appointments grow.",
  },
];

export function HowItWorks() {
  return (
    <section id="platform" className="scroll-mt-20 border-t border-border/50 py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="How our platform works"
          title="From first call to live clinic, in four steps"
        />
        <div className="mt-12 grid gap-5 md:grid-cols-4">
          {steps.map((s) => (
            <div key={s.n} className="relative">
              <div className="panel h-full p-6">
                <p className="font-display text-3xl font-medium text-primary/60">{s.n}</p>
                <h3 className="mt-3 font-display text-base font-medium text-foreground">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.text}</p>
              </div>
              <div className="hairline absolute -right-2.5 top-1/2 hidden w-5 md:block" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ContactSection() {
  return (
    <section id="contact" className="scroll-mt-20 border-t border-border/50 py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="panel hero-veil overflow-hidden">
          <div className="grid lg:grid-cols-[1fr_1.1fr]">
            <div className="p-8 sm:p-10">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                Contact
              </p>
              <h2 className="mt-3 font-display text-3xl font-medium tracking-tight text-foreground">
                Let's connect your clinic
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                Tell us a little about your practice and a member of the Aselea team will reach out
                within one business day.
              </p>
              <div className="mt-8 space-y-4 text-sm">
                <div className="flex items-center gap-3 text-muted-foreground">
                  <Mail className="h-4 w-4 text-primary" /> hello@aselea.network
                </div>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <Phone className="h-4 w-4 text-primary" /> +91 90000 12345
                </div>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <MapPin className="h-4 w-4 text-primary" /> Aselea Network · Bengaluru, India
                </div>
              </div>
            </div>
            <form
              className="border-t border-border/60 p-8 sm:p-10 lg:border-l lg:border-t-0"
              onSubmit={(e) => {
                e.preventDefault();
                const form = e.currentTarget;
                form.reset();
                const note = form.querySelector("[data-sent]") as HTMLElement | null;
                if (note) note.style.opacity = "1";
              }}
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="block text-sm">
                  <span className="mb-1.5 block text-xs font-medium text-muted-foreground">Full name</span>
                  <input
                    required
                    className="w-full rounded-xl border border-input bg-background px-3.5 py-2.5 text-sm outline-none transition-colors focus:border-primary"
                    placeholder="Dr. Ananya Bose"
                  />
                </label>
                <label className="block text-sm">
                  <span className="mb-1.5 block text-xs font-medium text-muted-foreground">Clinic name</span>
                  <input
                    required
                    className="w-full rounded-xl border border-input bg-background px-3.5 py-2.5 text-sm outline-none transition-colors focus:border-primary"
                    placeholder="Bloom Women's Clinic"
                  />
                </label>
                <label className="block text-sm">
                  <span className="mb-1.5 block text-xs font-medium text-muted-foreground">Email</span>
                  <input
                    required
                    type="email"
                    className="w-full rounded-xl border border-input bg-background px-3.5 py-2.5 text-sm outline-none transition-colors focus:border-primary"
                    placeholder="you@clinic.com"
                  />
                </label>
                <label className="block text-sm">
                  <span className="mb-1.5 block text-xs font-medium text-muted-foreground">Phone</span>
                  <input
                    className="w-full rounded-xl border border-input bg-background px-3.5 py-2.5 text-sm outline-none transition-colors focus:border-primary"
                    placeholder="+91 …"
                  />
                </label>
                <label className="block text-sm sm:col-span-2">
                  <span className="mb-1.5 block text-xs font-medium text-muted-foreground">
                    What are you looking for?
                  </span>
                  <textarea
                    rows={4}
                    className="w-full resize-none rounded-xl border border-input bg-background px-3.5 py-2.5 text-sm outline-none transition-colors focus:border-primary"
                    placeholder="A new website, online appointments, full clinic management…"
                  />
                </label>
              </div>
              <div className="mt-5 flex items-center gap-4">
                <Button type="submit" variant="hero">
                  Send message
                  <ArrowRight className="h-4 w-4" />
                </Button>
                <p
                  data-sent
                  className="text-sm text-primary opacity-0 transition-opacity duration-300"
                >
                  Thank you — we'll be in touch shortly.
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
