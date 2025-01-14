import { useState, useEffect, lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import ReservationModal from './components/common/ReservationModal';
import SupportChat from './components/common/SupportChat';
import './i18n';

// LoadingSpinner bileşenini doğrudan import edelim
const LoadingSpinner = () => (
  <div className="d-flex justify-content-center align-items-center min-vh-100">
    <div className="spinner-border text-primary" role="status">
      <span className="visually-hidden">Loading...</span>
    </div>
  </div>
);

// Sayfaları lazy loading ile yükle
const HomePage = lazy(() => import('./pages/Home'));
const RoomsPage = lazy(() => import('./pages/Rooms'));
const BlogPage = lazy(() => import('./pages/Blog'));
const AboutPage = lazy(() => import('./pages/About'));
const ContactPage = lazy(() => import('./pages/Contact'));

const App = () => {
  const [showReservation, setShowReservation] = useState(false);
  const [selectedRoom, setSelectedRoom] = useState(null);

  const handleReservation = (room = null) => {
    setSelectedRoom(room);
    setShowReservation(true);
  };

  return (
    <Router>
      <div className="d-flex flex-column min-vh-100">
        <Navbar onReservationClick={() => handleReservation()} />
        <Suspense fallback={<LoadingSpinner />}>
          <main className="flex-grow-1">
            <Routes>
              <Route path="/" element={<HomePage onReservationClick={handleReservation} />} />
              <Route path="/rooms" element={<RoomsPage onReservationClick={handleReservation} />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/blog" element={<BlogPage />} />
            </Routes>
          </main>
        </Suspense>
        <Footer />
        <ReservationModal 
          show={showReservation}
          onHide={() => setShowReservation(false)}
          selectedRoom={selectedRoom}
        />
        <SupportChat />
      </div>
    </Router>
  );
};

export default App;
