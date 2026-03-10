import { create } from 'zustand';

interface AuctionTokenState {
  totalTokens: number;
  usedTokens: number;
}

interface TokenStore {
  tokens: Record<string, AuctionTokenState>;
  ensureAuction: (auctionId: string) => AuctionTokenState;
  addUsedTokens: (auctionId: string, amount: number) => void;
  purchaseTokens: (auctionId: string, amount: number) => void;
  resetAuctionTokens: (auctionId: string) => void;
}

const defaultEntry = (): AuctionTokenState => ({
  totalTokens: 2000,
  usedTokens: 0
});

export const useTokenStore = create<TokenStore>((set, get) => ({
  tokens: {},
  ensureAuction: (auctionId) => {
    const state = get().tokens;
    if (state[auctionId]) {
      return state[auctionId];
    }

    const updated = { ...state, [auctionId]: defaultEntry() };
    set({ tokens: updated });
    return updated[auctionId];
  },
  addUsedTokens: (auctionId, amount) =>
    set((state) => {
      const current = state.tokens[auctionId] ?? defaultEntry();
      const nextUsed = Math.min(current.usedTokens + amount, current.totalTokens);
      return {
        tokens: {
          ...state.tokens,
          [auctionId]: { ...current, usedTokens: nextUsed }
        }
      };
    }),
  purchaseTokens: (auctionId, amount) =>
    set((state) => {
      const current = state.tokens[auctionId] ?? defaultEntry();
      return {
        tokens: {
          ...state.tokens,
          [auctionId]: { ...current, totalTokens: current.totalTokens + amount }
        }
      };
    }),
  resetAuctionTokens: (auctionId) =>
    set((state) => ({
      tokens: {
        ...state.tokens,
        [auctionId]: defaultEntry()
      }
    }))
}));
