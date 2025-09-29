
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { newsPosts, Post } from '@/lib/news-data';
import SocialShareButtons from '@/components/news/social-share-buttons';
import { Separator } from '@/components/ui/separator';
import { Metadata } from 'next';
import Link from 'next/link';

type Props = {
  params: { slug: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = newsPosts.find((p) => p.slug === params.slug);

  if (!post) {
    return {
      title: 'Post Not Found'
    };
  }

  return {
    title: `${post.title} | APTLY DRESSED`,
    description: post.excerpt,
    openGraph: {
        title: post.title,
        description: post.excerpt,
        images: post.image ? [post.image.src] : [],
    },
    twitter: {
        card: 'summary_large_image',
        title: post.title,
        description: post.excerpt,
        images: post.image ? [post.image.src] : [],
    }
  };
}

export async function generateStaticParams() {
    return newsPosts.map((post) => ({
      slug: post.slug,
    }));
}

export default function NewsPostPage({ params }: Props) {
  const post = newsPosts.find((p) => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="bg-background text-foreground">
      <main className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <article className="mx-auto max-w-3xl">
          <header className="mb-8">
            <p className="text-base text-muted-foreground">
              {new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
            <h1 className="font-headline text-4xl font-bold uppercase tracking-tight text-foreground md:text-5xl !mt-2">
              {post.title}
            </h1>
          </header>
          
          {post.image && (
            <div className="w-full h-96 relative rounded-lg overflow-hidden my-8">
              <Image
                src={post.image.src}
                alt={post.image.alt}
                fill
                className="object-cover"
                data-ai-hint={post.image.aiHint}
                priority
              />
            </div>
          )}

          <div 
            className="prose prose-lg max-w-none text-muted-foreground space-y-6"
            dangerouslySetInnerHTML={{ __html: post.content }} 
          />

          <Separator className="my-8" />
          
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm font-semibold text-foreground">Share this post:</p>
            <SocialShareButtons post={post} />
          </div>

          <div className="mt-12 text-center">
            <Link href="/news-and-events" className="text-primary font-semibold hover:underline">
              &larr; Back to News & Events
            </Link>
          </div>

        </article>
      </main>
    </div>
  );
}

    