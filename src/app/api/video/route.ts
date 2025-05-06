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
        avatar: "/images/image.png",
      },
      {
        id: 2,
        name: "Alaston",
        date: "07/11/2024",
        courseType: "FRONTEND",
        courseTitle: "WEB DEVELOPMENT",
        status: "UNDER REVIEW",
        avatar: "/images/image.png",

      },
      {
        id: 3,
        name: "Alaston",
        date: "07/11/2024",
        courseType: "FRONTEND",
        courseTitle: "WEB DEVELOPMENT",
        status: "UNDER REVIEW",
        avatar: "/images/image.png",

      },
      {
        id: 4,
        name: "Alaston",
        date: "07/11/2024",
        courseType: "FRONTEND",
        courseTitle: "WEB DEVELOPMENT",
        status: "UNDER REVIEW",
        avatar: "/images/image.png",

      },
      {
        id: 5,
        name: "Alaston",
        date: "07/11/2024",
        courseType: "FRONTEND",
        courseTitle: "WEB DEVELOPMENT",
        status: "UNDER REVIEW",
        avatar: "/images/image.png",

      },
      {
        id: 6,
        name: "Alaston",
        date: "07/11/2024",
        courseType: "FRONTEND",
        courseTitle: "WEB DEVELOPMENT",
        status: "UNDER REVIEW",
        avatar: "/images/image.png",

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
  