import { CountdownTimer } from '../ui/CountdownTimer';
import { formatCurrency } from '../../utils/formatCurrency';
import { CarAuction } from '../../types';

interface FeaturedAuctionProps {
  auction: CarAuction;
}

export const FeaturedAuction = ({ auction }: FeaturedAuctionProps) => (
  <section className="glass-card mx-auto mb-10 flex flex-col gap-6 border border-border p-6 lg:flex-row">
    <div className="flex-1 overflow-hidden rounded-[2rem]">
      <img src={auction.images[0]} alt={auction.title} className="h-full w-full object-cover" />
    </div>
    <div className="flex-1 space-y-5">
      <div className="space-y-2">
        <p className="text-xs uppercase tracking-[0.4em] text-secondaryText">Featured Auction</p>
        <h2 className="text-3xl font-semibold uppercase tracking-[0.2em] text-white">
          {auction.year} {auction.make} {auction.model}
        </h2>
      </div>
      <div className="space-y-3 text-sm text-secondaryText">
        <p>{auction.description}</p>
        <div className="flex items-center justify-between">
          <span>Current Bid</span>
          <span className="text-lg text-white">{formatCurrency(auction.currentBid)}</span>
        </div>
        <div className="flex items-center justify-between">
          <span>Bid Count</span>
          <span className="text-lg text-white">{auction.bidHistory.length}</span>
        </div>
      </div>
      <CountdownTimer endTime={auction.auctionEndTime} />
      <div className="flex flex-wrap gap-3 text-[0.65rem] uppercase tracking-[0.4em]">
        <button className="btn-accent">Place Bid</button>
        <button className="rounded-2xl border border-primaryAccent/60 px-5 py-2 text-primaryAccent transition hover:border-secondaryAccent">
          Watch Auction
        </button>
      </div>
    </div>
  </section>
);
