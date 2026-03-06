const API_BASE_URL = "https://v2.api.noroff.dev/";

export default async function logInUser(username, password) {
  try {
    const response = await fetch(`${API_BASE_URL}auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || "Login failed");
    }

    const data = await response.json();
    localStorage.setItem("token", data.accessToken);
    return data;
  } catch (error) {
    console.error("Login Error:", error);
    throw error;
  }
}
