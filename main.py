from fastapi import FastAPI, Request
import httpx
import json

app = FastAPI()


@app.get("/")
async def home():
    return ("message")


@app.get("/home")
async def check_location(request: Request):

    if request.client is None:
        return {"message":"Client information not available"}

    client_ip = request.client.host

    if client_ip in ("127.0.0.1", "::1"):
        return {
            "message" : "You are in local host"
        }

    async with httpx.AsyncClient() as client:
        try:
            response = await client.get(f"https://ipapi.co/{client_ip}/json")
            geo_data = response.json()
            return geo_data
        except Exception:
            geo_data = {}
            return {
                "message" : "Data error"
            }


        # 41.97779999064488, -87.71722227283024