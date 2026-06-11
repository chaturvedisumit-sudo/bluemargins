"""Backend API tests for postcardsandpoetry - root + /api/contact CRUD"""
import os
import pytest
import requests

BASE_URL = os.environ.get("REACT_APP_BACKEND_URL")
if not BASE_URL:
    # Read from frontend/.env (testing runs in same container)
    env_path = "/app/frontend/.env"
    if os.path.exists(env_path):
        with open(env_path) as f:
            for line in f:
                if line.startswith("REACT_APP_BACKEND_URL="):
                    BASE_URL = line.split("=", 1)[1].strip()
                    break
BASE_URL = (BASE_URL or "").rstrip("/")
API = f"{BASE_URL}/api"


@pytest.fixture(scope="module")
def client():
    s = requests.Session()
    s.headers.update({"Content-Type": "application/json"})
    return s


# ===== Root endpoint =====
class TestRoot:
    def test_root_returns_brand_message(self, client):
        r = client.get(f"{API}/")
        assert r.status_code == 200
        data = r.json()
        assert data.get("message") == "postcardsandpoetry api"


# ===== Contact POST =====
class TestContactCreate:
    def test_create_contact_valid(self, client):
        payload = {
            "name": "TEST_Reader",
            "email": "test_reader@example.com",
            "message": "TEST_loved the poems by the sea",
        }
        r = client.post(f"{API}/contact", json=payload)
        assert r.status_code == 200, r.text
        data = r.json()
        assert data["name"] == payload["name"]
        assert data["email"] == payload["email"]
        assert data["message"] == payload["message"]
        assert "id" in data and isinstance(data["id"], str) and len(data["id"]) > 0
        assert "timestamp" in data

    def test_create_contact_invalid_email_returns_422(self, client):
        payload = {
            "name": "TEST_BadEmail",
            "email": "not-an-email",
            "message": "TEST_should fail validation",
        }
        r = client.post(f"{API}/contact", json=payload)
        assert r.status_code == 422, r.text

    def test_create_contact_missing_fields_returns_422(self, client):
        r = client.post(f"{API}/contact", json={"name": "", "email": "", "message": ""})
        assert r.status_code == 422

    def test_create_contact_empty_body_returns_422(self, client):
        r = client.post(f"{API}/contact", json={})
        assert r.status_code == 422


# ===== Contact GET (listing + sort) =====
class TestContactList:
    def test_list_contains_recent_and_sorted_desc(self, client):
        # Seed two messages with distinct content
        first = {
            "name": "TEST_First",
            "email": "test_first@example.com",
            "message": "TEST_first message",
        }
        second = {
            "name": "TEST_Second",
            "email": "test_second@example.com",
            "message": "TEST_second message",
        }
        r1 = client.post(f"{API}/contact", json=first)
        assert r1.status_code == 200
        r2 = client.post(f"{API}/contact", json=second)
        assert r2.status_code == 200

        r = client.get(f"{API}/contact")
        assert r.status_code == 200
        items = r.json()
        assert isinstance(items, list)
        assert len(items) >= 2

        # Most recent (second) should appear before first when scanning forward
        emails_in_order = [it["email"] for it in items]
        idx_second = emails_in_order.index("test_second@example.com")
        idx_first = emails_in_order.index("test_first@example.com")
        assert idx_second < idx_first, (
            f"Expected second (newer) before first (older), got {emails_in_order[:5]}"
        )

        # Ensure no MongoDB _id leaks
        assert all("_id" not in it for it in items)
