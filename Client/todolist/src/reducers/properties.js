import {
  setPropertiesSortOrder,
  LOAD_PROPERTIES,
  LOAD_PROPERTIES_SUCCESS,
  GET_CURRENTPROPERTY,
  UPDATE_CURRENTPROPERTY,
} from '../actions';

export const NEWEST = 'newest';
export const OLDEST = 'oldest';
export const PRIORITY = 'priority'
export const TITLE = 'title'
export const ASC = 'ASC';
export const DESC = 'DESC';

const initialState = {
  sortOrder: ASC,
  sortKey: "name",
  properties: [],
  isLoaded: false,
}
const properties = (state = initialState, action) => {
  switch (action.type) {
    case setPropertiesSortOrder:
      return Object.assign(
        {},
        state,
        {
          sortOrder: action.payload.sortOrder,
          sortKey: action.payload.sortKey,
        }
      );
    case LOAD_PROPERTIES:
      return Object.assign(
        {},
        state,
        {
          isLoaded: false,
        }
      );
    case LOAD_PROPERTIES_SUCCESS:
        console.log(action, 'properties be firin')
        return Object.assign(
          {},
          state,
          {
            properties: action.payload.properties,
            isLoaded: true,
            currentProperty: null,

          }
        );
    case GET_CURRENTPROPERTY:
        return Object.assign(
          {},
          state,
          {
            currentProperty: action.payload.currentProperty,
          }
        );
    case UPDATE_CURRENTPROPERTY:
        return Object.assign(
          {},
          state,
          {
            currentProperty: action.payload.updatedProperty,
          }
        );
    default:
      return state
  }
};

//Selector

export const selectPropertyById =
(state, id) => {
  const foundProperty = state.properties.properties.find(property => property.id == id)
  console.log(foundProperty, 'this is foundPropertys');
  return foundProperty
}
export default properties;
