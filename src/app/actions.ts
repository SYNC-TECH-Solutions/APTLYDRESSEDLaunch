
'use server';

import { z } from 'zod';
import { db } from '@/lib/firebase';
import { collection, addDoc, serverTimestamp, query, where, getDocs } from 'firebase/firestore';

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
    const errorMessage = validatedFields.error.flatten().fieldErrors.email?.[0] || "Invalid submission.";
    return {
      message: errorMessage,
      success: false,
    };
  }

  const { email } = validatedFields.data;

  try {
    const subscribersRef = collection(db, 'subscribers');
    
    const q = query(subscribersRef, where('email', '==', email));
    const querySnapshot = await getDocs(q);

    if (!querySnapshot.empty) {
      return {
        message: "This email is already subscribed.",
        success: false,
      };
    }

    await addDoc(subscribersRef, {
      email: email,
      subscribedAt: serverTimestamp(),
    });

    return {
      message: "Thank you! You're on the list.",
      success: true,
    };

  } catch (error: any) {
    // Return the specific Firebase error message for debugging
    const errorMessage = error.message || "An unknown error occurred.";
    return {
      message: `Error: ${errorMessage}`,
      success: false,
    };
  }
}
