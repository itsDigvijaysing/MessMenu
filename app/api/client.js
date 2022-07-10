import { create } from "apisauce";
import { baseURL } from "./baseurl";

//192.168.0.5 is basically localhost

const apiClient = create({
  baseURL: baseURL,
});

export default apiClient;
