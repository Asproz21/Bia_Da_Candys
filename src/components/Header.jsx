import React from 'react';
import { Sun } from 'lucide-react';

const Header = () => {
  return (
    <header className="glass" style={{
      position: 'sticky',
      top: 0,
      zIndex: 1000,
      padding: '15px 0',
      borderBottom: '1px solid rgba(255, 209, 220, 0.5)'
    }}>
      <div className="container" style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <div style={{
            background: 'var(--sunflower-yellow)',
            padding: '8px',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 4px 10px rgba(255, 218, 0, 0.3)'
          }}>
            <Sun color="white" fill="white" size={24} />
          </div>
          <h1 style={{ fontSize: '1.5rem', margin: 0, letterSpacing: '1px' }}>
            Bia da Candys
          </h1>
        </div>
        
        <nav style={{ display: 'none', gap: '20px' }} className="desktop-nav">
          <a href="#home" style={navLinkStyle}>Início</a>
          <a href="#order" style={navLinkStyle}>Encomendas</a>
        </nav>

        <a href="#order" className="btn btn-primary" style={{ padding: '8px 20px', fontSize: '0.9rem' }}>
          Encomendar
        </a>
      </div>
    </header>
  );
};

const navLinkStyle = {
  textDecoration: 'none',
  color: 'var(--text-dark)',
  fontWeight: '600',
  transition: 'var(--transition)'
};

export default Header;
