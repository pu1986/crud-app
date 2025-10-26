import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:5001/api/productRoutes",
})

export const getProducts = () => api.get("/");
export const createProduct = (data) => api.post("/", data);
export const updateProduct = (id, data) => api.put(`/${id}`, data);
export const deleteProduct = (id) => api.delete(`/${id}`);