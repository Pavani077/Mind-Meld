import React from 'react';
import { Link } from 'react-router-dom';
import './NavbarStyles.css';

const Navbar: React.FC = () => {
  const scrollToSection = (sectionId: string, event: React.MouseEvent) => {
    event.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <nav className="navbar" style={{ width: '100%', padding: '0.5rem 0' }}>
      <div className="navbar-container" role="navigation">
        <div className="navbar-logo">
          <img src="/images/mindmeld-logo.svg" alt="MindMeld Logo" />
          <span>MindMeld</span>
        </div>
        <div className="navbar-links">
          <a href="#features" onClick={(e) => scrollToSection('features', e)}>Features</a>
          <a href="#how-it-works" onClick={(e) => scrollToSection('how-it-works', e)}>How It Works</a>
          <a href="#testimonials" onClick={(e) => scrollToSection('testimonials', e)}>Testimonials</a>
          <a href="#pricing" onClick={(e) => scrollToSection('pricing', e)}>Pricing</a>
        </div>
        <div className="navbar-buttons">
          <Link to="/login" className="btn btn-secondary" style={{ minWidth: '80px', textAlign: 'center' }}>Log In</Link>
          <a href="#" className="btn btn-primary" style={{ minWidth: '100px', textAlign: 'center' }}>Get Started</a>
        </div>
        <div className="menu-toggle" style={{ display: 'none' }}>
          <i className="fas fa-bars"></i>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;