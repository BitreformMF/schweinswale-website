import { useState } from 'react';

interface HeroImageProps {
  src: string;
  alt: string;
}

export default function HeroImage({ src, alt }: HeroImageProps) {
  const [loaded, setLoaded] = useState(false);

  return (
    <>
      {!loaded && <div className="absolute inset-0 hero-skeleton" />}
      <img
        src={src}
        alt={alt}
        className={`w-full h-full object-cover transition-opacity duration-700 ${loaded ? 'opacity-100' : 'opacity-0'}`}
        referrerPolicy="no-referrer"
        onLoad={() => setLoaded(true)}
      />
    </>
  );
}
