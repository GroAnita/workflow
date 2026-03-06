let API_BASE_URL = "https://v2.api.noroff.dev/";

export default async function apiClient(endpoint, options = {}) {
  const url = `${API_BASE_URL}${endpoint}`;
  const token = localStorage.getItem("token");
  const API_KEY = import.meta.env.VITE_NOROFF_API_KEY;
  const headers = {
    "Content-Type": "application/json",
    ...options.headers,
  };

  // Only set the X-Noroff-Api-Key header when an API key is available.
  // If the header is required and not provided via options, fail fast with a clear error.
  if (!headers["X-Noroff-Api-Key"]) {
    if (!API_KEY) {
      throw new Error(
        "Missing VITE_NOROFF_API_KEY environment variable required for Noroff API requests."
      );
    }
    headers["X-Noroff-Api-Key"] = API_KEY;
  }
  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }

  try {
    const response = await fetch(url, {
      ...options,
      headers,
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || "API request failed");
    }

    return await response.json();
  } catch (error) {
    console.error("API Client Error:", error);
    throw error;
  }
}
