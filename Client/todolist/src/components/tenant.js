import React, { Component } from 'react';
import List from "./serviceRequests/listTenantRequests.js";
import ShowReq from './serviceRequests/showRequest.js';
import NewReq from './serviceRequests/newServiceRequest.js';
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
        <Route path='/service-request/:id'>
          <ShowReq />
        </Route>
      </Switch>
      </div>
    </Router>
    </React.Fragment>
    );
  }
}

export default ToDoList;
