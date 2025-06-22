import React from 'react';

const HowItWorks: React.FC = () => {
  return (
    <section id="how-it-works" className="how-it-works">
      <div className="container">
        <div className="section-header">
          <h2>How MindMeld Works</h2>
          <p>Our AI-powered platform makes collaboration effortless in just a few simple steps.</p>
        </div>
        <div className="steps">
          <div className="step">
            <div className="step-number">1</div>
            <div className="step-content">
              <h3>Connect Your Team</h3>
              <p>Invite team members to your MindMeld workspace with a simple link.</p>
            </div>
            <div className="step-image">
              <img src="/images/step-1.svg" alt="Connect Your Team" />
            </div>
          </div>
          <div className="step">
            <div className="step-number">2</div>
            <div className="step-content">
              <h3>Contribute Ideas</h3>
              <p>Everyone adds their thoughts, code, designs, or content simultaneously.</p>
            </div>
            <div className="step-image">
              <img src="/images/step-2.svg" alt="Contribute Ideas" />
            </div>
          </div>
          <div className="step">
            <div className="step-number">3</div>
            <div className="step-content">
              <h3>AI Merges Contributions</h3>
              <p>Our advanced AI analyzes and combines everyone's input into a cohesive whole.</p>
            </div>
            <div className="step-image">
              <img src="/images/step-3.svg" alt="AI Merges Contributions" />
            </div>
          </div>
          <div className="step">
            <div className="step-number">4</div>
            <div className="step-content">
              <h3>Refine Together</h3>
              <p>Review, adjust, and perfect the AI-generated output as a team.</p>
            </div>
            <div className="step-image">
              <img src="/images/step-4.svg" alt="Refine Together" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;