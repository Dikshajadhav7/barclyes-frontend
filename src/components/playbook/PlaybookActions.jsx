import React from 'react';

function PlaybookActions({ incident }) {
  return (
    <div className="card">
      <h2 className="card-title">AI Generated Playbook</h2>
      <ul className="actions-list">
        {incident.playbook.map((action, index) => (
          <li key={index} className="action-item">
            <div className="action-number">{index + 1}</div>
            <div className="action-text">{action}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PlaybookActions;