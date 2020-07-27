import * as requestService from '../serviceRequests.services';
import  * as propertyService  from '../properties.services'
export const setServiceReqSortOrder = 'setServiceReqSortOrder';
export const setPropertiesSortOrder = 'setServiceReqSortOrder';


//Thunk Fancy Action Combiner
export const getServiceRequests = (sortOrder, sortKey) => {
  return async (dispatch) => {
    dispatch(loadServiceRequests());
    const activeRequests = await requestService.getActiveRequests(sortOrder, sortKey)
    console.log('activeReqs', activeRequests);
    dispatch(loadServiceRequestsSuccess(activeRequests));
  }
};

export const createServiceRequest = (requestToCreate) => {
  return async (dispatch) => {
    dispatch(createNewServiceRequestBegin());
    const createdServiceRequest = await requestService.createRequest(requestToCreate);
    console.log(createdServiceRequest, 'created s reqs bruhh');
    dispatch(createNewServiceRequestSuccess(createdServiceRequest));
  }
};


export const updateServiceRequest = (serviceRequestToUpdate) => {
  return async (dispatch) => {
    dispatch(editServiceRequestBegin());
    const updatedServiceRequest = await requestService.updateRequest(serviceRequestToUpdate);
    console.log(updatedServiceRequest, 'updated serviceRequest bruhh');
    dispatch(editServiceRequestSuccess(updatedServiceRequest));
  }
};

export const deleteServiceRequest = (serviceRequestToDelete) => {
  return async (dispatch) => {
    dispatch(deleteServiceRequestBegin());
    const deletedServiceRequest = await requestService.deleteRequest(serviceRequestToDelete.id);
    console.log(deletedServiceRequest, 'deleted S Request bruhh');
    dispatch(deleteServiceRequestSuccess(deletedServiceRequest));
  }
};


// SERVICE REQUEST ACTIONS
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

export const CREATE_NEW_SERVICE_REQUEST_BEGIN = 'createNewServiceRequestBegin';
export const createNewServiceRequestBegin = () => ({
  type: CREATE_NEW_SERVICE_REQUEST_BEGIN,

});

export const CREATE_NEW_SERVICE_REQUEST_SUCCESS = 'createNewServiceRequestSuccess';
export const createNewServiceRequestSuccess = createdServiceRequest => ({
  type: CREATE_NEW_SERVICE_REQUEST_SUCCESS,
  payload: {
    createdServiceRequest,
  },
});


export const EDIT_SERVICE_REQUEST_BEGIN = 'editServiceRequestBegin';
export const editServiceRequestBegin = () => ({
  type: EDIT_SERVICE_REQUEST_BEGIN,

});

export const EDIT_SERVICE_REQUEST_SUCCESS = 'editServiceRequestSuccess';
export const editServiceRequestSuccess = editedServiceRequest => ({
  type: EDIT_SERVICE_REQUEST_SUCCESS,
  payload: {
    editedServiceRequest,
  },
});

export const DELETE_SERVICE_REQUEST_BEGIN = 'deleteServiceRequestBegin';
export const deleteServiceRequestBegin = ()=> ({
  type: DELETE_SERVICE_REQUEST_BEGIN,

});


export const DELETE_SERVICE_REQUEST_SUCCESS = 'deleteServiceRequestSuccess';
export const deleteServiceRequestSuccess = deletedServiceRequest => ({
  type: DELETE_SERVICE_REQUEST_SUCCESS,
  payload: {
    message: `Removal Successful`,
  },
});

// Properties Thunk
export const setProperties = (sortOrder, sortKey) => {
  return async (dispatch) => {
    dispatch(loadPropertiesBegin());
    const properties = await propertyService.getProperties(sortOrder, sortKey)
    console.log('properties', properties);
    dispatch(loadPropertiesSuccess(properties));
  }
};

export const setProperty = (currentProperty) => {
  return (dispatch) => {
    console.log(currentProperty, 'currentProperty to be updated');
    dispatch(getProperty(currentProperty));
  }
};

export const createAProperty = (propertyToCreate) => {
  return async (dispatch) => {
    dispatch(createNewPropertyBegin());
    const createdProperty = await propertyService.createProperty(propertyToCreate);
    console.log(createdProperty, 'created property bruhh');
    dispatch(createNewPropertySuccess(createdProperty));
  }
};

// perhaps consider loading properties again instead of passing updated proptery back or that it may auto reload with changes made to state
export const updateProperty = (propertyToUpdate) => {
  return async (dispatch) => {
    dispatch(editPropertyBegin());
    const updatedProperty = await propertyService.updateProperty(propertyToUpdate.id, propertyToUpdate);
    console.log(updatedProperty, 'updated property bruhh');
    dispatch(editPropertySuccess(updatedProperty));
  }
};

export const deleteProperty = (propertyToDelete) => {
  return async (dispatch) => {
    dispatch(deletePropertyBegin());
    const deletedProperty = await propertyService.deleteProperty(propertyToDelete.id);
    console.log(deletedProperty, 'deleted property bruhh');
    dispatch(deletePropertySuccess(deletedProperty));
  }
};



export const LOAD_PROPERTIES_BEGIN = 'loadPropertiesBegin';
export const loadPropertiesBegin = () => ({
  type: LOAD_PROPERTIES_BEGIN,
});

export const LOAD_PROPERTIES_SUCCESS = 'loadPropertiesSuccess';
export const loadPropertiesSuccess = properties => ({
  type: LOAD_PROPERTIES_SUCCESS,
  payload: {
    properties,
  },
});

export const GET_PROPERTY = 'getProperty';
export const getProperty = property => ({
  type: GET_PROPERTY,
  payload: {
    property,
  },
});



export const CREATE_NEW_PROPERTY_BEGIN = 'createNewPropertyBegin';
export const createNewPropertyBegin = () => ({
  type: CREATE_NEW_PROPERTY_BEGIN,

});

export const CREATE_NEW_PROPERTY_SUCCESS = 'createNewPropertySuccess';
export const createNewPropertySuccess = createdProperty => ({
  type: CREATE_NEW_PROPERTY_SUCCESS,
  payload: {
    createdProperty,
  },
});

export const EDIT_PROPERTY_BEGIN = 'editPropertyBegin';
export const editPropertyBegin = () => ({
  type: EDIT_PROPERTY_BEGIN,

});

export const EDIT_PROPERTY_SUCCESS = 'editPropertySuccess';
export const editPropertySuccess = editedProperty => ({
  type: EDIT_PROPERTY_SUCCESS,
  payload: {
    editedProperty,
  },
});

export const DELETE_PROPERTY_BEGIN = 'deletePropertyBegin';
export const deletePropertyBegin = ()=> ({
  type: DELETE_PROPERTY_BEGIN,

});


export const DELETE_PROPERTY_SUCCESS = 'deletePropertySuccess';
export const deletePropertySuccess = deletedProperty => ({
  type: DELETE_PROPERTY_SUCCESS,
  payload: {
    message: `Removal Successful`,
  },
});

export const setPropertySortOrder = (sortOrder, sortKey) => ({
  type: setPropertiesSortOrder,
  payload: {
    sortOrder,
    sortKey,
  },
});
