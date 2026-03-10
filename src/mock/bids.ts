import { cars } from './cars';
import { BidRecord } from '../types';

export const bids: BidRecord[] = cars.flatMap((car) => car.bidHistory);
