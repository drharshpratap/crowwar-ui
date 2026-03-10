import { sampleAuctions, sampleUsers } from '../../mock/sampleData';

export const ProfilePage = () => {
  const profile = sampleUsers[0];
  const saved = sampleAuctions.slice(0, 2);

  return (
    <div className="space-y-8">
      <section className="glass-card flex flex-wrap items-center justify-between gap-6 p-6">
        <div className="flex items-center gap-4">
          <img src={profile.avatar} alt={profile.name} className="h-20 w-20 rounded-full" />
          <div>
            <p className="text-xs uppercase tracking-[0.4em] text-secondaryText">{profile.location}</p>
            <h2 className="text-2xl font-semibold tracking-[0.25em] text-white">{profile.name}</h2>
            <p className="text-sm text-secondaryText">{profile.bio}</p>
          </div>
        </div>
        <div className="flex gap-5 text-center">
          <div>
            <p className="text-sm font-semibold tracking-[0.3em] text-white">3</p>
            <p className="text-xs uppercase tracking-[0.3em] text-secondaryText">Saved cars</p>
          </div>
          <div>
            <p className="text-sm font-semibold tracking-[0.3em] text-white">$873K</p>
            <p className="text-xs uppercase tracking-[0.3em] text-secondaryText">Active bids</p>
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <header className="flex items-center justify-between">
          <h3 className="text-xl font-semibold tracking-[0.3em] text-white">Saved Cars</h3>
          <span className="text-xs uppercase tracking-[0.35em] text-secondaryText">{saved.length} listings</span>
        </header>
        <div className="grid gap-4 md:grid-cols-2">
          {saved.map((auction) => (
            <div key={auction.id} className="glass-card flex flex-col gap-3 p-4">
              <img src={auction.images[0]} alt={auction.title} className="h-40 w-full rounded-2xl object-cover" />
              <div className="flex items-center justify-between text-sm text-secondaryText">
                <span>{auction.make}</span>
                <span>${auction.currentBid.toLocaleString()}</span>
              </div>
              <p className="text-xs uppercase tracking-[0.3em] text-secondaryText">Ending soon</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
