from fastapi import FastAPI
from pydantic import BaseModel

from fastapi.middleware.cors import CORSMiddleware
import json

app = FastAPI()

origins = ["*"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_headers=["*"],
    allow_credentials=True,
    allow_methods=["*"]
)
class LocationData(BaseModel):
    lat : float
    lng: float

@app.get("/")
async def home():
    return {"message": "Api reached successfully"}


@app.get("/api/location",)
async def locate(data: LocationData):


    longitude = data.lng
    latitude = data.lat

    print (f" Received Location -> latitude: {latitude} & Longitude : {longitude} ")

    return {
        "status" : "Successful",
        "message": "Location reached successfully",
        "latitude" : latitude,
        "longitude" : longitude
    }
        # 41.97779999064488, -87.71722227283024