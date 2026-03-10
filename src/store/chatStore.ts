import { create } from 'zustand';
import type { ChatMessage } from '../types';

interface ChatState {
  messages: Record<string, ChatMessage[]>;
  addMessage: (sellerId: string, message: ChatMessage) => void;
}

export const useChatStore = create<ChatState>((set) => ({
  messages: {},
  addMessage: (sellerId, message) =>
    set((state) => ({
      messages: {
        ...state.messages,
        [sellerId]: [...(state.messages[sellerId] ?? []), message]
      }
    }))
}));
