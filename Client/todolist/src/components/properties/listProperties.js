import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setPropertySortOrder, setProperties } from '../../actions';
import { Button } from 'semantic-ui-react';
import {
  BrowserRouter as
  Route,
  Link
} from "react-router-dom";
import { withRouter } from 'react-router'
import { getProperties } from '../../properties.services';

class PropertiesList extends Component {
  constructor(props){
    super(props);
    this.state = {
    }
  }
  componentDidMount(){
    this.props.setProperties(this.props.sortOrder, this.props.sortKey);
  };
  goToNew = () => {
    this.props.history.push(`/properties/new`)
  };
  renderProperty = () => {
    if(!this.isLoaded()) return null;
    const properties = this.props.properties.map((units) => {
      return (
        <li>
        <Link key={units.id} to={`/properties/${units.id}`}>{units.name}</Link>
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
      if(this.props.properties) return true;
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
function mapStateToProps(state) {
  console.log(state, 'mapStateToProps');
  return {
    properties: state.properties.properties,
    sortOrder: state.properties.sortOrder,
    sortKey: state.properties.sortKey,
    isLoaded: state.properties.isLoaded,
   }
}

function mapDispatchToProps(dispatch) {
  return {
    setPropertySortOrder: (sortOrder, sortKey) => dispatch(setPropertySortOrder(sortOrder, sortKey)),
    setProperties: (sortOrder, sortKey) => dispatch(setProperties(sortOrder, sortKey)),
  };
}

const PropertiesListConnected = connect(mapStateToProps, mapDispatchToProps)(PropertiesList);

export default withRouter(PropertiesListConnected);
