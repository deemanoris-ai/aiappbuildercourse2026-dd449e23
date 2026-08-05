import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { EnrollButton } from "@/components/EnrollButton";
import { Reveal } from "@/components/Reveal";
import { COURSE_PRICE_INR } from "@/lib/checkout";
import heroBg from "@/assets/hero-bg.jpg";
import {
  Smartphone,
  Globe,
  UploadCloud,
  Repeat,
  BadgeIndianRupee,
  Megaphone,
  Sparkles,
  Star,
  Briefcase,
  Building2,
  RefreshCw,
  Gauge,
  Check,
  X,
  Video,
  BookOpen,
  Target,
  Package,
  Database,
  Layers,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "AI App Builder Course — Build Android Apps with AI, No Code" },
      {
        name: "description",
        content:
          "Learn to build, publish and monetize Android apps using AI tools with live 1-to-1 mentorship. Lifetime access, bonus courses and resources for ₹499.",
      },
      { property: "og:title", content: "AI App Builder Course — Build Android Apps with AI" },
      {
        property: "og:description",
        content:
          "Step-by-step AI app building with live mentorship, lifetime access and free bonus courses. Enroll for ₹499.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Landing,
});

const proofPoints = [
  "Beginner Friendly Course in Hindi",
  "Complete Guidence",
  "Lifetime Course Access",
  "Free Meta ads Course",
  "Focused on making consistent income ",
];

const learnItems = [
  { icon: Smartphone, title: "Build Android Apps using AI", text: "Go from an idea to a working app with modern AI tooling." },
  { icon: Globe, title: "Convert Websites into Apps", text: "Turn existing web experiences into installable Android apps." },
  { icon: UploadCloud, title: "Publish on Google Play Store", text: "Prepare listings, assets, releases and start your income journey!" },
  { icon: Repeat, title: "Add Subscriptions inside Apps", text: "Set up recurring plans and manage access inside your app." },
  { icon: BadgeIndianRupee, title: "Build Paid Apps", text: "Structure one-time purchase apps and price them sensibly." },
  { icon: Megaphone, title: "Integrate Ads for Monetization", text: "Place ad formats without ruining the user experience." },
  { icon: Sparkles, title: "Use Modern AI Tools Efficiently", text: "Prompting workflows that keep your build fast and clean." },
  { icon: Briefcase, title: "Create Client Apps", text: "Scope, build and deliver apps for real client requirements." },
  { icon: Building2, title: "Rent Apps to Businesses", text: "Understand the app-rental model and how it is structured." },
  { icon: RefreshCw, title: "Update Apps Easily", text: "Ship changes and version updates without the usual friction." },
  { icon: Gauge, title: "Build Faster without Coding", text: "A repeatable workflow that removes the technical bottleneck." },
];

const bonuses = [
  {
    icon: Megaphone,
    tag: "Bonus 01",
    title: "Digital Marketing Course",
    text: "Learn marketing fundamentals to promote products and services online.",
  },
  {
    icon: Target,
    tag: "Bonus 02",
    title: "Meta Ads Course",
    text: "Understand how to create and optimize Meta advertising campaigns.",
  },
  {
    icon: Package,
    tag: "Bonus 03",
    title: "Digital Product Course",
    text: "Learn how digital products are created, packaged and sold.",
  },
  {
    icon: Database,
    tag: "Bonus 04",
    title: "Lead Database",
    text: "Access a business lead database with contact information for outreach. Use any contact data responsibly and in accordance with applicable laws.",
  },
  {
    icon: Layers,
    tag: "Bonus 05",
    title: "Resources Vault",
    text: "AI Tools, Useful Websites, Templates, Prompt Library and Productivity Resources.",
  },
];

const audience = [
  "Students",
  "Freelancers",
  "Business Owners",
  "Beginners",
  "Content Creators",
  "Anyone who wants to learn AI-powered app development",
];

const modules: { num: string; title: string }[] = [
  { num: "Module 1", title: "Introduction" },
  { num: "Module 2", title: "Using AI to Build Apps" },
  { num: "Module 3", title: "Design Beautiful Interfaces" },
  { num: "Module 4", title: "Publishing to Play Store" },
  { num: "Module 5", title: "Subscriptions & Payments" },
  { num: "Module 6", title: "Ads & Monetization" },
  { num: "Module 7", title: "Client Projects" },
  { num: "Module 8", title: "Growing with AI" },
];

const faqs: { q: string; a: string }[] = [
  { q: "Can beginners join?", a: "Yes. The course starts from the basics and assumes no prior experience." },
  { q: "Do I need coding knowledge?", a: "No. Every concept is taught using AI-powered, no-code workflows." },
  { q: "Will I build real apps?", a: "Yes. You build working Android apps as you move through the modules." },
  { q: "Is mentorship on a course?", a: "Yes. You get live 1-to-1 guidance throughout the learning process." },
  {
    q: "Will I receive future updates?",
    a: "You get lifetime access to the course material. Whenever a module is updated, the updated version is available inside your existing access.",
  },
];

const navLinks: { label: string; href: string }[] = [
  { label: "Curriculum", href: "#curriculum" },
  { label: "What You Learn", href: "#learn" },
  { label: "Bonuses", href: "#bonuses" },
  { label: "FAQ", href: "#faq" },
];

function Landing() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="min-h-screen overflow-x-hidden pb-24 md:pb-0">
      {/* Sticky nav */}
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          scrolled ? "glass" : "bg-transparent"
        }`}
      >
        <nav className="mx-auto grid max-w-6xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 py-3.5 sm:flex sm:justify-between">
          <a href="#top" className="flex min-w-0 items-center gap-2.5">
            <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-[image:var(--gradient-primary)]">
              <Sparkles className="h-4 w-4 text-primary-foreground" />
            </span>
            <span className="truncate font-display text-sm font-bold tracking-tight sm:text-base">
              AI App Builder Course
            </span>
          </a>
          <div className="hidden items-center gap-7 lg:flex">
            {navLinks.map(({ label, href }) => (
              <a
                key={href}
                href={href}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {label}
              </a>
            ))}
          </div>
          <EnrollButton className="hidden md:inline-flex" />
        </nav>
      </header>

      {/* Hero */}
      <section id="top" className="relative isolate px-5 pt-32 pb-20 sm:pt-40 sm:pb-28">
        <img
          src={heroBg}
          alt=""
          aria-hidden="true"
          width={1536}
          height={1024}
          className="pointer-events-none absolute inset-0 -z-10 h-full w-full scale-110 object-cover opacity-10 blur-2xl"
        />
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(60%_50%_at_50%_0%,color-mix(in_oklab,var(--primary)_22%,transparent),transparent)]" />
        <div className="mx-auto max-w-4xl text-center">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-1.5 text-xs font-medium tracking-wide text-muted-foreground glass">
              <Video className="h-3.5 w-3.5 text-primary-glow" />
              Complete Mentorship included
            </span>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="mt-7 text-4xl leading-[1.05] font-bold sm:text-6xl">
              Build Professional Android Apps with AI
              <span className="mt-2 block text-gradient">No Coding Required.</span>
            </h1>
          </Reveal>
          <Reveal delay={120}>
            <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-border px-4 py-1.5 text-sm font-medium text-foreground glass">
              <Star className="h-4 w-4 fill-primary text-primary" />
              <span>351+ students enrolled</span>
            </div>
          </Reveal>
          <Reveal delay={160}>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              Learn step-by-step how to build, publish and monetize Android apps using AI tools—even
              if you've never written a single line of code.
            </p>
          </Reveal>
          <Reveal delay={240}>
            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <EnrollButton size="lg" label="Get Course" className="w-full sm:w-auto" />
              <a
                href="#curriculum"
                className="inline-flex w-full items-center justify-center rounded-full border border-border px-8 py-4 text-base font-semibold transition-colors hover:bg-accent sm:w-auto"
              >
                View Curriculum
              </a>
            </div>
            <p className="mt-4 text-sm text-muted-foreground">
              One-time payment of{" "}
              <span className="font-semibold text-foreground">₹{COURSE_PRICE_INR}</span> · Lifetime
              access
            </p>
          </Reveal>
          <Reveal delay={320}>
            <div className="mt-12 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-5">
              {proofPoints.map((point) => (
                <div
                  key={point}
                  className="flex items-center gap-2.5 rounded-2xl px-4 py-3.5 text-left text-sm font-medium glass"
                >
                  <Check className="h-4 w-4 shrink-0 text-success" />
                  <span className="min-w-0">{point}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* What you will learn */}
      <Section id="learn">
        <SectionHead
          eyebrow="Curriculum outcomes"
          title="What You Will Learn"
          text="See What Things Are Included in Your Course!"
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {learnItems.map((item, i) => (
            <Reveal key={item.title} delay={(i % 3) * 80}>
              <div className="group h-full surface-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40">
                <span className="grid h-11 w-11 place-items-center rounded-2xl bg-[image:var(--gradient-primary)]">
                  <item.icon className="h-5 w-5 text-primary-foreground" />
                </span>
                <h3 className="mt-5 text-base font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Double refund guarantee */}
      <Section id="guarantee">
        <Reveal>
          <div className="surface-card relative overflow-hidden p-8 text-center sm:p-12">
            <div className="pointer-events-none absolute inset-x-0 -top-32 h-64 bg-[radial-gradient(50%_100%_at_50%_100%,color-mix(in_oklab,var(--primary)_35%,transparent),transparent)]" />
            <Star className="mx-auto h-8 w-8 text-primary-glow" />
            <h2 className="mt-6 text-3xl font-bold sm:text-5xl">Double Refund Guarantee</h2>
            <p className="mx-auto mt-5 max-w-2xl text-base text-muted-foreground">
              Build and launch a real app within your first 3 months. If you don't feel the course
              delivered value, we'll refund 2x your investment — no questions asked*.
            </p>
          </div>
        </Reveal>
      </Section>

      {/* Why this course */}
      <Section id="why">
        <Reveal>
          <h2 className="max-w-3xl text-3xl font-bold sm:text-5xl">
            Stop Watching Tutorials.
            <span className="block text-gradient">Start Building Real Apps.</span>
          </h2>
        </Reveal>
        <div className="mt-10 grid gap-5 md:grid-cols:3">
          {[
            {
              title: "No experience needed",
              text: "You don't need coding experience or a technical background. Every step is explained from scratch in plain language.",
            },
            {
              title: "Everything Practical, not theoretical",
              text: "You build real Android apps as you learn, instead of collecting scattered tutorials you never apply.",
            },
            {
              title: "Skills you can apply",
              text: "Learn skills that can be applied to freelancing, client work, digital products and app businesses.",
            },
          ].map((item, i) => (
            <Reveal key={item.title} delay={i * 90}>
              <div className="h-full surface-card p-7">
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Live mentorship */}
      <Section id="mentorship">
        <Reveal>
          <div className="surface-card relative overflow-hidden p-8 sm:p-14">
            <div className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full bg-[image:var(--gradient-primary)] opacity-20 blur-3xl" />
            <span className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-1.5 text-xs font-medium text-muted-foreground">
              <Video className="h-3.5 w-3.5 text-primary-glow" />
              Complete Mentorship
            </span>
            <h2 className="mt-6 max-w-2xl text-3xl font-bold sm:text-4xl">24/7 Guidance by Founder himself.</h2>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {[
                "You'll receive personal guidance throughout the learning process.",
                "Every concept is explained from scratch.",
                "No coding experience required.",
                "Learn at your own pace.",
              ].map((line) => (
                <div key={line} className="flex items-start gap-3 rounded-2xl p-4 glass">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-success" />
                  <p className="min-w-0 text-sm leading-relaxed">{line}</p>
                </div>
              ))}
            </div>
            <div className="mt-9">
              <EnrollButton size="lg" />
            </div>
          </div>
        </Reveal>
      </Section>

      {/* Bonuses */}
      <Section id="bonuses">
        <SectionHead
          eyebrow="Included at no extra cost"
          title="Free Bonus Stack"
          text="Five additional resources included with your enrollment."
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {bonuses.map((bonus, i) => (
            <Reveal key={bonus.title} delay={(i % 3) * 80}>
              <div className="h-full surface-card p-7 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40">
                <div className="flex items-center justify-between gap-3">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl border border-border">
                    <bonus.icon className="h-5 w-5 text-primary-glow" />
                  </span>
                  <span className="text-xs font-semibold tracking-widest text-muted-foreground uppercase">
                    {bonus.tag}
                  </span>
                </div>
                <h3 className="mt-5 text-lg font-semibold">{bonus.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{bonus.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Who is this for */}
      <Section id="audience">
        <SectionHead eyebrow="Fit check" title="Who Is This For" />
        <div className="mt-10 flex flex-wrap gap-3">
          {audience.map((item, i) => (
            <Reveal key={item} delay={i * 60}>
              <span className="inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-medium glass">
                <Check className="h-4 w-4 text-success" />
                {item}
              </span>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Curriculum */}
      <Section id="curriculum">
        <SectionHead
          eyebrow="8 modules"
          title="Course Curriculum"
          text="A structured path from your first app to client-ready delivery."
        />
        <div className="mt-12 grid gap-4 sm:grid-cols-2">
          {modules.map(({ num, title }, i) => (
            <Reveal key={num} delay={(i % 2) * 80}>
              <div className="flex items-center gap-5 rounded-2xl border border-border p-5 transition-colors hover:border-primary/40 glass">
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-[image:var(--gradient-primary)] font-display text-base font-bold text-primary-foreground">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="min-w-0">
                  <p className="text-xs tracking-widest text-muted-foreground uppercase">{num}</p>
                  <h3 className="mt-1 text-base font-semibold">{title}</h3>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Comparison */}
      <Section id="compare">
        <SectionHead eyebrow="The difference" title="Why Choose Us" />
        <div className="mt-12 grid gap-5 lg:grid-cols-2">
          <Reveal>
            <div className="h-full rounded-3xl border border-border p-8">
              <h3 className="text-xl font-semibold text-muted-foreground">Traditional Learning</h3>
              <ul className="mt-6 space-y-4">
                {["Requires Coding", "Slow Learning", "Complex Setup"].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm text-muted-foreground">
                    <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full border border-border">
                      <X className="h-3.5 w-3.5 text-destructive" />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div className="h-full surface-card glow-ring p-8">
              <h3 className="text-xl font-semibold">Our Course</h3>
              <ul className="mt-6 space-y-4">
                {[
                  "AI Powered",
                  "Beginner Friendly",
                  "Full Practical Guidance",
                  "Practical Projects",
                  "Real App Building",
                  "Modern Workflow",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm font-medium">
                    <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-[image:var(--gradient-primary)]">
                      <Check className="h-3.5 w-3.5 text-primary-foreground" />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <EnrollButton />
              </div>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* FAQ */}
      <Section id="faq">
        <SectionHead eyebrow="Questions" title="Frequently Asked" />
        <Reveal>
          <Accordion type="single" collapsible className="mt-10 w-full">
            {faqs.map(({ q, a }) => (
              <AccordionItem key={q} value={q} className="border-border">
                <AccordionTrigger className="text-left text-base font-semibold hover:no-underline">
                  {q}
                </AccordionTrigger>
                <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                  {a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </Section>

      {/* Final CTA */}
      <Section id="enroll">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2rem] border border-border p-10 text-center sm:p-16 glass">
            <div className="pointer-events-none absolute inset-x-0 -top-32 h-64 bg-[radial-gradient(50%_100%_at_50%_100%,color-mix(in_oklab,var(--primary)_35%,transparent),transparent)]" />
            <BookOpen className="mx-auto h-8 w-8 text-primary-glow" />
            <h2 className="mt-6 text-3xl font-bold sm:text-5xl">
              Ready to Build Your First Android App?
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-base text-muted-foreground">
              Start learning with the course and gain practical AI app development skills.
            </p>
            <div className="mt-9 flex flex-col items-center gap-3">
              <EnrollButton size="lg" className="w-full sm:w-auto" />
              <p className="text-sm text-muted-foreground">
                One-time payment · ₹{COURSE_PRICE_INR} · Lifetime access
              </p>
            </div>
          </div>
        </Reveal>
      </Section>

      {/* Footer */}
      <footer className="border-t border-border px-5 py-12">
        <div className="mx-auto grid max-w-6xl gap-6 sm:flex sm:items-center sm:justify-between">
          <div className="flex min-w-0 items-center gap-2.5">
            <span className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-[image:var(--gradient-primary)]">
              <Sparkles className="h-3.5 w-3.5 text-primary-foreground" />
            </span>
            <span className="truncate text-sm font-semibold">AI App Builder Course</span>
          </div>
          <nav className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted-foreground">
            <Link to="/terms" className="transition-colors hover:text-foreground">
              Terms
            </Link>
            <Link to="/privacy" className="transition-colors hover:text-foreground">
              Privacy Policy
            </Link>
            <Link to="/contact" className="transition-colors hover:text-foreground">
              Contact
            </Link>
            <Link to="/refund" className="transition-colors hover:text-foreground">
              Refund Policy
            </Link>
          </nav>
        </div>
        <p className="mx-auto mt-8 max-w-6xl text-xs leading-relaxed text-muted-foreground">
          This course teaches practical skills. It does not promise or guarantee any income or
          specific results. Outcomes depend on individual effort and application.
        </p>
      </footer>

      {/* Footer note */}
      <div className="border-t border-border px-5 py-5">
        <p className="mx-auto max-w-6xl text-center text-xs leading-relaxed text-muted-foreground">
          *Only applicable if you build and launch a product within your first 3 months.
        </p>
      </div>

      {/* Sticky mobile CTA */}
      <div className="fixed inset-x-0 bottom-0 z-50 border-t border-border p-3 md:hidden glass">
        <div className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-3">
          <div className="min-w-0">
            <p className="truncate text-sm font-semibold">₹{COURSE_PRICE_INR} · Lifetime access</p>
            <p className="truncate text-xs text-muted-foreground">Complete Mentorship included</p>
          </div>
          <EnrollButton />
        </div>
      </div>
    </div>
  );
}

function Section({ id, children }: { id: string; children: React.ReactNode }) {
  return (
    <section id={id} className="scroll-mt-24 px-5 py-16 sm:py-24">
      <div className="mx-auto max-w-6xl">{children}</div>
    </section>
  );
}

function SectionHead({ eyebrow, title, text }: { eyebrow?: string; title: string; text?: string }) {
  return (
    <Reveal>
      <div className="max-w-2xl">
        {eyebrow ? (
          <p className="text-xs font-semibold tracking-[0.2em] text-primary-glow uppercase">
            {eyebrow}
          </p>
        ) : null}
        <h2 className="mt-4 text-3xl font-bold sm:text-5xl">{title}</h2>
        {text ? <p className="mt-4 text-base text-muted-foreground">{text}</p> : null}
      </div>
    </Reveal>
  );
}
