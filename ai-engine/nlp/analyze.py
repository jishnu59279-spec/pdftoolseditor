import sys, json
from summarizer.summarize import summarize
from nlp.tagger import tag
from security.pii import detect_pii

text = sys.argv[1]

print(json.dumps({
    "summary": summarize(text),
    "tags": tag(text),
    "pii": detect_pii(text)
}))