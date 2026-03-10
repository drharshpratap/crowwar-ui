import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface CountdownTimerProps {
  endTime: string;
}

const buildParts = (time: number) => ({
  hours: Math.floor(time / 3600),
  minutes: Math.floor((time % 3600) / 60),
  seconds: Math.floor(time % 60)
});

export const CountdownTimer = ({ endTime }: CountdownTimerProps) => {
  const [remaining, setRemaining] = useState<ReturnType<typeof buildParts>>(buildParts(0));

  useEffect(() => {
    const interval = setInterval(() => {
      const diff = Math.max(0, new Date(endTime).getTime() - Date.now());
      setRemaining(buildParts(Math.floor(diff / 1000)));
    }, 1000);

    return () => clearInterval(interval);
  }, [endTime]);

  return (
    <motion.div
      initial={{ opacity: 0.4 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      data-testid="countdown-timer"
      className="flex items-center gap-3 rounded-2xl border border-primaryAccent/30 bg-secondaryBg/70 px-4 py-3 text-xs font-semibold tracking-[0.3em] uppercase text-primaryAccent"
    >
      <span>{String(remaining.hours).padStart(2, '0')}</span>
      <span>:</span>
      <span>{String(remaining.minutes).padStart(2, '0')}</span>
      <span>:</span>
      <span>{String(remaining.seconds).padStart(2, '0')}</span>
    </motion.div>
  );
};
