import "whatwg-fetch";
const axios = require("axios");
axios.defaults.baseURL = "https://panel.internetowaszkolarodzenia.pl/api";

export default function request(options) {
  return axios(options);
}
