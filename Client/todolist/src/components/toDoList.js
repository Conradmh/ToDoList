import React, { Component } from 'react';
import { Icon } from 'semantic-ui-react';
import List from "./serviceRequests/listIncompleteRequests.js";
import ListAll from "./serviceRequests/listRequests.js";
import ShowReq from './serviceRequests/showRequest.js';
import NewReq from './serviceRequests/newServiceRequest.js';
import EditReq from './serviceRequests/editServiceRequest.js';
import Properties from "./properties/listProperties.js";
import ShowProp from './properties/showProperty.js';
import EditProp from './properties/editProperty.js';
import NewProp from './properties/newProperty.js'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import 'semantic-ui-css/semantic.min.css'


class ToDoList extends Component {

  render(){
    return (
      <React.Fragment>
      <Router>
      <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/service-request/all">All Requests</Link>
        </li>
        <li>
          <Link to="/properties">Properties</Link>
        </li>

      </ul>

      <hr />

      <Switch>
        <Route exact path="/">
          <List />
        </Route>
        <Route exact path="/service-request">
          <List />
        </Route>
        <Route path="/service-request/new">
          <NewReq />
        </Route>
        <Route path="/service-request/edit/:id">
          <EditReq />
        </Route>
        <Route path="/service-request/all">
          <ListAll />
        </Route>
        <Route path='/service-request/:id'>
          <ShowReq />
        </Route>
        <Route exact path="/properties">
          <Properties />
        </Route>
        <Route path="/properties/new">
          <NewProp />
        </Route>
        <Route path="/properties/edit/:id">
          <EditProp />
        </Route>
        <Route path='/properties/:id'>
          <ShowProp />
        </Route>
      </Switch>
      </div>
    </Router>
    </React.Fragment>
    );
  }
}

export default ToDoList;
