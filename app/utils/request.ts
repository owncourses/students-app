import "whatwg-fetch";
import config from "../../config/config";

const axios = require("axios");
axios.defaults.baseURL = `${config.server.url.replace(/\/$/, "")}/api`;

export default function request(options) {
  return axios(options);
}
