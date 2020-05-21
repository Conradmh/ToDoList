import React, { Component } from 'react';
import {
  BrowserRouter as
  Route,
  Link
} from "react-router-dom";
import { withRouter } from 'react-router'
import { getProperties } from '../../properties.services';

class List extends Component {
  constructor(props){
    super(props);
    this.state = {
      properties: []
    }
  }
  componentDidMount(){
    this.getAllProperties();
  };
  getAllProperties = async () => {
    const properties = await getProperties();
    console.log(properties);
    this.setState({properties});
  };
  renderProperty = () => {
    if(!this.isLoaded()) return null;
    const properties = this.state.properties.map((units) => {
      return (
        <li>
        <Link to={`/properties/${units.id}`}>{units.name}</Link> | <Link to={`/properties/edit/${units.id}`}>edit</Link>
        </li>
      )
    });
    return (

      <>
      { properties }
      </>
    )

  }
  renderLoading = () => {
    if(this.isLoaded()) return null;
    return <div>Loading...</div>;
  }
  isLoaded = () => {
      if(this.state.properties) return true;
      return false;
  }
  render(props){
    return (
      <React.Fragment>

        <h1> Properties List </h1>

        <ul>
            { this.renderProperty() }
            { this.renderLoading() }
            <li>
              <Link to="/properties/new">New Property</Link>
            </li>
        </ul>


      </React.Fragment>
    );
  }
}
export default withRouter(List);
