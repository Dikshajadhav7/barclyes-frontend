import json
import subprocess
from pathlib import Path
import requests

PROMPT_PATH = Path(__file__).parent / "prompt_template.txt"

def generate_playbook(incident):
    template = PROMPT_PATH.read_text()

    # Format the full incident JSON and inject it into the template
    incident_json = json.dumps(incident, indent=2)
    prompt = template.replace("{INCIDENT_JSON}", incident_json)

    # Use ollama API with temperature parameter
    try:
        response = requests.post(
            "http://localhost:11434/api/generate",
            json={
                "model": "mistral",
                "prompt": prompt,
                "temperature": 0.1,
                "stream": False
            },
            timeout=300
        )
        response.raise_for_status()
        result = response.json()
        return result.get("response", "").strip()
    except Exception as e:
        print(f"Error calling ollama API: {e}")
        # Fallback to command-line if API fails
        result = subprocess.run(
            ["ollama", "run", "mistral"],
            input=prompt,
            text=True,
            capture_output=True,
            timeout=300
        )
        return result.stdout.strip()