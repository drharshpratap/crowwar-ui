import { Link, NavLink, Outlet } from 'react-router-dom';
import { UserAvatar } from '../ui/UserAvatar';

const navItems = [
  { label: 'Explore', to: '/explore' },
  { label: 'Sell', to: '/sell' },
  { label: 'Wishlist', to: '/wishlist' },
  { label: 'Complete', to: '/bid-complete' },
  { label: 'Messages', to: '/messages' }
];

export const Layout = () => {
  return (
    <div className="min-h-screen bg-primaryBg text-primaryText">
      <header className="sticky top-0 z-40 border-b border-border bg-secondaryBg/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-6 py-4">
          <Link
            to="/"
            className="flex items-center rounded-2xl border border-border bg-secondaryBg/80 px-6 py-2 uppercase tracking-[0.5em] text-primaryAccent"
            aria-label="CrowWar home"
          >
            <span className="brand-logo text-lg">CrowWar</span>
          </Link>
          <nav className="flex items-center gap-3 text-sm uppercase tracking-[0.25em]">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  `px-3 py-2 transition ${
                    isActive ? 'text-primaryAccent' : 'text-secondaryText hover:text-primaryAccent'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
          <div className="flex items-center gap-3">
            <UserAvatar />
          </div>
        </div>
      </header>
      <main className="mx-auto max-w-6xl px-6 py-10">
        <Outlet />
      </main>
    </div>
  );
};
