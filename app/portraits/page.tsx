// ========================================
// FILE 4: app/portraits/page.tsx
// ========================================
import CategoryHero from '@/components/gallery/CategoryHero';
import GalleryGrid from '@/components/gallery/GalleryGrid';
import { getPageBanner, getGalleryImages, urlFor } from '@/lib/sanity';

export const metadata = {
  title: 'Portrait Photography | Paira Art.6',
  description: 'Timeless portrait photography capturing the essence of personality and emotion',
};

export const revalidate = 60;

export default async function PortraitsPage() {
  const banner = await getPageBanner('portraits');
  const sanityImages = await getGalleryImages('portraits');
  
  const images = sanityImages.map((img) => ({
    _id: img._id,
    url: urlFor(img.image).width(800).quality(80).url(),
    alt: img.title || 'Portrait photography',
    title: img.title,
    description: img.description,
  }));

  const bannerTitle = banner?.title || 'Portraits';
  const bannerDescription = banner?.description || 'Capturing the essence of personality through timeless imagery';
  const bannerImage = banner?.backgroundImage 
    ? urlFor(banner.backgroundImage).width(1920).quality(80).url()
    : 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=1920&q=80';

  return (
    <main>
      <CategoryHero
        title={bannerTitle}
        description={bannerDescription}
        backgroundImage={bannerImage}
      />
      <section className="py-20 bg-white">
        <div className="container-luxury">
          {images.length > 0 ? (
            <GalleryGrid images={images} />
          ) : (
            <div className="text-center py-20">
              <p className="text-gray-500 text-lg">
                No images available yet. Add images in Sanity Studio.
              </p>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}