// Mock data for cybersecurity dashboard

export const correlationEvents = [
  {
    time: '14:23:41',
    user: 'j.williams',
    host: 'WKS-2847',
    event: 'Failed authentication attempt',
    risk: 'low'
  },
  {
    time: '14:24:15',
    user: 'j.williams',
    host: 'WKS-2847',
    event: 'Unusual process execution',
    risk: 'medium'
  },
  {
    time: '14:26:03',
    user: 'j.williams',
    host: 'WKS-2847',
    event: 'Privilege escalation detected',
    risk: 'high'
  },
  {
    time: '14:27:22',
    user: 'j.williams',
    host: 'EXCH-SRV-01',
    event: 'Lateral movement attempt',
    risk: 'high'
  },
  {
    time: '14:28:45',
    user: 'j.williams',
    host: 'EXCH-SRV-01',
    event: 'Data exfiltration suspected',
    risk: 'high'
  },
  {
    time: '14:29:11',
    user: 'j.williams',
    host: 'EXCH-SRV-01',
    event: 'Multiple mailbox access',
    risk: 'high'
  },
  {
    time: '14:30:33',
    user: 'j.williams',
    host: 'DC-01',
    event: 'Unauthorized domain query',
    risk: 'high'
  }
];

export const userRiskData = {
  name: 'John Williams',
  department: 'Corporate Banking Division',
  anomalyScore: 87,
  pattern: 'Detected pattern indicates compromised credentials with active lateral movement across critical infrastructure'
};

export const incidentInfo = {
  id: 'INC-2026-0234',
  status: 'Active',
  classification: 'Account Compromise',
  attackType: 'Credential Theft & Lateral Movement',
  primaryAsset: 'EXCH-SRV-01',
  department: 'Corporate Banking Division',
  firstDetected: '2026-02-15 14:23:41 GMT'
};

export const timelineEvents = [
  {
    time: '14:23:41',
    content: 'Initial access attempt detected'
  },
  {
    time: '14:24:15',
    content: 'Malicious process spawned'
  },
  {
    time: '14:26:03',
    content: 'Privilege escalation confirmed'
  },
  {
    time: '14:27:22',
    content: 'Lateral movement to mail server'
  },
  {
    time: '14:28:45',
    content: 'Suspicious data transfer initiated'
  },
  {
    time: '14:30:33',
    content: 'Domain controller access attempted'
  }
];

export const aiActions = [
  'Disable user account immediately',
  'Isolate affected workstation',
  'Block lateral movement paths',
  'Reset domain credentials',
  'Initiate forensic data capture',
  'Notify security leadership',
  'Engage incident response team'
];

export const executiveRisk = {
  customerImpact: 'Potential Data Exposure',
  operationalImpact: 'Service Disruption Likely',
  regulatoryRisk: 'Mandatory Reporting Required'
};

export const finalRiskScore = 92;
export const confidence = 94;