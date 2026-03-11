import { FormEvent, useEffect, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUserStore } from '../../store/userStore';

const adminCredentials = {
  username: 'admin',
  password: 'admin1234'
};

const adminProfile = {
  id: 'admin',
  name: 'Administrator',
  location: 'Detroit, MI',
  avatar: 'https://images.unsplash.com/photo-1504593811423-6dd665756598?auto=format&fit=crop&w=400&q=80',
  bio: 'Founder of Crowbar Auctions'
};

export const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const profile = useUserStore((state) => state.profile);
  const setProfile = useUserStore((state) => state.setProfile);

  useEffect(() => {
    if (profile) {
      navigate('/', { replace: true });
    }
  }, [profile, navigate]);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (username === adminCredentials.username && password === adminCredentials.password) {
      setProfile(adminProfile);
      navigate('/', { replace: true });
    } else {
      setError('Credentials do not match. Please try again.');
    }
  };

  const isFormValid = useMemo(() => username.length > 0 && password.length > 0, [username, password]);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-primaryBg px-4 py-10 text-primaryText">
      <div className="w-full max-w-lg space-y-8 rounded-3xl border border-border bg-secondaryBg/90 p-10 shadow-[0_40px_120px_rgba(0,0,0,0.8)] backdrop-blur">
        <div className="space-y-3 text-center">
          <p className="text-xs uppercase tracking-[0.4em] text-secondaryText">Welcome</p>
          <h1 className="text-3xl font-semibold uppercase tracking-[0.3em]">Crowbar Login</h1>
          <p className="text-sm text-secondaryText">Secure access to your auctions, tokens, and bidding dashboard.</p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="space-y-2">
            <label className="text-xs uppercase tracking-[0.4em] text-secondaryText" htmlFor="username">
              Username
            </label>
            <input
              id="username"
              name="username"
              value={username}
              onChange={(event) => setUsername(event.target.value)}
              className="w-full rounded-2xl border border-border bg-primaryBg/70 px-4 py-3 text-sm text-white placeholder:text-secondaryText focus:border-primaryAccent focus:outline-none"
              placeholder="admin"
              autoComplete="username"
            />
          </div>
          <div className="space-y-2">
            <label className="text-xs uppercase tracking-[0.4em] text-secondaryText" htmlFor="password">
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              className="w-full rounded-2xl border border-border bg-primaryBg/70 px-4 py-3 text-sm text-white placeholder:text-secondaryText focus:border-primaryAccent focus:outline-none"
              placeholder="admin1234"
              autoComplete="current-password"
            />
          </div>
          {error && <p className="text-xs text-primaryAccent">{error}</p>}
          <button
            type="submit"
            disabled={!isFormValid}
            className="w-full rounded-2xl border border-primaryAccent bg-primaryAccent/10 px-4 py-3 text-sm font-semibold uppercase tracking-[0.4em] text-primaryAccent transition hover:bg-primaryAccent hover:text-primaryText disabled:cursor-not-allowed disabled:opacity-50"
          >
            Log In
          </button>
        </form>
        <p className="text-center text-[0.65rem] uppercase tracking-[0.4em] text-secondaryText">User / pass: admin / admin1234</p>
      </div>
    </div>
  );
};
