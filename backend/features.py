import pandas as pd


def feature_engineering(input_file, output_file):

    df = pd.read_csv(input_file)

    # Ensure timestamp is datetime
    df["timestamp"] = pd.to_datetime(df["timestamp"], errors="coerce")

    # -------------------------
    # Time-based Features
    # -------------------------
    df["login_hour"] = df["timestamp"].dt.hour
    df["is_after_hours"] = df["login_hour"].apply(
        lambda x: 1 if x < 8 or x > 18 else 0
    )

    # -------------------------
    # Authentication Indicators
    # -------------------------
    df["failed_login_flag"] = (df["event_type"] == "login_failure").astype(int)
    df["success_login_flag"] = (df["event_type"] == "login_success").astype(int)

    # -------------------------
    # Suspicious Process Indicators
    # -------------------------
    df["is_powershell"] = (df["process_name"] == "powershell.exe").astype(int)
    df["is_cmd"] = (df["process_name"] == "cmd.exe").astype(int)
    df["is_regedit"] = (df["process_name"] == "regedit.exe").astype(int)
    df["is_malware"] = (df["process_name"] == "malware.exe").astype(int)

    # -------------------------
    # Network Behavior
    # -------------------------
    df["has_external_ip"] = df["source_ip"].apply(
        lambda x: 1 if isinstance(x, str) and not x.startswith("10.") else 0
    )

    df["has_internal_connection"] = df["destination_ip"].apply(
        lambda x: 1 if isinstance(x, str) and x.startswith("10.") else 0
    )

    # -------------------------
    # Aggregated Behavioral Signals
    # -------------------------
    df["user_event_count"] = df.groupby("user")["event_type"].transform("count")
    df["user_failed_login_count"] = df.groupby("user")["failed_login_flag"].transform("sum")
    df["user_success_login_count"] = df.groupby("user")["success_login_flag"].transform("sum")
    df["user_unique_hosts"] = df.groupby("user")["host"].transform("nunique")
    df["host_event_count"] = df.groupby("host")["event_type"].transform("count")

    # -------------------------
    # Save to CSV
    # -------------------------
    df.to_csv(output_file, index=False)

    print("\nFeature engineering complete.")
    print("Saved to:", output_file)

    print("\nPreview of engineered features:")
    print(df[[
        "user",
        "event_type",
        "is_after_hours",
        "failed_login_flag",
        "is_powershell",
        "is_malware",
        "has_external_ip",
        "user_failed_login_count"
    ]].head())


if __name__ == "__main__":
    feature_engineering("normalized_logs.csv", "features.csv")
