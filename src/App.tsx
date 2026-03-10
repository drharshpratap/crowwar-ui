import { Routes, Route } from 'react-router-dom';
import { Layout } from './components/layout/Layout';
import { HomePage } from './pages/Home';
import { ExplorePage } from './pages/Explore';
import { AuctionDetailPage } from './pages/AuctionDetail';
import { SellCarPage } from './pages/SellCar';
import { ProfilePage } from './pages/Profile';
import { WishlistPage } from './pages/Wishlist';
import { MessagesPage } from './pages/Messages';
import { BidCompletePage } from './pages/BidComplete';

const App = () => (
  <Routes>
    <Route path="/" element={<Layout />}>
      <Route index element={<HomePage />} />
      <Route path="explore" element={<ExplorePage />} />
      <Route path="auction/:id" element={<AuctionDetailPage />} />
      <Route path="sell" element={<SellCarPage />} />
      <Route path="profile" element={<ProfilePage />} />
      <Route path="wishlist" element={<WishlistPage />} />
      <Route path="bid-complete" element={<BidCompletePage />} />
      <Route path="messages" element={<MessagesPage />} />
    </Route>
  </Routes>
);

export default App;
