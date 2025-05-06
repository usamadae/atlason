// app/api/instructors/route.js

export async function GET() {
    const instructors = [
      {
        id: 1,
        name: "Alison Pakar",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s....",
      },
      {
        id: 2,
        name: "Alison Pakar",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s....",
      },
      {
        id: 3,
        name: "Alison Pakar",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s....",
      },
      {
        id: 4,
        name: "Extra Instructor",
        description: "This is an extra instructor beyond the visible 3...",
      },
    ];
  
    return new Response(JSON.stringify(instructors), {
      headers: { "Content-Type": "application/json" },
      status: 200,
    });
  }
  