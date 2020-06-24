import { getActiveRequests}  from '../serviceRequests.services';
import { getProperties, updateProperty } from '../properties.services'
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

export const setCurrentProperty = (currentProperty) => {
  return (dispatch) => {
    console.log(currentProperty, 'currentProperty to be updated');
    dispatch(getCurrentProperty(currentProperty));
  }
};

export const updateCurProperty = (updatedProperty) => {
  return (dispatch) => {
    console.log(updatedProperty, 'property from form/local state');
    dispatch(updateProperty(updatedProperty.id, updatedProperty));
  }
}

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

export const GET_CURRENTPROPERTY = 'getCurrentProperty';
export const getCurrentProperty = currentProperty => ({
  type: GET_CURRENTPROPERTY,
  payload: {
    currentProperty,
  },
});

export const UPDATE_CURRENTPROPERTY = 'updateCurrentProperty';
export const updateCurrentProperty = updatedProperty => ({
  type: UPDATE_CURRENTPROPERTY,
  payload: {
    updatedProperty,
  },
});

export const setPropertySortOrder = (sortOrder, sortKey) => ({
  type: setPropertiesSortOrder,
  payload: {
    sortOrder,
    sortKey,
  },
});
