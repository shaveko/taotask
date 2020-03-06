import constants from '../util/const';
import users from './json/testtakers.json';

/** Class to fetch user lists json file
*/
export default class JsonUserDataProvider {

    /**
    * Loads users from api source
    * @param {number} offset - The offset of items page.
    * @param {number} limit - The page size.
    */
    static async loadItems(offset, limit) {
        offset = offset || constants.DEFAULT_OFFSET;
        limit = limit || constants.DEFAULT_LIMIT;
        
        try{
            
            return users.slice(offset, offset+limit);

        }catch(e) {
            return Promise.reject(e);
        }

    }


}