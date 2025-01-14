import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const SupportChat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState('');
  const [isBotTyping, setIsBotTyping] = useState(false);

  // Örnek bot yanıtları
  const botResponses = {
    default: "Size nasıl yardımcı olabilirim?",
    reservation: "Rezervasyon yapmak için ana sayfadaki 'Rezervasyon' butonunu kullanabilir veya +90 (212) 123 45 67 numaralı telefondan bize ulaşabilirsiniz.",
    rooms: "Odalarımız hakkında detaylı bilgi için 'Odalar' sayfamızı ziyaret edebilirsiniz.",
    contact: "Bize contact@luxhotel.com adresinden veya +90 (212) 123 45 67 numaralı telefondan ulaşabilirsiniz."
  };

  const handleSend = () => {
    if (!inputMessage.trim()) return;

    // Kullanıcı mesajını ekle
    const userMessage = {
      id: Date.now(),
      text: inputMessage,
      sender: 'user'
    };
    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');

    // Bot yanıtı
    setIsBotTyping(true);
    setTimeout(() => {
      let botResponse = botResponses.default;
      
      // Basit keyword kontrolü
      const lowercaseMsg = inputMessage.toLowerCase();
      if (lowercaseMsg.includes('rezervasyon')) {
        botResponse = botResponses.reservation;
      } else if (lowercaseMsg.includes('oda')) {
        botResponse = botResponses.rooms;
      } else if (lowercaseMsg.includes('iletişim') || lowercaseMsg.includes('telefon')) {
        botResponse = botResponses.contact;
      }

      setMessages(prev => [...prev, {
        id: Date.now(),
        text: botResponse,
        sender: 'bot'
      }]);
      setIsBotTyping(false);
    }, 1000);
  };

  return (
    <>
      {/* Chat Butonu */}
      <button
        className="support-chat-button"
        onClick={() => setIsOpen(!isOpen)}
      >
        <i className={`bi ${isOpen ? 'bi-x-lg' : 'bi-chat-dots'}`}></i>
      </button>

      {/* Chat Penceresi */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="support-chat-window"
          >
            <div className="chat-header">
              <h6 className="mb-0">Canlı Destek</h6>
            </div>

            <div className="chat-messages">
              {messages.map(message => (
                <div
                  key={message.id}
                  className={`chat-message ${message.sender}`}
                >
                  {message.text}
                </div>
              ))}
              {isBotTyping && (
                <div className="chat-message bot typing">
                  <span className="dot"></span>
                  <span className="dot"></span>
                  <span className="dot"></span>
                </div>
              )}
            </div>

            <div className="chat-input">
              <input
                type="text"
                placeholder="Mesajınızı yazın..."
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
              />
              <button onClick={handleSend}>
                <i className="bi bi-send"></i>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default SupportChat; 