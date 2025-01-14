import { useState, useEffect, memo } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const currencies = [
  { code: 'TRY', symbol: '₺', rate: 1 },
  { code: 'USD', symbol: '$', rate: 0.037 },
  { code: 'EUR', symbol: '€', rate: 0.034 },
  { code: 'GBP', symbol: '£', rate: 0.029 }
];

const Navbar = memo(({ onReservationClick }) => {
  const { t, i18n } = useTranslation();
  const [isVisible, setIsVisible] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [currency, setCurrency] = useState(currencies[0]);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      
      // Yukarı kaydırma durumunda navbar'ı göster, aşağı kaydırmada gizle
      setIsVisible(prevScrollPos > currentScrollPos || currentScrollPos < 50);
      
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos]);

  const isActive = (path) => {
    return location.pathname === path;
  };

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  const changeCurrency = (curr) => {
    setCurrency(curr);
    // Global currency state'i güncellenecek
  };

  return (
    <nav className={`navbar navbar-expand-lg fixed-top bg-transparent ${isVisible ? 'navbar-visible' : 'navbar-hidden'}`}>
      <div className="container">
        <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Travel%20and%20places/Hotel.png" alt="Hotel" width="25" height="25" />
        <Link to="/" className="navbar-brand fw-bold text-white">
          <span className="fs-4">LuxHotel</span>
        </Link>

        <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarNav"
          aria-controls="navbarNav" 
          aria-expanded="false" 
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon text-white"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto align-items-center">
            {[
              { path: '/', label: t('navbar.home') },
              { path: '/rooms', label: t('navbar.rooms') },
              { path: '/blog', label: t('navbar.blog') },
              { path: '/about', label: t('navbar.about') },
              { path: '/contact', label: t('navbar.contact') }
            ].map(({ path, label }) => (
              <li className="nav-item mx-2" key={path}>
                <Link
                  to={path}
                  className={`nav-link px-3 py-2 rounded-pill ${
                    isActive(path)
                      ? 'text-white bg-white bg-opacity-25'
                      : 'text-white'
                  }`}
                >
                  {label}
                </Link>
              </li>
            ))}

            <li className="nav-item mx-2 dropdown">
              <button
                className="btn btn-link nav-link dropdown-toggle text-white"
                data-bs-toggle="dropdown"
              >
                {i18n.language === 'tr' ? '🇹🇷' : '🇬🇧'}
              </button>
              <ul className="dropdown-menu dropdown-menu-end">
                <li>
                  <button
                    className="dropdown-item d-flex align-items-center"
                    onClick={() => changeLanguage('tr')}
                  >
                    <span className="me-2">🇹🇷</span> Türkçe
                  </button>
                </li>
                <li>
                  <button
                    className="dropdown-item d-flex align-items-center"
                    onClick={() => changeLanguage('en')}
                  >
                    <span className="me-2">🇬🇧</span> English
                  </button>
                </li>
              </ul>
            </li>

            <li className="nav-item mx-2 dropdown">
              <button
                className="btn btn-link nav-link dropdown-toggle text-white"
                data-bs-toggle="dropdown"
              >
                {currency.code}
              </button>
              <ul className="dropdown-menu dropdown-menu-end">
                {currencies.map((curr) => (
                  <li key={curr.code}>
                    <button
                      className="dropdown-item"
                      onClick={() => changeCurrency(curr)}
                    >
                      {curr.symbol} {curr.code}
                    </button>
                  </li>
                ))}
              </ul>
            </li>

            <li className="nav-item ms-2">
              <button 
                className="btn btn-light rounded-pill px-4"
                onClick={onReservationClick}
              >
                {t('navbar.reservation')}
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
});

export default Navbar; 