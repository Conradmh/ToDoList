import React, { Component } from 'react';
import Property from './components/properties.js'
import PropertyForm from './components/newProperty.js'
import EditPropertyModal from './components/editPropertyModal.js'
import { Grid } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css'


class ToDoList extends Component {
  constructor(){
    super();
    this.state = {
      properties: [],
      modalOpen: false,
      currentPropertyIndex: null,
      render: false
    }
  }
  componentDidMount(){
    this.getProperties();
  }
  getProperties = async () => {
    try {
      const properties = await
      fetch("http://localhost:8040/api/properties")

      const responseProperties = await properties.json();

      this.setState({
        properties: responseProperties
      });
    } catch (err) {
        console.log(err);
    }
  };
  createProperty = async (e, propertyFromForm) => {
    console.log(propertyFromForm);
    try {

      const createdPropertyResponse = await
          fetch("http://localhost:8040/api/properties", {
        method: 'POST',
        body: JSON.stringify(propertyFromForm),
        headers: {
          'Content-Type': 'application/json'
        }
      });

      const parsedResponse = await createdPropertyResponse.json();

      this.setState({properties: [...this.state.properties, parsedResponse]})
      console.log(parsedResponse, 'this is the New Monster');


    } catch(err){
      console.log('error')
      console.log(err)
    }
  };
  updateProperty = async (propertyId, state) => {
    try {

      const url = 'http://localhost:8040/api/properties/' + propertyId;

      const serverResponse = await fetch(url, {
        method: 'PUT',
        body: JSON.stringify(state),
        headers: {
          'Content-Type': 'application/json'
        }
      })
      const responseParsed = await serverResponse.json()

      console.log(responseParsed, "this is (update) responseParsed");

      return responseParsed
    } catch(err) {
      console.error(err)
    }
  }
  deleteProperty = async (propertyId) => {
    console.log(propertyId)

    const deletePropertyResponse = await fetch('http://localhost:8040/api/properties/' + propertyId, {
        method: 'DELETE',
        credentials: 'include'
    });
    const deletePropertyParsed = await deletePropertyResponse.json();
    console.log(deletePropertyParsed);
    this.refreshProperties()
  }
  toggleCreatePropertyModal = async () => {
    await this.setState({
      modalOpen: !this.state.modalOpen
    })
    console.log(this.state.modalOpen);
  };
  setCurrentPropertyIndex = async (idx) => {

    await this.setState({
      currentPropertyIndex: idx
    })
    console.log(this.state.currentPropertyIndex);
  };
  toggleRender = async () => {
    this.setState({
      render: !this.state.render
    })
  };
  refreshProperties = () => {
    this.getProperties();
  };
  render(){
    return (
      <React.Fragment>
      <Grid columns={3}>
        <Grid.Row>
          <Grid.Column width={3}> 1 </Grid.Column>
            <Grid.Column width={8}> <h1> ToDoList </h1> </Grid.Column>
            <Grid.Column width={5}> <h3> New Property </h3> </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column width={3}> 1 </Grid.Column>
          <Grid.Column width={8}>
            <Property
              properties={this.state.properties}
              toggleModal={this.toggleCreatePropertyModal}
              setCurrentPropertyIndex={this.setCurrentPropertyIndex}
              toggleRender={this.toggleRender}
            />
          </Grid.Column>
          <Grid.Column width={5}>
            <PropertyForm
              create={this.createProperty}
            />
          </Grid.Column>

        </Grid.Row>
      </Grid>
      <EditPropertyModal
          open={this.state.modalOpen}
          property={this.state.properties[this.state.currentPropertyIndex]}
          toggleModal={this.toggleCreatePropertyModal}
          render={this.state.render}
          update={this.updateProperty}
          refresh={this.refreshProperties}
          delete={this.deleteProperty}
      />
      </React.Fragment>
    );
  }
}

export default ToDoList;
