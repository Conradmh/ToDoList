import { combineReducers } from 'redux';
import serviceRequests from './service-requests';
import propertiesReducer from './properties';


export default combineReducers({
  serviceRequests, propertiesReducer
})
