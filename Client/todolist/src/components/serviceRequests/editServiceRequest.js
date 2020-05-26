import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { getServiceRequestByPk, updateRequest, deleteRequest } from '../../serviceRequests.services';
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
    this.setState({serviceRequest});
  };
  updateRequest = async () => {
    const serviceReq = this.state.serviceRequest;

    await updateRequest(serviceReq);
    console.log(serviceReq, 'serviceReq');
  };
  handleTitleChange = (e) => {
    e.persist();
    this.setState(prevState => ({
      serviceRequest: {
        ...prevState.serviceRequest, title: e.target.value}}
    ));
    console.log(this.state)
  };
  handleDescriptionChange = (e) => {
    e.persist();
    this.setState(prevState => ({
      serviceRequest: {
        ...prevState.serviceRequest, description: e.target.value}}
    ));
    console.log(this.state)
  };
  renderEditServiceRequestForm = () => {
    if(!this.isLoaded()) return null;

    return (
      <>
      <Form>
        <Form.Input
        fluid
        label='Title'
        placeholder={this.state.serviceRequest.title}
        onChange={this.handleTitleChange}
        />
        <Form.Input
        fluid
        label='Description'
        name="description"
        placeholder={this.state.serviceRequest.description}
        onChange={this.handleDescriptionChange}
        />
        <Button
        type='submit'
        onClick={async () => {
          await this.updateRequest(this.state.serviceRequest)
          this.props.history.push('/');
        }}
        >Update</Button>
        <Button
        type='submit'
        onClick={async () => {
          await  deleteRequest(this.state.serviceRequest.id)
          this.props.history.push('/');
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
      if(this.state.serviceRequest) return true;
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


export default withRouter(Edit);
