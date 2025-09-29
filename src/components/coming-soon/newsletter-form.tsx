'use client';

import { useActionState } from 'react';
import { useFormStatus } from 'react-dom';
import { useEffect, useRef } from 'react';
import { subscribeToNewsletter } from '@/app/actions';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { CheckCircle2, ArrowRight } from 'lucide-react';

const initialState = {
  message: '',
  success: false,
};

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" aria-disabled={pending} className="group">
      {pending ? 'Submitting...' : 'Notify Me'}
      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
    </Button>
  );
}

export default function NewsletterForm() {
  const [state, formAction] = useActionState(subscribeToNewsletter, initialState);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state.success) {
      formRef.current?.reset();
    }
  }, [state.success]);
  
  if (state.success) {
    return (
      <div className="flex h-14 items-center justify-center gap-2 rounded-lg bg-secondary p-4 text-lg font-medium text-foreground">
        <CheckCircle2 className="h-6 w-6 text-green-500" />
        <p>{state.message}</p>
      </div>
    );
  }

  return (
    <form ref={formRef} action={formAction} className="w-full max-w-md mx-auto space-y-2">
      <div className="flex flex-col sm:flex-row items-start gap-2">
        <Input
          type="email"
          name="email"
          placeholder="Enter your email address"
          required
          aria-describedby="email-error"
          className="flex-grow"
        />
        <SubmitButton />
      </div>
      {state.message && !state.success && (
        <p id="email-error" className="text-sm text-destructive text-left">{state.message}</p>
      )}
    </form>
  );
}
