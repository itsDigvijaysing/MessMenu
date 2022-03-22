import client from "./client";

const endpoint = "/";

const getListings = () => client.get(endpoint);

export default {
  getListings,
};
