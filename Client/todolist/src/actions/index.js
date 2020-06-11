import {getActiveRequests} from '../serviceRequests.services'
export const setServiceReqSortOrder = 'setServiceReqSortOrder';

//Thunk Fancy Action Combiner
export const getServiceRequests = (sortOrder, sortKey) => {
  return async (dispatch) => {
    dispatch(loadServiceRequests());
    const activeRequests = await getActiveRequests(sortOrder, sortKey)
    console.log('activeReqs', activeRequests);
    dispatch(loadServiceRequestsSuccess(activeRequests));
  }
}

export const LOAD_SERVICE_REQUESTS = 'loadServiceRequests';
export const loadServiceRequests = () => ({
  type: LOAD_SERVICE_REQUESTS,
});

export const LOAD_SERVICE_REQUESTS_SUCCESS = 'loadServiceRequestsSuccess';
export const loadServiceRequestsSuccess = serviceRequests => ({
  type: LOAD_SERVICE_REQUESTS_SUCCESS,
  payload: {
    serviceRequests,
  },
});

export const LOAD_SERVICE_REQUESTS_ERROR = 'loadServiceRequestsError';
export const loadServiceRequestsError = errors => ({
  type: LOAD_SERVICE_REQUESTS_ERROR,
  payload: {
    message: 'Ooof ouch, my bones',
  },
});

export const setSortOrder = (sortOrder, sortKey) => ({
  type: setServiceReqSortOrder,
  payload: {
    sortOrder,
    sortKey,
  },
});
