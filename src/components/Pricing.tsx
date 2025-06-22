import React from 'react';

const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="pricing">
      <div className="container">
        <div className="section-header">
          <h2>Simple, Transparent Pricing</h2>
          <p>Choose the plan that works best for your team's collaboration needs.</p>
        </div>
        <div className="pricing-grid">
          <div className="pricing-card">
            <div className="pricing-header">
              <h3>Starter</h3>
              <div className="price">
                <span className="amount">$12</span>
                <span className="period">per user/month</span>
              </div>
            </div>
            <div className="pricing-features">
              <ul>
                <li><i className="fas fa-check"></i> Up to 5 team members</li>
                <li><i className="fas fa-check"></i> Basic AI merging</li>
                <li><i className="fas fa-check"></i> Document collaboration</li>
                <li><i className="fas fa-check"></i> 5GB storage</li>
                <li><i className="fas fa-check"></i> Email support</li>
              </ul>
            </div>
            <div className="pricing-cta">
              <a href="#" className="btn btn-secondary">Start Free Trial</a>
            </div>
          </div>
          <div className="pricing-card featured">
            <div className="pricing-badge">Most Popular</div>
            <div className="pricing-header">
              <h3>Professional</h3>
              <div className="price">
                <span className="amount">$29</span>
                <span className="period">per user/month</span>
              </div>
            </div>
            <div className="pricing-features">
              <ul>
                <li><i className="fas fa-check"></i> Unlimited team members</li>
                <li><i className="fas fa-check"></i> Advanced AI merging</li>
                <li><i className="fas fa-check"></i> All collaboration tools</li>
                <li><i className="fas fa-check"></i> 50GB storage</li>
                <li><i className="fas fa-check"></i> Priority support</li>
                <li><i className="fas fa-check"></i> Analytics dashboard</li>
              </ul>
            </div>
            <div className="pricing-cta">
              <a href="#" className="btn btn-primary">Start Free Trial</a>
            </div>
          </div>
          <div className="pricing-card">
            <div className="pricing-header">
              <h3>Enterprise</h3>
              <div className="price">
                <span className="amount">Custom</span>
                <span className="period">tailored solutions</span>
              </div>
            </div>
            <div className="pricing-features">
              <ul>
                <li><i className="fas fa-check"></i> Unlimited everything</li>
                <li><i className="fas fa-check"></i> Custom AI training</li>
                <li><i className="fas fa-check"></i> Advanced security</li>
                <li><i className="fas fa-check"></i> Dedicated account manager</li>
                <li><i className="fas fa-check"></i> 24/7 premium support</li>
                <li><i className="fas fa-check"></i> Custom integrations</li>
              </ul>
            </div>
            <div className="pricing-cta">
              <a href="#" className="btn btn-secondary">Contact Sales</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;