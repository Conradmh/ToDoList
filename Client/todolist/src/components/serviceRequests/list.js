import React, { Component } from 'react';
import {
  BrowserRouter as
  Route,
  Link
} from "react-router-dom";

class List extends Component {

  render(props){

    console.log(this.props, 'in list');
    const requests = this.props.requests.map((reqs, idx) => {
      return (
        <li>
        <Link to={`/${idx}`}>{reqs.title}</Link>
        </li>
      )
    });
    return (
      <React.Fragment>

        <h1> Service Requests List </h1>

        <ul>
            { requests }

        </ul>


      </React.Fragment>
    );
  }
}
export default List;
