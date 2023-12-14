import axios from "axios";

axios.defaults.baseURL = "https://dummyjson.com/";

export const fetchProduct = async (configParams) => {
  const { data } = await axios.get("products", {
    params: {
      limit: 3,
      ...configParams,
    },
  });

  return data;
};

// 'https://dummyjson.com/products/1'
export const fetchProductById = async (id) => {
  const { data } = await axios.get(`products/${id}`);
  return data;
};

export const fetchProductByQuery = async (query) => {
  const { data } = await axios.get(`products/search?q=${query}`);
  return data;
};
