import { Link, NavLink, Outlet, useNavigate } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import { UserAvatar } from '../ui/UserAvatar';
import { useTokenStore } from '../../store/tokenStore';
import { useUserStore } from '../../store/userStore';

const navItems = [
  { label: 'Explore', to: '/explore' },
  { label: 'Sell', to: '/sell' },
  { label: 'Wishlist', to: '/wishlist' },
  { label: 'Complete', to: '/bid-complete' },
  { label: 'Messages', to: '/messages' }
];

export const Layout = () => {
  const navigate = useNavigate();
  const profile = useUserStore((state) => state.profile);
  const setProfile = useUserStore((state) => state.setProfile);
  const ensureAuction = useTokenStore((state) => state.ensureAuction);
  const tokens = useTokenStore((state) => state.tokens['global']);
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    ensureAuction('global');
  }, [ensureAuction]);

  const totalTokens = tokens?.totalTokens ?? 2000;
  const usedTokens = tokens?.usedTokens ?? 0;
  const remainingTokens = Math.max(totalTokens - usedTokens, 0);

  const handleLogout = () => {
    setProfile(null);
    navigate('/login', { replace: true });
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (toggleRef.current && !toggleRef.current.contains(event.target as Node)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

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
          <div className="relative flex items-center gap-3" ref={toggleRef}>
            <button
              type="button"
              onClick={() => setMenuOpen((prev) => !prev)}
              className="rounded-full border border-border p-0 transition hover:border-primaryAccent focus:outline-none focus:ring-2 focus:ring-primaryAccent"
              aria-label="Toggle profile actions"
            >
              <UserAvatar />
            </button>
            {menuOpen && profile && (
              <div className="absolute right-0 top-full z-10 mt-3 w-48 rounded-2xl border border-border bg-secondaryBg/95 p-4 text-sm text-primaryText shadow-[0_20px_40px_rgba(0,0,0,0.6)]">
                <p className="text-[0.6rem] uppercase tracking-[0.3em] text-secondaryText">{profile.name}</p>
                <p className="text-xs text-secondaryText">Tokens Remaining</p>
                <strong className="text-lg tracking-[0.2em] text-white">
                  {remainingTokens} / {totalTokens}
                </strong>
                <button
                  onClick={handleLogout}
                  className="mt-4 w-full rounded-2xl border border-primaryAccent px-3 py-2 text-[0.6rem] uppercase tracking-[0.3em] text-primaryAccent transition hover:bg-primaryAccent hover:text-white"
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        </div>
      </header>
      <main className="mx-auto max-w-6xl px-6 py-10">
        <Outlet />
      </main>
    </div>
  );
};
