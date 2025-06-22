import React from 'react';
import { Link } from 'react-router-dom';
import './Dashboard.css';

const Dashboard: React.FC = () => {
  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <h1> DASHBOARD </h1>
        <p>Manage your collaborative projects and access powerful tools</p>
      </div>

      <div className="dashboard-stats">
        <div className="stat-card">
          <h3>Active Projects</h3>
          <p className="stat-number">5</p>
        </div>
        <div className="stat-card">
          <h3>Team Members</h3>
          <p className="stat-number">12</p>
        </div>
        <div className="stat-card">
          <h3>Completed Tasks</h3>
          <p className="stat-number">28</p>
        </div>
      </div>

      <div className="dashboard-features">
        <h2>Your Collaboration Tools</h2>
        <div className="feature-grid">
          <div className="feature-card">
            <div className="feature-icon">
              <i className="fas fa-comments"></i>
            </div>
            <h3>Real-time Idea Merging</h3>
            <p>Contribute simultaneously as AI intelligently combines everyone's input into a unified output.</p>
            <Link to="/feature/idea-merging" className="feature-link">Open Tool</Link>
          </div>

          <div className="feature-card">
            <div className="feature-icon">
              <i className="fas fa-code"></i>
            </div>
            <h3>Code Collaboration</h3>
            <p>Merge code snippets from multiple developers into functional, optimized solutions.</p>
            <Link to="/feature/code-collab" className="feature-link">Open Tool</Link>
          </div>

          <div className="feature-card">
            <div className="feature-icon">
              <i className="fas fa-paint-brush"></i>
            </div>
            <h3>Design Synthesis</h3>
            <p>Combine design concepts and feedback into cohesive visual assets and prototypes.</p>
            <Link to="/feature/design" className="feature-link">Open Tool</Link>
          </div>

          <div className="feature-card">
            <div className="feature-icon">
              <i className="fas fa-chart-line"></i>
            </div>
            <h3>Smart Presentations</h3>
            <p>Create compelling pitches and presentations by merging team insights automatically.</p>
            <Link to="/feature/presentations" className="feature-link">Open Tool</Link>
          </div>

          <div className="feature-card">
            <div className="feature-icon">
              <i className="fas fa-file-alt"></i>
            </div>
            <h3>Document Co-creation</h3>
            <p>Draft documents together as AI seamlessly integrates everyone's contributions.</p>
            <Link to="/feature/documents" className="feature-link">Open Tool</Link>
          </div>

          <div className="feature-card">
            <div className="feature-icon">
              <i className="fas fa-history"></i>
            </div>
            <h3>Version Control</h3>
            <p>Track changes and contributions with intelligent history management.</p>
            <Link to="/feature/version-control" className="feature-link">Open Tool</Link>
          </div>
        </div>
      </div>

      <div className="recent-activity">
        <h2>Recent Activity</h2>
        <div className="activity-list">
          <div className="activity-item">
            <div className="activity-icon">
              <i className="fas fa-code-branch"></i>
            </div>
            <div className="activity-content">
              <h4>Code Merge Completed</h4>
              <p>Frontend components were successfully merged</p>
              <span className="activity-time">2 hours ago</span>
            </div>
          </div>
          <div className="activity-item">
            <div className="activity-icon">
              <i className="fas fa-file-alt"></i>
            </div>
            <div className="activity-content">
              <h4>Document Updated</h4>
              <p>Project requirements document was updated</p>
              <span className="activity-time">Yesterday</span>
            </div>
          </div>
          <div className="activity-item">
            <div className="activity-icon">
              <i className="fas fa-users"></i>
            </div>
            <div className="activity-content">
              <h4>New Team Member</h4>
              <p>Sarah Johnson joined the project</p>
              <span className="activity-time">2 days ago</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;