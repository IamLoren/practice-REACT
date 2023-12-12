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
