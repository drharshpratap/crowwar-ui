import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { CarAuction } from '../../types';
import { CountdownTimer } from '../ui/CountdownTimer';
import { formatCurrency } from '../../utils/formatCurrency';
import { Sparkles } from 'lucide-react';

interface AuctionCardProps {
  auction: CarAuction;
}

export const AuctionCard = ({ auction }: AuctionCardProps) => {
  const mainImage = auction.images[0];

  return (
    <motion.article
      whileHover={{ translateY: -6 }}
      transition={{ type: 'spring', stiffness: 180 }}
      className="glass-card flex flex-col gap-4"
    >
      <div className="relative overflow-hidden rounded-2xl bg-[#0a0a0a]/60">
        <div className="w-full aspect-[4/3]">
          <img src={mainImage} alt={auction.title} className="h-full w-full object-cover" />
        </div>
      <div className="absolute top-4 left-4 rounded-full bg-primaryAccent/90 px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-white">
        Live
      </div>
      </div>
      <div className="flex items-center justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-secondaryText">{auction.year}</p>
          <h3 className="text-lg font-semibold tracking-[0.2em] text-white">
            {auction.make} {auction.model}
          </h3>
        </div>
        <div className="flex items-center gap-1 text-sm text-secondaryText">
          <Sparkles size={16} /> {auction.bidHistory.length} bids
        </div>
      </div>
      <div className="flex items-center justify-between text-sm text-secondaryText">
        <span>Current Bid</span>
        <span className="text-white">{formatCurrency(auction.currentBid)}</span>
      </div>
      <CountdownTimer endTime={auction.auctionEndTime} />
      <Link
        to={`/auction/${auction.id}`}
        className="btn-accent self-start"
        aria-label={`View auction for ${auction.title}`}
      >
        View Auction
      </Link>
    </motion.article>
  );
};
