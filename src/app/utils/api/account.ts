const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL!;
let token: string | null = null;

export async function login(): Promise<string> {
  const username = process.env.API_USERNAME!;
  const password = process.env.API_PASSWORD!;

  const res = await fetch(`${BASE_URL}/api/Account/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, password }),
  });

  if (!res.ok) throw new Error("Login failed");

  const data = await res.json();
  token = data.token;
  return token;
}

export async function getAuthToken(): Promise<string> {
  if (token) return token;
  return await login();
}

export async function getProfile() {
  const authToken = await getAuthToken();
  const res = await fetch(`${BASE_URL}/api/Account/MyProfile`, {
    headers: { Authorization: `Bearer ${authToken}` },
  });

  if (!res.ok) throw new Error("Failed to fetch profile");
  return res.json();
}
