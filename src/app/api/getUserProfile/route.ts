import { cookies } from "next/headers";

export async function GET(req: Request) {
  const cookieStore = await cookies(); // ✅ await karo
  const token = cookieStore.get("token")?.value; // optional chaining
  console.log("Token:", token);

  return new Response(JSON.stringify({ token }), {
    headers: { "Content-Type": "application/json" },
  });
}
