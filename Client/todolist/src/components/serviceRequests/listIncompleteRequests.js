import React, { Component } from 'react';
import { Button, Dropdown } from 'semantic-ui-react';
import {
  BrowserRouter as
  Route,
  Link
} from "react-router-dom";
import { withRouter } from 'react-router'
import { getActiveRequests } from '../../serviceRequests.services';
const moment = require('moment');

const NEWEST = 'newest';
const OLDEST = 'oldest';
const PRIORITY = 'priority'
const TITLE = 'title'
const ASC = 'ASC';
const DESC = 'DESC';


class ActiveList extends Component {
  constructor(props){
    super(props);
    this.state = {
      serviceRequests: [],
      sortIdentifier: "createdAt",
      sortOrder: ASC,
    }
  };
  componentDidMount(){
    this.getActRequests();
  };
  getActRequests = async () => {
    const serviceRequests = await getActiveRequests(this.state.sortIdentifier, this.state.sortOrder);
    console.log(serviceRequests);
    this.setState({serviceRequests});
  };
  handleDropDown = (e, data) =>{
    const nextState = {};
    switch(data.value){
      case NEWEST:
        nextState.sortIdentifier = "createdAt";
        nextState.sortOrder = DESC;
        break;
      case OLDEST:
        nextState.sortIdentifier = "createdAt";
        nextState.sortOrder = ASC;
        break;
      case PRIORITY:
        nextState.sortIdentifier = PRIORITY;
        nextState.sortOrder = DESC;
        break;
      case TITLE:
        nextState.sortIdentifier = TITLE;
        nextState.sortOrder = ASC;
        break;
      default:
        nextState.sortIdentifier = "createdAt";
        nextState.sortOrder = ASC;
    }
    this.setState(nextState);
  };
  renderServiceRequest =  () => {
    if(!this.isLoaded()) return null;
    // const sortedRequests = this.sortRequestsByNewest(this.state.serviceRequests)
    // console.log(sortedRequests, 'this is sorted');
    const requests = this.state.serviceRequests.map((reqs) => {
      return (
        <li>
        <Link to={`/service-request/${reqs.id}`}>{reqs.title}</Link> submitted {moment(`${reqs.createdAt}`).fromNow()}
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
    const sortOptions = [
      {
        key: 0,
        text:'Newest',
        value: NEWEST,
      },
      {
        key: 1,
        text:'Oldest',
        value: OLDEST,
      },
      {
        key: 2,
        text:'Highest Priority',
        value: PRIORITY,
      },
      {
        key: 3,
        text:'A-Z',
        value: TITLE,
      }
    ]
    return (
      <React.Fragment>

        <h1> Active Service Reqeuests     <Button onClick={() => this.goToNew()}>New Request</Button>
</h1>
        <h2>
          <Dropdown
            selection
            name="sortIdentifier"
            placeholder='Sort By'
            onChange={this.handleDropDown}
            options={sortOptions}
          />
          <Button onClick={this.getActRequests}> Sort </Button>
        </h2>
        <ul>
            { this.renderServiceRequest() }
            { this.renderLoading() }

        </ul>


      </React.Fragment>
    );
  }
}
export default withRouter(ActiveList);
