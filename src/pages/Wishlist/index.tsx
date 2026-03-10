import { sampleAuctions } from '../../mock/sampleData';
import { CountdownTimer } from '../../components/ui/CountdownTimer';
import { useWishlistStore } from '../../store/wishlistStore';

export const WishlistPage = () => {
  const { wishlist, toggleWishlist } = useWishlistStore();
  const savedAuctions = wishlist.length
    ? sampleAuctions.filter((auction) => wishlist.includes(auction.id))
    : sampleAuctions.slice(0, 3);

  return (
    <div className="space-y-6">
      <header>
        <p className="text-xs uppercase tracking-[0.4em] text-secondaryText">Wishlist</p>
        <h2 className="text-2xl font-semibold tracking-[0.3em] text-white">Saved Auctions</h2>
      </header>
      <div className="grid gap-6 md:grid-cols-2">
        {savedAuctions.map((auction) => (
          <div key={auction.id} className="glass-card flex flex-col gap-3 p-5">
            <img src={auction.images[0]} alt={auction.title} className="h-48 w-full rounded-2xl object-cover" />
            <h3 className="text-lg font-semibold text-white">{auction.title}</h3>
            <div className="flex items-center justify-between text-sm text-secondaryText">
              <span>{auction.make}</span>
              <span>{auction.bidHistory.length} bids</span>
            </div>
            <div className="flex items-center justify-between text-sm text-white">
              <span>${auction.currentBid.toLocaleString()}</span>
              <CountdownTimer endTime={auction.auctionEndTime} />
            </div>
            <button
              onClick={() => toggleWishlist(auction.id)}
              className="rounded-2xl border border-border px-4 py-2 text-xs uppercase tracking-[0.3em] text-primaryAccent"
            >
              {wishlist.includes(auction.id) ? 'Remove from wishlist' : 'Save to wishlist'}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};
