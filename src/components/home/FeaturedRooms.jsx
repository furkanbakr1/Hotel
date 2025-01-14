import { motion } from 'framer-motion';

const rooms = [
  {
    id: 1,
    name: 'Deluxe Suit',
    image: 'https://images.unsplash.com/photo-1611892440504-42a792e24d32?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    price: '1,200',
    description: 'Şehir manzaralı lüks suit oda',
    features: ['King Size Yatak', 'Jakuzi', 'Mini Bar']
  },
  {
    id: 2,
    name: 'Premium Oda',
    image: 'https://images.unsplash.com/photo-1591088398332-8a7791972843?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    price: '800',
    description: 'Konforlu premium oda',
    features: ['Queen Size Yatak', 'Balkon', 'Çalışma Alanı']
  },
  {
    id: 3,
    name: 'Aile Odası',
    image: 'https://images.unsplash.com/photo-1566665797739-1674de7a421a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    price: '1,500',
    description: 'Geniş ve ferah aile odası',
    features: ['2 Yatak Odası', 'Oturma Alanı', 'Mutfak']
  }
];

const FeaturedRooms = ({ onReservationClick }) => {
  return (
    <section className="py-5 bg-light">
      <div className="container py-5">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-5"
        >
          <h2 className="display-5 fw-bold mb-3">Öne Çıkan Odalarımız</h2>
          <p className="text-muted lead">
            En popüler odalarımızı keşfedin ve size en uygun olanı seçin
          </p>
        </motion.div>

        <div className="row g-4">
          {rooms.map((room, index) => (
            <motion.div
              key={room.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="col-md-4"
            >
              <div className="card h-100 border-0 shadow-sm">
                <div className="position-relative">
                  <img
                    src={room.image}
                    alt={room.name}
                    className="card-img-top"
                    style={{ height: '250px', objectFit: 'cover' }}
                  />
                  <div className="position-absolute top-0 end-0 m-3">
                    <span className="badge bg-light text-primary fs-6 rounded-pill px-3">
                      {room.price}₺ <small>/gece</small>
                    </span>
                  </div>
                </div>

                <div className="card-body">
                  <h3 className="h5 card-title fw-bold">{room.name}</h3>
                  <p className="card-text text-muted">{room.description}</p>
                  <div className="mb-4">
                    {room.features.map((feature, i) => (
                      <div key={i} className="d-flex align-items-center text-muted mb-2">
                        <i className="bi bi-check2 text-primary me-2"></i>
                        {feature}
                      </div>
                    ))}
                  </div>
                  <button 
                    className="btn btn-primary w-100 rounded-pill"
                    onClick={() => onReservationClick(room)}
                  >
                    Rezervasyon Yap
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedRooms; 