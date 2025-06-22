import React, { useEffect, useState } from 'react';
import './Hero.css';

interface Bubble {
  id: number;
  size: number;
  x: number;
  y: number;
  speed: number;
  opacity: number;
  color: string;
}

const Hero: React.FC = () => {
  const [bubbles, setBubbles] = useState<Bubble[]>([]);
  
  useEffect(() => {
    // Generate random bubbles
    const colors = ['#4f46e5', '#818cf8', '#0ea5e9', '#38bdf8', '#7dd3fc'];
    const newBubbles: Bubble[] = [];
    
    for (let i = 0; i < 20; i++) {
      newBubbles.push({
        id: i,
        size: Math.random() * 60 + 20, // 20-80px
        x: Math.random() * 100, // 0-100%
        y: Math.random() * 100, // 0-100%
        speed: Math.random() * 10 + 5, // 5-15s
        opacity: Math.random() * 0.5 + 0.1, // 0.1-0.6
        color: colors[Math.floor(Math.random() * colors.length)]
      });
    }
    
    setBubbles(newBubbles);
  }, []);
  
  // Function to animate user bubbles on scroll
  useEffect(() => {
    const handleScroll = () => {
      const userBubbles = document.querySelectorAll('.user-bubble');
      userBubbles.forEach((bubble, index) => {
        const delay = index * 0.2;
        (bubble as HTMLElement).style.animationDelay = `${delay}s`;
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <section className="hero">
      {/* Floating Bubbles Background */}
      <div className="floating-bubbles">
        {bubbles.map((bubble) => (
          <div
            key={bubble.id}
            className="floating-bubble"
            style={{
              width: `${bubble.size}px`,
              height: `${bubble.size}px`,
              left: `${bubble.x}%`,
              top: `${bubble.y}%`,
              opacity: bubble.opacity,
              backgroundColor: bubble.color,
              animationDuration: `${bubble.speed}s`
            }}
          />
        ))}
      </div>
      <div className="container">
        <div className="hero-content">
          <h1>Collaborate Smarter with <span className="highlight">AI-Powered</span> Teamwork</h1>
          <p>MindMeld seamlessly merges ideas from multiple users into cohesive outputs using advanced AI. Transform your team's collaboration with real-time documents, code, designs, and pitches.</p>
          <div className="hero-cta">
            <a href="#" className="btn btn-primary btn-large">Start Free Trial</a>
            <a href="#" className="btn btn-video"><i className="fas fa-play-circle"></i> See How It Works</a>
          </div>
        </div>
        <div className="hero-image">
          <img src="/images/hero-collaboration.svg" alt="AI-Powered Collaboration" className="main-hero-image" />
          <div className="collaboration-demo">
            {/* Enhanced animated collaboration demo */}
            <div className="user-bubble user-1">
              <div className="user-avatar"><img src="/images/avatar-1.svg" alt="User 1" /></div>
              <div className="thought-bubble">Let's add a section about market analysis</div>
            </div>
            <div className="user-bubble user-2">
              <div className="user-avatar"><img src="/images/avatar-2.svg" alt="User 2" /></div>
              <div className="thought-bubble">I have some competitor data to include</div>
            </div>
            <div className="user-bubble user-3">
              <div className="user-avatar"><img src="/images/avatar-3.svg" alt="User 3" /></div>
              <div className="thought-bubble">We should add growth projections</div>
            </div>
            <div className="ai-merge">
              <div className="ai-icon"><i className="fas fa-brain"></i></div>
              <div className="merge-result">
                <h4>AI-Generated Output</h4>
                <div className="document-preview">
                  <p>Market Analysis with competitor data and growth projections...</p>
                </div>
              </div>
            </div>
            {/* Floating mini bubbles inside the collaboration demo */}
            <div className="mini-bubbles">
              {[...Array(5)].map((_, i) => (
                <div key={i} className={`mini-bubble mini-bubble-${i+1}`}></div>
              ))}
            </div>
          </div>
        </div>
        <div className="hero-clients">
          <p className="trusted-by">Trusted by innovative teams at:</p>
          <div className="client-logo-strip">
            <img src="/images/client-1.svg" alt="ACME CORP" className="client-logo" />
            <img src="/images/client-2.svg" alt="TECHFLOW" className="client-logo" />
            <img src="/images/client-3.svg" alt="INNOVEX" className="client-logo" />
            <img src="/images/client-4.svg" alt="DATAWAVE" className="client-logo" />
            <img src="/images/client-5.svg" alt="NEXUSAI" className="client-logo" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;