import React, { Component } from 'react';
import {
  BrowserRouter as
  Route,
  Link
} from "react-router-dom";
import { withRouter } from 'react-router'
import { getRequests } from '../../serviceRequests.services';

class List extends Component {
  constructor(props){
    super(props);
    this.state = {
      serviceRequests: []
    }
  }
  componentDidMount(){
    this.getAllRequests();
  };
  getAllRequests = async () => {
    const serviceRequests = await getRequests();
    console.log(serviceRequests);
    this.setState({serviceRequests});
  };
  renderServiceRequest = () => {
    if(!this.isLoaded()) return null;
    const requests = this.state.serviceRequests.map((reqs) => {
      return (
        <li>
        <Link to={`/${reqs.id}`}>{reqs.title}</Link> | <Link to={`/edit/${reqs.id}`}>edit</Link>
        </li>
      )
    });
    return (

      <>
      { requests }
      </>
    )

  }
  renderLoading = () => {
    if(this.isLoaded()) return null;
    return <div>Loading...</div>;
  }
  isLoaded = () => {
      if(this.state.serviceRequests) return true;
      return false;
  }
  render(props){
    return (
      <React.Fragment>

        <h1> Service Requests List </h1>

        <ul>
            { this.renderServiceRequest() }
            { this.renderLoading() }
            <li>
              <Link to="/new">New Request</Link>
            </li>
        </ul>


      </React.Fragment>
    );
  }
}
export default withRouter(List);
