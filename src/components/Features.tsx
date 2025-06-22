import React from 'react';

const Features: React.FC = () => {
  return (
    <section id="features" className="features">
      <div className="container">
        <div className="section-header">
          <h2>Powerful Features for Seamless Collaboration</h2>
          <p>MindMeld transforms how teams work together with AI-powered tools that merge individual contributions into cohesive outputs.</p>
        </div>
        <div className="feature-grid">
          <div className="feature-card">
            <div className="feature-icon">
              <i className="fas fa-comments"></i>
            </div>
            <h3>Real-time Idea Merging</h3>
            <p>Contribute simultaneously as AI intelligently combines everyone's input into a unified output.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">
              <i className="fas fa-code"></i>
            </div>
            <h3>Code Collaboration</h3>
            <p>Merge code snippets from multiple developers into functional, optimized solutions.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">
              <i className="fas fa-paint-brush"></i>
            </div>
            <h3>Design Synthesis</h3>
            <p>Combine design concepts and feedback into cohesive visual assets and prototypes.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">
              <i className="fas fa-chart-line"></i>
            </div>
            <h3>Smart Presentations</h3>
            <p>Create compelling pitches and presentations by merging team insights automatically.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">
              <i className="fas fa-file-alt"></i>
            </div>
            <h3>Document Co-creation</h3>
            <p>Draft documents together as AI seamlessly integrates everyone's contributions.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">
              <i className="fas fa-history"></i>
            </div>
            <h3>Version Control</h3>
            <p>Track changes and contributions with intelligent history management.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;