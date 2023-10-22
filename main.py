from typing import Union
from fastapi import FastAPI
from PIL import Image
from starlette.responses import StreamingResponse
import io
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from typing import Union

import camera
import model
import arduno_com

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],  # Replace with your frontend URL
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Create a global buffer to store the captured image

@app.get("/")
def read_root():
    return {"Hello": "World"}

@app.get("/items/{item_id}")
def read_item(item_id: int, q: Union[str, None] = None):
    return {"item_id": item_id, "q": q}

@app.get("/capture")
def get_capture():
    try :
        img_bytes = camera.run_camera()
        model_prediction = model.image_classification(img_bytes)
        if (model_prediction) :
            arduno_com.send_command()
            return {"result": 1}
        else :
            return {"result": 0}
        
    except Exception as e:
        return {"error": str(e)}
