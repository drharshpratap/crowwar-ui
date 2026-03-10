import { FormEvent, useState } from 'react';
import { motion } from 'framer-motion';
import { ChatMessage, UserProfile } from '../../types';
import { MessageBubble } from './MessageBubble';

interface ChatWindowProps {
  activeSeller: UserProfile;
  messages: ChatMessage[];
  onSend?: (text: string) => void;
}

export const ChatWindow = ({ activeSeller, messages, onSend }: ChatWindowProps) => {
  const [draft, setDraft] = useState('');

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!draft.trim()) return;
    onSend?.(draft.trim());
    setDraft('');
  };

  return (
    <motion.div className="glass-card grid gap-4 p-6" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <header className="flex items-center justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-secondaryText">Chat with seller</p>
          <h4 className="text-lg font-semibold tracking-[0.15em] text-white">{activeSeller.name}</h4>
        </div>
        <div className="text-right text-xs text-secondaryText">
          <p>Active listing</p>
          <p className="text-white">No live bid yet</p>
        </div>
      </header>
      <div className="flex flex-col gap-3">
        {messages.map((message) => (
          <MessageBubble key={message.id} message={message} />
        ))}
      </div>
      <form onSubmit={handleSubmit} className="flex items-center gap-3">
        <input
          value={draft}
          onChange={(event) => setDraft(event.target.value)}
          placeholder="Type your message"
          className="w-full rounded-2xl border border-border bg-primaryBg/70 px-4 py-3 text-sm text-white placeholder:text-secondaryText focus:outline-none"
        />
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.95 }}
          type="submit"
          className="btn-accent"
        >
          Send
        </motion.button>
      </form>
    </motion.div>
  );
};
