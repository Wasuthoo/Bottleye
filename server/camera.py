import cv2
import io
import time
import os
from PIL import Image

def run_camera():
    def capture_image(save_path, file_name):
        # Capture an image from the webcam.
        cap = cv2.VideoCapture(1)
        time.sleep(1)
        
        # Set the capture resolution to achieve a widescreen aspect ratio (16:9).
        cap.set(cv2.CAP_PROP_FRAME_WIDTH, 1920)  # Set the width to 1920 pixels
        cap.set(cv2.CAP_PROP_FRAME_HEIGHT, 1080)  # Set the height to 1080 pixels

        ret, frame = cap.read()
        cap.release()

        if not ret:
            return None

        # Convert the image to bytes.
        _, buffer = cv2.imencode(".jpg", frame)
        img_bytes = buffer.tobytes()

        # Construct the full path to save the image
        full_path = os.path.join(save_path, file_name)

        # Save the image, replacing it if it already exists
        with open(full_path, "wb") as f:
            f.write(img_bytes)

        return img_bytes
    # Define the path and filename for the saved image
    save_path = "img"  # Change this to the desired directory
    file_name = "captured_image.jpg"  # Change this to your desired filename

    # Capture the image and get the full path of the saved image
    img_bytes = capture_image(save_path, file_name)

    # if saved_image_path:
    print(f"Image saved")
    return img_bytes
    # # Open the image using PIL (optional)
    # image = Image.open(saved_image_path)
    # image.show()