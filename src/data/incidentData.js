export const incidents = [
  {
    id: 'INC-2026-0201',
    date: '12 Feb 2026',
    attackType: 'Credential Theft',
    asset: 'WS-302',
    department: 'Retail Banking',
    risk: 'high',
    entryMethod: 'Phishing Email',
    firstDetected: '2026-02-12 09:14:22 GMT',
    timeToContainment: '47 minutes',
    playbook: [
      'Disable compromised user accounts immediately',
      'Reset all privileged credentials',
      'Revoke all active sessions and tokens',
      'Block suspicious IP addresses at firewall',
      'Conduct forensic analysis on WS-302',
      'Notify compliance and legal team',
      'Submit mandatory regulatory report'
    ],
    timeline: [
      { time: '09:14', event: 'Phishing email opened by user' },
      { time: '09:18', event: 'Credential harvesting detected' },
      { time: '09:31', event: 'Unauthorized login attempt' },
      { time: '09:45', event: 'Account lockout triggered' },
      { time: '10:01', event: 'Incident contained' }
    ],
    impact: {
      customer: 'Potential account data exposure',
      operational: 'Service disruption for 2 users',
      regulatory: 'GDPR breach notification required'
    },
    finalRiskScore: 91
  },
  {
    id: 'INC-2026-0198',
    date: '10 Feb 2026',
    attackType: 'Malware',
    asset: 'DB-11',
    department: 'IT Infrastructure',
    risk: 'medium',
    entryMethod: 'Malicious USB Device',
    firstDetected: '2026-02-10 14:22:10 GMT',
    timeToContainment: '1 hour 20 minutes',
    playbook: [
      'Isolate DB-11 from network immediately',
      'Run full malware scan on affected system',
      'Identify and quarantine malicious files',
      'Check lateral spread to connected systems',
      'Restore from last clean backup',
      'Update endpoint protection signatures',
      'Document incident for audit trail'
    ],
    timeline: [
      { time: '14:22', event: 'Malware signature detected on DB-11' },
      { time: '14:28', event: 'System isolated from network' },
      { time: '14:45', event: 'Full scan initiated' },
      { time: '15:10', event: 'Malicious files quarantined' },
      { time: '15:42', event: 'System restored from backup' }
    ],
    impact: {
      customer: 'No direct customer impact',
      operational: 'Database offline for 80 minutes',
      regulatory: 'Internal audit report required'
    },
    finalRiskScore: 64
  },
  {
    id: 'INC-2026-0189',
    date: '09 Feb 2026',
    attackType: 'Privilege Escalation',
    asset: 'EXCH-01',
    department: 'Corporate Banking',
    risk: 'high',
    entryMethod: 'Exploited Vulnerability CVE-2024-1234',
    firstDetected: '2026-02-09 11:05:44 GMT',
    timeToContainment: '32 minutes',
    playbook: [
      'Revoke escalated privileges immediately',
      'Patch CVE-2024-1234 on all systems',
      'Audit all admin account activity',
      'Reset service account credentials',
      'Enable enhanced logging on EXCH-01',
      'Conduct threat hunting on domain',
      'Notify CISO and security leadership'
    ],
    timeline: [
      { time: '11:05', event: 'Anomalous admin activity detected' },
      { time: '11:09', event: 'Privilege escalation confirmed' },
      { time: '11:18', event: 'Affected accounts suspended' },
      { time: '11:25', event: 'Patch deployment started' },
      { time: '11:37', event: 'System secured and verified' }
    ],
    impact: {
      customer: 'Executive email data at risk',
      operational: 'Exchange server restricted for 32 mins',
      regulatory: 'Mandatory FCA notification required'
    },
    finalRiskScore: 88
  },
  {
    id: 'INC-2026-0173',
    date: '07 Feb 2026',
    attackType: 'Phishing',
    asset: 'CB-WEB02',
    department: 'Digital Banking',
    risk: 'low',
    entryMethod: 'Spear Phishing Email',
    firstDetected: '2026-02-07 16:33:01 GMT',
    timeToContainment: '15 minutes',
    playbook: [
      'Block phishing domain at email gateway',
      'Recall phishing emails from all inboxes',
      'Reset password for targeted user',
      'Check if credentials were submitted',
      'Enable MFA for affected accounts',
      'Send security awareness alert to staff',
      'Log incident in ticketing system'
    ],
    timeline: [
      { time: '16:33', event: 'Phishing email flagged by gateway' },
      { time: '16:35', event: 'Domain blocked at perimeter' },
      { time: '16:40', event: 'Email recalled from inboxes' },
      { time: '16:44', event: 'User password reset' },
      { time: '16:48', event: 'Incident closed - no breach' }
    ],
    impact: {
      customer: 'No customer impact confirmed',
      operational: 'Minimal - contained quickly',
      regulatory: 'No reporting required'
    },
    finalRiskScore: 28
  },
  {
    id: 'INC-2026-0163',
    date: '05 Feb 2026',
    attackType: 'Insider Threat',
    asset: 'FIN-SRV-10',
    department: 'Finance Operations',
    risk: 'medium',
    entryMethod: 'Authorised Access Misuse',
    firstDetected: '2026-02-05 10:17:55 GMT',
    timeToContainment: '2 hours 10 minutes',
    playbook: [
      'Suspend employee access immediately',
      'Preserve all access logs as evidence',
      'Audit data accessed and downloaded',
      'Notify HR and legal department',
      'Review DLP policy violations',
      'Conduct interview with line manager',
      'Engage law enforcement if required'
    ],
    timeline: [
      { time: '10:17', event: 'Unusual data download detected' },
      { time: '10:24', event: 'DLP alert triggered on FIN-SRV-10' },
      { time: '10:45', event: 'Employee access suspended' },
      { time: '11:30', event: 'HR and legal notified' },
      { time: '12:27', event: 'Full audit log preserved' }
    ],
    impact: {
      customer: 'Financial records potentially accessed',
      operational: 'Finance team workflow disrupted',
      regulatory: 'PCI DSS investigation required'
    },
    finalRiskScore: 72
  }
];