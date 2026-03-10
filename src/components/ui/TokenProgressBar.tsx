interface TokenProgressBarProps {
  total: number;
  used: number;
}

export const TokenProgressBar = ({ total, used }: TokenProgressBarProps) => {
  const percentage = Math.min(100, Math.max(0, (used / total) * 100));

  return (
    <div className="space-y-2 text-[0.6rem] uppercase tracking-[0.5em] text-secondaryText">
      <div className="h-1.5 rounded-full bg-primaryBg/40">
        <div
          data-testid="token-progress-bar-fill"
          className="h-full rounded-full bg-gradient-to-r from-primaryAccent to-secondaryAccent"
          style={{ width: `${percentage}%` }}
        />
      </div>
      <span>{percentage.toFixed(1)}% tokens used</span>
    </div>
  );
};
