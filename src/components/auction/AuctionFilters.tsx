import { useMemo, useState } from 'react';
import { motion } from 'framer-motion';

export interface AuctionFilterPayload {
  make: string;
  model: string;
  yearRange: string;
  priceRange: string;
  endingSoon: boolean;
  noReserve: boolean;
  sort: string;
}

interface AuctionFiltersProps {
  makes: string[];
  models: string[];
  onChange?: (payload: AuctionFilterPayload) => void;
}

const defaultPayload: AuctionFilterPayload = {
  make: 'All',
  model: 'All',
  yearRange: 'All',
  priceRange: 'All',
  endingSoon: false,
  noReserve: false,
  sort: 'Newest'
};

export const AuctionFilters = ({ makes, models, onChange }: AuctionFiltersProps) => {
  const [filters, setFilters] = useState(defaultPayload);

  const handleUpdate = (changes: Partial<AuctionFilterPayload>) => {
    const next = { ...filters, ...changes };
    setFilters(next);
    onChange?.(next);
  };

  const makeOptions = useMemo(() => ['All', ...makes], [makes]);
  const modelOptions = useMemo(() => ['All', ...models], [models]);

  return (
    <motion.div
      initial={{ opacity: 0.4 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="glass-card grid gap-6 rounded-3xl p-6"
    >
      <div className="grid gap-4 md:grid-cols-2">
        <label className="text-xs uppercase tracking-[0.3em] text-secondaryText">
          Make
          <select
            className="mt-2 w-full rounded-2xl border border-border bg-secondaryBg/70 p-3 text-sm text-white"
            value={filters.make}
            onChange={(event) => handleUpdate({ make: event.target.value })}
          >
            {makeOptions.map((make) => (
              <option key={make} value={make} className="bg-secondaryBg text-primaryText">
                {make}
              </option>
            ))}
          </select>
        </label>
        <label className="text-xs uppercase tracking-[0.3em] text-secondaryText">
          Model
          <select
            className="mt-2 w-full rounded-2xl border border-border bg-secondaryBg/70 p-3 text-sm text-white"
            value={filters.model}
            onChange={(event) => handleUpdate({ model: event.target.value })}
          >
            {modelOptions.map((model) => (
              <option key={model} value={model} className="bg-secondaryBg text-primaryText">
                {model}
              </option>
            ))}
          </select>
        </label>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        <label className="text-xs uppercase tracking-[0.3em] text-secondaryText">
          Year Range
          <select
            className="mt-2 w-full rounded-2xl border border-border bg-secondaryBg/70 p-3 text-sm text-white"
            value={filters.yearRange}
            onChange={(event) => handleUpdate({ yearRange: event.target.value })}
          >
            {['All', '1960 - 1980', '1981 - 2000', '2001 - 2015', '2016 - 2025'].map((yearRange) => (
              <option key={yearRange} value={yearRange} className="bg-secondaryBg text-primaryText">
                {yearRange}
              </option>
            ))}
          </select>
        </label>
        <label className="text-xs uppercase tracking-[0.3em] text-secondaryText">
          Price Range
          <select
            className="mt-2 w-full rounded-2xl border border-border bg-secondaryBg/70 p-3 text-sm text-white"
            value={filters.priceRange}
            onChange={(event) => handleUpdate({ priceRange: event.target.value })}
          >
            {['All', 'Below $50k', '$50k - $150k', '$150k - $300k', 'Above $300k'].map((price) => (
              <option key={price} value={price} className="bg-secondaryBg text-primaryText">
                {price}
              </option>
            ))}
          </select>
        </label>
      </div>
      <div className="flex flex-wrap items-center gap-4 text-xs uppercase tracking-[0.3em] text-secondaryText">
        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={filters.endingSoon}
            onChange={(event) => handleUpdate({ endingSoon: event.target.checked })}
          />
          Ending Soon
        </label>
        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={filters.noReserve}
            onChange={(event) => handleUpdate({ noReserve: event.target.checked })}
          />
          No Reserve
        </label>
        <label className="flex items-center gap-2">
          Sort
          <select
            className="rounded-2xl border border-border bg-secondaryBg/70 p-2 text-xs text-white"
            value={filters.sort}
            onChange={(event) => handleUpdate({ sort: event.target.value })}
          >
            {['Newest', 'Ending soon', 'Most bids', 'Highest price'].map((option) => (
              <option key={option} value={option} className="bg-secondaryBg text-primaryText">
                {option}
              </option>
            ))}
          </select>
        </label>
      </div>
    </motion.div>
  );
};
