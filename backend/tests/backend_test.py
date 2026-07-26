"""Backend tests for Blue Margins API."""
import os
import uuid
from pathlib import Path

import pytest
import requests
from dotenv import dotenv_values

frontend_env = dotenv_values("/app/frontend/.env")
base_url = os.environ.get("REACT_APP_BACKEND_URL") or frontend_env.get("REACT_APP_BACKEND_URL")
if not base_url:
    raise RuntimeError("REACT_APP_BACKEND_URL is missing")
BASE_URL = base_url.rstrip("/")


@pytest.fixture(scope="module")
def api_client():
    s = requests.Session()
    s.headers.update({"Content-Type": "application/json"})
    return s


# ===== Root =====
class TestRoot:
    def test_root_message(self, api_client):
        r = api_client.get(f"{BASE_URL}/api/")
        assert r.status_code == 200
        data = r.json()
        assert data == {"message": "postcardsandpoetry api"}


# ===== Subscribe =====
class TestSubscribe:
    def test_subscribe_valid(self, api_client):
        email = f"test_{uuid.uuid4().hex[:8]}@example.com"
        r = api_client.post(f"{BASE_URL}/api/subscribe", json={"email": email})
        assert r.status_code == 200, r.text
        data = r.json()
        assert "id" in data and isinstance(data["id"], str)
        assert data["email"] == email.lower()
        assert "timestamp" in data

    def test_subscribe_idempotent(self, api_client):
        email = f"test_idem_{uuid.uuid4().hex[:8]}@example.com"
        r1 = api_client.post(f"{BASE_URL}/api/subscribe", json={"email": email})
        assert r1.status_code == 200
        r2 = api_client.post(f"{BASE_URL}/api/subscribe", json={"email": email})
        assert r2.status_code == 200
        assert r1.json()["id"] == r2.json()["id"]
        assert r1.json()["email"] == r2.json()["email"]

    def test_subscribe_case_insensitive_idempotent(self, api_client):
        base = f"test_case_{uuid.uuid4().hex[:8]}@example.com"
        r1 = api_client.post(f"{BASE_URL}/api/subscribe", json={"email": base})
        r2 = api_client.post(f"{BASE_URL}/api/subscribe", json={"email": base.upper()})
        assert r1.status_code == 200 and r2.status_code == 200
        assert r1.json()["id"] == r2.json()["id"]

    def test_subscribe_invalid_email(self, api_client):
        r = api_client.post(f"{BASE_URL}/api/subscribe", json={"email": "not-an-email"})
        assert r.status_code == 422

    def test_subscribe_missing_email(self, api_client):
        r = api_client.post(f"{BASE_URL}/api/subscribe", json={})
        assert r.status_code == 422

    def test_subscribe_empty_email(self, api_client):
        r = api_client.post(f"{BASE_URL}/api/subscribe", json={"email": ""})
        assert r.status_code == 422


# ===== Contact (still present) =====
class TestContact:
    def test_contact_valid(self, api_client):
        payload = {
            "name": "TEST_User",
            "email": f"test_contact_{uuid.uuid4().hex[:8]}@example.com",
            "message": "TEST_ hello from pytest",
        }
        r = api_client.post(f"{BASE_URL}/api/contact", json=payload)
        assert r.status_code == 200, r.text
        data = r.json()
        assert data["name"] == payload["name"]
        assert data["email"] == payload["email"]
        assert data["message"] == payload["message"]
        assert "id" in data

    def test_contact_invalid_email(self, api_client):
        r = api_client.post(
            f"{BASE_URL}/api/contact",
            json={"name": "n", "email": "bad", "message": "m"},
        )
        assert r.status_code == 422
