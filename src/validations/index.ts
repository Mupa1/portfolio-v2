import * as z from "zod";

export const ContactFormValidation = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email(),
  message: z
    .string()
    .min(1, { message: "Please enter your message or an emoji 😅." }),
});
