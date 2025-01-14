import { motion } from 'framer-motion';

const testimonials = [
  {
    id: 1,
    name: 'Ahmet Yılmaz',
    role: 'İş Adamı',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150&q=80',
    comment: 'Muhteşem bir deneyimdi. Personel çok ilgili ve yardımseverdi. Kesinlikle tekrar geleceğim.'
  },
  {
    id: 2,
    name: 'Ayşe Kaya',
    role: 'Gezgin',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150&q=80',
    comment: 'Odalar çok temiz ve konforluydu. Manzara muhteşemdi. Herkese tavsiye ederim.'
  },
  {
    id: 3,
    name: 'Mehmet Demir',
    role: 'Yazar',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150&q=80',
    comment: 'SPA merkezi ve havuz olağanüstüydü. Tam bir dinlenme fırsatı buldum.'
  }
];

const Testimonials = () => {
  return (
    <section className="py-5 bg-light">
      <div className="container py-5">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-5"
        >
          <h2 className="display-5 fw-bold mb-3">Misafir Yorumları</h2>
          <p className="text-muted lead">
            Değerli misafirlerimizin deneyimleri
          </p>
        </motion.div>

        <div className="row g-4">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="col-md-4"
            >
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body p-4">
                  <div className="d-flex align-items-center mb-4">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="rounded-circle me-3"
                      width="60"
                      height="60"
                      style={{ objectFit: 'cover' }}
                    />
                    <div>
                      <h3 className="h6 fw-bold mb-1">{testimonial.name}</h3>
                      <p className="text-muted small mb-0">{testimonial.role}</p>
                    </div>
                  </div>
                  <p className="text-muted mb-0 fst-italic">"{testimonial.comment}"</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials; 