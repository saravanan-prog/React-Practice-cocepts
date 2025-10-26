import axios from "axios";

export const getallProdcuts = async (setProducts) => {
  let url = "https://fakestoreapi.com/products";
  let response = await axios.get(url);
  if (response?.data) {
    setProducts(response?.data);
  }

  console.log("Response=====>", response);
};
