import { useMemo } from 'react';
import { useParams } from 'react-router-dom';
import { BidPanel } from '../../components/auction/BidPanel';
import { CarGallery } from '../../components/ui/CarGallery';
import { CountdownTimer } from '../../components/ui/CountdownTimer';
import { sampleAuctions, sampleMessages } from '../../mock/sampleData';
import { ChatWindow } from '../../components/chat/ChatWindow';

export const AuctionDetailPage = () => {
  const { id } = useParams();
  const auction = useMemo(() => sampleAuctions.find((item) => item.id === id) ?? sampleAuctions[0], [id]);
  const completedBids = useMemo(
    () =>
      sampleAuctions
        .filter((item) => item.id !== auction.id)
        .slice(0, 3)
        .map((item) => ({
          id: item.id,
          title: `${item.make} ${item.model}`,
          year: item.year,
          mileage: item.mileage,
          winner: item.bidHistory[0]?.bidder.name ?? 'Collector',
          finalPrice: `$${(item.currentBid + 5000).toLocaleString()}`,
          image: item.images[0],
          status: 'Closed'
        })),
    [auction.id]
  );

  return (
    <div className="space-y-10">
      <div className="grid gap-6 lg:grid-cols-[1.3fr,0.7fr]">
        <CarGallery images={auction.images} />
        <div className="space-y-4">
          <div className="glass-card p-6">
            <p className="text-xs uppercase tracking-[0.4em] text-secondaryText">Auction ends in</p>
            <CountdownTimer endTime={auction.auctionEndTime} />
          </div>
          <BidPanel carId={auction.id} currentBid={auction.currentBid} bidIncrement={10000} />
        </div>
      </div>

      <section className="grid gap-8 lg:grid-cols-2">
        <div className="glass-card space-y-4 p-6">
          <header>
            <p className="text-xs uppercase tracking-[0.4em] text-secondaryText">Vehicle Specifications</p>
            <h3 className="text-xl font-semibold tracking-[0.25em] text-white">
              {auction.year} {auction.make} {auction.model}
            </h3>
          </header>
          <dl className="grid gap-3 text-sm text-secondaryText">
            {Object.entries(auction.specifications).map(([key, value]) => (
              <div key={key} className="flex items-center justify-between border-b border-border pb-3">
                <dt className="text-white capitalize tracking-[0.25em]">{key}</dt>
                <dd>{value}</dd>
              </div>
            ))}
          </dl>
        </div>
        <div className="glass-card space-y-3 p-6">
          <p className="text-xs uppercase tracking-[0.4em] text-secondaryText">Seller Notes</p>
          <p className="text-sm leading-relaxed text-secondaryText">{auction.description}</p>
          <div className="flex items-center gap-3">
            <img src={auction.seller.avatar} alt={auction.seller.name} className="h-10 w-10 rounded-full object-cover" />
            <div>
              <p className="text-sm font-semibold tracking-[0.3em] text-white">{auction.seller.name}</p>
              <p className="text-xs uppercase tracking-[0.3em] text-secondaryText">{auction.seller.location}</p>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-xs uppercase tracking-[0.3em] text-secondaryText">Starting price</span>
            <span className="text-sm text-white">${auction.startingPrice.toLocaleString()}</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-xs uppercase tracking-[0.3em] text-secondaryText">Lot number</span>
            <span className="text-sm text-white">{auction.lotNumber ?? 'N/A'}</span>
          </div>
          <button className="btn-accent">Contact Seller</button>
        </div>
      </section>

      <section className="grid gap-6 lg:grid-cols-2">
        <div className="glass-card space-y-3 p-6">
          <p className="text-xs uppercase tracking-[0.4em] text-secondaryText">Bid History</p>
          <div className="space-y-3 text-sm text-secondaryText">
            {auction.bidHistory.map((entry) => (
              <div key={entry.id} className="flex items-center justify-between border-b border-border pb-2">
                <span>{entry.bidder.name}</span>
                <span className="text-white">${entry.amount.toLocaleString()}</span>
              </div>
            ))}
          </div>
        </div>
        <ChatWindow activeSeller={auction.seller} messages={sampleMessages} />
      </section>

      <section className="space-y-6">
        <header className="flex items-center justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.4em] text-secondaryText">Bid Complete</p>
            <h3 className="text-xl font-semibold tracking-[0.2em] text-white">Recent winners</h3>
          </div>
          <small className="text-secondaryText">Updated moments ago</small>
        </header>
        <div className="grid gap-4 md:grid-cols-3">
          {completedBids.map((completed) => (
            <article key={completed.id} className="glass-card flex flex-col gap-3 p-4">
              <div className="relative h-32 overflow-hidden rounded-2xl bg-secondaryBg">
                <img src={completed.image} alt={completed.title} className="h-full w-full object-cover" />
                <span className="absolute right-3 top-3 rounded-full bg-primaryAccent/90 px-3 py-1 text-[0.55rem] uppercase tracking-[0.4em] text-white">
                  {completed.status}
                </span>
              </div>
              <div className="space-y-1 text-sm">
                <p className="text-xs uppercase tracking-[0.3em] text-secondaryText">{completed.winner}</p>
                <h4 className="text-lg font-semibold tracking-[0.2em] text-white">{completed.title}</h4>
                <p className="flex items-center justify-between text-xs uppercase tracking-[0.3em] text-secondaryText">
                  <span>Final bid</span>
                  <span className="text-white">{completed.finalPrice}</span>
                </p>
              </div>
              <div className="flex justify-between text-xs uppercase tracking-[0.3em] text-secondaryText">
                <span>{completed.year}</span>
                <span>{completed.mileage.toLocaleString()} mi</span>
              </div>
              <button className="btn-accent text-[0.65rem] tracking-[0.4em]">View result</button>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
};
