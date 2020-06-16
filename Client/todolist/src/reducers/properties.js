import {
  setPropertiesSortOrder,
  LOAD_PROPERTIES,
  LOAD_PROPERTIES_SUCCESS
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
            serviceRequests: action.payload.properties,
            isLoaded: true,
          }
        );
    default:
      return state
  }
}

export default properties;
