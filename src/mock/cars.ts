import { CarAuction, BidRecord } from '../types';
import { users } from './users';

const imagePool = [
  'https://images.pexels.com/photos/210019/pexels-photo-210019.jpeg?auto=compress&cs=tinysrgb&w=1600',
  'https://images.pexels.com/photos/358070/pexels-photo-358070.jpeg?auto=compress&cs=tinysrgb&w=1600',
  'https://images.pexels.com/photos/2167166/pexels-photo-2167166.jpeg?auto=compress&cs=tinysrgb&w=1600',
  'https://images.pexels.com/photos/1000096/pexels-photo-1000096.jpeg?auto=compress&cs=tinysrgb&w=1600',
  'https://images.pexels.com/photos/210019/pexels-photo-210019.jpeg?auto=compress&cs=tinysrgb&w=1600',
  'https://images.pexels.com/photos/164634/pexels-photo-164634.jpeg?auto=compress&cs=tinysrgb&w=1600'
];

const catalog = [
  { make: 'Ferrari', model: '488 Pista', color: 'Rosso Corsa', engine: '3.9L Twin Turbo V8', drivetrain: 'RWD' },
  { make: 'Porsche', model: '911 GT3 RS', color: 'Martini Racing White', engine: '4.0L Flat-Six', drivetrain: 'RWD' },
  { make: 'McLaren', model: '765LT', color: 'Satin Sahara Orange', engine: '4.0L Twin Turbo V8', drivetrain: 'RWD' },
  { make: 'Lamborghini', model: 'Aventador SVJ', color: 'Giallo Orion', engine: '6.5L V12', drivetrain: '4WD' },
  { make: 'Aston Martin', model: 'DB11', color: 'Jet Black', engine: '5.2L Twin Turbo V12', drivetrain: 'RWD' },
  { make: 'Mercedes-AMG', model: 'GT Black Series', color: 'Graphite Grey', engine: '4.0L Biturbo V8', drivetrain: 'RWD' },
  { make: 'Lotus', model: 'Evora GT', color: 'British Racing Green', engine: '3.5L Supercharged V6', drivetrain: 'RWD' },
  { make: 'Bugatti', model: 'Chiron Sport', color: 'Mystique Brown', engine: '8.0L Quad Turbo W16', drivetrain: '4WD' },
  { make: 'Pagani', model: 'Huayra Roadster', color: 'Pearl White', engine: '6.0L Twin Turbo V12', drivetrain: 'RWD' },
  { make: 'Bentley', model: 'Continental GT', color: 'Sequin Blue', engine: '4.0L Twin Turbo W12', drivetrain: 'AWD' },
  { make: 'Rolls-Royce', model: 'Wraith', color: 'Darkest Tungsten', engine: '6.6L Twin Turbo V12', drivetrain: 'RWD' },
  { make: 'Chevrolet', model: 'Camaro ZL1 1LE', color: 'Nightfall Gray', engine: '6.2L Supercharged V8', drivetrain: 'RWD' }
];

const generateBidHistory = (prefix: string, base: number): BidRecord[] =>
  Array.from({ length: 5 }).map((_, index) => ({
    id: `${prefix}-bid-${index}`,
    bidder: users[(index + prefix.length) % users.length],
    amount: base + index * 6000,
    timestamp: new Date(Date.now() - index * 3600 * 1000 - index * 120000).toISOString()
  }));

const buildTitle = (entry: (typeof catalog)[number]): string => `${entry.make} ${entry.model}`;

export const cars: CarAuction[] = Array.from({ length: 24 }).map((_, index) => {
  const entry = catalog[index % catalog.length];
  const currentBid = 180000 + index * 7000;
  const seller = users[index % users.length];

  return {
    id: `car-${(index + 1).toString().padStart(2, '0')}`,
    title: buildTitle(entry),
    year: 2008 + ((index % 17) + 1),
    make: entry.make,
    model: entry.model,
    mileage: 1200 + index * 300,
    description: `Collector-grade ${entry.make} ${entry.model} finished in ${entry.color}. Meticulously serviced and ready for CrowWar.`,
    images: [
      imagePool[index % imagePool.length],
      imagePool[(index + 1) % imagePool.length],
      imagePool[(index + 2) % imagePool.length]
    ],
    currentBid,
    startingPrice: currentBid - 25000,
    bidHistory: generateBidHistory(`car-${index}`, currentBid - 12000),
    seller,
    auctionEndTime: new Date(Date.now() + (24 + index) * 3600 * 1000).toISOString(),
    specifications: {
      drivetrain: entry.drivetrain,
      engine: entry.engine,
      transmission: index % 2 === 0 ? '7-Speed DCT' : '8-Speed Automatic',
      fuelType: 'Gasoline',
      mpg: '12 / 18',
      color: entry.color
    }
  };
});
