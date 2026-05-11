import React from 'react';
import { MessageCircle } from 'lucide-react';

const WhatsAppFAB = () => {
  return (
    <a
      href="https://wa.me/5513999999999"
      target="_blank"
      rel="noopener noreferrer"
      className="btn btn-whatsapp"
      style={{
        position: 'fixed',
        bottom: '30px',
        right: '30px',
        width: '60px',
        height: '60px',
        borderRadius: '50%',
        padding: 0,
        zIndex: 1001,
        fontSize: '30px'
      }}
      title="Fale Conosco"
    >
      <MessageCircle size={32} />
    </a>
  );
};

export default WhatsAppFAB;
