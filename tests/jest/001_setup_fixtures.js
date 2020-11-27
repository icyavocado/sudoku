import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
 
// This sets the mock adapter on the default instance
const mock = new MockAdapter(axios);
 
// Mock any GET request to /users
// arguments for reply are (status, data, headers)

module.exports.mock = mock;
module.exports.axios = axios;