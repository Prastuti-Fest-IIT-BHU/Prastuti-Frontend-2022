import axios from "axios";

const AxiosInstance = axios.create({
  baseURL: "https://prastuti-backend.herokuapp.com",
});

export default AxiosInstance;
