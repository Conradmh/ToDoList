import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { getPropertyByPk, updateProperty, deleteProperty } from '../../properties.services';
import { Form, Button} from 'semantic-ui-react';

class Edit extends Component {
  constructor(props){
    super(props);
    this.state = {
      property: {}
    }
  }
  componentDidMount(){
    this.findById();
  };
  findById = async () => {

    const property = await getPropertyByPk(this.props.match.params.id);
    this.setState({property});
  };
  updateProperty = async () => {
    const serviceReq = this.state.property;

    await updateProperty(serviceReq);
    console.log(serviceReq, 'serviceReq');
  };
  handleNameChange = (e) => {
    e.persist();
    this.setState(prevState => ({
      property: {
        ...prevState.property, name: e.target.value}}
    ));
    console.log(this.state)
  };
  handleStreetChange = (e) => {
    e.persist();
    this.setState(prevState => ({
      property: {
        ...prevState.property, street: e.target.value}}
    ));
    console.log(this.state)
  };
  handleHouseNumberChange = (e) => {
    e.persist();
    this.setState(prevState => ({
      property: {
        ...prevState.property, houseNumber: e.target.value}}
    ));
    console.log(this.state)
  };
  handleUnitNumberChange = (e) => {
    e.persist();
    this.setState(prevState => ({
      property: {
        ...prevState.property, unitNumber: e.target.value}}
    ));
    console.log(this.state)
  };
  renderEditPropertyForm = () => {
    if(!this.isLoaded()) return null;

    return (
      <>
      <Form>
        <Form.Input
        fluid
        label='Property'
        placeholder={this.state.property.name}
        onChange={this.handlePropertyChange}
        />
        <Form.Input
        fluid
        label='Street'
        name="street"
        placeholder={this.state.property.street}
        onChange={this.handleStreetChange}
        />
        <Form.Input
        fluid
        label='House Number'
        name="houseNumber"
        placeholder={this.state.property.houseNumber}
        onChange={this.handleDescriptionChange}
        />
        <Form.Input
        fluid
        label='Unit Number'
        name="unitNumber"
        placeholder={this.state.property.unitNumber}
        onChange={this.handleDescriptionChange}
        />
        <Button
        type='submit'
        onClick={() => {
          this.updateProperty(this.state.property)
          this.props.history.push('/properties');
        }}
        >Update</Button>
        <Button
        type='submit'
        onClick={() => {
          deleteProperty(this.state.property.id)
          this.props.history.push('/properties');
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
      if(this.state.property) return true;
      return false;
  };
  render(){

    return (
      <>
        <h1> Edit Property Page </h1>
        { this.renderEditPropertyForm() }
        { this.renderLoading() }
      </>
    );
    }
}


export default withRouter(Edit);
