import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import { getPropertyByPk } from '../../properties.services';
import { setProperties, updateProperty, deleteProperty } from '../../actions';
import { Form, Button} from 'semantic-ui-react';

class Edit extends Component {
  constructor(props){
    super(props);
    this.state = {
    }
  };
  componentDidMount(){
    this.findById();
  };
  findById = async () => {
    const property = await getPropertyByPk(this.props.match.params.id);

    this.setState({
      propertyToEdit: property
    });
  };
  handleNameChange = (e) => {
    e.persist();
    this.setState(prevState => ({
      propertyToEdit: {
        ...prevState.propertyToEdit, name: e.target.value}}
    ));
    console.log(this.state)
  };
  handleStreetChange = (e) => {
    e.persist();
    this.setState(prevState => ({
      propertyToEdit: {
        ...prevState.propertyToEdit, street: e.target.value}}
    ));
    console.log(this.state)
  };
  handleHouseNumberChange = (e) => {
    e.persist();
    this.setState(prevState => ({
      propertyToEdit: {
        ...prevState.propertyToEdit, houseNumber: e.target.value}}
    ));
    console.log(this.state)
  };
  handleUnitNumberChange = (e) => {
    e.persist();
    this.setState(prevState => ({
      propertyToEdit: {
        ...prevState.propertyToEdit, unitNumber: e.target.value}}
    ));
    console.log(this.state)
  };
  handleOnSubmit = (e) => {
    e.preventDefault();
    this.props.updateProperty(this.state.propertyToEdit);

    this.props.history.push('/properties');
  };
  renderEditPropertyForm = () => {
    if(!this.isLoaded()) return null;

    return (
      <>
      <Form onSubmit={this.handleOnSubmit}>
        <Form.Input
        fluid
        label='Name'
        placeholder={this.state.propertyToEdit.name}
        onChange={this.handleNameChange}
        />
        <Form.Input
        fluid
        label='Street'
        name="street"
        placeholder={this.state.propertyToEdit.street}
        onChange={this.handleStreetChange}
        />
        <Form.Input
        fluid
        label='House Number'
        name="houseNumber"
        placeholder={this.state.propertyToEdit.houseNumber}
        onChange={this.handleDescriptionChange}
        />
        <Form.Input
        fluid
        label='Unit Number'
        name="unitNumber"
        placeholder={this.state.propertyToEdit.unitNumber}
        onChange={this.handleDescriptionChange}
        />
        <Button
          type='submit'
        >Update</Button>
        <Button
        onClick={() => {
          this.props.deleteProperty(this.state.propertyToEdit);
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
      if(this.state.propertyToEdit) return true;
      console.log(this.state, 'statey bruh');
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

function mapDispatchToProps(dispatch){
  return {

    updateProperty: (propertyToEdit) => dispatch(updateProperty(propertyToEdit)),
    deleteProperty: (propertyToDelete) => dispatch(deleteProperty(propertyToDelete))

  }
};

const EditConnected = connect(undefined, mapDispatchToProps)(Edit);

export default withRouter(EditConnected);
