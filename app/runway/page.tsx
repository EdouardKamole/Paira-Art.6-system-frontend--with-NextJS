import CategoryHero from '@/components/gallery/CategoryHero';
import GalleryGrid from '@/components/gallery/GalleryGrid';

export const metadata = {
  title: 'Runway Photography | Paira Art.6',
  description: 'Capturing fashion in motion on the runway',
};

export default function RunwayPage() {
  const demoImages = [
    { _id: '1', url: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=800&q=80', alt: 'Runway 1' },
    { _id: '2', url: 'https://images.unsplash.com/photo-1558769132-cb1aea41f9cd?w=800&q=80', alt: 'Runway 2' },
    { _id: '3', url: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?w=800&q=80', alt: 'Runway 3' },
    { _id: '4', url: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800&q=80', alt: 'Runway 4' },
    { _id: '5', url: 'https://images.unsplash.com/photo-1558769132-cb1aea41f9cd?w=800&q=80', alt: 'Runway 5' },
    { _id: '6', url: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=800&q=80', alt: 'Runway 6' },
  ];

  return (
    <main>
      <CategoryHero
        title="Runway"
        description="Fashion in motion - capturing the energy of the runway"
        backgroundImage="https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=1920&q=80"
      />
      <section className="py-20 bg-white">
        <div className="container-luxury">
          <GalleryGrid images={demoImages} />
        </div>
      </section>
    </main>
  );
}