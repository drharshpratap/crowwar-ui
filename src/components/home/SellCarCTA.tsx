export const SellCarCTA = () => (
  <section className="mb-12 rounded-[2rem] border border-border bg-gradient-to-br from-secondaryBg/70 to-primaryBg p-10 text-white">
    <div className="mx-auto flex max-w-5xl flex-col gap-6 md:flex-row md:items-center md:justify-between">
      <div className="space-y-3">
        <p className="text-xs uppercase tracking-[0.4em] text-secondaryText">List Your Ride</p>
        <h2 className="text-3xl font-semibold uppercase tracking-[0.3em]">Sell Your Muscle Car</h2>
        <p className="max-w-xl text-sm text-secondaryText">
          Reach thousands of collectors and enthusiasts ready to bid on America’s finest machines.
        </p>
      </div>
      <button className="btn-accent text-xs tracking-[0.4em]">Start Selling</button>
    </div>
  </section>
);
