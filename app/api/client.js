import { create } from "apisauce";

//192.168.0.5 is basically localhost

const apiClient = create({
  baseURL: "http://192.168.0.5:9000/messdetails",
});

export default apiClient;
