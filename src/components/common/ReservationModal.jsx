import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ReservationModal = ({ show, onHide, selectedRoom = null }) => {
  const [formData, setFormData] = useState({
    checkIn: '',
    checkOut: '',
    guests: '2',
    name: '',
    email: '',
    phone: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Burada rezervasyon işlemleri yapılacak
    console.log('Rezervasyon bilgileri:', { ...formData, room: selectedRoom });
    alert('Rezervasyonunuz alındı! Size en kısa sürede dönüş yapacağız.');
    onHide();
  };

  if (!show) return null;

  return (
    <>
      <div className="modal fade show d-block">
        <motion.div 
          className="modal-dialog modal-dialog-centered"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
        >
          <div className="modal-content border-0 shadow">
            <div className="modal-header border-0 bg-primary text-white">
              <h5 className="modal-title">
                {selectedRoom ? `${selectedRoom.name} - Rezervasyon` : 'Rezervasyon Yap'}
              </h5>
              <button type="button" className="btn-close btn-close-white" onClick={onHide}></button>
            </div>
            <div className="modal-body p-4">
              <form onSubmit={handleSubmit}>
                <div className="row g-3">
                  <div className="col-md-6">
                    <label className="form-label">Giriş Tarihi</label>
                    <input
                      type="date"
                      className="form-control"
                      required
                      min={new Date().toISOString().split('T')[0]}
                      value={formData.checkIn}
                      onChange={(e) => setFormData({...formData, checkIn: e.target.value})}
                    />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label">Çıkış Tarihi</label>
                    <input
                      type="date"
                      className="form-control"
                      required
                      min={formData.checkIn || new Date().toISOString().split('T')[0]}
                      value={formData.checkOut}
                      onChange={(e) => setFormData({...formData, checkOut: e.target.value})}
                    />
                  </div>
                  <div className="col-md-12">
                    <label className="form-label">Kişi Sayısı</label>
                    <select 
                      className="form-select"
                      value={formData.guests}
                      onChange={(e) => setFormData({...formData, guests: e.target.value})}
                    >
                      <option value="1">1 Kişi</option>
                      <option value="2">2 Kişi</option>
                      <option value="3">3 Kişi</option>
                      <option value="4">4 Kişi</option>
                    </select>
                  </div>
                  <div className="col-md-12">
                    <label className="form-label">Ad Soyad</label>
                    <input
                      type="text"
                      className="form-control"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                    />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label">E-posta</label>
                    <input
                      type="email"
                      className="form-control"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                    />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label">Telefon</label>
                    <input
                      type="tel"
                      className="form-control"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    />
                  </div>
                </div>
                <div className="mt-4">
                  <button type="submit" className="btn btn-primary w-100">
                    Rezervasyon Yap
                  </button>
                </div>
              </form>
            </div>
          </div>
        </motion.div>
      </div>
      <div className="modal-backdrop fade show"></div>
    </>
  );
};

export default ReservationModal; 