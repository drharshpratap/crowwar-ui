import { create } from 'zustand';

interface ActiveBid {
  carId: string;
  amount: number;
}

interface BidState {
  bids: ActiveBid[];
  addBid: (carId: string, amount: number) => void;
}

export const useBidStore = create<BidState>((set) => ({
  bids: [],
  addBid: (carId, amount) =>
    set((state) => ({
      bids: state.bids.filter((bid) => bid.carId !== carId).concat({ carId, amount })
    }))
}));
