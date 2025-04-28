import { create } from "zustand";
import axios from "axios";


const baseURL = import.meta.env.VITE_api_baseURL;

const useProductStore = create((set) => ({
  productList: [],

  fetchProducts: async () => {
    try {
      const response = await axios.get(`${baseURL}/Products`);
      set({ productList: response.data });
      return response.data;
    } catch (error) {
      console.error("Terjadi error saat memuat produk:", error);
      return [];
    }
  },
}));

export const fetchProducts = async () => {
  return await useProductStore.getState().fetchProducts();
}

export default useProductStore;


// export const fetchProducts = async () => {
//       try {
//         const response = await axios.get(`${import.meta.env.VITE_api_baseURL}/Products`);
//         return response.data;
//       } catch (error) {
//         console.log("Error fetching products:", error);
//       }
//     };