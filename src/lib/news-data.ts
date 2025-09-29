
export type Post = {
  slug: string;
  title: string;
  date: string;
  image?: {
    src: string;
    alt: string;
    aiHint: string;
  };
  content: string;
  excerpt: string;
};

export const newsPosts: Post[] = [
  {
    slug: 'grand-opening-announcement',
    title: 'We Are Officially Live!',
    date: '2024-08-15',
    image: {
      src: 'https://images.unsplash.com/photo-1523381294911-8d3cead13475?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw1fHxmYXNoaW9uJTIwc3RvcmV8ZW58MHx8fHwxNzU5MjQ0ODc3fDA&ixlib=rb-4.1.0&q=80&w=1080',
      alt: 'A stylish, modern clothing store interior',
      aiHint: 'fashion store',
    },
    excerpt: 'The wait is over! APTLY DRESSED has officially launched. Discover our curated collections and redefine your style with timeless pieces.',
    content: `
      <p>The day we've all been waiting for has arrived. APTLY DRESSED is now live, and we couldn't be more excited to welcome you to our new online home. Our mission has always been to simplify style through a carefully curated selection of high-quality, sustainable, and timeless fashion.</p>
      <p>From today, you can explore our debut collections, featuring versatile essentials and statement pieces from brands that share our commitment to craftsmanship and ethical practices. We believe that a well-curated wardrobe is a source of confidence, and we've built our platform to help you discover pieces you'll love for years to come.</p>
      <p>Thank you for being a part of our journey. We invite you to explore the site, discover our selections, and join our community of style-conscious individuals.</p>
    `,
  },
  {
    slug: 'sustainability-commitment',
    title: 'Our Commitment to Sustainable Fashion',
    date: '2024-08-01',
    image: {
      src: 'https://images.unsplash.com/photo-1593113598332-cd288b649433?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxlY28tZnJpZW5kbHklMjBmYXNoaW9ufGVufDB8fHx8MTc1OTI0NDkyNnww&ixlib=rb-4.1.0&q=80&w=1080',
      alt: 'Natural fabrics and materials in neutral tones',
      aiHint: 'eco-friendly fashion',
    },
    excerpt: 'At APTLY DRESSED, sustainability is not just a buzzword; it\'s a core principle. Learn about how we\'re championing mindful consumption.',
    content: `
      <p>In today's fast-fashion landscape, we believe in taking a slower, more intentional approach. Our commitment to sustainability is woven into the fabric of APTLY DRESSED. We prioritize quality over quantity, selecting pieces made from superior, eco-friendly materials and produced through ethical manufacturing processes.</p>
      <p>We partner with brands that are transparent about their supply chains and are actively working to reduce their environmental footprint. By choosing timeless designs and durable craftsmanship, we empower you to build a wardrobe that not only looks good but also does good.</p>
      <p>Join us in championing a more sustainable future for fashion, one beautiful, lasting piece at a time.</p>
    `,
  },
  {
    slug: 'fall-collection-preview',
    title: 'First Look: The Autumn/Winter \'24 Collection',
    date: '2024-07-20',
    excerpt: 'Get an exclusive preview of the key trends and timeless pieces that will define your autumn and winter wardrobe.',
    content: `
      <p>As the leaves begin to turn, so does our attention to the wardrobe shifts that come with the cooler seasons. We are thrilled to give you a first look at our upcoming Autumn/Winter '24 collection, a curated selection of cozy knits, structured outerwear, and rich, earthy tones.</p>
      <p>This season is all about blending comfort with sophistication. Expect to see luxurious cashmere, tailored wool coats, and versatile leather boots that will anchor your look. Our curation focuses on investment pieces that you can layer, mix, and match to create a multitude of elegant outfits.</p>
      <p>Stay tuned for the full collection drop, and get ready to embrace the new season in style.</p>
    `,
  },
];

    