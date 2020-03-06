import constants from "../util/const";
import axios from "axios";

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

    try {
      response = await axios.get(constants.USER_LIST_URL, {
        params: { offset, limit }
      });

      return response.data;
    } catch (e) {
      return Promise.reject(e);
    }
  }

  /**
   * Loads user by id from api source
   * @param {number} id - The offset of items page.
   * @param {number} limit - The page size.
   */
  static async loadItem(id) {
    let response;

    try {
      response = await axios.get(constants.USER_URL + id);

      return response.data;
    } catch (e) {
      return Promise.reject(e);
    }
  }
}
