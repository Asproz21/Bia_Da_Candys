import React, { useState } from 'react';
import { Send, Utensils, MessageCircle, MapPin, User, Package, CheckCircle } from 'lucide-react';

const OrderForm = () => {
  const [formData, setFormData] = useState({
    nome: '',
    produto: 'Bolo de festa',
    quantidade: '',
    whatsapp: '',
    endereco: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Google Form Field IDs mapping
    const FORM_ACTION_URL = 'https://docs.google.com/forms/d/e/1FAIpQLSdPtGhqSW_cG8hHBl_cIjf1YGS7v9Y7P32VPNH7sFS_7ZkzZQ/formResponse';
    
    const formBody = new URLSearchParams();
    formBody.append('entry.806089653', formData.nome);
    formBody.append('entry.144854788', formData.produto);
    formBody.append('entry.1208495506', formData.quantidade);
    formBody.append('entry.1472788042', formData.whatsapp);
    formBody.append('entry.543527244', formData.endereco);

    try {
      // Submit to Google Forms (No-CORS will always return "opaque" but it submits successfully)
      await fetch(FORM_ACTION_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: formBody.toString()
      });

      // Prepare WhatsApp message
      const message = `*Novo Pedido - Bia da Candys*%0A%0A` +
        `*Nome:* ${formData.nome}%0A` +
        `*Produto:* ${formData.produto}%0A` +
        `*Quantidade:* ${formData.quantidade}%0A` +
        `*WhatsApp:* ${formData.whatsapp}%0A` +
        `*Endereço:* ${formData.endereco}`;
      
      const whatsappUrl = `https://wa.me/5513999999999?text=${message}`;
      
      setIsSubmitted(true);
      setIsSubmitting(false);

      // Brief delay before opening WhatsApp to show success state
      setTimeout(() => {
        window.open(whatsappUrl, '_blank');
      }, 1500);

    } catch (error) {
      console.error('Erro ao enviar formulário:', error);
      alert('Houve um erro ao processar seu pedido. Por favor, tente novamente.');
      setIsSubmitting(false);
    }
  };

  const getQuantityLabel = () => {
    if (formData.produto.includes('Bolo')) return 'Para quantas pessoas?';
    return 'Quantas unidades?';
  };

  if (isSubmitted) {
    return (
      <section id="order" className="animate-fade" style={{ padding: '80px 0' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <div className="glass" style={{ maxWidth: '600px', margin: '0 auto', padding: '60px 40px', borderRadius: '24px' }}>
            <div style={{ color: '#25D366', marginBottom: '20px' }}>
              <CheckCircle size={80} strokeWidth={1.5} />
            </div>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '15px' }}>Pedido Recebido!</h2>
            <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', marginBottom: '30px' }}>
              Seus detalhes foram salvos em nossa planilha e agora estamos te redirecionando para o WhatsApp para finalizar os detalhes.
            </p>
            <p style={{ fontSize: '0.9rem', opacity: 0.7 }}>
              Caso não seja redirecionado automaticamente, clique no botão abaixo.
            </p>
            <button 
              onClick={() => window.open(`https://wa.me/5513999999999`, '_blank')}
              className="btn btn-whatsapp" 
              style={{ marginTop: '20px' }}
            >
              Abrir WhatsApp
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="order" className="animate-fade" style={{ padding: '80px 0' }}>
      <div className="container">
        <div className="glass" style={{ 
          maxWidth: '600px', 
          margin: '0 auto', 
          padding: '40px', 
          borderRadius: '24px',
          boxShadow: 'var(--shadow-strong)',
          border: '2px solid var(--primary-pink)'
        }}>
          <div style={{ textAlign: 'center', marginBottom: '30px' }}>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '10px' }}>Fazer Encomenda</h2>
            <p style={{ color: 'var(--text-muted)' }}>Preencha os detalhes abaixo para salvar seu pedido e nos contatar.</p>
          </div>

          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div className="form-group">
              <label style={labelStyle}><User size={18} /> Nome Completo</label>
              <input
                type="text"
                name="nome"
                required
                placeholder="Seu nome"
                value={formData.nome}
                onChange={handleChange}
                style={inputStyle}
              />
            </div>

            <div className="form-group">
              <label style={labelStyle}><Utensils size={18} /> Produto Desejado</label>
              <select
                name="produto"
                value={formData.produto}
                onChange={handleChange}
                style={inputStyle}
              >
                <option value="Bolo de festa">Bolo de festa</option>
                <option value="Bolo caseiro">Bolo caseiro</option>
                <option value="Cookies">Cookies</option>
                <option value="Paleta de bolo de cenoura">Paleta de bolo de cenoura</option>
              </select>
            </div>

            <div className="form-group">
              <label style={labelStyle}><Package size={18} /> {getQuantityLabel()}</label>
              <input
                type="text"
                name="quantidade"
                required
                placeholder="Ex: 10 pessoas ou 5 unidades"
                value={formData.quantidade}
                onChange={handleChange}
                style={inputStyle}
              />
            </div>

            <div className="form-group">
              <label style={labelStyle}><MessageCircle size={18} /> Seu WhatsApp</label>
              <input
                type="tel"
                name="whatsapp"
                required
                placeholder="(13) 99999-9999"
                value={formData.whatsapp}
                onChange={handleChange}
                style={inputStyle}
              />
            </div>

            <div className="form-group">
              <label style={labelStyle}><MapPin size={18} /> Endereço de Entrega</label>
              <textarea
                name="endereco"
                required
                placeholder="Rua, número, bairro e cidade"
                value={formData.endereco}
                onChange={handleChange}
                style={{ ...inputStyle, minHeight: '100px', resize: 'vertical' }}
              />
            </div>

            <button 
              type="submit" 
              className="btn btn-primary" 
              disabled={isSubmitting}
              style={{ width: '100%', padding: '15px', fontSize: '1.1rem', opacity: isSubmitting ? 0.7 : 1 }}
            >
              {isSubmitting ? 'Enviando...' : <><Send size={20} /> Salvar e Enviar via WhatsApp</>}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

const labelStyle = {
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
  marginBottom: '8px',
  fontWeight: '600',
  color: 'var(--accent-brown)',
  fontSize: '0.9rem'
};

const inputStyle = {
  width: '100%',
  padding: '12px 16px',
  borderRadius: '12px',
  border: '1px solid #E0E0E0',
  fontFamily: 'inherit',
  fontSize: '1rem',
  outline: 'none',
  transition: 'var(--transition)',
  backgroundColor: 'rgba(255, 255, 255, 0.8)'
};

export default OrderForm;
