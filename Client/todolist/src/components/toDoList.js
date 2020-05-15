import React, { Component } from 'react';
import ServiceRequests from "./serviceRequests/index.js"
import ShowReq from './serviceRequests/show.js'
import NewReq from './serviceRequests/newServiceRequest.js'
import EditReq from './serviceRequests/editServiceRequest.js'
import Properties from "./properties/index.js"
import ShowProp from './properties/show.js'
import EditProp from './properties/routeEdit.js'
import NewProp from './properties/routeNew.js'
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
          <Link to="/properties">Properties</Link>
        </li>

      </ul>

      <hr />

      <Switch>
        <Route exact path="/">
          <ServiceRequests />
        </Route>
        <Route path="/new">
          <NewReq />
        </Route>
        <Route path="/edit">
          <EditReq />
        </Route>
        <Route path='/0'>
          <ShowReq />
        </Route>
        <Route exact path="/properties">
          <Properties />
        </Route>
        <Route path="/properties/new">
          <NewProp />
        </Route>
        <Route path="/properties/edit">
          <EditProp />
        </Route>
        <Route path='/properties/0'>
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
