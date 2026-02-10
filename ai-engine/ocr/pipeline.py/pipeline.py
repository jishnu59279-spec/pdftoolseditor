from preprocess import preprocess
from tesseract import extract_text
from paddle import extract_layout
from confidence import score_confidence
from langdetect import detect
import json
import sys

image = sys.argv[1]

img = preprocess(image)
text = extract_text(image)
layout = extract_layout(image)
confidence = score_confidence(text)
language = detect(text)

print(json.dumps({
    "text": text,
    "layout": layout,
    "language": language,
    "confidence": confidence
}))