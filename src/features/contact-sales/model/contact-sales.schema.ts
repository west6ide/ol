import { z } from 'zod';

export const contactSalesSchema = z.object({
  name: z.string().min(2, 'Enter a real name'),
  email: z.string().email('Enter a valid email'),
  company: z.string().min(2, 'Add the company or product name'),
  message: z.string().min(20, 'Tell a bit more about the scope'),
});

export type ContactSalesValues = z.infer<typeof contactSalesSchema>;
