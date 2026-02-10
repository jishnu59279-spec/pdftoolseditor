import re

def parse_invoice(text):
    return {
        "invoice_no": re.findall(r"Invoice\s*#?:?\s*(\w+)", text),
        "date": re.findall(r"\d{2}/\d{2}/\d{4}", text),
        "amount": re.findall(r"Total\s*:?[\s₹$]*(\d+)", text)
    }