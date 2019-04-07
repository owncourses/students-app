import "whatwg-fetch";
const axios = require("axios");
axios.defaults.baseURL = process.env.SERVER_URL;

export default function request(options) {
  return axios(options);
}
