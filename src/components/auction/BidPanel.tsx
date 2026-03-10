import { useEffect, useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { formatCurrency } from '../../utils/formatCurrency';
import { useBidStore } from '../../store/bidStore';
import { useTokenStore } from '../../store/tokenStore';
import { TokenBalance } from '../ui/TokenBalance';
import { TokenProgressBar } from '../ui/TokenProgressBar';
import { BidTokenCalculator } from '../ui/BidTokenCalculator';
import { BuyTokensModal } from '../ui/BuyTokensModal';

interface BidPanelProps {
  carId: string;
  currentBid: number;
  bidIncrement: number;
  onPlaceBid?: (amount: number) => void;
}

export const BidPanel = ({ carId, currentBid, bidIncrement, onPlaceBid }: BidPanelProps) => {
  const [bidInput, setBidInput] = useState((currentBid + bidIncrement).toString());
  const [success, setSuccess] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const nextBid = useMemo(() => currentBid + bidIncrement, [currentBid, bidIncrement]);
  const addBid = useBidStore((state) => state.addBid);
  const addUsedTokens = useTokenStore((state) => state.addUsedTokens);
  const ensureAuction = useTokenStore((state) => state.ensureAuction);
  const tokenRecord = useTokenStore((state) => state.tokens[carId] ?? { totalTokens: 2000, usedTokens: 0 });

  useEffect(() => {
    ensureAuction(carId);
  }, [carId, ensureAuction]);

  const parsedInput = Number(bidInput);
  const desiredBid = Math.max(parsedInput || nextBid, nextBid);
  const tokensRequired = Math.ceil(desiredBid / 100);
  const remainingTokens = Math.max(tokenRecord.totalTokens - tokenRecord.usedTokens, 0);
  const insufficientTokens = tokensRequired > remainingTokens;
  const hasExhaustedTokens = remainingTokens === 0;

  const handlePlaceBid = () => {
    if (insufficientTokens || hasExhaustedTokens) return;
    const amount = desiredBid;
    setBidInput(amount.toString());
    setSuccess(true);
    addBid(carId, amount);
    addUsedTokens(carId, tokensRequired);
    onPlaceBid?.(amount);
    setTimeout(() => setSuccess(false), 1800);
  };

  return (
    <div className="glass-card relative grid gap-5 p-6">
      <div>
        <TokenBalance total={tokenRecord.totalTokens} used={tokenRecord.usedTokens} />
        <TokenProgressBar total={tokenRecord.totalTokens} used={tokenRecord.usedTokens} />
      </div>
      <div className="flex items-center justify-between">
        <p className="text-xs uppercase tracking-[0.35em] text-secondaryText">Current Highest</p>
        <p className="text-sm text-secondaryText">{formatCurrency(currentBid)}</p>
      </div>
      <div className="text-3xl font-semibold tracking-[0.2em] text-white">{formatCurrency(nextBid)}</div>
      <label className="text-xs uppercase tracking-[0.3em] text-secondaryText">
        Your Bid
        <input
          type="number"
          min={nextBid}
          value={bidInput}
          onChange={(event) => setBidInput(event.target.value)}
          className="mt-2 w-full rounded-2xl border border-border bg-primaryBg/60 px-4 py-3 text-lg text-white"
        />
      </label>
      <BidTokenCalculator bidAmount={desiredBid} tokensRequired={tokensRequired} remaining={remainingTokens} />
      {insufficientTokens && (
        <p className="text-xs text-secondaryAccent">Insufficient tokens for this bid. Buy more to continue.</p>
      )}
      {hasExhaustedTokens && (
        <p className="text-xs text-secondaryAccent">Token balance exhausted. Buy more tokens to continue bidding.</p>
      )}
      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="btn-accent"
        onClick={handlePlaceBid}
        disabled={insufficientTokens || hasExhaustedTokens}
      >
        Place Bid
      </motion.button>
      <button
        onClick={() => setModalOpen(true)}
        className="btn-accent mt-2 border-primaryAccent/40 bg-primaryAccent/10 text-[0.6rem] tracking-[0.5em]"
      >
        Buy Tokens
      </button>
      <AnimatePresence>
        {success && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="absolute inset-x-6 top-6 rounded-2xl border border-primaryAccent bg-[#0f0f0f] px-4 py-3 text-center text-sm text-primaryAccent"
          >
            Bid placed successfully
          </motion.div>
        )}
      </AnimatePresence>
      <BuyTokensModal auctionId={carId} open={modalOpen} onClose={() => setModalOpen(false)} />
    </div>
  );
};
