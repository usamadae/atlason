// app/api/best-instructors/route.js

export async function GET() {
    const bestInstructors = [
      {
        id: 1,
        name: "Alison Pakar",
        description: "Lorem Ipsum is Simply Dummy Text",
        image: "/images/image.png",
      },
      {
        id: 2,
        name: "Ryo Olivera",
        description: "Lorem Ipsum is Simply Dummy Text",
        image: "/images/image.png",
      },
      {
        id: 3,
        name: "Ryo Olivera",
        description: "Lorem Ipsum is Simply Dummy Text",
        image: "/images/image.png",
      },
    ];
  
    return new Response(JSON.stringify(bestInstructors), {
      headers: { "Content-Type": "application/json" },
      status: 200,
    });
  }
  