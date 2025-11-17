import axios from "axios";

const api = axios.create({
  baseURL: "https://backendofdevault.onrender.com", // your backend URL
});

export default api;
