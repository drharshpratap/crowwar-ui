import { create } from 'zustand';

interface WishlistState {
  wishlist: string[];
  toggleWishlist: (auctionId: string) => void;
}

export const useWishlistStore = create<WishlistState>((set) => ({
  wishlist: [],
  toggleWishlist: (auctionId) =>
    set((state) => ({
      wishlist: state.wishlist.includes(auctionId)
        ? state.wishlist.filter((id) => id !== auctionId)
        : [...state.wishlist, auctionId]
    }))
}));
