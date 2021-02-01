import axios from "axios";

const https = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

const createAxios = {
  async get(url) {
    return await https.get(url);
  },
  async post(url, data) {
    return await https.post(url, data);
  },
};

window.axios = createAxios;
