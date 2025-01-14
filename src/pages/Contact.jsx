import { useState } from 'react';
import { motion } from 'framer-motion';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form gönderme işlemi burada yapılacak
    console.log('Form data:', formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div>
      {/* Hero Section */}
      <div className="position-relative vh-50 bg-dark">
        <div className="position-absolute w-100 h-100">
          <img
            src="https://images.unsplash.com/photo-1582719508461-905c673771fd?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
            alt="Contact Us"
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
                  <h1 className="display-3 fw-bold mb-4">İletişim</h1>
                  <p className="lead mb-0">
                    Sizden haber almaktan mutluluk duyarız
                  </p>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Info Cards */}
      <section className="py-5">
        <div className="container">
          <div className="row g-4">
            <motion.div 
              className="col-md-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="card h-100 border-0 shadow-sm text-center">
                <div className="card-body p-4">
                  <div className="d-inline-flex align-items-center justify-content-center bg-primary bg-opacity-10 rounded-circle p-3 mb-4">
                    <i className="bi bi-geo-alt text-primary fs-3"></i>
                  </div>
                  <h5 className="fw-bold mb-3">Adres</h5>
                  <p className="text-muted mb-0">
                    Barbaros Bulvarı No:123<br />
                    Beşiktaş, İstanbul
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              className="col-md-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="card h-100 border-0 shadow-sm text-center">
                <div className="card-body p-4">
                  <div className="d-inline-flex align-items-center justify-content-center bg-primary bg-opacity-10 rounded-circle p-3 mb-4">
                    <i className="bi bi-telephone text-primary fs-3"></i>
                  </div>
                  <h5 className="fw-bold mb-3">Telefon</h5>
                  <p className="text-muted mb-0">
                    +90 (212) 123 45 67<br />
                    +90 (212) 123 45 68
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              className="col-md-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="card h-100 border-0 shadow-sm text-center">
                <div className="card-body p-4">
                  <div className="d-inline-flex align-items-center justify-content-center bg-primary bg-opacity-10 rounded-circle p-3 mb-4">
                    <i className="bi bi-envelope text-primary fs-3"></i>
                  </div>
                  <h5 className="fw-bold mb-3">E-posta</h5>
                  <p className="text-muted mb-0">
                    info@luxhotel.com<br />
                    rezervasyon@luxhotel.com
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map & Contact Form */}
      <section className="py-5 bg-light">
        <div className="container py-5">
          <div className="row g-4">
            <div className="col-lg-6">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="h-100"
              >
                <div className="card border-0 shadow-sm h-100">
                  <div className="card-body p-4">
                    <h3 className="h4 fw-bold mb-4">Bize Ulaşın</h3>
                    <form onSubmit={handleSubmit}>
                      <div className="mb-3">
                        <label className="form-label">Adınız Soyadınız</label>
                        <input
                          type="text"
                          className="form-control"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className="mb-3">
                        <label className="form-label">E-posta Adresiniz</label>
                        <input
                          type="email"
                          className="form-control"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className="mb-3">
                        <label className="form-label">Konu</label>
                        <input
                          type="text"
                          className="form-control"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className="mb-4">
                        <label className="form-label">Mesajınız</label>
                        <textarea
                          className="form-control"
                          rows="5"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          required
                        ></textarea>
                      </div>
                      <button type="submit" className="btn btn-primary">
                        Gönder
                      </button>
                    </form>
                  </div>
                </div>
              </motion.div>
            </div>

            <div className="col-lg-6">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="h-100"
              >
                <div className="card border-0 shadow-sm h-100">
                  <div className="card-body p-4">
                    <h3 className="h4 fw-bold mb-4">Konum</h3>
                    <div className="ratio ratio-4x3">
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3009.1375984685657!2d29.0073!3d41.0413!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDHCsDAyJzI5LjAiTiAyOcKwMDAnMjYuMyJF!5e0!3m2!1str!2str!4v1620000000000!5m2!1str!2str"
                        className="rounded-3"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                      ></iframe>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-5">
        <div className="container py-5">
          <div className="text-center mb-5">
            <h2 className="display-5 fw-bold mb-3">Sık Sorulan Sorular</h2>
            <p className="lead text-muted">
              Siz sormadan biz cevaplayalım
            </p>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="accordion" id="faqAccordion">
                <motion.div 
                  className="accordion-item border-0 mb-3 shadow-sm"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <h2 className="accordion-header">
                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#faq1">
                      Check-in ve check-out saatleri nelerdir?
                    </button>
                  </h2>
                  <div id="faq1" className="accordion-collapse collapse show" data-bs-parent="#faqAccordion">
                    <div className="accordion-body">
                      Check-in saat 14:00'ten itibaren, check-out ise en geç saat 12:00'ye kadardır.
                    </div>
                  </div>
                </motion.div>

                <motion.div 
                  className="accordion-item border-0 mb-3 shadow-sm"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  viewport={{ once: true }}
                >
                  <h2 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq2">
                      Otopark hizmeti var mı?
                    </button>
                  </h2>
                  <div id="faq2" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                    <div className="accordion-body">
                      Evet, otelimizde 24 saat güvenlikli, ücretsiz otopark hizmeti sunulmaktadır.
                    </div>
                  </div>
                </motion.div>

                <motion.div 
                  className="accordion-item border-0 mb-3 shadow-sm"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <h2 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq3">
                      Evcil hayvan kabul ediyor musunuz?
                    </button>
                  </h2>
                  <div id="faq3" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                    <div className="accordion-body">
                      Evet, belirli kurallar çerçevesinde evcil hayvanlarınızla birlikte konaklayabilirsiniz.
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage; 