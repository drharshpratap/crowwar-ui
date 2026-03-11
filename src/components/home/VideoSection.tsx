import React from 'react';

interface VideoSectionProps {
  src: string;
  headline: string;
  tall?: boolean;
}

export const VideoSection = ({ src, headline, tall = false }: VideoSectionProps) => (
  <section
    className={`relative mb-10 w-full overflow-hidden rounded-[2rem] border border-border bg-black/50 ${
      tall ? 'h-[640px] md:h-[800px]' : 'h-[320px] md:h-[420px]'
    }`}
  >
    <video
      autoPlay
      muted
      loop
      playsInline
      src={src}
      className="h-full w-full object-cover"
    />
    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/40 to-black/80" />
    <div className="absolute inset-0 flex items-center justify-center">
      <p className="text-center text-3xl font-semibold uppercase tracking-[0.4em] text-white sm:text-4xl">
        {headline}
      </p>
    </div>
  </section>
);
