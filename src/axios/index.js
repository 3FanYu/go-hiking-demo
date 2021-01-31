import axios from "axios";

const https = axios.create({
  baseURL: "https://fe1ac3558031.ngrok.io",
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
