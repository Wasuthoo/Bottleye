from fastapi import FastAPI, HTTPException
from starlette.responses import StreamingResponse
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from typing import Union
from pydantic import BaseModel
import json

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

try:
    with open("db.json", "r") as file:
        db = json.load(file)
except FileNotFoundError:
    db = []

class BottleItem(BaseModel):
    bottle_number: int
    date: str
    time: str
@app.post("/store/")
def store_bottle_data(item: BottleItem):
    item.bottle_number = db.__len__()+1
    print(item)
    db.append(item.dict())
    
    with open('db.json', 'w') as file:
        json.dump(db, file, indent=4)
    

    return {"message": "Data stored successfully"}

@app.get("/get_all")
def get_all_bottle_data():
    return db

@app.get("/get_count")
def get_all_bottle_data():
    return db.__len__()

@app.get("/capture")
def get_capture():
    try :
        img_bytes = camera.run_camera()
        model_prediction = model.image_classification()
        if (model_prediction) :
            res = arduno_com.send_command()
            if res=="Water Detected" :
                return {"result": 0}
            else :
                return {"result": 1}
        else :
            return {"result": 0}
        
    except Exception as e:
        return {"error": str(e)}
