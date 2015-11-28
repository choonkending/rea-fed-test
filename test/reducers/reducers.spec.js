import expect from 'expect';
import resultsReducer from '../../app/reducers/results';
import savedPropertiesReducer from '../../app/reducers/savedProperties';
import * as types from '../../app/constants/index';

describe('results reducer', () => {

  it('should return the initial state', () => {
    expect(
      resultsReducer(undefined, {})
    ).toEqual([]);
  });

});

describe('savedProperties reducer', () => {

  it('should return the initial state', () => {
    expect(
      savedPropertiesReducer(undefined, {})
    ).toEqual([]);
  });

  it('should handle adding property on empty list', () => {
    expect(
      savedPropertiesReducer(undefined, {
        type: types.ADD_PROPERTY_REQUEST,
        property: {
          id: "1",
          price: "$100,000"
        }
      })).toEqual([{
          id: "1",
          price: "$100,000"
        }]);
  });

  it('should handle adding new property to saved list', () => {
    expect(
      savedPropertiesReducer(
        [
          {
            id: "1",
            price: "$100,000"
          }
        ], {
        type: types.ADD_PROPERTY_REQUEST,
        property: {
          id: "2",
          price: "$200,000"
        }
      })).toEqual(
        [
          {
            id: "1",
            price: "$100,000"
          },
          {
            id: "2",
            price: "$200,000"
          }
        ]
    );
  });

  it('should handle adding existing/duplicate property to saved list', () => {
    expect(
      savedPropertiesReducer(
        [
          {
            id: "1",
            price: "$100,000"
          }
        ], {
        type: types.ADD_PROPERTY_REQUEST,
        property: {
          id: "1",
          price: "$100,000"
        }
      })).toEqual(
        [
          {
            id: "1",
            price: "$100,000"
          }
        ]
    );
  });

  it('should handle removing property from saved list', () => {
    expect(
      savedPropertiesReducer(
        [
          {
            id: "1",
            price: "$100,000"
          }
        ], {
        type: types.REMOVE_PROPERTY_REQUEST,
        index: 0
      })).toEqual([]);
  });

});
