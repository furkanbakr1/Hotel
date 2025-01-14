import { useState, useCallback, useEffect } from 'react';
import { motion } from 'framer-motion';

const rooms = [
  {
    id: 1,
    name: 'Deluxe Suit',
    type: 'suit',
    price: 1200,
    size: 45,
    capacity: 2,
    bed: 'King Size',
    view: 'Şehir Manzarası',
    image: 'https://images.unsplash.com/photo-1611892440504-42a792e24d32?ixlib=rb-4.0.3',
    images: [
      'https://images.unsplash.com/photo-1611892440504-42a792e24d32?ixlib=rb-4.0.3',
      'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3',
    ],
    features: ['Jakuzi', 'Mini Bar', 'Ücretsiz Wi-Fi', 'LED TV', '24 Saat Oda Servisi'],
    description: 'Şehir manzaralı lüks suit odamız, konforunuz için her detayın düşünüldüğü özel bir deneyim sunuyor.'
  },
  {
    id: 2,
    name: 'Premium Oda',
    type: 'standard',
    price: 800,
    size: 35,
    capacity: 2,
    bed: 'Queen Size',
    view: 'Bahçe Manzarası',
    image: 'https://images.unsplash.com/photo-1591088398332-8a7791972843?ixlib=rb-4.0.3',
    images: [
      'https://images.unsplash.com/photo-1591088398332-8a7791972843?ixlib=rb-4.0.3',
      'https://images.unsplash.com/photo-1591088499253-ca0b5f3db3f6?ixlib=rb-4.0.3',
    ],
    features: ['Balkon', 'Çalışma Alanı', 'Mini Bar', 'Ücretsiz Wi-Fi', 'LED TV'],
    description: 'Ferah ve konforlu premium odamız, iş veya tatil amaçlı konaklamalarınız için ideal bir seçenek.'
  },
  {
    id: 3,
    name: 'Aile Süiti',
    type: 'family',
    price: 1500,
    size: 65,
    capacity: 4,
    bed: '2 King Size',
    view: 'Deniz Manzarası',
    image: 'https://images.unsplash.com/photo-1566665797739-1674de7a421a?ixlib=rb-4.0.3',
    images: [
      'https://images.unsplash.com/photo-1566665797739-1674de7a421a?ixlib=rb-4.0.3',
      'https://images.unsplash.com/photo-1560185007-c5ca9d2c014d?ixlib=rb-4.0.3',
    ],
    features: ['2 Yatak Odası', 'Oturma Alanı', 'Mutfak', 'Jakuzi', 'Balkon', 'Mini Bar', 'Ücretsiz Wi-Fi'],
    description: 'Aileler için özel olarak tasarlanmış geniş süitimiz, konforlu bir tatil için ihtiyacınız olan her şeyi sunuyor.'
  },
  {
    id: 4,
    name: 'Executive Suit',
    type: 'suit',
    price: 2000,
    size: 55,
    capacity: 2,
    bed: 'King Size',
    view: 'Panoramik Şehir Manzarası',
    image: 'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?ixlib=rb-4.0.3',
    images: [
      'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?ixlib=rb-4.0.3',
      'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?ixlib=rb-4.0.3',
    ],
    features: ['Özel Çalışma Alanı', 'Toplantı Odası', 'Express Check-in', 'Jakuzi', 'Mini Bar', 'Butler Servisi'],
    description: 'İş seyahatleri için ideal olan executive süitimiz, lüks ve fonksiyonelliği bir arada sunuyor.'
  },
  {
    id: 5,
    name: 'Standart Oda',
    type: 'standard',
    price: 600,
    size: 30,
    capacity: 2,
    bed: 'Queen Size',
    view: 'Şehir Manzarası',
    image: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?ixlib=rb-4.0.3',
    images: [
      'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?ixlib=rb-4.0.3',
      'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?ixlib=rb-4.0.3',
    ],
    features: ['LED TV', 'Mini Bar', 'Ücretsiz Wi-Fi', 'Duş'],
    description: 'Ekonomik ve konforlu standart odamız, kısa konaklamalar için ideal bir seçenek.'
  }
];

const RoomDetailModal = ({ room, show, onHide }) => {
  const [activeImage, setActiveImage] = useState(0);

  if (!show) return null;

  return (
    <>
      <div className="modal fade show d-block" tabIndex="-1">
        <div className="modal-dialog modal-dialog-centered modal-xl">
          <div className="modal-content border-0 shadow-lg">
            <div className="modal-header border-0 bg-light">
              <h5 className="modal-title fw-bold">{room.name}</h5>
              <button type="button" className="btn-close" onClick={onHide}></button>
            </div>
            <div className="modal-body p-0">
              {/* Photo Gallery */}
              <div className="position-relative">
                <div className="ratio ratio-16x9">
                  <img
                    src={room.images[activeImage]}
                    alt={room.name}
                    className="object-fit-cover"
                  />
                </div>
                <div className="position-absolute bottom-0 start-0 end-0 p-3 bg-dark bg-opacity-50">
                  <div className="d-flex gap-2 overflow-auto py-2">
                    {room.images.map((image, index) => (
                      <img
                        key={index}
                        src={image}
                        alt={`${room.name} ${index + 1}`}
                        className={`rounded cursor-pointer`}
                        style={{ 
                          width: '100px', 
                          height: '60px', 
                          objectFit: 'cover',
                          border: activeImage === index ? '2px solid white' : 'none'
                        }}
                        onClick={() => setActiveImage(index)}
                      />
                    ))}
                  </div>
                </div>
              </div>

              <div className="p-4">
                <div className="row">
                  <div className="col-lg-8">
                    <h6 className="fw-bold mb-4">Oda Özellikleri</h6>
                    <div className="row g-4 mb-4">
                      <div className="col-sm-6">
                        <div className="d-flex align-items-center p-3 bg-light rounded-3">
                          <i className="bi bi-rulers fs-4 text-primary me-3"></i>
                          <div>
                            <small className="text-muted d-block">Oda Boyutu</small>
                            <strong>{room.size}m²</strong>
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <div className="d-flex align-items-center p-3 bg-light rounded-3">
                          <i className="bi bi-people fs-4 text-primary me-3"></i>
                          <div>
                            <small className="text-muted d-block">Kapasite</small>
                            <strong>{room.capacity} Kişi</strong>
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <div className="d-flex align-items-center p-3 bg-light rounded-3">
                          <i className="bi bi-eye fs-4 text-primary me-3"></i>
                          <div>
                            <small className="text-muted d-block">Manzara</small>
                            <strong>{room.view}</strong>
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <div className="d-flex align-items-center p-3 bg-light rounded-3">
                          <i className="bi bi-bed fs-4 text-primary me-3"></i>
                          <div>
                            <small className="text-muted d-block">Yatak</small>
                            <strong>{room.bed}</strong>
                          </div>
                        </div>
                      </div>
                    </div>

                    <h6 className="fw-bold mb-3">Oda Hakkında</h6>
                    <p className="text-muted">{room.description}</p>

                    <h6 className="fw-bold mb-3">Özellikler</h6>
                    <div className="row g-3">
                      {room.features.map((feature, index) => (
                        <div key={index} className="col-md-6">
                          <div className="d-flex align-items-center">
                            <i className="bi bi-check-circle text-primary me-2"></i>
                            <span>{feature}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="col-lg-4">
                    <div className="card border-0 shadow-sm">
                      <div className="card-body">
                        <h6 className="fw-bold mb-4">Rezervasyon</h6>
                        <div className="mb-3">
                          <label className="form-label small">Giriş Tarihi</label>
                          <input type="date" className="form-control" />
                        </div>
                        <div className="mb-3">
                          <label className="form-label small">Çıkış Tarihi</label>
                          <input type="date" className="form-control" />
                        </div>
                        <div className="mb-3">
                          <label className="form-label small">Kişi Sayısı</label>
                          <select className="form-select">
                            <option>1 Kişi</option>
                            <option>2 Kişi</option>
                            <option>3 Kişi</option>
                            <option>4 Kişi</option>
                          </select>
                        </div>
                        <div className="d-flex justify-content-between align-items-center mb-4">
                          <div>
                            <small className="text-muted d-block">Gecelik</small>
                            <span className="h4 mb-0 text-primary fw-bold">
                              {room.price}₺
                            </span>
                          </div>
                          <button className="btn btn-primary px-4">
                            Rezervasyon Yap
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="modal-backdrop fade show"></div>
    </>
  );
};

const RoomsPage = ({ onReservationClick }) => {
  const [selectedRoom, setSelectedRoom] = useState(null);
  const [filters, setFilters] = useState({
    type: 'all',
    priceRange: 'all',
    capacity: 'all',
    searchQuery: ''
  });
  const [showFilters, setShowFilters] = useState(false);
  const [filteredRooms, setFilteredRooms] = useState(rooms);

  // Filtreleme fonksiyonu
  const filterRooms = useCallback(() => {
    let result = [...rooms];

    // Tip filtreleme
    if (filters.type !== 'all') {
      result = result.filter(room => room.type === filters.type);
    }

    // Fiyat aralığı filtreleme
    if (filters.priceRange !== 'all') {
      const [min, max] = filters.priceRange.split('-').map(Number);
      result = result.filter(room => {
        if (max) {
          return room.price >= min && room.price <= max;
        } else {
          return room.price >= min;
        }
      });
    }

    // Kapasite filtreleme
    if (filters.capacity !== 'all') {
      const capacity = filters.capacity === '4+' ? 4 : Number(filters.capacity);
      result = result.filter(room => {
        if (filters.capacity === '4+') {
          return room.capacity >= capacity;
        }
        return room.capacity === capacity;
      });
    }

    // Arama sorgusu filtreleme
    if (filters.searchQuery) {
      const query = filters.searchQuery.toLowerCase();
      result = result.filter(room =>
        room.name.toLowerCase().includes(query) ||
        room.description.toLowerCase().includes(query) ||
        room.features.some(feature => feature.toLowerCase().includes(query))
      );
    }

    setFilteredRooms(result);
  }, [filters]);

  // Filtreleri sıfırlama
  const resetFilters = () => {
    setFilters({
      type: 'all',
      priceRange: 'all',
      capacity: 'all',
      searchQuery: ''
    });
  };

  // Filtreler değiştiğinde otomatik arama
  useEffect(() => {
    filterRooms();
  }, [filters, filterRooms]);

  return (
    <div>
      {/* Hero Section */}
      <div className="position-relative vh-75 bg-dark">
        {/* Background Image */}
        <div className="position-absolute w-100 h-100">
          <img
            src="https://images.unsplash.com/photo-1618773928121-c32242e63f39?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
            alt="Luxury Hotel Rooms"
            className="w-100 h-100 object-fit-cover opacity-50"
          />
          <div className="position-absolute top-0 start-0 w-100 h-100 bg-gradient-to-b from-dark to-transparent opacity-50" />
        </div>

        {/* Content */}
        <div className="position-relative h-100 d-flex align-items-center">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8 text-center text-white">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                >
                  <h1 className="display-3 fw-bold mb-4">Odalarımız</h1>
                  <p className="lead mb-5">
                    Size en uygun odayı seçin ve unutulmaz bir konaklama deneyimi yaşayın
                  </p>
                  <div className="d-flex gap-3 justify-content-center">
                    <button 
                      className="btn btn-primary btn-lg px-5 rounded-pill"
                      onClick={() => onReservationClick()}
                    >
                      Rezervasyon Yap
                    </button>
                    <button 
                      className="btn btn-outline-light btn-lg px-5 rounded-pill"
                      onClick={() => document.getElementById('roomsList').scrollIntoView({ behavior: 'smooth' })}
                    >
                      Fiyatları Gör
                    </button>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Gradient */}
        <div className="position-absolute bottom-0 start-0 w-100 h-25 bg-gradient-to-t from-light to-transparent" />
      </div>

      {/* Rest of the content */}
      <div id="roomsList" className="container py-5">
        {/* Filters */}
        <div className="mb-5">
          <div className="d-flex justify-content-between align-items-center mb-4">
            <h2 className="h4 mb-0">Oda Arama</h2>
            <div>
              <button 
                className="btn btn-outline-secondary me-2"
                onClick={resetFilters}
              >
                <i className="bi bi-arrow-counterclockwise me-2"></i>
                Filtreleri Sıfırla
              </button>
              <button 
                className="btn btn-outline-primary d-lg-none"
                onClick={() => setShowFilters(!showFilters)}
              >
                <i className="bi bi-funnel me-2"></i>
                Filtreler
              </button>
            </div>
          </div>

          <div className={`row g-3 ${showFilters ? 'd-block' : 'd-none d-lg-flex'}`}>
            <div className="col-lg-3">
              <input
                type="text"
                className="form-control"
                placeholder="Oda ara..."
                value={filters.searchQuery}
                onChange={(e) => setFilters({...filters, searchQuery: e.target.value})}
              />
            </div>
            <div className="col-lg-3">
              <select 
                className="form-select"
                value={filters.type}
                onChange={(e) => setFilters({...filters, type: e.target.value})}
              >
                <option value="all">Oda Tipi</option>
                <option value="standard">Standart</option>
                <option value="suit">Suit</option>
                <option value="family">Aile</option>
              </select>
            </div>
            <div className="col-lg-3">
              <select 
                className="form-select"
                value={filters.priceRange}
                onChange={(e) => setFilters({...filters, priceRange: e.target.value})}
              >
                <option value="all">Fiyat Aralığı</option>
                <option value="0-750">0₺ - 750₺</option>
                <option value="751-1500">751₺ - 1500₺</option>
                <option value="1501">1501₺ ve üzeri</option>
              </select>
            </div>
            <div className="col-lg-3">
              <select 
                className="form-select"
                value={filters.capacity}
                onChange={(e) => setFilters({...filters, capacity: e.target.value})}
              >
                <option value="all">Kişi Sayısı</option>
                <option value="1">1 Kişi</option>
                <option value="2">2 Kişi</option>
                <option value="3">3 Kişi</option>
                <option value="4+">4+ Kişi</option>
              </select>
            </div>
          </div>

          {/* Sonuç sayısı gösterimi */}
          <div className="mt-3 text-muted">
            <small>
              {filteredRooms.length} oda bulundu
              {filters.searchQuery && ` "${filters.searchQuery}" için`}
            </small>
          </div>
        </div>

        {/* Room Cards - filteredRooms kullan */}
        <div className="row g-4">
          {filteredRooms.length > 0 ? (
            filteredRooms.map((room, index) => (
              <motion.div
                key={room.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="col-md-6 col-lg-4"
              >
                <div className="card h-100 border-0 shadow-sm">
                  <div className="position-relative overflow-hidden">
                    <img
                      src={room.image}
                      alt={room.name}
                      className="card-img-top"
                      style={{ height: '250px', objectFit: 'cover' }}
                    />
                    <div className="position-absolute top-0 end-0 m-3">
                      <span className="badge bg-primary rounded-pill px-3 py-2">
                        {room.price}₺ <small>/gece</small>
                      </span>
                    </div>
                  </div>
                  <div className="card-body">
                    <h3 className="h5 card-title">{room.name}</h3>
                    <p className="card-text text-muted small mb-3">{room.description}</p>
                    <div className="row g-2 mb-3">
                      <div className="col-6">
                        <div className="d-flex align-items-center text-muted small">
                          <i className="bi bi-rulers me-2"></i>
                          {room.size}m²
                        </div>
                      </div>
                      <div className="col-6">
                        <div className="d-flex align-items-center text-muted small">
                          <i className="bi bi-people me-2"></i>
                          {room.capacity} Kişi
                        </div>
                      </div>
                      <div className="col-6">
                        <div className="d-flex align-items-center text-muted small">
                          <i className="bi bi-eye me-2"></i>
                          {room.view}
                        </div>
                      </div>
                      <div className="col-6">
                        <div className="d-flex align-items-center text-muted small">
                          <i className="bi bi-bed me-2"></i>
                          {room.bed}
                        </div>
                      </div>
                    </div>
                    <button 
                      className="btn btn-outline-primary w-100"
                      onClick={() => onReservationClick(room)}
                    >
                      Rezervasyon Yap
                    </button>
                  </div>
                </div>
              </motion.div>
            ))
          ) : (
            <div className="col-12 text-center py-5">
              <i className="bi bi-search display-1 text-muted mb-3"></i>
              <h3>Sonuç Bulunamadı</h3>
              <p className="text-muted">
                Arama kriterlerinize uygun oda bulunamadı. Lütfen filtreleri değiştirin.
              </p>
              <button 
                className="btn btn-outline-primary"
                onClick={resetFilters}
              >
                Filtreleri Sıfırla
              </button>
            </div>
          )}
        </div>

        {/* Price Comparison - filteredRooms kullan */}
        {filteredRooms.length > 0 && (
          <div className="mt-5 pt-5">
            <div className="card border-0 shadow-sm">
              <div className="card-header bg-primary text-white py-4">
                <h2 className="h4 mb-0">Fiyat Karşılaştırma</h2>
              </div>
              <div className="card-body p-0">
                <div className="table-responsive">
                  <table className="table table-hover mb-0">
                    <thead className="bg-light">
                      <tr>
                        <th className="py-3">Oda Tipi</th>
                        <th className="py-3">Boyut</th>
                        <th className="py-3">Kapasite</th>
                        <th className="py-3">Özellikler</th>
                        <th className="py-3">Fiyat</th>
                        <th className="py-3"></th>
                      </tr>
                    </thead>
                    <tbody>
                      {filteredRooms.map(room => (
                        <tr key={room.id} className="align-middle">
                          <td className="py-3">
                            <div className="d-flex align-items-center">
                              <img
                                src={room.image}
                                alt={room.name}
                                className="rounded me-3"
                                width="60"
                                height="40"
                                style={{ objectFit: 'cover' }}
                              />
                              <div>
                                <div className="fw-bold">{room.name}</div>
                                <small className="text-muted">{room.view}</small>
                              </div>
                            </div>
                          </td>
                          <td className="py-3">{room.size}m²</td>
                          <td className="py-3">{room.capacity} Kişi</td>
                          <td className="py-3">
                            <div className="d-flex flex-wrap gap-2">
                              {room.features.slice(0, 3).map((feature, index) => (
                                <span key={index} className="badge bg-light text-dark">
                                  {feature}
                                </span>
                              ))}
                              {room.features.length > 3 && (
                                <span className="badge bg-light text-dark">+{room.features.length - 3}</span>
                              )}
                            </div>
                          </td>
                          <td className="py-3">
                            <div className="fw-bold text-primary">{room.price}₺</div>
                            <small className="text-muted">/gece</small>
                          </td>
                          <td className="py-3">
                            <button 
                              className="btn btn-sm btn-primary rounded-pill px-3"
                              onClick={() => onReservationClick(room)}
                            >
                              Seç
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default RoomsPage; 