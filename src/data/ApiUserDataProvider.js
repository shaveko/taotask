import constants from '../util/const';
import urlForFetch from '../util/urlForFetch';

/** Class to fetch user lists and users from Api
*/
export default class ApiUserDataProvider {

    /**
    * Loads users from api source
    * @param {number} offset - The offset of items page.
    * @param {number} limit - The page size.
    */
    static async loadItems(offset, limit) {
        offset = offset || constants.DEFAULT_OFFSET;
        limit = limit || constants.DEFAULT_LIMIT;

        let response;
        try{
            response = await fetch(urlForFetch(constants.USER_LIST_URL, offset, limit));
        }catch(e) {
            return Promise.reject(constants.NETWORK_ERROR_STATUS);
        }
        if(response.ok) {
            return response.json();
        }else{
            return Promise.reject(response.status)
        }
    }


}