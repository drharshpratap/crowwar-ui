import { AuctionCard } from '../../components/auction/AuctionCard';
import { SearchBar } from '../../components/ui/SearchBar';
import { sampleAuctions } from '../../mock/sampleData';
import { useMemo } from 'react';

export const HomePage = () => {
  const heroAuction = useMemo(() => sampleAuctions[0], []);
  const trending = sampleAuctions.slice(0, 2);

  return (
    <div className="space-y-12">
      <section className="glass-card grid gap-6 rounded-[2rem] bg-gradient-hero p-8">
        <div className="grid gap-8 md:grid-cols-2">
          <div className="space-y-4">
            <p className="text-xs uppercase tracking-[0.4em] text-secondaryText">Featured Auction</p>
            <h1 className="text-4xl font-semibold tracking-[0.3em] text-white">{heroAuction.title}</h1>
            <p className="leading-relaxed text-secondaryText">{heroAuction.description}</p>
            <div className="flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.3em] text-secondaryText">
              <span>{heroAuction.year}</span>
              <span>{heroAuction.make}</span>
              <span>{heroAuction.model}</span>
            </div>
            <button className="btn-accent">Explore Featured</button>
          </div>
          <div className="rounded-[1.5rem] border border-border bg-primaryBg/60 p-4">
            <div className="overflow-hidden rounded-2xl">
              <img src={heroAuction.images[0]} alt={heroAuction.title} className="h-64 w-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      <SearchBar />

      <section className="space-y-6">
        <header className="flex items-end justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.4em] text-secondaryText">Trending Now</p>
            <h2 className="text-2xl font-semibold tracking-[0.25em] text-white">Curated selections</h2>
          </div>
          <button className="text-xs uppercase tracking-[0.3em] text-primaryAccent">View all</button>
        </header>
        <div className="grid gap-6 md:grid-cols-2">
          {trending.map((auction) => (
            <AuctionCard key={auction.id} auction={auction} />
          ))}
        </div>
      </section>

      <section className="space-y-4">
        <header className="flex items-center justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.4em] text-secondaryText">Ending Soon</p>
            <h3 className="text-xl font-semibold tracking-[0.2em] text-white">Closing in under 48 hours</h3>
          </div>
          <small className="text-secondaryText">Updated live</small>
        </header>
        <div className="grid gap-4 md:grid-cols-2">
          {trending.map((auction) => (
            <AuctionCard key={`${auction.id}-soon`} auction={auction} />
          ))}
        </div>
      </section>
    </div>
  );
};
