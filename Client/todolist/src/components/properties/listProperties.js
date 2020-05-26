import React, { Component } from 'react';
import { Button } from 'semantic-ui-react'
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
  goToNew = () => {
    this.props.history.push(`/properties/new`)
  };
  renderProperty = () => {
    if(!this.isLoaded()) return null;
    const properties = this.state.properties.map((units) => {
      return (
        <li>
        <Link to={`/properties/${units.id}`}>{units.name}</Link>
        </li>
      )
    });
    return (

      <>
      { properties }
      </>
    )

  };
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

        <h1>
          Properties List <Button onClick={() => this.goToNew()}>New Property</Button>

        </h1>

        <ul>
          { this.renderLoading() }
          { this.renderProperty() }
        </ul>


      </React.Fragment>
    );
  }
}
export default withRouter(List);
