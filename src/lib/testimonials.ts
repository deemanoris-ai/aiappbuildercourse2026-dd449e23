/**
 * Real student feedback screenshots (portrait format).
 *
 * Drop the uploaded screenshot files into `src/assets/` and import them here.
 * Example:
 *   import feedback1 from "@/assets/feedback-1.jpg";
 *   export const feedbackScreenshots = [{ src: feedback1, alt: "Student feedback message" }];
 *
 * The "Real Student Feedback" section only renders when this array has items,
 * so no placeholder or fake reviews are ever shown.
 */
export type FeedbackScreenshot = { src: string; alt: string };

export const feedbackScreenshots: FeedbackScreenshot[] = [];
