import React, { Component } from 'react';
import ServiceRequests from "./serviceRequests/index.js"
import Properties from "./properties/index.js"
import Show from './properties/show.js'
import Edit from './properties/routeEdit.js'
import New from './properties/routeNew.js'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import 'semantic-ui-css/semantic.min.css'


class ToDoList extends Component {
  constructor(){
    super();
    this.state = {
      serviceReqs: [
        {
          id: 0,
          title: "blocked drain",
          theme: "plumbing"
        },
        {
          id: 1,
          title: "broken washing machine",
          theme: "appliance"
        },
        {
          id: 2,
          title: "need new locks",
          theme: "security"
        }
      ]
    }
  }

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
          <ServiceRequests reqs={this.state.serviceReqs}/>
        </Route>
        <Route exact path="/properties">
          <Properties />
        </Route>
        <Route path="/properties/new">
          <New />
        </Route>
        <Route path="/properties/edit">
          <Edit />
        </Route>
        <Route path='/properties/0'>
          <Show />
        </Route>
      </Switch>
    </div>
      </Router>
      </React.Fragment>
    );
  }
}

export default ToDoList;
