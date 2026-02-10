from pyzbar.pyzbar import decode
from PIL import Image

def scan_codes(image):
    codes = decode(Image.open(image))
    return [{"type": c.type, "data": c.data.decode()} for c in codes]