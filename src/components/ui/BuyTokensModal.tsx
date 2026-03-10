import { useMemo } from 'react';
import { useTokenStore } from '../../store/tokenStore';
import { formatCurrency } from '../../utils/formatCurrency';

interface BuyTokensModalProps {
  auctionId: string;
  open: boolean;
  onClose: () => void;
}

const packs = [500, 1000, 5000];

export const BuyTokensModal = ({ auctionId, open, onClose }: BuyTokensModalProps) => {
  const purchaseTokens = useTokenStore((state) => state.purchaseTokens);
  const total = useTokenStore((state) => state.tokens[auctionId]?.totalTokens ?? 2000);

  const handlePurchase = (amount: number) => {
    purchaseTokens(auctionId, amount);
    onClose();
  };

  const packOptions = useMemo(
    () =>
      packs.map((pack) => ({
        tokens: pack,
        value: formatCurrency(pack * 100)
      })),
    []
  );

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
      <div className="max-w-sm rounded-3xl border border-border bg-secondaryBg/90 p-6 text-sm text-secondaryText">
        <header className="mb-4 text-xs uppercase tracking-[0.4em] text-secondaryText">
          Buy Tokens
        </header>
        <p className="mb-6 text-white font-semibold tracking-[0.3em]">Current cap: {total} tokens</p>
        <div className="grid gap-3">
          {packOptions.map((pack) => (
            <button
              key={pack.tokens}
              onClick={() => handlePurchase(pack.tokens)}
              className="rounded-2xl border border-border bg-primaryAccent/10 px-4 py-3 text-xs uppercase tracking-[0.4em] text-primaryAccent"
            >
              {pack.tokens} tokens · {pack.value}
            </button>
          ))}
        </div>
        <button
          onClick={onClose}
          className="mt-6 w-full rounded-2xl border border-border px-4 py-3 text-xs uppercase tracking-[0.4em] text-secondaryText"
        >
          Cancel
        </button>
      </div>
    </div>
  );
};
