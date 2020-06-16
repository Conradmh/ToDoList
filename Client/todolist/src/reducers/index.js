import { combineReducers } from 'redux';
import serviceRequests from './service-requests';
import properties from './properties';


export default combineReducers({
  serviceRequests, properties
})
