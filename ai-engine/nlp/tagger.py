def tag(text):
    tags = []
    keywords = ["invoice", "contract", "exam", "passport", "medical"]
    for k in keywords:
        if k in text.lower():
            tags.append(k)
    return tags