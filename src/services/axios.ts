import axios from "axios";

const api = axios.create({
  baseURL: "https://fake-api-grupo-05.onrender.com/",
});

export default api;
