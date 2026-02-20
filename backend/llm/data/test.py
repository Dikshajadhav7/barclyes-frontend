
import json


data = json.load(open("C:\\code\\barclays\\llm\\data\\incidents_with_playbooks.json"))
print(data[0]["playbook"])