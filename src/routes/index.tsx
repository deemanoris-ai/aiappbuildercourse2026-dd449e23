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
import { StudentFeedback } from "@/components/StudentFeedback";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { COURSE_PRICE_INR } from "@/lib/checkout";
import { trackMeta } from "@/lib/meta-tracking";

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
      { title: "AI App Builder Course — Build Any App with AI, No Coding" },
      {
        name: "description",
        content:
          "Learn in Hindi + English how to build apps with AI, publish them and turn your ideas into real apps without coding.",
      },
      { property: "og:title", content: "Build Any App with AI — No Coding Required" },
      {
        property: "og:description",
        content:
          "A practical 2–3 hour AI app building course with personal guidance, no hidden charges and a double money-back guarantee.*",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Landing,
});

const proofPoints = [
  "Hindi + English Course",
  "2–3 Hours · Practical Learning",
  "Build Your First App in 1 Day*",
  "No Hidden Charges or Upsells",
  "24/5 Personal Help & Guidance",
];

const learnItems = [
  {
    icon: Smartphone,
    title: "Almost Any App Bana Paoge",
    text: "Business, e-commerce, booking, education, utility, social, productivity, content apps — apni idea ke hisaab se build karo.",
  },
  {
    icon: Sparkles,
    title: "AI Se App Banao — No Coding",
    text: "Bas apna idea batao aur AI ke saath step-by-step working app build karna seekho, even if you're a complete beginner.",
  },
  {
    icon: Globe,
    title: "Website Ko App Mein Convert Karo",
    text: "Apni ya client ki existing website ko installable Android app mein convert karna seekho.",
  },
  {
    icon: UploadCloud,
    title: "Google Play Store Par Publish Karo",
    text: "App ready hone ke baad listing, assets, release aur Play Store publishing ka practical process seekho.",
  },
  {
    icon: Repeat,
    title: "Payments & Subscriptions Add Karo",
    text: "Paid apps, subscriptions aur in-app access jaise monetization features ka setup samjho.",
  },
  {
    icon: Megaphone,
    title: "Apps Se Earn Karna Seekho",
    text: "Ads, paid apps, subscriptions, client projects aur app-based business models ko practically samjho.",
  },
  {
    icon: Briefcase,
    title: "Client Ke Liye Apps Banao",
    text: "Real client requirements ko samjho, app build karo aur project delivery ke liye workflow follow karo.",
  },
  {
    icon: Building2,
    title: "Businesses Ke Liye Apps Banao",
    text: "Local businesses aur brands ke liye useful apps create karke app-building skill ko service mein use karo.",
  },
  {
    icon: RefreshCw,
    title: "Apps Ko Easily Update Karo",
    text: "Existing app mein changes, new features aur updates add karne ka simple AI workflow seekho.",
  },
  {
    icon: Gauge,
    title: "1 Day Mein First App Goal*",
    text: "Course ko follow karke focused way mein apni first working app 1 day mein build karne ka target rakho.",
  },
  {
    icon: BadgeIndianRupee,
    title: "Beginner Se App Builder Tak",
    text: "Sirf tutorials dekhne ke bajay ek repeatable process seekho jisse future mein multiple apps bana sako.",
  },
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
  "Anyone who wants to build apps with AI",
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
  {
    q: "Course kitne time ka hai?",
    a: "Complete practical course around 2–3 hours ka hai. Hindi + English dono mein explain kiya gaya hai, step by step.",
  },
  {
    q: "Kya mujhe coding aani chahiye?",
    a: "Nahi. Course beginners ke liye hai. Aap AI ke saath app building workflow step by step follow karoge.",
  },
  {
    q: "Main kis type ki apps bana sakta hoon?",
    a: "Aap business, e-commerce, booking, education, utility, social, productivity, content aur bahut saare custom app ideas par kaam karna seekh sakte ho.",
  },
  {
    q: "Kya koi hidden charge ya upsell hai?",
    a: "Nahi. Course ke liye ek hi payment hai. Koi compulsory hidden charge ya upsell nahi hai.",
  },
  {
    q: "Kya support milega?",
    a: "Haan. 24/5 personal help, support aur guidance available hai. Aap stuck ho to personally help ke liye contact kar sakte ho.",
  },
  {
    q: "Double money-back guarantee kya hai?",
    a: "Course ke stated conditions ke according, agar aap required criteria complete karte hain aur course aapko promised value deliver nahi karta, to 2x refund eligibility ho sakti hai.* Full terms refund policy mein hain.",
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
    void trackMeta("ViewContent", {
      value: COURSE_PRICE_INR,
      currency: "INR",
      contentName: "AI App Builder Course",
    });
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="min-h-screen overflow-x-hidden pb-24 md:pb-0">
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
              <a key={href} href={href} className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                {label}
              </a>
            ))}
          </div>
          <EnrollButton className="hidden md:inline-flex" />
        </nav>
      </header>

      <section id="top" className="relative isolate px-5 pt-32 pb-20 sm:pt-40 sm:pb-28">
        <img src={heroBg} alt="" aria-hidden="true" width={1536} height={1024} className="pointer-events-none absolute inset-0 -z-10 h-full w-full scale-110 object-cover opacity-10 blur-2xl" />
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(60%_50%_at_50%_0%,color-mix(in_oklab,var(--primary)_22%,transparent),transparent)]" />
        <div className="mx-auto max-w-4xl text-center">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-1.5 text-xs font-medium tracking-wide text-muted-foreground glass">
              <Video className="h-3.5 w-3.5 text-primary-glow" />
              Complete Mentorship · 24/5 Support
            </span>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="mt-7 text-4xl leading-[1.05] font-bold sm:text-6xl">
              Make Your Own Apps With AI
              <span className="mt-2 block text-gradient">Without Coding</span>
            </h1>
          </Reveal>
          <Reveal delay={120}>
            <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-border px-4 py-1.5 text-sm font-medium text-foreground glass">
              <Star className="h-4 w-4 fill-primary text-primary" />
              <span>351+ students enrolled</span>
            </div>
          </Reveal>
          <Reveal delay={140}>
            <div className="mx-auto mt-6 w-full max-w-3xl overflow-hidden rounded-3xl border border-border bg-black/5 shadow-sm aspect-video">
              <iframe className="h-full w-full" src="https://www.youtube.com/embed/5EbCUzs6QQI" title="AI App Builder Course Preview" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen />
            </div>
          </Reveal>
          <Reveal delay={160}>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              2–3 hours mein practical workflow seekho, Hindi + English mein — aur focused practice ke saath apni first working app 1 day mein build karne ka target rakho.*
            </p>
          </Reveal>
          <Reveal delay={240}>
            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <EnrollButton size="lg" label="Get Course" className="w-full sm:w-auto" />
              <a href="#curriculum" className="inline-flex w-full items-center justify-center rounded-full border border-border px-8 py-4 text-base font-semibold transition-colors hover:bg-accent sm:w-auto">
                View Curriculum
              </a>
            </div>
            <p className="mt-4 text-sm text-muted-foreground">
              One-time payment of <span className="font-semibold text-foreground">₹{COURSE_PRICE_INR}</span> · Lifetime access · No hidden upsells
            </p>
          </Reveal>
          <Reveal delay={320}>
            <div className="mt-12 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-5">
              {proofPoints.map((point) => (
                <div key={point} className="flex items-center gap-2.5 rounded-2xl px-4 py-3.5 text-left text-sm font-medium glass">
                  <Check className="h-4 w-4 shrink-0 text-success" />
                  <span className="min-w-0">{point}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <Section id="learn">
        <SectionHead
          eyebrow="Kya-kya bana paoge?"
          title="Apni Idea Se Almost Any App Banao"
          text="Coding background nahi hai? Koi problem nahi. AI ke saath step-by-step seekho ki real-world apps kaise build karte hain — from idea to working app."
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
        <Reveal delay={120}>
          <div className="mt-8 rounded-3xl border border-primary/30 p-6 text-center glass sm:p-8">
            <p className="text-lg font-semibold sm:text-xl">2–3 Hour Course · Hindi + English · No Coding · No Hidden Charges · No Compulsory Upsell</p>
            <p className="mt-2 text-sm text-muted-foreground">Aur jab aap stuck ho, 24/5 personal help, support aur guidance directly from me.</p>
          </div>
        </Reveal>
      </Section>

      <StudentFeedback />

      <Section id="founder">
        <Reveal>
          <div className="surface-card grid gap-6 p-8 sm:p-10 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-center">
            <div className="min-w-0">
              <p className="text-xs font-semibold tracking-[0.2em] text-primary-glow uppercase">Learn directly from the person building with AI.</p>
              <h2 className="mt-4 text-2xl font-bold sm:text-3xl">Hey, I'm Nikhil.</h2>
              <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">
                Main ye course isliye banaya hai taaki beginners bhi AI ka use karke practical apps build kar sakein. Main personally aapko guide karunga jab bhi aap stuck ho.
              </p>
              <div className="mt-6 flex flex-wrap gap-2.5">
                {["Hindi + English learning", "24/5 personal help", "Step-by-step guidance"].map((point) => (
                  <span key={point} className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-medium glass sm:text-sm">
                    <Check className="h-4 w-4 shrink-0 text-success" />
                    {point}
                  </span>
                ))}
              </div>
            </div>
            <EnrollButton label="Start Learning With Me" className="w-full lg:w-auto" />
          </div>
        </Reveal>
      </Section>

      <Section id="guarantee">
        <Reveal>
          <div className="surface-card relative overflow-hidden p-8 text-center sm:p-12">
            <div className="pointer-events-none absolute inset-x-0 -top-32 h-64 bg-[radial-gradient(50%_100%_at_50%_100%,color-mix(in_oklab,var(--primary)_35%,transparent),transparent)]" />
            <Star className="mx-auto h-8 w-8 text-primary-glow" />
            <h2 className="mt-6 text-3xl font-bold sm:text-5xl">Double Money-Back Guarantee*</h2>
            <p className="mx-auto mt-5 max-w-2xl text-base text-muted-foreground">
              Course ko seriously follow karo, required conditions complete karo, aur agar stated guarantee conditions ke under course promised value deliver nahi karta, to 2x refund eligibility ho sakti hai.*
            </p>
          </div>
        </Reveal>
      </Section>

      <Section id="why">
        <Reveal>
          <h2 className="max-w-3xl text-3xl font-bold sm:text-5xl">Tutorials dekhte rehne ke bajay <span className="block text-gradient">ab khud apps build karo.</span></h2>
        </Reveal>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {[
            { title: "No Coding Needed", text: "Coding experience nahi hai? No problem. AI-assisted workflow scratch se follow karo." },
            { title: "2–3 Hours, Practical", text: "Short, focused course jisme theory se zyada actual app-building workflow par focus hai." },
            { title: "Personal Guidance", text: "Aap stuck ho to 24/5 personal help, support aur guidance directly from me." },
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

      <Section id="mentorship">
        <Reveal>
          <div className="surface-card relative overflow-hidden p-8 sm:p-14">
            <div className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full bg-[image:var(--gradient-primary)] opacity-20 blur-3xl" />
            <span className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-1.5 text-xs font-medium text-muted-foreground"><Video className="h-3.5 w-3.5 text-primary-glow" /> 24/5 Personal Support</span>
            <h2 className="mt-6 max-w-2xl text-3xl font-bold sm:text-4xl">Sirf course nahi — personally guided learning.</h2>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {["24/5 personal help & support", "Hindi + English explanations", "No coding experience required", "Guidance when you're stuck"].map((line) => (
                <div key={line} className="flex items-start gap-3 rounded-2xl p-4 glass">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-success" />
                  <p className="min-w-0 text-sm leading-relaxed">{line}</p>
                </div>
              ))}
            </div>
            <div className="mt-9"><EnrollButton size="lg" /></div>
          </div>
        </Reveal>
      </Section>

      <Section id="bonuses">
        <SectionHead eyebrow="Included at no extra cost" title="Free Bonus Stack" text="Extra resources included with your enrollment — no compulsory upsell." />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {bonuses.map((bonus, i) => (
            <Reveal key={bonus.title} delay={(i % 3) * 80}>
              <div className="h-full surface-card p-7 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40">
                <div className="flex items-center justify-between gap-3">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl border border-border"><bonus.icon className="h-5 w-5 text-primary-glow" /></span>
                  <span className="text-xs font-semibold tracking-widest text-muted-foreground uppercase">{bonus.tag}</span>
                </div>
                <h3 className="mt-5 text-lg font-semibold">{bonus.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{bonus.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section id="audience">
        <SectionHead eyebrow="Fit check" title="Who Is This For" text="Students, beginners, freelancers, creators and business owners — anyone who wants to build apps with AI." />
        <div className="mt-10 flex flex-wrap gap-3">
          {audience.map((item, i) => (
            <Reveal key={item} delay={i * 60}>
              <span className="inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-medium glass"><Check className="h-4 w-4 text-success" />{item}</span>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section id="curriculum">
        <SectionHead eyebrow="8 modules" title="Course Curriculum" text="A structured path from your first prompt to building and publishing real apps." />
        <div className="mt-12 grid gap-4 sm:grid-cols-2">
          {modules.map(({ num, title }, i) => (
            <Reveal key={num} delay={(i % 2) * 80}>
              <div className="flex items-center gap-5 rounded-2xl border border-border p-5 transition-colors hover:border-primary/40 glass">
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-[image:var(--gradient-primary)] font-display text-base font-bold text-primary-foreground">{String(i + 1).padStart(2, "0")}</span>
                <div className="min-w-0"><p className="text-xs tracking-widest text-muted-foreground uppercase">{num}</p><h3 className="mt-1 text-base font-semibold">{title}</h3></div>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section id="compare">
        <SectionHead eyebrow="The difference" title="Why Choose Us" />
        <div className="mt-12 grid gap-5 lg:grid-cols-2">
          <Reveal><div className="h-full rounded-3xl border border-border p-8"><h3 className="text-xl font-semibold text-muted-foreground">Traditional Learning</h3><ul className="mt-6 space-y-4">{["Requires Coding", "Slow Learning", "Complex Setup"].map((item) => <li key={item} className="flex items-center gap-3 text-sm text-muted-foreground"><span className="grid h-7 w-7 shrink-0 place-items-center rounded-full border border-border"><X className="h-3.5 w-3.5 text-destructive" /></span>{item}</li>)}</ul></div></Reveal>
          <Reveal delay={120}><div className="h-full surface-card glow-ring p-8"><h3 className="text-xl font-semibold">Our Course</h3><ul className="mt-6 space-y-4">{["AI Powered", "Beginner Friendly", "Hindi + English", "24/5 Personal Guidance", "Real App Building", "No Hidden Upsell"].map((item) => <li key={item} className="flex items-center gap-3 text-sm font-medium"><span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-[image:var(--gradient-primary)]"><Check className="h-3.5 w-3.5 text-primary-foreground" /></span>{item}</li>)}</ul><div className="mt-8"><EnrollButton /></div></div></Reveal>
        </div>
      </Section>

      <Section id="faq">
        <SectionHead eyebrow="Questions" title="Frequently Asked" />
        <Reveal><Accordion type="single" collapsible className="mt-10 w-full">{faqs.map(({ q, a }) => <AccordionItem key={q} value={q} className="border-border"><AccordionTrigger className="text-left text-base font-semibold hover:no-underline">{q}</AccordionTrigger><AccordionContent className="text-sm leading-relaxed text-muted-foreground">{a}</AccordionContent></AccordionItem>)}</Accordion></Reveal>
      </Section>

      <Section id="enroll">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2rem] border border-border p-10 text-center sm:p-16 glass">
            <div className="pointer-events-none absolute inset-x-0 -top-32 h-64 bg-[radial-gradient(50%_100%_at_50%_100%,color-mix(in_oklab,var(--primary)_35%,transparent),transparent)]" />
            <BookOpen className="mx-auto h-8 w-8 text-primary-glow" />
            <h2 className="mt-6 text-3xl font-bold sm:text-5xl">Ready to Build Your First App?</h2>
            <p className="mx-auto mt-5 max-w-xl text-base text-muted-foreground">2–3 hours. Hindi + English. No coding. No hidden charges. Plus personal 24/5 help and guidance.</p>
            <div className="mt-9 flex flex-col items-center gap-3"><EnrollButton size="lg" className="w-full sm:w-auto" /><p className="text-sm text-muted-foreground">One-time payment · ₹{COURSE_PRICE_INR} · Lifetime access</p></div>
          </div>
        </Reveal>
      </Section>

      <footer className="border-t border-border px-5 py-12">
        <div className="mx-auto grid max-w-6xl gap-6 sm:flex sm:items-center sm:justify-between">
          <div className="flex min-w-0 items-center gap-2.5"><span className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-[image:var(--gradient-primary)]"><Sparkles className="h-3.5 w-3.5 text-primary-foreground" /></span><span className="truncate text-sm font-semibold">AI App Builder Course</span></div>
          <nav className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted-foreground"><Link to="/terms" className="transition-colors hover:text-foreground">Terms</Link><Link to="/privacy" className="transition-colors hover:text-foreground">Privacy Policy</Link><Link to="/contact" className="transition-colors hover:text-foreground">Contact</Link><Link to="/refund" className="transition-colors hover:text-foreground">Refund Policy</Link></nav>
        </div>
        <p className="mx-auto mt-8 max-w-6xl text-xs leading-relaxed text-muted-foreground">This course teaches practical skills. It does not promise or guarantee any income or specific results. Outcomes depend on individual effort and application.</p>
      </footer>

      <div className="border-t border-border px-5 py-5"><p className="mx-auto max-w-6xl text-center text-xs leading-relaxed text-muted-foreground">*1-day app building and double money-back guarantee are subject to the stated course/refund conditions and individual effort. See the Refund Policy for full eligibility terms.</p></div>

      <div className="fixed inset-x-0 bottom-0 z-50 border-t border-border p-3 md:hidden glass"><div className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-3"><div className="min-w-0"><p className="truncate text-sm font-semibold">₹{COURSE_PRICE_INR} · Lifetime access</p><p className="truncate text-xs text-muted-foreground">24/5 personal guidance included</p></div><EnrollButton /></div></div>
      <WhatsAppButton />
    </div>
  );
}

function Section({ id, children }: { id: string; children: React.ReactNode }) {
  return <section id={id} className="scroll-mt-24 px-5 py-16 sm:py-24"><div className="mx-auto max-w-6xl">{children}</div></section>;
}

function SectionHead({ eyebrow, title, text }: { eyebrow?: string; title: string; text?: string }) {
  return <Reveal><div className="max-w-3xl">{eyebrow ? <p className="text-xs font-semibold tracking-[0.2em] text-primary-glow uppercase">{eyebrow}</p> : null}<h2 className="mt-4 text-3xl font-bold sm:text-5xl">{title}</h2>{text ? <p className="mt-4 text-base leading-relaxed text-muted-foreground">{text}</p> : null}</div></Reveal>;
}
