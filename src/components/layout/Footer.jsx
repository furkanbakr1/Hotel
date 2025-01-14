import { Link } from 'react-router-dom';
import { memo } from 'react';

const Footer = memo(() => {
  return (
    <footer className="bg-dark text-white py-5">
      <div className="container py-4">
        <div className="row g-4">
          {/* Hotel Info */}
          <div className="col-lg-4 col-md-6">
            <h5 className="fw-bold mb-4">LuxHotel</h5>
            <p className="text-white-50 mb-4">
              Lüks ve konforun buluştuğu noktada, unutulmaz bir konaklama deneyimi için sizleri bekliyoruz.
            </p>
            <div className="d-flex gap-3">
              <a href="#" className="text-white hover-lift">
                <i className="bi bi-facebook fs-5"></i>
              </a>
              <a href="#" className="text-white hover-lift">
                <i className="bi bi-instagram fs-5"></i>
              </a>
              <a href="#" className="text-white hover-lift">
                <i className="bi bi-twitter-x fs-5"></i>
              </a>
              <a href="#" className="text-white hover-lift">
                <i className="bi bi-linkedin fs-5"></i>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-lg-2 col-md-6">
            <h6 className="fw-bold mb-4">Hızlı Linkler</h6>
            <ul className="list-unstyled mb-0">
              <li className="mb-2">
                <Link to="/" className="text-white-50 text-decoration-none hover-link">Ana Sayfa</Link>
              </li>
              <li className="mb-2">
                <Link to="/rooms" className="text-white-50 text-decoration-none hover-link">Odalar</Link>
              </li>
              <li className="mb-2">
                <Link to="/about" className="text-white-50 text-decoration-none hover-link">Hakkımızda</Link>
              </li>
              <li className="mb-2">
                <Link to="/contact" className="text-white-50 text-decoration-none hover-link">İletişim</Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-lg-3 col-md-6">
            <h6 className="fw-bold mb-4">İletişim</h6>
            <div className="text-white-50">
              <p className="mb-3">
                <i className="bi bi-geo-alt me-2"></i>
                İstanbul, Türkiye
              </p>
              <p className="mb-3">
                <i className="bi bi-envelope me-2"></i>
                info@luxhotel.com
              </p>
              <p className="mb-3">
                <i className="bi bi-telephone me-2"></i>
                +90 (212) 123 45 67
              </p>
            </div>
          </div>

          {/* Newsletter */}
          <div className="col-lg-3 col-md-6">
            <h6 className="fw-bold mb-4">Bülten</h6>
            <p className="text-white-50 mb-4">
              Fırsatlardan haberdar olmak için bültenimize abone olun.
            </p>
            <div className="input-group mb-3 flex-nowrap">
              <input type="email" className="form-control" style={{minWidth: 0}} />
              <button className="btn btn-light px-3">
                <i className="bi bi-send"></i>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="row mt-5 pt-4 border-top border-light">
          <div className="col-md-6 text-center text-md-start">
            <p className="text-white-50 mb-0">
              &copy; {new Date().getFullYear()} LuxHotel. Tüm hakları saklıdır.
            </p>
          </div>
          <div className="col-md-6 text-center text-md-end">
            <ul className="list-inline mb-0">
              <li className="list-inline-item">
                <a href="#" className="text-white-50 text-decoration-none hover-link">Gizlilik Politikası</a>
              </li>
              <li className="list-inline-item ms-3">
                <a href="#" className="text-white-50 text-decoration-none hover-link">Kullanım Şartları</a>
              </li>
              <li className="list-inline-item ms-3">
                <a href="#" className="text-white-50 text-decoration-none hover-link">KVKK</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
});

export default Footer; 