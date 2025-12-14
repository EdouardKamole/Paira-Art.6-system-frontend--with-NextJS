// ========================================
// FILE 1: app/still-life/page.tsx
// ========================================
import CategoryHero from '@/components/gallery/CategoryHero';
import GalleryGrid from '@/components/gallery/GalleryGrid';
import { getPageBanner, getGalleryImages, urlFor } from '@/lib/sanity';

export const metadata = {
  title: 'Still Life Photography | Paira Art.6',
  description: 'Beauty in simplicity - still life photography with artistic vision',
};

export const revalidate = 60;

export default async function StillLifePage() {
  const banner = await getPageBanner('stillLife');
  const sanityImages = await getGalleryImages('stillLife');
  
  const images = sanityImages.map((img) => ({
    _id: img._id,
    url: urlFor(img.image).width(800).quality(80).url(),
    alt: img.title || 'Still life photography',
    title: img.title,
    description: img.description,
  }));

  const bannerTitle = banner?.title || 'Still Life';
  const bannerDescription = banner?.description || 'Finding beauty in simplicity through artistic composition';
  const bannerImage = banner?.backgroundImage 
    ? urlFor(banner.backgroundImage).width(1920).quality(80).url()
    : 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=1920&q=80';

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