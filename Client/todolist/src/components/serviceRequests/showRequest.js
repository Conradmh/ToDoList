import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom'
import { getServiceRequestByPk } from '../../serviceRequests.services';

class Show extends Component {
  constructor(props){
    super(props);
    this.state = {
      serviceRequest: {}
    }
  }
  componentDidMount(){
    this.findById();
  };
  findById = async () => {
    const serviceRequest = await getServiceRequestByPk(this.props.match.params.id);
    this.setState({serviceRequest});
  };
  renderServiceRequest = () => {
    if(!this.isLoaded()) return null;

    return (

      <>
        <ul>
          <li>
            {JSON.stringify(this.state.serviceRequest.title)}
          </li>
          <li>
            {JSON.stringify(this.state.serviceRequest.description)}
          </li>
          <li>
          <Link to={`/edit/${this.state.serviceRequest.id}`}>edit</Link>
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
      if(this.state.serviceRequest) return true;
      return false;
  }
  render(){
    return (
      <React.Fragment>
        <h1> Service Request Info </h1>
        {this.renderServiceRequest()}
        {this.renderLoading()}
      </React.Fragment>
    );
  }
}
export default withRouter(Show);
