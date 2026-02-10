import re

def detect_pii(text):
    return {
        "emails": re.findall(r"\S+@\S+", text),
        "phones": re.findall(r"\+?\d[\d\s-]{8,}", text),
        "aadhaar": re.findall(r"\b\d{4}\s\d{4}\s\d{4}\b", text),
        "pan": re.findall(r"[A-Z]{5}\d{4}[A-Z]", text)
    }