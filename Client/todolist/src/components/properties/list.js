import React, { Component } from 'react';
import {
  BrowserRouter as
  Route,
  Link
} from "react-router-dom";

class List extends Component {

  render(props){

    
    const properties = this.props.properties.map((propt, idx) => {
      return (
        <li>
        <Link to={`/properties/${idx}`}>{propt.name}</Link>
        </li>
      )
    });
    return (
      <React.Fragment>

        <h1> Properties List </h1>

        <ul>
            { properties }

        </ul>


      </React.Fragment>
    );
  }
}
export default List;
