// axios-config.js
import axios from "axios";

const instance = axios.create({
  baseURL: process.env.NODE_ENV === "development" ? "http://localhost:3000" 
  // Add other configurations if needed
});

export default instance;
