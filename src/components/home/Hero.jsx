import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const Hero = ({ onReservationClick }) => {
  const { t } = useTranslation();

  return (
    <div className="hero position-relative vh-100 bg-dark">
      <div className="position-absolute w-100 h-100">
        <img
          src="large-image.jpg?w=1920&q=80"
          srcset="
            large-image.jpg?w=640&q=80 640w,
            large-image.jpg?w=1280&q=80 1280w,
            large-image.jpg?w=1920&q=80 1920w
          "
          sizes="100vw"
          alt="Luxury Hotel"
          className="w-100 h-100 object-fit-cover opacity-50"
          loading="lazy"
        />
      </div>
      
      <div className="position-relative h-100 d-flex align-items-center justify-content-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center text-white px-4 container"
        >
          <h1 className="display-3 fw-bold mb-4">
            {t('hero.title')}
          </h1>
          <p className="lead mb-5">
            {t('hero.subtitle')}
          </p>
          <div className="d-flex gap-3 justify-content-center">
            <button 
              className="btn btn-primary btn-lg px-5 rounded-pill"
              onClick={() => onReservationClick()}
            >
              {t('hero.reserveButton')}
            </button>
            <button 
              className="btn btn-outline-light btn-lg px-5 rounded-pill"
              onClick={() => window.location.href = '/rooms'}
            >
              {t('hero.exploreButton')}
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero; 