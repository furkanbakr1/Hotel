import { useState } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const tourSpots = [
  {
    id: 1,
    name: 'Lobi',
    image: 'https://pannellum.org/images/cerro-toco-0.jpg', // Örnek 360° görüntü
    video: 'https://www.w3schools.com/html/mov_bbb.mp4', // Örnek video
    description: 'Lüks ve modern tasarımlı lobimiz'
  },
  {
    id: 2,
    name: 'Deluxe Suit',
    image: 'https://pannellum.org/images/alma.jpg', // Örnek 360° görüntü
    video: 'https://www.w3schools.com/html/mov_bbb.mp4', // Örnek video
    description: 'Şehir manzaralı deluxe suit odamız'
  },
  {
    id: 3,
    name: 'Restoran',
    image: 'https://pannellum.org/images/jfk.jpg', // Örnek 360° görüntü
    video: 'https://www.w3schools.com/html/mov_bbb.mp4', // Örnek video
    description: 'Modern ve şık restoranımız'
  }
];

const VirtualTour = () => {
  const { t } = useTranslation();
  const [activeSpot, setActiveSpot] = useState(tourSpots[0]);
  const [viewMode, setViewMode] = useState('360');

  return (
    <section className="py-5 bg-light">
      <div className="container py-5">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-5"
        >
          <h2 className="display-5 fw-bold mb-3">Sanal Tur</h2>
          <p className="lead text-muted">
            Otelin tüm alanlarını 360° görüntüleyin veya video turlarımızı izleyin
          </p>
        </motion.div>

        <div className="row g-4">
          <div className="col-lg-3">
            {/* Spot Seçici */}
            <div className="list-group">
              {tourSpots.map(spot => (
                <button
                  key={spot.id}
                  className={`list-group-item list-group-item-action ${
                    activeSpot.id === spot.id ? 'active' : ''
                  }`}
                  onClick={() => setActiveSpot(spot)}
                >
                  {spot.name}
                </button>
              ))}
            </div>

            {/* Görünüm Modu Seçici */}
            <div className="btn-group w-100 mt-3">
              <button
                className={`btn ${viewMode === '360' ? 'btn-primary' : 'btn-outline-primary'}`}
                onClick={() => setViewMode('360')}
              >
                360° Görünüm
              </button>
              <button
                className={`btn ${viewMode === 'video' ? 'btn-primary' : 'btn-outline-primary'}`}
                onClick={() => setViewMode('video')}
              >
                Video Tur
              </button>
            </div>

            {/* Alan Bilgisi */}
            <div className="card mt-3 border-0 bg-light">
              <div className="card-body">
                <h5 className="card-title">{activeSpot.name}</h5>
                <p className="card-text text-muted">{activeSpot.description}</p>
              </div>
            </div>
          </div>

          <div className="col-lg-9">
            <div className="card border-0 shadow-sm">
              <div className="card-body p-0">
                {viewMode === '360' ? (
                  <div style={{ height: '600px' }}>
                    <img 
                      src={activeSpot.image} 
                      alt={activeSpot.name}
                      className="w-100 h-100 object-fit-cover rounded-3"
                    />
                  </div>
                ) : (
                  <div className="ratio ratio-16x9">
                    <video
                      src={activeSpot.video}
                      controls
                      className="rounded-3"
                    />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VirtualTour; 