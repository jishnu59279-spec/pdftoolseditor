from paddleocr import PaddleOCR

ocr = PaddleOCR(
    use_angle_cls=True,
    lang="en",
    show_log=False
)

def extract_layout(image):
    result = ocr.ocr(image, cls=True)
    tables = []
    for line in result:
        tables.append({
            "text": line[1][0],
            "confidence": line[1][1],
            "box": line[0]
        })
    return tables