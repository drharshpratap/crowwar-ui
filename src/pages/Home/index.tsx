import { useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuctionCard } from '../../components/auction/AuctionCard';
import { FeaturedAuction } from '../../components/home/FeaturedAuction';
import { HeroSection } from '../../components/home/HeroSection';
import { SellCarCTA } from '../../components/home/SellCarCTA';
import { VideoSection } from '../../components/home/VideoSection';
import { sampleAuctions } from '../../mock/sampleData';

const firstVideoSection = '/src/assets/videos/2.mp4';
const secondVideoSection = '/src/assets/videos/3.mp4';

export const HomePage = () => {
  const navigate = useNavigate();

  const featuredAuction = useMemo(() => sampleAuctions[0], []);
  const remainingAuctions = useMemo(() => sampleAuctions.slice(1), []);

  return (
    <div className="space-y-10">
      <HeroSection onExplore={() => navigate('/explore')} onSell={() => navigate('/sell')} />
      <FeaturedAuction auction={featuredAuction} />
      <VideoSection src={firstVideoSection} headline="Pure American Muscle" tall />
      <VideoSection src={secondVideoSection} headline="The Auction Starts Now" tall />
      <SellCarCTA />
      <section className="space-y-6">
        <header className="flex items-center justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.4em] text-secondaryText">Live Muscle Auctions</p>
            <h2 className="text-2xl font-semibold uppercase tracking-[0.25em] text-white">Current Garage</h2>
          </div>
          <button
            onClick={() => navigate('/explore')}
            className="rounded-2xl border border-primaryAccent px-4 py-2 text-[0.6rem] uppercase tracking-[0.3em] text-primaryAccent"
          >
            View All
          </button>
        </header>
        <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {remainingAuctions.map((auction) => (
            <AuctionCard key={auction.id} auction={auction} />
          ))}
        </div>
      </section>
    </div>
  );
};
