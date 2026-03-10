import type { CarAuction } from '../../types';
import { cars } from '../../mock/cars';

export const auctionService = {
  fetchAuctions: async (): Promise<CarAuction[]> => {
    await new Promise((resolve) => setTimeout(resolve, 120));
    return cars;
  },
  fetchAuctionById: async (id: string): Promise<CarAuction | undefined> => {
    await new Promise((resolve) => setTimeout(resolve, 120));
    return cars.find((car) => car.id === id);
  },
  placeBid: async (carId: string, amount: number) => {
    await new Promise((resolve) => setTimeout(resolve, 120));
    return { success: true, carId, amount };
  }
};
