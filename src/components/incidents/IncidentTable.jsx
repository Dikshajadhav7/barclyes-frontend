import React from 'react';

function IncidentTable({ incidents, onGeneratePlaybook }) {
  const getRiskClass = (risk) => {
    if (risk === 'high') return 'risk-badge risk-high';
    if (risk === 'medium') return 'risk-badge risk-medium';
    return 'risk-badge risk-low';
  };

  const getRiskLabel = (risk) => {
    return risk.charAt(0).toUpperCase() + risk.slice(1);
  };

  if (incidents.length === 0) {
    return (
      <div className="card empty-state">
        <p>No incidents found matching your filters.</p>
      </div>
    );
  }

  return (
    <div className="card table-card">
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>Incident ID</th>
              <th>Date</th>
              <th>Attack Type</th>
              <th>Asset</th>
              <th>Risk</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {incidents.map((incident) => (
              <tr key={incident.id}>
                <td className="incident-id-cell">{incident.id}</td>
                <td>{incident.date}</td>
                <td>{incident.attackType}</td>
                <td><span className="asset-tag">{incident.asset}</span></td>
                <td>
                  <span className={getRiskClass(incident.risk)}>
                    {getRiskLabel(incident.risk)}
                  </span>
                </td>
                <td>
                  <button
                    className="generate-btn"
                    onClick={() => onGeneratePlaybook(incident)}
                  >
                    Generate Playbook
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default IncidentTable;