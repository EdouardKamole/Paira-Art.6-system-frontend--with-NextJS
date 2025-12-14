// ========================================
// FILE 2: app/editorial/page.tsx
// ========================================
import CategoryHero from '@/components/gallery/CategoryHero';
import GalleryGrid from '@/components/gallery/GalleryGrid';
import { getPageBanner, getGalleryImages, urlFor } from '@/lib/sanity';

export const metadata = {
  title: 'Editorial Photography | Paira Art.6',
  description: 'Magazine-quality editorial photography telling compelling visual stories',
};

export const revalidate = 60;

export default async function EditorialPage() {
  const banner = await getPageBanner('editorial');
  const sanityImages = await getGalleryImages('editorial');
  
  const images = sanityImages.map((img) => ({
    _id: img._id,
    url: urlFor(img.image).width(800).quality(80).url(),
    alt: img.title || 'Editorial photography',
    title: img.title,
    description: img.description,
  }));

  const bannerTitle = banner?.title || 'Editorial';
  const bannerDescription = banner?.description || 'Creating magazine-quality narratives through powerful imagery';
  const bannerImage = banner?.backgroundImage 
    ? urlFor(banner.backgroundImage).width(1920).quality(80).url()
    : 'https://images.unsplash.com/photo-1483985988355-763728e1935b?w=1920&q=80';

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