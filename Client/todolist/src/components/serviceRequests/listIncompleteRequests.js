import React, { Component } from 'react';
import { Button } from 'semantic-ui-react';
import {
  BrowserRouter as
  Route,
  Link
} from "react-router-dom";
import { withRouter } from 'react-router'
import { getActiveRequests } from '../../serviceRequests.services';
const moment = require('moment');

class ActiveList extends Component {
  constructor(props){
    super(props);
    this.state = {
      serviceRequests: []
    }
  }
  componentDidMount(){
    this.getActiveRequests();
  };
  getActiveRequests = async () => {
    const serviceRequests = await getActiveRequests();
    console.log(serviceRequests);
    this.setState({serviceRequests});
  };
  sortRequestsByDate = (arr) => {
    return  (
      arr.sort((a, b) => b.date - a.date)
    )
  };
  sortRequestsAlphabetically = (arr) => {
    return  (
      arr.sort((a, b) => b.title - a.title)
    )
  };
  renderServiceRequest =  () => {
    if(!this.isLoaded()) return null;
    const sortedRequests = this.sortRequestsByDate(this.state.serviceRequests)
    console.log(sortedRequests, 'this is sorted');
    const requests = sortedRequests.map((reqs) => {
      return (
        <li>
        <Link to={`/service-request/${reqs.id}`}>{reqs.title}</Link> -{moment(`${reqs.createdAt}`).fromNow()}
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

        <h1> Active Service Reqeuests     <Button onClick={() => this.goToNew()}>New Request</Button>
</h1>

        <ul>
            { this.renderServiceRequest() }
            { this.renderLoading() }

        </ul>


      </React.Fragment>
    );
  }
}
export default withRouter(ActiveList);
