import expect from 'expect';
import resultsReducer from '../../app/reducers/results';
import savedPropertyReducer from '../../app/reducers/savedProperty';
import * as types from '../../app/constants/index';

describe('results reducer', () => {

  it('should return the initial state', () => {
    expect(
      resultsReducer(undefined, {})
    ).toEqual([]);
  });

});

describe('savedProperty reducer', () => {

  it('should return the initial state', () => {
    expect(
      savedPropertyReducer(undefined, {})
    ).toEqual([]);
  });

  it('should handle adding property on empty list', () => {
    expect(
      savedPropertyReducer(undefined, {
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
      savedPropertyReducer(
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
      savedPropertyReducer(
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
      savedPropertyReducer(
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
