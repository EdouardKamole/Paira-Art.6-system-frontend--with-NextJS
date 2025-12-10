// FILE: components/gallery/CategoryHero.tsx
// Create file: components/gallery/CategoryHero.tsx

interface CategoryHeroProps {
  title: string;
  description: string;
  backgroundImage: string;
}

export default function CategoryHero({ title, description, backgroundImage }: CategoryHeroProps) {
  return (
    <section className="relative h-[70vh] min-h-[500px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-6 max-w-4xl mx-auto">
        <p className="luxury-text text-white/90 mb-6 animate-fade-in">
          Gallery
        </p>
        <h1 className="hero-title mb-8 animate-slide-up">
          {title}
        </h1>
        <p className="subtitle text-white/90 animate-fade-in-slow">
          {description}
        </p>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-white/50 rounded-full" />
        </div>
      </div>
    </section>
  );
}