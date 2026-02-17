import React from 'react';

function RiskImpactCards({ incident }) {
  return (
    <div className="risk-impact-section">
      <div className="risk-impact-grid">
        <div className="card impact-card">
          <div className="impact-label">Customer Impact</div>
          <div className="impact-value">{incident.impact.customer}</div>
        </div>
        <div className="card impact-card">
          <div className="impact-label">Operational Impact</div>
          <div className="impact-value">{incident.impact.operational}</div>
        </div>
        <div className="card impact-card">
          <div className="impact-label">Regulatory Exposure</div>
          <div className="impact-value">{incident.impact.regulatory}</div>
        </div>
      </div>

      <div className="final-risk-row">
        <span className="final-risk-label-text">Final Risk Score</span>
        <span className={`final-score-badge ${incident.risk === 'high' ? 'score-high' : incident.risk === 'medium' ? 'score-medium' : 'score-low'}`}>
          {incident.finalRiskScore} — {incident.risk.toUpperCase()}
        </span>
      </div>
    </div>
  );
}

export default RiskImpactCards;