import "whatwg-fetch";
const axios = require("axios");
axios.defaults.baseURL = "https://panel.internetowaszkolarodzenia.pl/api";

// /**
//  * Parses the JSON returned by a network request
//  *
//  * @param  {object} response A response from a network request
//  *
//  * @return {object}          The parsed JSON from the request
//  */
// function parseJSON(response) {
//   if (response.status === 204 || response.status === 205) {
//     return null;
//   }
//   if (response.status === 500) {
//     throw new Error("Internal server error");
//   }
//   return response.json();
// }
//
// /**
//  * Checks if a network request came back fine, and throws an error if not
//  *
//  * @param  {object} response   A response from a network request
//  *
//  * @return {object|undefined} Returns either the response, or throws an error
//  */
// function checkStatus(response) {
//   if (response.code) {
//     throw new Error(response.message);
//   }
//
//   return response;
// }

/**
 * Requests a URL, returning a promise
 *
 * @param  {string} url       The URL we want to request
 * @param  {object} [options] The options we want to pass to "fetch"
 *
 * @return {object}           The response data
 */
export default function request(options) {
  return axios(options);
}
