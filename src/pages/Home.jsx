import Hero from '../components/home/Hero';
import FeaturedRooms from '../components/home/FeaturedRooms';
import VirtualTour from '../components/home/VirtualTour';
import Amenities from '../components/home/Amenities';
import Testimonials from '../components/home/Testimonials';
import BlogSection from '../components/home/BlogSection';
import { useEffect } from 'react';
import { Helmet } from 'react-helmet';

const HomePage = ({ onReservationClick }) => {
  useEffect(() => {
    document.title = 'LuxHotel - Ana Sayfa';
  }, []);

  return (
    <div>
      <Helmet>
        <title>LuxHotel - Ana Sayfa</title>
        <meta name="description" content="Fethiye'nin en lüks oteli. Deniz manzaralı odalar, özel plaj ve muhteşem hizmet." />
      </Helmet>
      <Hero onReservationClick={onReservationClick} />
      <FeaturedRooms onReservationClick={onReservationClick} />
      <VirtualTour />
      <Amenities />
      <BlogSection />
      <Testimonials />
    </div>
  );
};

export default HomePage; 