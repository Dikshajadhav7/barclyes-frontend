import json
import pandas as pd


COMMON_FIELDS = [
    "timestamp",
    "user",
    "host",
    "event_type",
    "source_ip",
    "destination_ip",
    "process_name",
    "status"
]


def map_event_type(log):
    if log.get("result") == "fail":
        return "login_failure"
    if log.get("result") == "success":
        return "login_success"
    if log.get("action") == "process_execution":
        return "process_execution"
    return "unknown_event"


def normalize_log(log):
    normalized = {field: None for field in COMMON_FIELDS}

    normalized["timestamp"] = log.get("timestamp") or log.get("time")
    normalized["user"] = log.get("user") or log.get("usr")
    normalized["host"] = log.get("host") or log.get("machine")
    normalized["source_ip"] = log.get("source_ip") or log.get("ip_addr")
    normalized["destination_ip"] = log.get("destination_ip")
    normalized["process_name"] = log.get("process_name") or log.get("process")
    normalized["status"] = log.get("result") or log.get("status")
    normalized["event_type"] = map_event_type(log)

    return normalized


def process_logs(input_file, output_file):
    logs = []
    
    with open(input_file, "r", encoding="utf-8") as f:
        content = f.read()

    # Try to parse as JSON array first
    content_stripped = content.strip()
    if content_stripped.startswith("["):
        logs = json.loads(content_stripped)
    else:
        # Multiple prettified JSON objects - use JSONDecoder to parse sequentially
        decoder = json.JSONDecoder()
        idx = 0
        while idx < len(content_stripped):
            try:
                obj, end_idx = decoder.raw_decode(content_stripped, idx)
                logs.append(obj)
                idx = end_idx
                # Skip whitespace
                while idx < len(content_stripped) and content_stripped[idx].isspace():
                    idx += 1
            except json.JSONDecodeError as e:
                print(f"Error parsing at position {idx}: {e}")
                break

    normalized_rows = [normalize_log(log) for log in logs]

    df = pd.DataFrame(normalized_rows)
    df["timestamp"] = pd.to_datetime(df["timestamp"], errors="coerce")

    df.to_csv(output_file, index=False)

    print("Normalization complete.")
    print("Saved to:", output_file)
    print("\nPreview:")
    print(df.head())


if __name__ == "__main__":
    process_logs("logs.json", "normalized_logs.csv")
