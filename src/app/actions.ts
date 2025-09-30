
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
  console.log("subscribeToNewsletter action started.");

  const validatedFields = subscribeSchema.safeParse({
    email: formData.get('email'),
  });

  if (!validatedFields.success) {
    const errorMessage = validatedFields.error.flatten().fieldErrors.email?.[0] || "Invalid submission.";
    console.error("Validation failed:", errorMessage);
    return {
      message: errorMessage,
      success: false,
    };
  }

  const { email } = validatedFields.data;
  console.log(`Validation successful for email: ${email}`);

  try {
    const subscribersRef = collection(db, 'subscribers');
    console.log("Firestore 'subscribers' collection reference created.");

    const q = query(subscribersRef, where('email', '==', email));
    console.log("Checking if email already exists...");
    const querySnapshot = await getDocs(q);

    if (!querySnapshot.empty) {
      console.log(`Email ${email} is already subscribed.`);
      return {
        message: "This email is already subscribed.",
        success: false,
      };
    }

    console.log(`Email ${email} is new. Adding to database...`);
    await addDoc(subscribersRef, {
      email: email,
      subscribedAt: serverTimestamp(),
    });

    console.log(`Successfully added ${email} to the database.`);
    return {
      message: "Thank you! You're on the list.",
      success: true,
    };

  } catch (error) {
    console.error("Error communicating with Firestore: ", error);
    return {
      message: "Something went wrong. Please try again later.",
      success: false,
    };
  }
}
