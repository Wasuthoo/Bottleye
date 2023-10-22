from fastapi import FastAPI
import cv2
import io
import numpy as np
from PIL import Image
from starlette.responses import StreamingResponse

app = FastAPI()

def capture_image():
    # Capture an image from the webcam.
    cap = cv2.VideoCapture(0)
    ret, frame = cap.read()
    cap.release()

    if not ret:
        return None

    # Convert the image to bytes.
    _, buffer = cv2.imencode(".jpg", frame)
    img_bytes = buffer.tobytes()

    return img_bytes

@app.get("/capture")
async def get_capture():
    img_bytes = capture_image()

    if img_bytes is not None:
        return StreamingResponse(io.BytesIO(img_bytes), media_type="image/jpeg")


