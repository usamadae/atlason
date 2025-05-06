// app/api/videos/route.js

export async function GET() {
    const data = [
      {
        id: 1,
        name: "Alaston",
        date: "07/11/2024",
        courseType: "FRONTEND",
        courseTitle: "WEB DEVELOPMENT",
        status: "UNDER REVIEW",
        avatar: "/avatar.jpg",
      },
      {
        id: 2,
        name: "Alaston",
        date: "07/11/2024",
        courseType: "FRONTEND",
        courseTitle: "WEB DEVELOPMENT",
        status: "UNDER REVIEW",
        avatar: "/avatar.jpg",
      },
      // Add more submissions as needed
    ];
  
    return new Response(JSON.stringify(data), {
      headers: {
        "Content-Type": "application/json",
      },
      status: 200,
    });
  }
  