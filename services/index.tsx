import { fixImagesFormat } from "@/utils/imagesFormatter/imgF";
import queryMaker from "@/utils/queryMaker";
import axios from "axios";
//if you are use your local platzi api, you can change the value of isAPI to false
const isAPI = true;
const API_URL = isAPI
  ? "https://api.escuelajs.co/api/v1"
  : "http://localhost:3001/api/v1";

//IMPORTTAN WE ARE USING FIXIMAGESFORMAT BECAUSE OF PRODUCT IMAGES BAD FORMATTED

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
  const products = response.data.map((product: any) => {
    if (isAPI&&Array.isArray(product.images) && product.images.length > 0) {
      product.images = fixImagesFormat(product.images);
    }
    return product;
  });

  return products;
};

// Function to fetch specific product by ID
export const fetchProductById = async (productId: string) => {
  const response = await axios.get(`${API_URL}/products/${productId}`);
  if (
    isAPI &&
    Array.isArray(response.data.images) &&
    response.data.images.length > 0
  ) {
    response.data.images = fixImagesFormat(response.data.images);
  }
  return response.data;
};

// Function to fetch products
export const fetchProducts = async (filterParams: Record<string, string>) => {
  const response = await axios.get(
    `${API_URL}/products/` + queryMaker(filterParams)
  );
  const products = response.data.map((product: any) => {
    if (isAPI && Array.isArray(product.images) && product.images.length > 0) {
      product.images = fixImagesFormat(product.images);
    }
    return product;
  });

  return products;
};

export const fetchHomeCarouselProducts = async () => {
  const response = await axios.get(`${API_URL}/products/?offset=10&limit=6`);
  const products = response.data.map((product: any) => {
    if (isAPI && Array.isArray(product.images) && product.images.length > 0) {
      product.images = fixImagesFormat(product.images);
    }
    return product;
  });
  return products;
};
