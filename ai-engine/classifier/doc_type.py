def classify(text):
    if "invoice" in text.lower():
        return "Invoice"
    if "passport" in text.lower():
        return "ID Document"
    if "question" in text.lower():
        return "Exam Paper"
    return "General Document"