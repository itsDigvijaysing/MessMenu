import { create } from "apisauce";

const apiClient = create({
  baseURL: "http://192.168.157.210:9000/api",
});

export default apiClient;
