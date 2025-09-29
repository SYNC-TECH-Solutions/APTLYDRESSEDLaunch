import Image from 'next/image';
import { generateBackgroundImage } from '@/ai/flows/generate-background-image';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import NewsletterForm from '@/components/coming-soon/newsletter-form';
import SocialLinks from '@/components/coming-soon/social-links';

export default async function ComingSoonPage() {
  const { imageUrl } = await generateBackgroundImage({
    brandAesthetic: 'a minimalist and elegant fashion flat lay with neutral tones',
  });

  return (
    <div className="relative min-h-screen w-full">
      <Image
        src={imageUrl}
        alt="Minimalist fashion flat lay"
        fill
        className="object-cover"
        priority
        data-ai-hint="fashion minimal"
      />
      <div className="absolute inset-0 bg-black/40" />
      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center p-4 sm:p-6 md:p-8">
        <Card className="w-full max-w-lg bg-background/95 text-center shadow-2xl backdrop-blur-sm animate-in fade-in-50 duration-1000">
          <CardHeader className="space-y-6 pt-10">
            <h2 className="font-headline text-3xl tracking-wider text-foreground/90">
              Aptly Dressed
            </h2>
            <h1 className="font-headline text-5xl font-bold uppercase leading-tight tracking-tight text-foreground md:text-6xl">
              Timeless Style is Coming Soon
            </h1>
          </CardHeader>
          <CardContent className="space-y-8 p-6 md:p-8">
            <p className="font-body text-base text-muted-foreground md:text-lg">
              Welcome to Aptly Dressed, your new destination for curated collections of high-quality, sustainable fashion. We&apos;re putting the final touches on a modern shopping experience designed to elevate your style. Be the first to know when we launch.
            </p>
            <NewsletterForm />
            <div className="pt-4">
              <SocialLinks />
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
