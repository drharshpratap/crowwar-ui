import { ChatMessage } from '../../types';
import { messageThreads } from '../../mock/messages';

export const chatService = {
  fetchConversation: async (sellerId: string): Promise<ChatMessage[]> => {
    await new Promise((resolve) => setTimeout(resolve, 80));
    return messageThreads.find((thread) => thread.participant.id === sellerId)?.messages ?? [];
  },
  sendMessage: async (sellerId: string, text: string): Promise<ChatMessage> => {
    await new Promise((resolve) => setTimeout(resolve, 120));
    return {
      id: `msg-${Date.now()}`,
      sender: { id: sellerId, name: 'You', location: '', avatar: '', bio: '' },
      message: text,
      timestamp: new Date().toISOString(),
      isMine: true
    };
  }
};
