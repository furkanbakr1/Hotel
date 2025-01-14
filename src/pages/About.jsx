import { motion } from 'framer-motion';
import { useEffect } from 'react';

const teamMembers = [
  {
    name: 'Ahmet Yılmaz',
    role: 'Genel Müdür',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    description: '15 yıllık otelcilik deneyimi'
  },
  {
    name: 'Ayşe Kaya',
    role: 'Operasyon Müdürü',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    description: 'Misafir memnuniyeti uzmanı'
  },
  {
    name: 'Mehmet Demir',
    role: 'Şef',
    image: 'https://images.unsplash.com/photo-1566554273541-37a9ca77b91f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    description: 'Dünya mutfağı deneyimi'
  },
  {
    name: 'Zeynep Şahin',
    role: 'Misafir İlişkileri',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    description: 'Kusursuz hizmet anlayışı'
  }
];

const AboutPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <div className="position-relative vh-75 bg-dark">
        <div className="position-absolute w-100 h-100">
          <img
            src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
            alt="Hotel Exterior"
            className="w-100 h-100 object-fit-cover opacity-50"
          />
          <div className="position-absolute top-0 start-0 w-100 h-100 bg-gradient-to-b from-dark to-transparent opacity-50" />
        </div>

        <div className="position-relative h-100 d-flex align-items-center">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8 text-center text-white">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                >
                  <h1 className="display-3 fw-bold mb-4">Hakkımızda</h1>
                  <p className="lead mb-0">
                    2010'dan beri misafirlerimize unutulmaz deneyimler yaşatıyoruz
                  </p>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Our Story Section */}
      <section className="py-5">
        <div className="container py-5">
          <div className="row align-items-center">
            <motion.div 
              className="col-lg-6 mb-4 mb-lg-0"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <img
                src="https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                alt="Hotel Story"
                className="rounded-4 w-100 shadow-lg"
                style={{ maxHeight: '500px', objectFit: 'cover' }}
              />
            </motion.div>
            <motion.div 
              className="col-lg-6"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="display-5 fw-bold mb-4">Hikayemiz</h2>
              <p className="lead text-muted mb-4">
                2010 yılında lüks ve konforun buluşma noktası olarak yola çıktık. Misafirlerimize sadece konaklama değil, 
                unutulmaz anılar yaşatmak için çalışıyoruz.
              </p>
              <div className="row g-4">
                <div className="col-sm-6">
                  <div className="d-flex align-items-center">
                    <i className="bi bi-check-circle-fill text-primary fs-4 me-3"></i>
                    <div>
                      <h6 className="fw-bold mb-1">Premium Hizmet</h6>
                      <p className="text-muted mb-0">En yüksek standartlarda hizmet</p>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="d-flex align-items-center">
                    <i className="bi bi-award-fill text-primary fs-4 me-3"></i>
                    <div>
                      <h6 className="fw-bold mb-1">Ödüllü Mutfak</h6>
                      <p className="text-muted mb-0">Dünya standartlarında lezzetler</p>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="d-flex align-items-center">
                    <i className="bi bi-geo-alt-fill text-primary fs-4 me-3"></i>
                    <div>
                      <h6 className="fw-bold mb-1">Merkezi Konum</h6>
                      <p className="text-muted mb-0">Şehrin kalbinde</p>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="d-flex align-items-center">
                    <i className="bi bi-heart-fill text-primary fs-4 me-3"></i>
                    <div>
                      <h6 className="fw-bold mb-1">Misafir Memnuniyeti</h6>
                      <p className="text-muted mb-0">%98 memnuniyet oranı</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-5 bg-light">
        <div className="container py-5">
          <div className="row g-4">
            <motion.div 
              className="col-md-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body p-4">
                  <div className="d-inline-flex align-items-center justify-content-center bg-primary bg-opacity-10 rounded-3 p-3 mb-4">
                    <i className="bi bi-bullseye text-primary fs-3"></i>
                  </div>
                  <h3 className="h4 fw-bold mb-3">Misyonumuz</h3>
                  <p className="text-muted mb-0">
                    Misafirlerimize ev konforunda, lüks ve kaliteli bir konaklama deneyimi sunarak, 
                    her ziyaretlerinde tercih edecekleri bir mekan olmak.
                  </p>
                </div>
              </div>
            </motion.div>
            <motion.div 
              className="col-md-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body p-4">
                  <div className="d-inline-flex align-items-center justify-content-center bg-primary bg-opacity-10 rounded-3 p-3 mb-4">
                    <i className="bi bi-eye text-primary fs-3"></i>
                  </div>
                  <h3 className="h4 fw-bold mb-3">Vizyonumuz</h3>
                  <p className="text-muted mb-0">
                    Türkiye'nin en prestijli otel zincirlerinden biri olarak, dünya standartlarında 
                    hizmet kalitesiyle sektöre öncülük etmek.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-5">
        <div className="container py-5">
          <div className="text-center mb-5">
            <h2 className="display-5 fw-bold mb-3">Ekibimiz</h2>
            <p className="lead text-muted">
              Deneyimli ve profesyonel ekibimizle hizmetinizdeyiz
            </p>
          </div>

          <div className="row g-4">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                className="col-md-6 col-lg-3"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="card border-0 shadow-sm text-center h-100">
                  <div className="position-relative">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="card-img-top"
                      style={{ height: '300px', objectFit: 'cover' }}
                    />
                    <div className="position-absolute start-0 bottom-0 end-0 p-3 bg-dark bg-opacity-75 text-white">
                      <h5 className="fw-bold mb-1">{member.name}</h5>
                      <p className="small mb-0">{member.role}</p>
                    </div>
                  </div>
                  <div className="card-body">
                    <p className="text-muted mb-0">{member.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-5 bg-primary text-white">
        <div className="container py-5">
          <div className="row g-4 text-center">
            <motion.div 
              className="col-6 col-md-3"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="display-4 fw-bold mb-2">13</div>
              <p className="mb-0">Yıllık Deneyim</p>
            </motion.div>
            <motion.div 
              className="col-6 col-md-3"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="display-4 fw-bold mb-2">150+</div>
              <p className="mb-0">Çalışan</p>
            </motion.div>
            <motion.div 
              className="col-6 col-md-3"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="display-4 fw-bold mb-2">50K+</div>
              <p className="mb-0">Mutlu Misafir</p>
            </motion.div>
            <motion.div 
              className="col-6 col-md-3"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="display-4 fw-bold mb-2">15</div>
              <p className="mb-0">Ödül</p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage; 