import React from 'react';
import Header from './components/Header';
import OrderForm from './components/OrderForm';
import WhatsAppFAB from './components/WhatsAppFAB';
import { Sparkles, Heart, Sun } from 'lucide-react';

function App() {
  return (
    <div className="app">
      <Header />
      
      {/* Hero Section */}
      <section id="home" style={{
        position: 'relative',
        minHeight: '80vh',
        display: 'flex',
        alignItems: 'center',
        background: 'linear-gradient(135deg, #FFF5F7 0%, #FFFFFF 100%)',
        overflow: 'hidden',
        padding: '60px 0'
      }}>
        {/* Decorative Sunflowers */}
        <div style={{ position: 'absolute', top: '10%', left: '-5%', opacity: 0.1, transform: 'rotate(-15deg)', pointerEvents: 'none' }}>
          <Sun size={300} color="var(--sunflower-yellow)" fill="var(--sunflower-yellow)" />
        </div>
        <div style={{ position: 'absolute', bottom: '10%', right: '-5%', opacity: 0.1, transform: 'rotate(15deg)', pointerEvents: 'none' }}>
          <Sun size={250} color="var(--sunflower-yellow)" fill="var(--sunflower-yellow)" />
        </div>

        <div className="container">
          <div className="hero-grid">
            <div className="animate-fade hero-content">
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'white', padding: '8px 16px', borderRadius: '50px', boxShadow: 'var(--shadow-soft)', marginBottom: '20px' }}>
                <Sparkles size={16} color="var(--primary-pink-dark)" />
                <span style={{ fontSize: '0.85rem', fontWeight: 700, textTransform: 'uppercase', color: 'var(--text-muted)' }}>Doceria Gourmet Premium</span>
              </div>
              <h1 style={{ fontSize: '3.5rem', lineHeight: 1.1, marginBottom: '20px' }}>
                Adoçando seus momentos com <span style={{ color: 'var(--primary-pink-dark)' }}>Amor</span>.
              </h1>
              <p style={{ fontSize: '1.2rem', color: 'var(--text-muted)', marginBottom: '35px', maxWidth: '500px' }}>
                Bolos artesanais, cookies crocantes e paletas irresistíveis. Feito com carinho e o brilho do girassol.
              </p>
              <div style={{ display: 'flex', gap: '15px' }}>
                <a href="#order" className="btn btn-primary" style={{ padding: '15px 35px' }}>Fazer Pedido</a>
                <a href="https://www.instagram.com/biadacandys/" target="_blank" className="btn" style={{ border: '2px solid var(--primary-pink)', color: 'var(--accent-brown)' }}>Ver Instagram</a>
              </div>
            </div>

            <div className="animate-fade hero-image-container">
              <div style={{
                width: '100%',
                aspectRatio: '1/1',
                borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%',
                overflow: 'hidden',
                boxShadow: 'var(--shadow-strong)',
                border: '8px solid white',
                position: 'relative'
              }}>
                <img 
                  src="/hero.png" 
                  alt="Doces Bia da Candys" 
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
              {/* Floating badge */}
              <div className="glass" style={{ position: 'absolute', top: '10%', right: '0', padding: '15px', borderRadius: '15px', boxShadow: 'var(--shadow-soft)', zIndex: 2 }}>
                <Heart fill="var(--primary-pink)" color="var(--primary-pink)" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section style={{ padding: '80px 0', background: 'white' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '50px' }}>
            <h2 style={{ fontSize: '3rem' }}>Nossas Especialidades</h2>
            <div style={{ width: '60px', height: '4px', background: 'var(--sunflower-yellow)', margin: '15px auto', borderRadius: '2px' }}></div>
          </div>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '30px'
          }}>
            {['Bolo de Festa', 'Cookies Gourmet', 'Bolo Caseiro', 'Paleta de Cenoura'].map((item, index) => (
              <div key={index} className="glass product-card" style={{ padding: '30px', borderRadius: '24px', textAlign: 'center', transition: 'var(--transition)' }}>
                <div style={{ width: '80px', height: '80px', background: 'var(--primary-pink)', borderRadius: '50%', margin: '0 auto 20px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Sparkles color="white" />
                </div>
                <h3 style={{ marginBottom: '10px' }}>{item}</h3>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Produção artesanal com ingredientes selecionados.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <OrderForm />

      <footer style={{ padding: '60px 0', background: 'var(--accent-brown)', color: 'white', textAlign: 'center' }}>
        <div className="container">
          <h2 style={{ color: 'white', marginBottom: '20px' }}>Bia da Candys</h2>
          <p style={{ opacity: 0.8, marginBottom: '30px' }}>Transformando açúcar em sorrisos.</p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', marginBottom: '40px' }}>
            <a href="https://www.instagram.com/biadacandys/" target="_blank" style={{ color: 'white', textDecoration: 'none' }}>Instagram</a>
            <span>•</span>
            <span>(13) 99999-9999</span>
          </div>
          <p style={{ fontSize: '0.8rem', opacity: 0.5 }}>© 2024 Bia da Candys. Todos os direitos reservados.</p>
        </div>
      </footer>

      <WhatsAppFAB />

      <style dangerouslySetInnerHTML={{ __html: `
        .hero-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 50px;
          align-items: center;
        }
        @media (max-width: 768px) {
          .hero-grid {
            grid-template-columns: 1fr;
            text-align: center;
            gap: 30px;
          }
          .hero-content {
            display: flex;
            flex-direction: column;
            align-items: center;
          }
          .hero-image-container {
            order: -1;
            max-width: 300px;
            margin: 0 auto;
          }
          h1 { font-size: 2.5rem !important; }
        }
        .product-card:hover {
          transform: translateY(-10px);
          box-shadow: var(--shadow-strong);
        }
      `}} />
    </div>
  );
}

export default App;
