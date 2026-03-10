import { ChatMessage } from '../../types';
import { motion } from 'framer-motion';

interface MessageBubbleProps {
  message: ChatMessage;
}

export const MessageBubble = ({ message }: MessageBubbleProps) => (
  <motion.div
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: 10 }}
    className={`max-w-[75%] rounded-2xl border border-border px-4 py-3 text-sm leading-relaxed ${
      message.isMine
        ? 'self-end bg-primaryAccent/10 text-white'
        : 'self-start bg-secondaryBg/80 text-secondaryText'
    }`}
  >
    <p className="text-primaryText">{message.message}</p>
    <span className="mt-2 block text-[0.6rem] uppercase tracking-[0.4em] text-secondaryText">
      {new Date(message.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
    </span>
  </motion.div>
);
