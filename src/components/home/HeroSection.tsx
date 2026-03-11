interface HeroSectionProps {
  onExplore: () => void;
  onSell: () => void;
}

const stats = [
  { label: 'Live Auctions', value: '240' },
  { label: 'Active Bidders', value: '1,200' }
];

export const HeroSection = ({ onExplore, onSell }: HeroSectionProps) => (
  <section className="relative mb-12 overflow-hidden rounded-[2.5rem] border border-border p-6 min-h-[540px] md:min-h-[720px]">
    <video
      autoPlay
      muted
      loop
      playsInline
      src="/src/assets/videos/1.mp4"
      className="absolute inset-0 h-full w-full object-cover"
    />
    <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/60 to-black/70" />
    <div className="relative mx-auto flex max-w-6xl flex-col gap-6 px-4 py-12 text-white md:flex-row md:items-end">
      <div className="space-y-4">
        <p className="text-xs uppercase tracking-[0.4em] text-secondaryText">Premium Muscle Auctions</p>
        <h1 className="text-4xl font-semibold leading-tight tracking-[0.2em] md:text-5xl">Find Your Next Legendary Muscle Car</h1>
        <p className="text-sm leading-relaxed text-secondaryText">Bid on rare classics and modern American power</p>
        <div className="flex flex-wrap gap-3 text-[0.7rem] uppercase tracking-[0.4em]">
          <button
            onClick={onExplore}
            className="btn-accent text-[0.7rem] tracking-[0.4em]"
          >
            Explore Auctions
          </button>
          <button
            onClick={onSell}
            className="rounded-2xl border border-white/40 px-6 py-3 text-[0.7rem] uppercase tracking-[0.4em] text-white transition hover:border-primaryAccent hover:text-primaryAccent"
          >
            Sell Your Car
          </button>
        </div>
      </div>
      <div className="flex flex-wrap gap-4">
        {stats.map((stat) => (
          <div key={stat.label} className="glass-card flex flex-col gap-1 px-5 py-4 text-center">
            <span className="text-xs uppercase tracking-[0.4em] text-secondaryText">{stat.label}</span>
            <strong className="text-2xl tracking-[0.3em] text-white">{stat.value}</strong>
          </div>
        ))}
      </div>
    </div>
  </section>
);
