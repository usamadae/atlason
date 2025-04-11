import axiosInstance from "../../lib/axios";

export async function getTopCategories() {
  try {
    const res = await axiosInstance.get("/api/Category/Get4Bestcategories");

    return res.data;
  } catch (err) {
    throw new Error("Failed to get top categories");
  }
}

export async function getAllCategories() {
  const res = await axiosInstance.get("/api/Category/GetAllCategory");
  return res.data;
  
}


export async function GetAllSubCategoriesWithCategory() {
    const res = await axiosInstance.get("/api/Category/GetAllSubCategoriesWithCategory");
    return res.data;
    
  }
