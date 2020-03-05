import ApiUserDataProvider from './ApiUserDataProvider';
import jsonTestData from './json/testtakers.json';
import constants from '../util/const';
 
//this is the mocking function to provide test data from local json file
function mockFetch() {
    return {
        ok: true,
        json: ()=>Promise.resolve(jsonTestData.slice(0, constants.DEFAULT_LIMIT))
    }
}

window.fetch = mockFetch;

it('Returns promise which resolves or rejects error code', async (done)=>{

    let items = await ApiUserDataProvider.loadItems();

    expect(items.length).toBe(constants.DEFAULT_LIMIT);

    done();
})