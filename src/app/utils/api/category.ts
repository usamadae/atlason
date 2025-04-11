import axiosInstance from "../../lib/axios";

export async function getTopCategories() {
  try {
    const res = await axiosInstance.get("/api/Category/Get4Bestcategories");
    return res.data;
  } catch (err) {
    console.error('Error fetching top categories, using fallback:', err);
    return [];  // Return fallback data (empty array or some default value)
  }
}



