import { useEffect, useMemo, useState } from 'react';
import type { ChatMessage } from '../../types';
import { sampleUsers } from '../../mock/sampleData';
import { ChatWindow } from '../../components/chat/ChatWindow';
import { chatService } from '../../services/chatService';

export const MessagesPage = () => {
  const [activeSellerId, setActiveSellerId] = useState(sampleUsers[0].id);
  const [conversation, setConversation] = useState<ChatMessage[]>([]);

  const activeSeller = useMemo(
    () => sampleUsers.find((user) => user.id === activeSellerId) ?? sampleUsers[0],
    [activeSellerId]
  );

  useEffect(() => {
    chatService.fetchConversation(activeSellerId).then(setConversation);
  }, [activeSellerId]);

  return (
    <div className="grid gap-6 lg:grid-cols-[0.6fr,1fr]">
      <div className="glass-card space-y-4 p-6">
        <p className="text-xs uppercase tracking-[0.4em] text-secondaryText">Conversations</p>
        <div className="space-y-3">
          {sampleUsers.map((user) => (
            <button
              key={user.id}
              onClick={() => setActiveSellerId(user.id)}
              className={`flex w-full items-center gap-3 rounded-2xl border px-4 py-3 text-left transition ${
                activeSellerId === user.id ? 'border-primaryAccent' : 'border-border'
              }`}
            >
              <img src={user.avatar} alt={user.name} className="h-12 w-12 rounded-full object-cover" />
              <div>
                <p className="text-sm font-semibold tracking-[0.3em] text-white">{user.name}</p>
                <p className="text-xs uppercase tracking-[0.3em] text-secondaryText">{user.location}</p>
              </div>
            </button>
          ))}
        </div>
      </div>
      <ChatWindow activeSeller={activeSeller} messages={conversation} />
    </div>
  );
};
