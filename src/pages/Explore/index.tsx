import { useMemo, useState } from 'react';
import { AuctionCard } from '../../components/auction/AuctionCard';
import { AuctionFilters } from '../../components/auction/AuctionFilters';
import { SearchBar } from '../../components/ui/SearchBar';
import { sampleAuctions } from '../../mock/sampleData';
import { CarAuction } from '../../types';

export const ExplorePage = () => {
  const [search, setSearch] = useState('');
  const [filters, setFilters] = useState({ make: 'All' });

  const makes = useMemo(() => Array.from(new Set(sampleAuctions.map((auction) => auction.make))), []);
  const models = useMemo(() => Array.from(new Set(sampleAuctions.map((auction) => auction.model))), []);

  const filteredAuctions = useMemo(() => {
    return sampleAuctions.filter((auction) => {
      if (filters.make !== 'All' && auction.make !== filters.make) return false;
      if (search && !auction.title.toLowerCase().includes(search.toLowerCase())) return false;
      return true;
    });
  }, [filters.make, search]);

  return (
    <div className="space-y-8">
      <div className="grid gap-6 md:grid-cols-[1.2fr,0.8fr]">
        <div>
          <h2 className="text-2xl font-semibold tracking-[0.3em] text-white">Explore Auctions</h2>
          <p className="text-sm text-secondaryText">Browse the global garage of CrowWar.</p>
        </div>
        <SearchBar value={search} onChange={setSearch} />
      </div>
      <div className="grid gap-6 lg:grid-cols-[0.85fr,1.15fr]">
        <div>
          <AuctionFilters makes={makes} models={models} onChange={(payload) => setFilters({ make: payload.make })} />
        </div>
        <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filteredAuctions.map((auction) => (
            <AuctionCard key={auction.id} auction={auction} />
          ))}
        </div>
      </div>
    </div>
  );
};
