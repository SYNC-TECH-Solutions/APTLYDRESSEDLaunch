import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function AboutPage() {
  const designerImage = PlaceHolderImages.find(p => p.id === 'fashion-designer-sketching');
  
  if (!designerImage) {
    return <div>Image not found</div>;
  }

  return (
    <div className="bg-background text-foreground">
      <main className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h1 className="font-headline text-4xl font-bold uppercase tracking-tight text-foreground md:text-5xl">
              Curating Style, Inspiring Confidence
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              We believe in the power of a well-curated wardrobe to simplify life and elevate the everyday.
            </p>
          </div>

          <div className="space-y-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="font-headline text-3xl font-bold tracking-tight text-foreground mb-4">Our Story</h2>
                <p className="text-muted-foreground mb-4">
                  APTLY DRESSED was born from a simple idea: that fashion should be intentional, sustainable, and timeless. In a world saturated with fleeting trends, we saw a need for a trusted voice to cut through the noise. We are not just another fashion site; we are your most trusted partner in style.
                </p>
                <p className="text-muted-foreground">
                  Our journey began with a passion for discovering pieces that blend exceptional quality with modern design. We are dedicated to the art of curation, hand-selecting items from brands that share our commitment to craftsmanship and ethical practices.
                </p>
              </div>
              <div className="w-full h-80 relative rounded-lg overflow-hidden shadow-lg">
                <Image
                  src={designerImage.imageUrl}
                  alt={designerImage.description}
                  fill
                  className="object-cover"
                  data-ai-hint={designerImage.imageHint}
                />
              </div>
            </div>

            <div className="text-center">
              <h2 className="font-headline text-3xl font-bold tracking-tight text-foreground mb-4">Our Philosophy: The Art of Curation</h2>
              <p className="text-muted-foreground max-w-3xl mx-auto">
                We navigate the world of fashion so you don&apos;t have to. Our philosophy is built on three core pillars that guide every recommendation we make.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div className="p-6 border rounded-lg shadow-sm">
                <h3 className="font-headline text-2xl font-bold text-foreground mb-2">Timeless over Trendy</h3>
                <p className="text-muted-foreground text-sm">
                  We focus on versatile, high-quality essentials that form the foundation of a sophisticated wardrobe, ensuring you look great today and for years to come.
                </p>
              </div>
              <div className="p-6 border rounded-lg shadow-sm">
                <h3 className="font-headline text-2xl font-bold text-foreground mb-2">Quality over Quantity</h3>
                <p className="text-muted-foreground text-sm">
                  We champion mindful consumption by selecting pieces made with superior materials and craftsmanship, helping you build a wardrobe that lasts.
                </p>
              </div>
              <div className="p-6 border rounded-lg shadow-sm">
                <h3 className="font-headline text-2xl font-bold text-foreground mb-2">Transparency & Trust</h3>
                <p className="text-muted-foreground text-sm">
                  Your trust is our most valued asset. We are committed to honesty in all our recommendations and partnerships.
                </p>
              </div>
            </div>

            <div>
              <h2 className="font-headline text-3xl font-bold tracking-tight text-foreground mb-4 text-center">Our Commitment to Transparency</h2>
              <div className="max-w-3xl mx-auto bg-secondary/50 p-6 rounded-lg">
                <p className="text-muted-foreground mb-4">
                  As a leading affiliate marketing partner, our integrity is the bedrock of our business. When you make a purchase through a link on our site, we may earn a small commission from the retailer, at absolutely no extra cost to you.
                </p>
                <p className="text-muted-foreground mb-4">
                  This model allows us to dedicate our time to discovering and curating the very best in fashion, without cluttering your experience with ads. We only partner with brands that meet our high standards for quality and ethics.
                </p>
                <p className="text-muted-foreground">
                  Our recommendations are always driven by our genuine belief in the product, not by commission rates. We&apos;re honored to be your guide in the world of fashion and are committed to earning your trust with every click.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
