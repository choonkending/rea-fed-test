import expect from 'expect';
import { applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import configureStore from 'redux-mock-store';
import * as actions from '../../app/actions/property';
import * as types from '../../app/constants/index';
import nock from 'nock';

const middlewares = [ thunk ];
const mockStore = configureStore(middlewares);

describe('Async Loading Action', () => {

  afterEach(() => {
    nock.cleanAll();
  });

  it('creates PROPERTY_SUCCESS when fetching property results has been done', (done) => {
    nock('http://localhost:3000')
      .get('/property')
      .reply(200, { results: 
          [
            "ID 1"
          ]
       });

    const expectedActions = [
      { type: types.PROPERTY_REQUEST, isLoading: true },
      { type: types.PROPERTY_SUCCESS, body: {
        results:
          [
            "ID 1"
          ]
        }
      }];
    const store = mockStore({ results: [] }, expectedActions, done);
    store.dispatch(actions.loadPropertyData());
  });
});