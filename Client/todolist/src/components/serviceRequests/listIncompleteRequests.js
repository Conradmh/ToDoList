import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setSortOrder, getServiceRequests } from '../../actions';
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
    console.log(props, 'props yo')
  };
  componentDidMount(){
    this.props.getServiceRequests(this.props.sortOrder, this.props.sortKey);
  };

  handleDropDown = (e, data) =>{

    let sortKey;
    let sortOrder;
    switch(data.value){
      case NEWEST:
        sortKey = "createdAt";
        sortOrder = DESC;
        break;
      case OLDEST:
        sortKey = "createdAt";
        sortOrder = ASC;
        break;
      case PRIORITY:
        sortKey = PRIORITY;
        sortOrder = DESC;
        break;
      case TITLE:
        sortKey = TITLE;
        sortOrder = ASC;
        break;
      default:
        sortKey = "createdAt";
        sortOrder = ASC;
    }
    console.log('dispatch')
    this.props.setSortOrder(sortOrder, sortKey);
    this.props.getServiceRequests(sortOrder, sortKey);

  };
  renderServiceRequest =  () => {
    if(!this.isLoaded()) return null;

    const requests = this.props.serviceRequests.map((reqs) => {
      return (
        <li key={reqs.id}>
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
      if(this.props.isLoaded) return true;
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
        <h1>
          Active Service Reqeuests     <Button onClick={() => this.goToNew()}>New Request</Button>
        </h1>
        <h2>
          <Dropdown
            selection
            name="sortIdentifier"
            placeholder='Sort By'
            onChange={this.handleDropDown}
            options={sortOptions}
          />
        </h2>
        <ul>
            { this.renderServiceRequest() }
            { this.renderLoading() }

        </ul>


      </React.Fragment>
    );
  }
}

function mapStateToProps(state) {
  console.log(state, 'mapStateToProps');
  return {
    serviceRequests: state.serviceRequests.serviceRequests,
    sortOrder: state.serviceRequests.sortOrder,
    sortKey: state.serviceRequests.sortKey,
    isLoaded: state.serviceRequests.isLoaded,
   }
}

function mapDispatchToProps(dispatch) {
  return {
    setSortOrder: (sortOrder, sortKey) => dispatch(setSortOrder(sortOrder, sortKey)),
    getServiceRequests: (sortOrder, sortKey) => dispatch(getServiceRequests(sortOrder, sortKey)),
  };
}

const ActiveListConnected = connect(mapStateToProps, mapDispatchToProps)(ActiveList);

export default withRouter(ActiveListConnected);
