import React from 'react';
import { confidence } from '../../data/incidentData';

function AlertBanner() {
  return (
    <div className="alert-banner">
      <div className="alert-content">
        <div className="alert-icon">!</div>
        <div className="alert-text">
          Attack Pattern Detected: Account Compromise with Lateral Movement
        </div>
      </div>
      <div className="confidence-badge">
        Confidence: {confidence}%
      </div>
    </div>
  );
}

export default AlertBanner;