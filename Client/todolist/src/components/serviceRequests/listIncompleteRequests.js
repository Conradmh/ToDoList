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

class ActiveList extends Component {
  constructor(props){
    super(props);
    this.state = {
      serviceRequests: [],
      sortIdentifier: 0
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
  sortRequests = () => {
    const requests = this.state.serviceRequests
    if (this.state.sortIdentifier === 0) {
      this.sortRequestsByNewest(requests)
    } else if (this.state.sortIdentifier === 1) {
      this.sortRequestsByOldest(requests)
    } else if (this.state.sortIdentifier === 2) {
      this.sortRequestsByHighestPriority(requests)
    } else if (this.state.sortIdentifier === 3) {
      this.sortRequestsAlphabetically(requests)
    } else {
      return null
    }
  };
  sortRequestsByNewest = (arr) => {
    const newArr = arr.sort((a, b) => {
      if (a.createdAt < b.createdAt) return 1
      return a.createdAt > b.createdAt ? -1 : 0
    })
    return  newArr
  };
  sortRequestsByOldest = (arr) => {
    const newArr = arr.sort((a, b) => {
      if (a.createdAt < b.createdAt) return -1
      return a.createdAt > b.createdAt ? 1 : 0
    })
    return  newArr
  };
  sortRequestsAlphabetically = (arr) => {
    const newArr = arr.sort((a, b) => {
      if (a.title < b.title) return -1
      return a.title > b.title ? 1 : 0
    })
    return  newArr
  };
  sortRequestsByHighestPriority = (arr) => {
    const newArr = arr.sort((a, b) => {
      if (a.priority < b.priority) return 1
      return a.priority > b.priority ? -1 : 0
    })
    return  newArr
  };
  handleDropDown = (e, data) =>{
    this.setState({
      [data.name]: data.value
    });
  };
  renderServiceRequest =  () => {
    if(!this.isLoaded()) return null;
    const sortedRequests = this.sortRequestsByNewest(this.state.serviceRequests)
    console.log(sortedRequests, 'this is sorted');
    const requests = sortedRequests.map((reqs) => {
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
        value: 0,
      },
      {
        key: 1,
        text:'Oldest',
        value: 1,
      },
      {
        key: 2,
        text:'Highest Priority',
        value: 2,
      },
      {
        key: 3,
        text:'A-Z',
        value: 3,
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
          <Button onClick={this.sortRequests}> Sort </Button>
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
