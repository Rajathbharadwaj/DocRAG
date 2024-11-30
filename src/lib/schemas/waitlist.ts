import { z } from "zod";

export const waitlistSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  company: z.string().min(1, "Please enter your company name"),
  url: z.string().url("Please enter a valid URL"),
});

export type WaitlistFormData = z.infer<typeof waitlistSchema>;