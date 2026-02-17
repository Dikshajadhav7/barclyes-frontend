import React, { useState } from 'react';
import IncidentList from './components/incidents/IncidentList';
import PlaybookView from './components/playbook/PlaybookView';
import './App.css';

function App() {
  const [currentPage, setCurrentPage] = useState('incidents');
  const [selectedIncident, setSelectedIncident] = useState(null);

  const handleGeneratePlaybook = (incident) => {
    setSelectedIncident(incident);
    setCurrentPage('playbook');
  };

  const handleBack = () => {
    setCurrentPage('incidents');
    setSelectedIncident(null);
  };

  return (
    <div className="app-container">
      {currentPage === 'incidents' ? (
        <IncidentList onGeneratePlaybook={handleGeneratePlaybook} />
      ) : (
        <PlaybookView incident={selectedIncident} onBack={handleBack} />
      )}
    </div>
  );
}

export default App;