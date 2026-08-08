import testimonial1 from "@/assets/testimonial-1.jpg.asset.json";
import testimonial2 from "@/assets/testimonial-2.jpg.asset.json";
import testimonial3 from "@/assets/testimonial-3.jpg.asset.json";

/**
 * Real student feedback screenshots (portrait format).
 *
 * The "Real Student Feedback" section only renders when this array has items,
 * so no placeholder or fake reviews are ever shown.
 */
export type FeedbackScreenshot = { src: string; alt: string };

export const feedbackScreenshots: FeedbackScreenshot[] = [
  {
    src: (testimonial1 as any).url,
    alt: "Student feedback message 1"
  },
  {
    src: (testimonial2 as any).url,
    alt: "Student feedback message 2"
  },
  {
    src: (testimonial3 as any).url,
    alt: "Student feedback message 3"
  }
];
