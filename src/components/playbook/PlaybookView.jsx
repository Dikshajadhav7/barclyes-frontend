import React from 'react';
import PlaybookHeader from './PlaybookHeader';
import PlaybookSummary from './PlaybookSummary';
import PlaybookActions from './PlaybookActions';
import RiskImpactCards from './RiskImpactCards';

function PlaybookView({ incident, onBack }) {
  if (!incident) return null;

  return (
    <div>
      <PlaybookHeader incident={incident} onBack={onBack} />

      <div className="two-column">
        <div className="left-col">
          <PlaybookSummary incident={incident} />
        </div>
        <div className="right-col">
          <PlaybookActions incident={incident} />
        </div>
      </div>

      <RiskImpactCards incident={incident} />
    </div>
  );
}

export default PlaybookView;