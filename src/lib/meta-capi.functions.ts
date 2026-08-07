import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const eventSchema = z.object({
  eventName: z.string().min(1).max(60),
  eventId: z.string().min(1).max(120),
  eventSourceUrl: z.string().url().optional(),
  value: z.number().nonnegative().optional(),
  currency: z.string().length(3).optional(),
  contentName: z.string().max(200).optional(),
  fbp: z.string().max(200).optional(),
  fbc: z.string().max(400).optional(),
});

export const sendMetaEvent = createServerFn({ method: "POST" })
  .inputValidator((input: unknown) => eventSchema.parse(input))
  .handler(async ({ data }) => {
    const { sendMetaConversion } = await import("./meta-capi.server");
    return sendMetaConversion(data);
  });
