import json
from datetime import datetime
from services.incident_loader import load_incidents
from llm.playbook_generator import generate_playbook

INPUT_FILE = "data/incidents.json"
OUTPUT_FILE = "data/incidents_with_playbooks.json"

def main():
    incidents = load_incidents(INPUT_FILE)
    playbooks_output = []

    for incident in incidents:
        playbook = generate_playbook(incident)
        
        # Create output record with only incident_id, generated_time, and playbook
        playbook_record = {
            "incident_id": incident.get("incident_id"),
            "generated_time": datetime.now().isoformat(),
            "playbook": playbook
        }
        playbooks_output.append(playbook_record)

    with open(OUTPUT_FILE, "w") as f:
        json.dump(playbooks_output, f, indent=2)

    print("✅ Playbooks generated and saved.")

if __name__ == "__main__":
    main()
