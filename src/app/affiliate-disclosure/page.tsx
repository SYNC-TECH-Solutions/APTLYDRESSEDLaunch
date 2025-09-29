export default function AffiliateDisclosurePage() {
  return (
    <div className="bg-background text-foreground">
      <main className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h1 className="font-headline text-4xl font-bold uppercase tracking-tight text-foreground md:text-5xl">
              Our Commitment to Transparency
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              Trust is the foundation of our brand. Here’s how we work.
            </p>
          </div>

          <div className="space-y-10 rounded-lg border bg-card p-8 shadow-sm">
            <div>
              <h2 className="font-headline text-3xl font-bold tracking-tight text-foreground mb-4">Our Affiliate Marketing Model</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  At Aptly Dressed, our mission is to bring you the best in modern, sustainable, and timeless fashion. To do this, we partner with a curated selection of high-quality brands and retailers. When you click on a link from our site and make a purchase, we may earn a small commission from that retailer, at absolutely no extra cost to you.
                </p>
                <p>
                  This affiliate model is the backbone of our business. It allows us to dedicate our time and expertise to discovering, vetting, and showcasing products that we genuinely believe are the best fit for you. We are not just a passive directory; we are your expert curators in the vast world of fashion.
                </p>
              </div>
            </div>

            <div>
              <h2 className="font-headline text-3xl font-bold tracking-tight text-foreground mb-4">Our Promise to You</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Our recommendations are, and will always be, driven by our editorial integrity, not by commission rates. We only feature products and brands that meet our rigorous standards for quality, style, and ethical production.
                </p>
                <p>
                  We believe in bringing you what we find to be the best and most suitable choices to help you build a wardrobe you love. Your trust is our most valuable asset, and we are committed to upholding it with every recommendation we make.
                </p>
              </div>
            </div>
            
            <div className="text-center pt-6">
                <p className="text-sm text-muted-foreground">This seamless digital experience is powered by our technology partners at SYNC TECH.</p>
                <p className="font-bold text-foreground mt-1">Powered by SYNC TECH</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
