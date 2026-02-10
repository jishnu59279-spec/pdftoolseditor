from difflib import SequenceMatcher

def similarity(a, b):
    return round(SequenceMatcher(None, a, b).ratio(), 2)

def plagiarism_check(text, corpus):
    return max(similarity(text, c) for c in corpus)