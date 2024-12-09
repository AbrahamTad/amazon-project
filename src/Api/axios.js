import axios from "axios";
const axiosInstance = axios.create({
  //local instance of firebase function
  // baseURL: "http://127.0.0.1:5001/clone-cfd41/us-central1/api",
  //deployed version of firebase function
  // baseURL: "https://api-rzohlyxfbq-uc.a.run.app/",
  //deployed version of amazon server on render.com
    baseURL: "https://amazon-api-deploy-f8b9.onrender.com/",
});

export default axiosInstance;
