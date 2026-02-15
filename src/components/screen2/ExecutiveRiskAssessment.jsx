import React from 'react';
import Card from '../common/Card';
import { executiveRisk, finalRiskScore } from '../../data/incidentData';

function ExecutiveRiskAssessment() {
  return (
    <Card title="Executive Risk Assessment" className="executive-risk-card">
      <div className="risk-metrics">
        <div className="risk-metric">
          <span className="metric-label">Customer Impact</span>
          <span className="metric-value">{executiveRisk.customerImpact}</span>
        </div>
        <div className="risk-metric">
          <span className="metric-label">Operational Impact</span>
          <span className="metric-value">{executiveRisk.operationalImpact}</span>
        </div>
        <div className="risk-metric">
          <span className="metric-label">Regulatory Risk</span>
          <span className="metric-value">{executiveRisk.regulatoryRisk}</span>
        </div>
      </div>
      
      <div className="final-risk">
        <div className="final-risk-label">Final Risk Score</div>
        <div className="final-risk-score">{finalRiskScore}</div>
        <div className="final-risk-badge">CRITICAL</div>
      </div>
    </Card>
  );
}

export default ExecutiveRiskAssessment;