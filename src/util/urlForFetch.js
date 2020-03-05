/**
* Create URL to be consumed by fetch API.
* @param {string} url - url for the request. 
* @param {object} params - query params (key=>value) of the request. 
* @return {URL} URL object to be consumed by fetch 
*/
export default function(url, params) {
    url = new URL("https://geo.example.org/api");
    Object.keys(params).forEach(key => url.searchParams.append(key, params[key]))
    return url;
}