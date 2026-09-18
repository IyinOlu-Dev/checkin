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


@app.post("/api/location",)
async def locate(data: LocationData):

    longitude = data.lng
    latitude = data.lat

    ckeckin = False
    print (f" Received Location -> latitude: {latitude} & Longitude : {longitude} ")

    if (-87.9 <= longitude <= -87.7) and (41.8 <= latitude <= 42.0):
        checkin = True
    else:
        checkin = False


    return {
        "status" : "Successful",
        "message": "Location reached successfully",
        "latitude" : latitude,
        "longitude" : longitude,
        "checkin_status" : checkin 
    }




        # 41.97779999064488, -87.71722227283024


        # 41.86204973667799, -87.8185480677973

        # 41.862145620691884, -87.81690655585933

        # 41.861490410398, -87.81837640641818
        
        # 41.86150639121677, -87.81683145400596