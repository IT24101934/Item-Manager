import axios from "axios";

const API_URL =
  import.meta.env.VITE_API_URL || "https://item-manager-backend-p05s.onrender.com";

const API = axios.create({
  baseURL: API_URL,
});

export const getItems = () => API.get("/api/items");
export const getItemById = (id) => API.get(`/api/items/${id}`);
export const createItem = (itemData) => API.post("/api/items", itemData);
export const updateItem = (id, itemData) => API.put(`/api/items/${id}`, itemData);
export const deleteItem = (id) => API.delete(`/api/items/${id}`);

export default API;