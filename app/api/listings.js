import client from "./client";

const endpoint = "/";

const getListings = () => client.get(endpoint);

const postListings = () => {
  client.post(endpoint);
};

export default {
  getListings,
  postListings,
};
