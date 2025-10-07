import axios from "axios";

const API = axios.create({
  baseURL: "http://<backend-public-ip>:5000/api"
});

export default API;
