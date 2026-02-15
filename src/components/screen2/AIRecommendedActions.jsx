import React from 'react';
import Card from '../common/Card';
import { aiActions } from '../../data/incidentData';

function AIRecommendedActions() {
  return (
    <Card title="AI Recommended Actions" className="actions-card">
      <ul className="actions-list">
        {aiActions.map((action, index) => (
          <li key={index} className="action-item">
            <div className="action-number"></div>
            <div className="action-text">{action}</div>
          </li>
        ))}
      </ul>
    </Card>
  );
}

export default AIRecommendedActions;