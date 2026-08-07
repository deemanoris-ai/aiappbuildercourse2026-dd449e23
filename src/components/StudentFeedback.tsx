import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Star, X } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { feedbackScreenshots } from "@/lib/testimonials";

export function StudentFeedback() {
  const [index, setIndex] = useState(0);
  const [lightbox, setLightbox] = useState(false);
  const touchStart = useRef<number | null>(null);

  const total = feedbackScreenshots.length;

  useEffect(() => {
    if (!lightbox) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setLightbox(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lightbox]);

  if (total === 0) return null;

  const go = (dir: number) => setIndex((i) => (i + dir + total) % total);
  const current = feedbackScreenshots[index]!;

  return (
    <section id="feedback" className="scroll-mt-24 px-5 py-16 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <div className="max-w-2xl">
            <p className="text-xs font-semibold tracking-[0.2em] text-primary-glow uppercase">
              Real Student Feedback
            </p>
            <h2 className="mt-4 text-2xl font-bold sm:text-4xl">
              Real feedback from students learning with me
            </h2>
            <p className="mt-3 text-sm text-muted-foreground sm:text-base">
              Real messages. Real learners. No edited promises.
            </p>
            <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-border px-4 py-1.5 text-sm font-medium glass">
              <Star className="h-4 w-4 fill-primary text-primary" />
              <span>351+ students enrolled</span>
            </div>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <div className="mt-10 grid gap-5 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-center">
            {/* Main viewer */}
            <div
              className="surface-card relative mx-auto flex h-[360px] w-full max-w-md items-center justify-center overflow-hidden p-3 sm:h-[420px]"
              onTouchStart={(e) => (touchStart.current = e.touches[0]?.clientX ?? null)}
              onTouchEnd={(e) => {
                const start = touchStart.current;
                const end = e.changedTouches[0]?.clientX ?? null;
                if (start === null || end === null) return;
                if (Math.abs(end - start) > 45) go(end < start ? 1 : -1);
                touchStart.current = null;
              }}
            >
              <button
                type="button"
                onClick={() => setLightbox(true)}
                className="h-full w-full"
                aria-label="Open feedback screenshot"
              >
                <img
                  src={current.src}
                  alt={current.alt}
                  loading="lazy"
                  className="h-full w-full rounded-xl object-contain"
                />
              </button>

              <button
                type="button"
                onClick={() => go(-1)}
                aria-label="Previous feedback"
                className="absolute top-1/2 left-2 grid h-9 w-9 -translate-y-1/2 place-items-center rounded-full border border-border bg-card/90 transition-colors hover:bg-accent"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>
              <button
                type="button"
                onClick={() => go(1)}
                aria-label="Next feedback"
                className="absolute top-1/2 right-2 grid h-9 w-9 -translate-y-1/2 place-items-center rounded-full border border-border bg-card/90 transition-colors hover:bg-accent"
              >
                <ChevronRight className="h-4 w-4" />
              </button>

              <div className="absolute inset-x-0 bottom-3 flex justify-center gap-1.5">
                {feedbackScreenshots.map((item, i) => (
                  <button
                    key={item.src}
                    type="button"
                    onClick={() => setIndex(i)}
                    aria-label={`Show feedback ${i + 1}`}
                    className={`h-1.5 rounded-full transition-all ${
                      i === index ? "w-5 bg-primary" : "w-1.5 bg-border"
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Desktop thumbnails */}
            <div className="hidden gap-3 lg:flex lg:flex-col">
              {feedbackScreenshots.map((item, i) => (
                <button
                  key={item.src}
                  type="button"
                  onClick={() => setIndex(i)}
                  aria-label={`Show feedback ${i + 1}`}
                  className={`h-[130px] w-[110px] overflow-hidden rounded-xl border p-1 transition-colors ${
                    i === index ? "border-primary" : "border-border hover:border-primary/40"
                  }`}
                >
                  <img src={item.src} alt="" className="h-full w-full object-contain" />
                </button>
              ))}
            </div>
          </div>
        </Reveal>
      </div>

      {lightbox ? (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-foreground/70 p-4 backdrop-blur-sm"
          onClick={() => setLightbox(false)}
          role="presentation"
        >
          <img
            src={current.src}
            alt={current.alt}
            className="max-h-[88vh] max-w-full rounded-2xl object-contain"
            onClick={(e) => e.stopPropagation()}
          />
          <button
            type="button"
            onClick={() => setLightbox(false)}
            aria-label="Close"
            className="absolute top-5 right-5 grid h-10 w-10 place-items-center rounded-full border border-border bg-card"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
      ) : null}
    </section>
  );
}
