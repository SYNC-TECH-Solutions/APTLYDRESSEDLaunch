
'use server';

import { z } from 'zod';

const subscribeSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email address." }),
});

type FormState = {
  message: string;
  success: boolean;
}

export async function subscribeToNewsletter(prevState: FormState, formData: FormData): Promise<FormState> {
  const validatedFields = subscribeSchema.safeParse({
    email: formData.get('email'),
  });

  if (!validatedFields.success) {
    return {
      message: validatedFields.error.flatten().fieldErrors.email?.[0] || "Invalid submission.",
      success: false,
    };
  }

  // Here you would typically save the email to a database or a mailing list service like Mailchimp or ConvertKit.
  // For this demo, we'll just log it to the console.
  console.log(`New subscriber: ${validatedFields.data.email}`);

  return {
    message: "Thank you! You're on the list.",
    success: true,
  };
}
