import { fixImagesFormat } from "@/utils/imagesFormatter/imgF";
import queryMaker from "@/utils/queryMaker";
import axios from "axios";
//if you are use your local platzi api, you can change the value of isAPI to false
const isAPI = true;
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
   const products = response.data.map((product: any) => {
     if (Array.isArray(product.images) && product.images.length > 0) {
       product.images = fixImagesFormat(product.images);
     }
     return product;
   });

  return products;
};

// Function to fetch products
export const fetchProducts = async (filterParams: Record<string, string>) => {
  const response = await axios.get(
    `${API_URL}/products/` + queryMaker(filterParams)
  );
  //tam burada eğer images listesi string listesi yerine su sekilde geliyorsa çöz
  /*     "images": [
            "[\"https://i.imgur.com/TF0pXdL.jpg\"",
            "\"https://i.imgur.com/BLDByXP.jpg\"",
            "\"https://i.imgur.com/b7trwCv.jpg\"]"
        ],
  */
    const products = response.data.map((product: any) => {
      if (Array.isArray(product.images) && product.images.length > 0) {
        product.images = fixImagesFormat(product.images);
      }
      return product;
    });

  return products;
};

export const fetchHomeCarouselProducts = async () => {
  const response = await axios.get(`${API_URL}/products/?offset=10&limit=6`);
     const products = response.data.map((product: any) => {
       if (Array.isArray(product.images) && product.images.length > 0) {
         product.images = fixImagesFormat(product.images);
       }
       return product;
     });
  return products;
};
