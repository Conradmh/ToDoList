import {
  setPropertiesSortOrder,
  LOAD_PROPERTIES_BEGIN,
  LOAD_PROPERTIES_SUCCESS,
  CREATE_NEW_PROPERTY_BEGIN,
  CREATE_NEW_PROPERTY_SUCCESS,
  GET_PROPERTY,
  EDIT_PROPERTY_BEGIN,
  EDIT_PROPERTY_SUCCESS,
  DELETE_PROPERTY_BEGIN,
  DELETE_PROPERTY_SUCCESS,
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
  isUpdated: false,
  isDelete: false,
  isCreated: false,
  currentProperty: null,
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
    case LOAD_PROPERTIES_BEGIN:
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
    case GET_PROPERTY:
        return Object.assign(
          {},
          state,
          {
            currentProperty: action.payload.currentProperty,
          }
        );
    case CREATE_NEW_PROPERTY_BEGIN:
        return Object.assign(
          {},
          state,
          {
            isCreated: false
          }
        );
    case CREATE_NEW_PROPERTY_SUCCESS:
        return Object.assign(
          {},
          state,
          {
            properties: state.properties.concat([action.payload.createdProperty]),
            isUpdated: true,
          }
        );
    case EDIT_PROPERTY_BEGIN:
        return Object.assign(
          {},
          state,
          {
            isUpdated: false
          }
        );
    case EDIT_PROPERTY_SUCCESS:
        return Object.assign(
          {},
          state,
          {
            currentProperty: action.payload.updatedProperty,
            isUpdated: true,
          }
        );
    case DELETE_PROPERTY_BEGIN:
        return Object.assign(
          {},
          state,
          {
            isDeleted: false
          }
        );
    case DELETE_PROPERTY_SUCCESS:
        return Object.assign(
          {},
          state,
          {
            message: action.payload.message,
            isDeleted: true,
          }
        );
    default:
      return state
  }
};

//Selector

export const selectPropertyById =
(state, id) => {
  const foundProperty = state.propertiesReducer.properties.find(property => property.id == id)
  console.log(foundProperty, 'this is foundPropertys');
  return foundProperty
}
export default properties;
