import json

def load_incidents(path):
    with open(path, "r") as f:
        return json.load(f)

def build_llm_context(incident):
    # Build detailed timeline from correlated_events
    timeline_entries = []
    for event in incident.get("correlated_events", []):
        ts = event.get("timestamp", "")
        event_type = event.get("event_type", "").replace("_", " ").title()
        
        # Add relevant event details
        details = []
        if event.get("process_name"):
            details.append(f"Process: {event['process_name']}")
        if event.get("source_ip"):
            details.append(f"Source IP: {event['source_ip']}")
        if event.get("destination_ip"):
            details.append(f"Destination IP: {event['destination_ip']}")
        if event.get("status"):
            details.append(f"Status: {event['status']}")
        
        detail_str = f" ({', '.join(details)})" if details else ""
        timeline_entries.append(f"{ts} - {event_type}{detail_str}")
    
    return {
        "incident_id": incident.get("incident_id", "Unknown"),
        "incident_type": incident["incident_type"],
        "severity": incident["severity"],
        "confidence": incident["fidelity_score"],
        "affected_user": incident.get("affected_user", "Unknown"),
        "affected_host": incident.get("affected_host", "Unknown"),
        "time_start": incident.get("time_window", {}).get("start", "Unknown"),
        "time_end": incident.get("time_window", {}).get("end", "Unknown"),
        "key_indicators": "\n".join(
            f"- {i}" for i in incident.get("indicators", [])
        ),
        "detailed_timeline": "\n".join(timeline_entries) if timeline_entries else "Not provided in incident data"
    }

