export interface UserProfile {
  id: string;
  name: string;
  location: string;
  avatar: string;
  bio: string;
}

export interface BidRecord {
  id: string;
  bidder: UserProfile;
  amount: number;
  timestamp: string;
}

export interface AuctionSpecification {
  drivetrain: string;
  engine: string;
  transmission: string;
  fuelType: string;
  mpg: string;
  color: string;
}

export interface CarAuction {
  id: string;
  title: string;
  year: number;
  make: string;
  model: string;
  mileage: number;
  description: string;
  images: string[];
  currentBid: number;
  startingPrice: number;
  bidHistory: BidRecord[];
  seller: UserProfile;
  auctionEndTime: string;
  specifications: AuctionSpecification;
  lotNumber?: string;
}

export interface ChatMessage {
  id: string;
  sender: UserProfile;
  message: string;
  timestamp: string;
  isMine: boolean;
}
