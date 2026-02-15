
import React from 'react';
import Card from '../common/Card';
import { finalRiskScore } from '../../data/incidentData';

function RiskScoreCard() {
  return (
    <Card title="Final Risk Score" className="risk-score-card">
      <div className="risk-score-number">{finalRiskScore}</div>
      <div className="risk-level-badge">CRITICAL</div>
    </Card>
  );
}

export default RiskScoreCard;
