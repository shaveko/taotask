/** Abstract class representing provider for items 
 * extend this to create providers
*/
export default class AbstractItemProvider {

    /**
    * Loads array of items - must be redeclared in a subclass
    * @param {number} offset - The offset of data page.
    * @param {number} limit - The page size.
    * @return {Promise} - Resolves to array of items or rejects with and error
    */
    static loadItems(offset, limit) {
        console.error('You must implement this method in subclass')
    }

    
    /**
    * Loads one item by given id
    * @param {string} id - Item id.
    * @return {Promise} - Resolves to the item or rejects with and error
    */
    static loadItem(id) {

    }
}