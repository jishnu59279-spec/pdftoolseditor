def score_confidence(text):
    if not text.strip():
        return 0.0
    alpha = sum(c.isalpha() for c in text)
    return round(alpha / max(len(text), 1), 2)