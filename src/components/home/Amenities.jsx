import { motion } from 'framer-motion';

const amenities = [
  {
    title: 'Yüzme Havuzu',
    description: 'Açık ve kapalı yüzme havuzları',
    icon: 'bi-water'
  },
  {
    title: 'Ücretsiz Wi-Fi',
    description: 'Yüksek hızlı internet erişimi',
    icon: 'bi-wifi'
  },
  {
    title: 'Otopark',
    description: '24 saat güvenlikli otopark',
    icon: 'bi-p-circle'
  },
  {
    title: 'Restoran',
    description: 'Dünya mutfağından lezzetler',
    icon: 'bi-cup-hot'
  },
  {
    title: 'SPA',
    description: 'Masaj ve wellness hizmetleri',
    icon: 'bi-heart'
  },
  {
    title: 'Fitness Merkezi',
    description: 'Modern fitness ekipmanları',
    icon: 'bi-bicycle'
  }
];

const Amenities = () => {
  return (
    <section className="py-5">
      <div className="container py-5">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-5"
        >
          <h2 className="display-5 fw-bold mb-3">Otel Özellikleri</h2>
          <p className="text-muted lead">
            Konforunuz için sunduğumuz tüm imkanları keşfedin
          </p>
        </motion.div>

        <div className="row g-4">
          {amenities.map((amenity, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="col-md-4"
            >
              <div className="card h-100 border-0 shadow-sm text-center p-4">
                <div className="card-body">
                  <i className={`bi ${amenity.icon} fs-1 text-primary mb-3`}></i>
                  <h3 className="h5 fw-bold mb-3">{amenity.title}</h3>
                  <p className="text-muted mb-0">{amenity.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Amenities; 