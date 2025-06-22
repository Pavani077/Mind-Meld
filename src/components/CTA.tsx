import React from 'react';

const CTA: React.FC = () => {
  return (
    <section className="cta-section">
      <div className="container">
        <div className="cta-content">
          <h2>Ready to Transform Your Team Collaboration?</h2>
          <p>Join thousands of teams using MindMeld to work smarter together.</p>
          <div className="cta-buttons">
            <a href="#" className="btn btn-primary btn-large">Start Free 14-Day Trial</a>
            <a href="#" className="btn btn-secondary btn-large">Schedule Demo</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;