import {
  setServiceReqSortOrder,
  LOAD_SERVICE_REQUESTS,
  LOAD_SERVICE_REQUESTS_SUCCESS
} from '../actions';

export const NEWEST = 'newest';
export const OLDEST = 'oldest';
export const PRIORITY = 'priority'
export const TITLE = 'title'
export const ASC = 'ASC';
export const DESC = 'DESC';

const initialState = {
  sortOrder: ASC,
  sortKey: "createdAt",
  serviceRequests: [],
  isLoaded: false,
}
const serviceRequests = (state = initialState, action) => {
  switch (action.type) {
    case setServiceReqSortOrder:
      return Object.assign(
        {},
        state,
        {
          sortOrder: action.payload.sortOrder,
          sortKey: action.payload.sortKey,
        }
      );
    case LOAD_SERVICE_REQUESTS:
      return Object.assign(
        {},
        state,
        {
          isLoaded: false,
        }
      );
    case LOAD_SERVICE_REQUESTS_SUCCESS:
        console.log(action, 'reduca yo')
        return Object.assign(
          {},
          state,
          {
            serviceRequests: action.payload.serviceRequests,
            isLoaded: true,
          }
        );
    default:
      return state
  }
}

export default serviceRequests;
