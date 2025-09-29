
import Image from 'next/image';
import Link from 'next/link';
import { newsPosts } from '@/lib/news-data';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import SocialShareButtons from '@/components/news/social-share-buttons';
import { Separator } from '@/components/ui/separator';

export const metadata = {
  title: 'News & Events | APTLY DRESSED',
  description: 'The latest news, events, and announcements from APTLY DRESSED.',
};

export default function NewsAndEventsPage() {
  const coverImage = PlaceHolderImages.find(p => p.id === 'news-feed-background');

  if (!coverImage) {
    return <div>Image not found</div>;
  }
  
  const sortedPosts = [...newsPosts].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return (
    <div className="bg-background text-foreground">
      <div className="relative h-64 w-full">
        <Image 
          src={coverImage.imageUrl}
          alt={coverImage.description}
          fill
          className="object-cover"
          data-ai-hint={coverImage.imageHint}
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 flex h-full flex-col items-center justify-center text-center text-white p-4">
          <h1 className="font-headline text-5xl font-bold uppercase tracking-tight md:text-6xl">
            News & Events
          </h1>
          <p className="mt-2 text-lg text-white/90 max-w-2xl">
            Stay up-to-date with the latest announcements, style guides, and collection launches from APTLY DRESSED.
          </p>
        </div>
      </div>

      <main className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <div className="space-y-12">
            {sortedPosts.map((post) => (
              <Card key={post.slug} className="overflow-hidden border-none shadow-none bg-transparent">
                <CardHeader className="p-0">
                  <p className="text-sm text-muted-foreground">
                    {new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                  </p>
                  <CardTitle className="font-headline text-3xl font-bold tracking-tight text-foreground !mt-2">
                    <Link href={`/news-and-events/${post.slug}`} className="hover:text-primary transition-colors">
                      {post.title}
                    </Link>
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-0 mt-4">
                  {post.image && (
                     <div className="w-full h-80 relative rounded-lg overflow-hidden my-6">
                        <Link href={`/news-and-events/${post.slug}`}>
                            <Image
                              src={post.image.src}
                              alt={post.image.alt}
                              fill
                              className="object-cover transition-transform duration-300 hover:scale-105"
                              data-ai-hint={post.image.aiHint}
                            />
                        </Link>
                     </div>
                  )}
                  <div className="prose prose-lg max-w-none text-muted-foreground" dangerouslySetInnerHTML={{ __html: post.excerpt }} />
                   <Link href={`/news-and-events/${post.slug}`} className="text-primary font-semibold hover:underline mt-4 inline-block">
                      Read More &rarr;
                   </Link>
                </CardContent>
                <CardFooter className="p-0 mt-6 flex justify-between items-center">
                    <SocialShareButtons post={post} />
                </CardFooter>
                <Separator className="mt-12" />
              </Card>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}

    