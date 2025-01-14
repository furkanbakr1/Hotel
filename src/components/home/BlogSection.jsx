import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const blogPosts = [
  {
    id: 1,
    category: 'Haberler',
    title: 'Yeni Açık Hava Restoranımız Hizmete Girdi',
    image: 'https://images.unsplash.com/photo-1578474846511-04ba529f0b88?ixlib=rb-4.0.3',
    date: '15 Mart 2024',
    description: 'Akdeniz mutfağının en seçkin lezzetlerini muhteşem deniz manzarası eşliğinde sunuyoruz.'
  },
  {
    id: 2,
    category: 'Etkinlikler',
    title: 'Haftalık Canlı Müzik Geceleri',
    image: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?ixlib=rb-4.0.3',
    date: 'Her Cuma',
    description: 'Yerel ve uluslararası sanatçılarla unutulmaz müzik geceleri.'
  },
  {
    id: 3,
    category: 'Turistik Rehber',
    title: 'Fethiye\'nin Gizli Koyları',
    image: 'https://images.unsplash.com/photo-1519451241324-20b4ea2c4220?ixlib=rb-4.0.3',
    date: 'Güncel',
    description: 'Fethiye\'nin keşfedilmemiş koylarını ve plajlarını keşfedin.'
  },
  {
    id: 4,
    category: 'Gastronomi',
    title: 'Şef\'in Özel Menüsü',
    image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3',
    date: 'Her Ay Güncellenir',
    description: 'Yerel malzemelerle hazırlanan özel tatlar ve mevsimlik lezzetler.'
  }
];

const activities = [
  {
    id: 1,
    title: 'Ölüdeniz Yamaç Paraşütü',
    image: 'https://images.unsplash.com/photo-1503220317375-aaad61436b1b?ixlib=rb-4.0.3',
    duration: '30 dakika',
    price: '₺2500'
  },
  {
    id: 2,
    title: '12 Adalar Tekne Turu',
    image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3',
    duration: 'Tam gün',
    price: '₺800'
  },
  {
    id: 3,
    title: 'Saklıkent Kanyonu Turu',
    image: 'https://images.unsplash.com/photo-1528543606781-2f6e6857f318?ixlib=rb-4.0.3',
    duration: 'Yarım gün',
    price: '₺600'
  }
];

const BlogSection = () => {
  const { t } = useTranslation();

  return (
    <section className="py-5">
      <div className="container py-5">
        {/* Blog Posts */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-5"
        >
          <h2 className="display-5 fw-bold mb-3">Haberler & Etkinlikler</h2>
          <p className="lead text-muted">
            En son haberler, etkinlikler ve özel tekliflerimizden haberdar olun
          </p>
        </motion.div>

        <div className="row g-4 mb-5">
          {blogPosts.map(post => (
            <motion.div
              key={post.id}
              className="col-md-6 col-lg-3"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: post.id * 0.1 }}
            >
              <div className="card h-100 border-0 shadow-sm">
                <img
                  src={post.image}
                  alt={post.title}
                  className="card-img-top"
                  style={{ height: '200px', objectFit: 'cover' }}
                />
                <div className="card-body">
                  <div className="d-flex justify-content-between align-items-center mb-2">
                    <span className="badge bg-primary">{post.category}</span>
                    <small className="text-muted">{post.date}</small>
                  </div>
                  <h5 className="card-title">{post.title}</h5>
                  <p className="card-text text-muted">{post.description}</p>
                  <button className="btn btn-link text-primary p-0">Devamını Oku →</button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Activities */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-5"
        >
          <h2 className="display-5 fw-bold mb-3">Fethiye'de Yapılacaklar</h2>
          <p className="lead text-muted">
            Unutulmaz deneyimler için özel aktivitelerimizi keşfedin
          </p>
        </motion.div>

        <div className="row g-4">
          {activities.map(activity => (
            <motion.div
              key={activity.id}
              className="col-md-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: activity.id * 0.1 }}
            >
              <div className="card h-100 border-0 shadow-sm">
                <img
                  src={activity.image}
                  alt={activity.title}
                  className="card-img-top"
                  style={{ height: '250px', objectFit: 'cover' }}
                />
                <div className="card-body">
                  <h5 className="card-title">{activity.title}</h5>
                  <div className="d-flex justify-content-between align-items-center">
                    <span className="text-muted">{activity.duration}</span>
                    <span className="fw-bold text-primary">{activity.price}</span>
                  </div>
                  <button className="btn btn-primary w-100 mt-3 rounded-pill">
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

export default BlogSection; 