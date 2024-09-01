import queryMaker from "@/utils/queryMaker";
import axios from "axios";
//if you are use your local platzi api, you can change the value of isAPI to false
const isAPI = false;
const API_URL = isAPI
  ? "https://api.escuelajs.co/api/v1"
  : "http://localhost:3001/api/v1";
// Function to fetch all categories
export const fetchAllCategories = async () => {
  const response = await axios.get(`${API_URL}/categories/`);
  return response.data;
};

// Function to fetch specific category by ID
export const fetchProductsByCategoryId = async (categoryId: number) => {
  const response = await axios.get(
    `${API_URL}/products/?categoryId=${categoryId}`
  );
  return response.data;
};

// Function to fetch specific product by ID
export const fetchProductById = async (productId: string) => {
  const response = await axios.get(`${API_URL}/products/${productId}`);
  return response.data;
};

// Function to fetch products
export const fetchProducts = async (filterParams: Record<string, string>) => {
  const response = await axios.get(
    `${API_URL}/products/` + queryMaker(filterParams)
  );
  return response.data;
};

export const fetchHomeCarouselProducts = async () => {
  const response = await axios.get(`${API_URL}/products/?offset=10&limit=6`);
  return response.data;
};
