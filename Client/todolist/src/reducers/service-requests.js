import {
  setServiceReqSortOrder,
  LOAD_SERVICE_REQUESTS,
  LOAD_SERVICE_REQUESTS_SUCCESS,
  CREATE_NEW_SERVICE_REQUEST_BEGIN,
  CREATE_NEW_SERVICE_REQUEST_SUCCESS,
  EDIT_SERVICE_REQUEST_BEGIN,
  EDIT_SERVICE_REQUEST_SUCCESS,
  DELETE_SERVICE_REQUEST_BEGIN,
  DELETE_SERVICE_REQUEST_SUCCESS,
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
  isUpdated: false,
  isDelete: false,
  isCreated: false,
  current: null,
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
        return Object.assign(
          {},
          state,
          {
            serviceRequests: action.payload.serviceRequests,
            isLoaded: true,
          }
        );
    case CREATE_NEW_SERVICE_REQUEST_BEGIN:
        return Object.assign(
          {},
          state,
          {
            isCreated: false
          }
        );
    case CREATE_NEW_SERVICE_REQUEST_SUCCESS:
        return Object.assign(
          {},
          state,
          {
            serviceRequests: state.serviceRequests.concat([action.payload.createdServiceRequest]),
            isUpdated: true,
          }
        );
    case EDIT_SERVICE_REQUEST_BEGIN:
        return Object.assign(
          {},
          state,
          {
            isUpdated: false
          }
        );
    case EDIT_SERVICE_REQUEST_SUCCESS:
        return Object.assign(
          {},
          state,
          {
            currentServiceRequest: action.payload.updatedServiceRequest,
            isUpdated: true,
          }
        );
    case DELETE_SERVICE_REQUEST_BEGIN:
        return Object.assign(
          {},
          state,
          {
            isDeleted: false
          }
        );
    case DELETE_SERVICE_REQUEST_SUCCESS:
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
}

export default serviceRequests;
