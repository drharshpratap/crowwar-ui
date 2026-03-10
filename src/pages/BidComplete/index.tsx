import { sampleAuctions } from '../../mock/sampleData';

export const BidCompletePage = () => {
  const completed = sampleAuctions.slice(0, 4);

  return (
    <div className="space-y-8">
      <header>
        <p className="text-xs uppercase tracking-[0.4em] text-secondaryText">Bid Complete</p>
        <h2 className="text-2xl font-semibold tracking-[0.25em] text-white">Recent winners</h2>
      </header>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {completed.map((auction) => (
          <article key={auction.id} className="glass-card flex flex-col gap-3 p-5">
            <div className="relative h-40 overflow-hidden rounded-2xl bg-secondaryBg">
              <img src={auction.images[0]} alt={auction.title} className="h-full w-full object-cover" />
              <span className="absolute left-3 top-3 rounded-full bg-primaryAccent/80 px-3 py-1 text-[0.55rem] uppercase tracking-[0.3em] text-white">
                Completed
              </span>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-secondaryText">{auction.year}</p>
              <h3 className="text-xl font-semibold tracking-[0.2em] text-white">
                {auction.make} {auction.model}
              </h3>
            </div>
            <p className="text-sm text-secondaryText line-clamp-2">{auction.description}</p>
            <div className="flex items-center justify-between text-sm text-secondaryText">
              <span>Bids {auction.bidHistory.length}</span>
              <span className="text-white">{(auction.currentBid + 5000).toLocaleString('en-US', { style: 'currency', currency: 'USD' })}</span>
            </div>
            <button className="btn-accent text-[0.65rem] tracking-[0.4em]">View results</button>
          </article>
        ))}
      </div>
    </div>
  );
};
