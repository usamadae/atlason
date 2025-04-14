
import axiosInstance from "../../lib/axios";

export async function browseCategoriesWithSub() {
  try {
    const res = await axiosInstance.get("/api/Category/GetAllSubCategoriesWithCategory");
    return res.data;
  } catch (error) {
    console.error("Failed to fetch categories with subcategories:", error);
    return []; // fallback
  }
}
