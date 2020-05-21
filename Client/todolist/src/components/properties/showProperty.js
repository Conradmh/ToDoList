import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom'
import { getPropertyByPk } from '../../properties.services';

class Show extends Component {
  constructor(props){
    super(props);
    this.state = {
      property: {}
    }
  }
  componentDidMount(){
    this.findById();
  };
  findById = async () => {
    const property = await getPropertyByPk(this.props.match.params.id);
    this.setState({property});
  };
  renderServiceProperty = () => {
    if(!this.isLoaded()) return null;

    return (

      <>
        <ul>
          <li>
            {JSON.stringify(this.state.property.name)}
          </li>
          <li>
            {JSON.stringify(this.state.property.street)}
          </li>
          <li>
          <Link to={`/edit/${this.state.property.id}`}>edit</Link>
          </li>
        </ul>
      </>
    )

  }
  renderLoading = () => {
    if(this.isLoaded()) return null;
    return <div>Loading...</div>;
  }
  isLoaded = () => {
      if(this.state.property) return true;
      return false;
  }
  render(){
    return (
      <React.Fragment>
        <h1> Property Info </h1>
        {this.renderProperty()}
        {this.renderLoading()}
      </React.Fragment>
    );
  }
}
export default withRouter(Show);
