import { useState } from 'react';
import { motion } from 'framer-motion';

interface CarGalleryProps {
  images: string[];
}

export const CarGallery = ({ images }: CarGalleryProps) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeImage = images[activeIndex];

  return (
    <div className="grid gap-4 md:grid-cols-[2fr,1fr]">
      <motion.div
        key={activeImage}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden rounded-[1.5rem] border border-border bg-secondaryBg"
      >
        <img src={activeImage} alt={`Vehicle ${activeIndex + 1}`} className="h-80 w-full object-cover" />
      </motion.div>
      <div className="grid grid-cols-2 gap-3 md:grid-cols-1">
        {images.map((image, index) => (
          <button
            key={image}
            onClick={() => setActiveIndex(index)}
            className={`relative overflow-hidden rounded-2xl border transition ${
              activeIndex === index ? 'border-primaryAccent' : 'border-border'
            }`}
          >
            <img src={image} alt={`Thumbnail ${index + 1}`} className="h-24 w-full object-cover" />
            {activeIndex === index && (
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
            )}
          </button>
        ))}
      </div>
    </div>
  );
};
