import ApiUserDataProvider from './ApiUserDataProvider';
import jsonTestData from './json/testtakers.json';
import constants from '../util/const';
import axios from 'axios';

jest.mock('axios');



it('ApiUserDataProvider.loadItems() returns promise which resolves or rejects error code', async (done)=>{

    axios.get = jest.fn().mockResolvedValue({data: jsonTestData.slice(0, constants.DEFAULT_LIMIT)});

    let items = await ApiUserDataProvider.loadItems();

    expect(items.length).toBe(constants.DEFAULT_LIMIT);

    done();
})

it('ApiUserDataProvider.loadItem() returns promise which resolves or rejects error code', async (done)=>{

    axios.get = jest.fn().mockResolvedValue({data: jsonTestData[0]});

    let item = await ApiUserDataProvider.loadItem();

    expect(item.login).toBe(jsonTestData[0].login);

    done();
})