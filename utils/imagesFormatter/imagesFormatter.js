export function formatImageJson(data) {
  if (Array.isArray(data)) {
    return data.map((item) => formatImageJson(item));
  } else if (data && typeof data === "object" && data.images) {
    if (Array.isArray(data.images) && typeof data.images[0] === "string") {
      // Check if the first element is a stringified array
      if (
        data.images[0].startsWith("[") &&
        data.images[data.images.length - 1].endsWith("]")
      ) {
        try {
          // Join the array elements and parse as JSON
          const joinedString = data.images.join(",");
          data.images = JSON.parse(joinedString);
        } catch (error) {
          console.warn(
            `Warning: Could not parse images JSON. Using original array. Error: ${error.message}`
          );
        }
      }
      // Remove any remaining quotes from individual URLs
      data.images = data.images.map((url) => url.replace(/^"|"$/g, ""));
    }
  }
  return data;
}

// const fetchProducts = async () => {
//   const response = await axios.get(`${API_URL}/products/`);

//   const products = formatImageJson(response.data);
//   console.log(products);

//   return products;
// };

// fetchProducts();
