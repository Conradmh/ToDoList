import React, { Component } from 'react';
import { Form, Button, Grid } from 'semantic-ui-react';


class PropertyForm extends Component {
  constructor(props){
    super(props);
      this.state = {
        name: "",
        unitNumber: null,
        houseNumber: null,
        street: ""
      }
  };
  handleChange = async (e) => {
    await this.setState(
      {[e.currentTarget.name]: e.currentTarget.value}
    )
    console.log(this.state);
  };
  render(){
    return (
      <Grid.Column width={5}>
        <Form>
          <Form.Input
            fluid
            name="name"
            label='Property Name'
            onChange={this.handleChange}
          />
          <Form.Input
            fluid
            name="houseNumber"
            label='House Number'
            onChange={this.handleChange}
          />
          <Form.Input
            fluid
            name="street"
            label='Street Name'
            onChange={this.handleChange}
          />
          <Form.Input
            fluid
            name="unitNumber"
            label='Unit Number'
            onChange={this.handleChange}
          />
          <Button
            type='submit'
            onClick={(e) => {
              this.props.create(e, this.state)
            }}
          >Save</Button>
        </Form>
      </Grid.Column>
    );
  }
}
export default PropertyForm;
