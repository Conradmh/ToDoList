import React, { Component } from 'react';
import { Button } from 'semantic-ui-react';
import {
  BrowserRouter as
  Route,
  Link
} from "react-router-dom";
import { withRouter } from 'react-router'
import { getAllRequests } from '../../serviceRequests.services';

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
    const serviceRequests = await getAllRequests();
    console.log(serviceRequests);
    this.setState({serviceRequests});
  };
  renderServiceRequest = () => {
    if(!this.isLoaded()) return null;
    const requests = this.state.serviceRequests.map((reqs) => {
      return (
        <li>
        <Link to={`/service-request/${reqs.id}`}>{reqs.title}</Link>
        </li>
      )
    });
    return (

      <>
      { requests }
      </>
    )

  };
  renderLoading = () => {
    if(this.isLoaded()) return null;
    return <div>Loading...</div>;
  };
  isLoaded = () => {
      if(this.state.serviceRequests) return true;
      return false;
  };
  goToNew = () => {
    this.props.history.push(`/service-request/new`)
  };
  render(props){
    return (
      <React.Fragment>

        <h1> Service Requests List               <Button onClick={() => this.goToNew()}>New Property</Button>
</h1>

        <ul>
            { this.renderServiceRequest() }
            { this.renderLoading() }

        </ul>


      </React.Fragment>
    );
  }
}
export default withRouter(List);
