from fastapi import FastAPI
from dotenv import load_dotenv
import os

load_dotenv()

app = FastAPI(title="NotifyMe AI Service")

@app.get("/health")
def health_check():
    return {"status": "ok", "service": "ai-service"}

@app.get("/")
def root():
    return {"message": "NotifyMe AI Service"}

if __name__ == "__main__":
    import uvicorn
    port = int(os.getenv("AI_SERVICE_PORT", "8000"))
    uvicorn.run(app, host="0.0.0.0", port=port)
