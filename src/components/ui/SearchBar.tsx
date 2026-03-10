import { Search } from 'lucide-react';

interface SearchBarProps {
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
}

export const SearchBar = ({ placeholder = 'Search cars, auctions, sellers', value, onChange }: SearchBarProps) => (
  <div className="glass-card flex items-center gap-3 rounded-3xl border border-border bg-secondaryBg/70 px-5 py-3">
    <Search className="text-secondaryText" size={18} />
    <input
      type="search"
      value={value}
      onChange={(event) => onChange?.(event.target.value)}
      placeholder={placeholder}
      className="w-full bg-transparent text-sm font-semibold uppercase tracking-[0.3em] text-white placeholder:text-secondaryText focus:outline-none"
    />
  </div>
);
