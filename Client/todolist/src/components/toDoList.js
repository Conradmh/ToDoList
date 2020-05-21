import React, { Component } from 'react';
import List from "./serviceRequests/listRequests.js"
import ShowReq from './serviceRequests/showRequest.js'
import NewReq from './serviceRequests/newServiceRequest.js'
import EditReq from './serviceRequests/editServiceRequest.js'
import Properties from "./properties/listProperties.js"
import ShowProp from './properties/showProperty.js'
import EditProp from './properties/editProperty.js'
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
          <Link to="/properties">Properties</Link>
        </li>

      </ul>

      <hr />

      <Switch>
        <Route exact path="/">
          <List />
        </Route>
        <Route path="/new">
          <NewReq />
        </Route>
        <Route path="/edit/:id">
          <EditReq />
        </Route>
        <Route path='/:id'>
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
