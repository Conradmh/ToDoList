import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { getServiceRequestByPk } from '../../serviceRequests.services';
import {  updateServiceRequest, deleteServiceRequest } from '../../actions';
import { connect } from 'react-redux';
import { Form, Button} from 'semantic-ui-react';

class Edit extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  };
  componentDidMount(){
    this.findById()
  };
  findById = async () => {
    const serviceRequest = await getServiceRequestByPk(this.props.match.params.id);

    this.setState({
      serviceRequestToEdit: serviceRequest,
    });
  };
  updateRequest = async () => {
    const serviceReq = this.state.serviceRequestToEdit;

    await updateServiceRequest(serviceReq);
    console.log(serviceReq, 'serviceReq');
  };
  handleTitleChange = (e) => {
    e.persist();
    this.setState(prevState => ({
      serviceRequestToEdit: {
        ...prevState.serviceRequestToEdit, title: e.target.value}}
    ));
    console.log(this.state)
  };
  handleDescriptionChange = (e) => {
    e.persist();
    this.setState(prevState => ({
      serviceRequestToEdit: {
        ...prevState.serviceRequestToEdit, description: e.target.value}}
    ));
    console.log(this.state)
  };
  handleOnSubmit = (e) => {
    e.preventDefault();
    this.props.updateServiceRequest(this.state.serviceRequestToEdit);

    this.props.history.push('/');
  };
  renderEditServiceRequestForm = () => {
    if(!this.isLoaded()) return null;

    return (
      <>
      <Form onSubmit={this.handleOnSubmit}>
        <Form.Input
        fluid
        label='Title'
        placeholder={this.state.serviceRequestToEdit.title}
        onChange={this.handleTitleChange}
        />
        <Form.Input
        fluid
        label='Description'
        name="description"
        placeholder={this.state.serviceRequestToEdit.description}
        onChange={this.handleDescriptionChange}
        />
        <Button
          type='submit'
        >Update</Button>
        <Button
          onClick={() => {
            this.props.deleteServiceRequest(this.state.serviceRequestToEdit);
            this.props.history.push('/service-request');
          }}
        >Delete</Button>
        </Form>
      </>
    )

  }
  renderLoading = () => {
    if(this.isLoaded()) return null;
    return <div>Loading...</div>;
  };
  isLoaded = () => {
      if(this.state.serviceRequestToEdit) return true;
      return false;
  };
  render(){

    return (
      <>
        <h1> Edit Service Request Page </h1>
        { this.renderEditServiceRequestForm() }
        { this.renderLoading() }
      </>
    );
    }
}
function mapDispatchToProps(dispatch){
  return {
    updateServiceRequest: (serviceRequestToEdit) => dispatch(updateServiceRequest(serviceRequestToEdit)),
    deleteServiceRequest: (serviceRequestIdToDelete) => dispatch(deleteServiceRequest(serviceRequestIdToDelete)),
  }
};

const EditConnected = connect(undefined, mapDispatchToProps)(Edit);

export default withRouter(EditConnected);
