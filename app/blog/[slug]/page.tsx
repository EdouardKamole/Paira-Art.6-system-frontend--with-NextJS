// FILE: app/blog/[slug]/page.tsx
// Create folder: app/blog/[slug]/
// Create file: app/blog/[slug]/page.tsx

import Link from 'next/link';
import { Calendar, User, ArrowLeft, ArrowRight } from 'lucide-react';

// Demo function - replace with Sanity fetch
async function getBlogPost(slug: string) {
  // TODO: const post = await sanityFetch(blogPostBySlugQuery, { slug });
  
  return {
    _id: '1',
    title: 'My Journey Into Photography',
    slug: slug,
    mainImage: 'https://images.unsplash.com/photo-1452587925148-ce544e77e70d?w=1920&q=80',
    publishedAt: '2024-01-15',
    author: { 
      name: 'Paira Art.6',
      image: 'https://images.unsplash.com/photo-1554080353-a576cf803bda?w=200&q=80',
      bio: 'Ugandan photographer and cinematographer based in Kampala'
    },
    body: `
      <p>Photography has been my passion since I was 19 years old. It all started during a high school vacation when I picked up my first camera - a Nikon. Little did I know that this moment would shape the rest of my life.</p>

      <h2>The Beginning</h2>
      <p>Growing up in Kampala in a humble home, I was always drawn to visual storytelling. I loved how a single image could capture an emotion, a moment, a story that words sometimes couldn't express. My journey wasn't easy - I had to learn everything from scratch, often watching tutorials online and practicing whenever I could.</p>

      <h2>Discovering My Style</h2>
      <p>After a few years with Nikon, I transitioned to Sony cameras. The colors, the quality, and the creative freedom Sony offered completely changed my perspective on photography. I fell in love with the 35mm lens - it became my signature. This lens gives my fashion and lifestyle images a natural, real-life feel with just the right touch of drama.</p>

      <h2>Building a Career</h2>
      <p>My work is built on soft tones, clean composition, and a simple, modern look. Every image I create carries emotion and tells a story. Over the years, I've had the privilege of working with designers, fashion brands, influencers, and creative teams across Kampala, helping them stand out and connect with their audiences.</p>

      <h2>What Drives Me</h2>
      <p>I'm calm, easy to work with, and I focus on making my clients feel comfortable. From planning to final delivery, I work professionally and with care. Whether it's fashion, lifestyle, events, or film, I bring simplicity, feeling, and intention to every project.</p>

      <h2>Looking Forward</h2>
      <p>My vision is to inspire people and tell stories that bring communities together through photography and film. One moment, one frame at a time. This is just the beginning of my journey, and I'm excited to see where it takes me next.</p>
    `,
  };
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const post = await getBlogPost(params.slug);
  return {
    title: `${post.title} | Paira Art.6 Blog`,
    description: 'Read the full article on Paira Art.6 photography blog',
  };
}

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = await getBlogPost(params.slug);

  return (
    <main>
      
      {/* Hero Section */}
      <section className="relative h-[70vh] min-h-[500px] flex items-end overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${post.mainImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/20" />
        </div>

        <div className="relative z-10 w-full pb-16">
          <div className="container-luxury">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors duration-300 mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Blog
            </Link>

            <div className="max-w-4xl">
              <div className="flex items-center gap-4 mb-6 text-sm text-white/80">
                <span className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  {new Date(post.publishedAt).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </span>
                <span>•</span>
                <span className="flex items-center gap-2">
                  <User className="w-4 h-4" />
                  {post.author.name}
                </span>
              </div>

              <h1 className="font-display text-5xl md:text-7xl text-white mb-6">
                {post.title}
              </h1>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-20 bg-white">
        <div className="container-luxury">
          <div className="max-w-4xl mx-auto">
            
            {/* Article Body */}
            <article 
              className="prose prose-lg max-w-none mb-16"
              style={{
                fontSize: '1.125rem',
                lineHeight: '1.8',
                color: '#374151',
              }}
              dangerouslySetInnerHTML={{ __html: post.body }}
            />

            {/* Author Card */}
            <div className="border-t border-charcoal-200 pt-12">
              <div className="flex items-start gap-6">
                <div
                  className="w-24 h-24 rounded-full bg-cover bg-center flex-shrink-0"
                  style={{ backgroundImage: `url(${post.author.image})` }}
                />
                <div>
                  <p className="luxury-text mb-2">Written By</p>
                  <h3 className="font-serif text-2xl mb-3">{post.author.name}</h3>
                  <p className="text-charcoal-600 leading-relaxed mb-4">
                    {post.author.bio}
                  </p>
                  <Link href="/about" className="text-pumpkin-500 hover:text-pumpkin-600 transition-colors duration-300 text-sm font-light flex items-center gap-2">
                    Learn More About Me
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Related Posts (Optional) */}
      <section className="py-20 bg-cream-50">
        <div className="container-luxury">
          <h2 className="font-serif text-3xl mb-12 text-center">More Stories</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                slug: 'why-i-love-35mm-lens',
                title: 'Why I Love the 35mm Lens',
                image: 'https://images.unsplash.com/photo-1606166419283-d00f1aa47c8c?w=800&q=80',
              },
              {
                slug: 'shooting-in-kampala',
                title: 'Shooting in Kampala',
                image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=800&q=80',
              },
              {
                slug: 'tips-for-natural-light',
                title: 'Mastering Natural Light',
                image: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=800&q=80',
              },
            ].map((relatedPost) => (
              <Link
                key={relatedPost.slug}
                href={`/blog/${relatedPost.slug}`}
                className="group"
              >
                <div className="aspect-[4/3] rounded-lg overflow-hidden mb-4">
                  <div
                    className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                    style={{ backgroundImage: `url(${relatedPost.image})` }}
                  />
                </div>
                <h3 className="font-serif text-xl group-hover:text-pumpkin-500 transition-colors duration-300">
                  {relatedPost.title}
                </h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
}

// Add CSS for prose content
const styles = `
  .prose h2 {
    font-family: var(--font-serif);
    font-size: 2rem;
    font-weight: 500;
    margin-top: 3rem;
    margin-bottom: 1.5rem;
    color: #111827;
  }

  .prose h3 {
    font-family: var(--font-serif);
    font-size: 1.5rem;
    font-weight: 500;
    margin-top: 2rem;
    margin-bottom: 1rem;
    color: #111827;
  }

  .prose p {
    margin-bottom: 1.5rem;
  }

  .prose strong {
    color: #111827;
    font-weight: 600;
  }

  .prose a {
    color: #f97316;
    text-decoration: none;
  }

  .prose a:hover {
    color: #ea580c;
  }
`;