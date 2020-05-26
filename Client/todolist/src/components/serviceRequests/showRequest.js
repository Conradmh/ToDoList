import React, { Component } from 'react';
import { Button, Form, Checkbox } from 'semantic-ui-react';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom'
import { getServiceRequestByPk, updateRequest } from '../../serviceRequests.services';
const moment = require('moment');

class Show extends Component {
  constructor(props){
    super(props);
    this.state = {

    }
  }
  componentDidMount(){
    this.findById();
  };
  findById = async () => {
    console.log(this.props, 'this is props ....');
    const serviceRequest = await getServiceRequestByPk(this.props.match.params.id);
    this.setState({serviceRequest});
  };
  goToEdit = () => {
    this.props.history.push(`/service-request/edit/${this.state.serviceRequest.id}`)
  };
  toggle = async (e) => {
    e.persist();
    await this.setState(prevState => ({
      serviceRequest: {
        ...prevState.serviceRequest, completed: !this.state.serviceRequest.completed}}
    ));
    const updatedRequest = this.state.serviceRequest
    console.log(this.state);
    updateRequest(updatedRequest)
  };
  renderServiceRequest = () => {
    if(!this.isLoaded()) return null;

    return (

      <>
        <ul>
          <li>
            {this.state.serviceRequest.title}
          </li>
          <li>
            {this.state.serviceRequest.description}
          </li>
          <li>
            {moment(`${this.state.serviceRequest.createdAt}`).format("dddd, MMMM Do YYYY, h:mm:ss a")}
          </li>
          <li>
            Submitted: {moment(`${this.state.serviceRequest.createdAt}`).fromNow()}
          </li>
          <Form>
            <Form.Field>
              <Checkbox
                label="Request Completed"
                name="completed"
                checked={this.state.serviceRequest.completed}
                onChange={this.toggle}
              />
            </Form.Field>
          </Form>
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
        <h1> Service Request Info   <Button onClick={() => this.goToEdit()}>edit</Button></h1>
        {this.renderServiceRequest()}
        {this.renderLoading()}
      </React.Fragment>
    );
  }
}
export default withRouter(Show);
