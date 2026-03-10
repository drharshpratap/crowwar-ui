interface TokenBalanceProps {
  total: number;
  used: number;
}

export const TokenBalance = ({ total, used }: TokenBalanceProps) => {
  const remaining = Math.max(total - used, 0);

  return (
    <div className="flex items-center justify-between text-sm uppercase tracking-[0.3em] text-secondaryText">
      <span>Tokens Remaining</span>
      <span className="text-white">{remaining} / {total}</span>
    </div>
  );
};
