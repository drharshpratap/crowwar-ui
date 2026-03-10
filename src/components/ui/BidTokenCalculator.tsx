import { formatCurrency } from '../../utils/formatCurrency';

interface BidTokenCalculatorProps {
  bidAmount: number;
  tokensRequired: number;
  remaining: number;
}

export const BidTokenCalculator = ({ bidAmount, tokensRequired, remaining }: BidTokenCalculatorProps) => (
  <div className="rounded-2xl border border-border bg-primaryBg/40 p-4 text-xs uppercase tracking-[0.35em] text-secondaryText">
    <div className="flex items-center justify-between">
      <span>Bid Amount</span>
      <span className="text-white">{formatCurrency(bidAmount)}</span>
    </div>
    <div className="flex items-center justify-between">
      <span>Tokens Required</span>
      <span className="text-primaryAccent">{tokensRequired}</span>
    </div>
    <div className="flex items-center justify-between">
      <span>Remaining</span>
      <span className="text-secondaryText">{remaining}</span>
    </div>
  </div>
);
