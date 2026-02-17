import React, { useState } from 'react';
import IncidentFilters from './IncidentFilters';
import IncidentTable from './IncidentTable';
import Pagination from './Pagination';
import { incidents } from '../../data/incidentData';
import barclaysLogo from '../../assets/images/barclays-logo.png';

function IncidentList({ onGeneratePlaybook }) {
  const [dateFilter, setDateFilter] = useState('last7');
  const [riskFilter, setRiskFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const filtered = incidents.filter((inc) => {
    const matchRisk = riskFilter === 'all' || inc.risk === riskFilter;
    const matchSearch =
      inc.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
      inc.attackType.toLowerCase().includes(searchQuery.toLowerCase()) ||
      inc.asset.toLowerCase().includes(searchQuery.toLowerCase());
    return matchRisk && matchSearch;
  });

  const totalPages = Math.ceil(filtered.length / itemsPerPage);
  const paginated = filtered.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div>
      {/* Header */}
      <div className="page-header">
        <div className="header-left">
          <img src={barclaysLogo} alt="Barclays" className="logo" />
          <h1 className="page-title">Incident Playbooks</h1>
        </div>
        <div className="search-wrapper">
          <span className="search-icon">🔍</span>
          <input
            className="search-input"
            type="text"
            placeholder="Search Incidents..."
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
              setCurrentPage(1);
            }}
          />
        </div>
      </div>

      {/* Filters */}
      <IncidentFilters
        dateFilter={dateFilter}
        riskFilter={riskFilter}
        onDateChange={(val) => { setDateFilter(val); setCurrentPage(1); }}
        onRiskChange={(val) => { setRiskFilter(val); setCurrentPage(1); }}
      />

      {/* Table */}
      <IncidentTable
        incidents={paginated}
        onGeneratePlaybook={onGeneratePlaybook}
      />

      {/* Pagination */}
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        totalItems={filtered.length}
        itemsPerPage={itemsPerPage}
        onPrev={() => setCurrentPage((p) => Math.max(p - 1, 1))}
        onNext={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
      />
    </div>
  );
}

export default IncidentList;