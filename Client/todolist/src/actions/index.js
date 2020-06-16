import {getActiveRequests} from '../serviceRequests.services';
import {getProperties} from '../properties.services'
export const setServiceReqSortOrder = 'setServiceReqSortOrder';
export const setPropertiesSortOrder = 'setServiceReqSortOrder';


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

// Properties Thunk
export const setProperties = (sortOrder, sortKey) => {
  return async (dispatch) => {
    dispatch(loadProperties());
    const properties = await getProperties(sortOrder, sortKey)
    console.log('properties', properties);
    dispatch(loadPropertiesSuccess(properties));
  }
};
export const LOAD_PROPERTIES = 'loadProperties';
export const loadProperties = () => ({
  type: LOAD_PROPERTIES,
});

export const LOAD_PROPERTIES_SUCCESS = 'loadPropertiesSuccess';
export const loadPropertiesSuccess = properties => ({
  type: LOAD_PROPERTIES_SUCCESS,
  payload: {
    properties,
  },
});

export const setPropertySortOrder = (sortOrder, sortKey) => ({
  type: setPropertiesSortOrder,
  payload: {
    sortOrder,
    sortKey,
  },
});
