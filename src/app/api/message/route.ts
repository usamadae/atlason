// app/api/message/route.ts

import { GET } from "../../lib/message"; // Use relative path

// Re-export the GET function as the API handler
export { GET };  // This will automatically handle the GET request at /api/message
