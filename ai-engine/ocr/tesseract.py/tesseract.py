import pytesseract
from PIL import Image

def extract_text(image):
    return pytesseract.image_to_string(
        Image.open(image),
        lang="eng+hin+fra+deu",
        config="--oem 3 --psm 6"
    )