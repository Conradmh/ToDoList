import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import { createAProperty } from '../../actions'
import { Form, Button} from 'semantic-ui-react';

class New extends Component {
  constructor(){
    super();
    this.state = {};
  };
  handleChange = (e) => {
    this.setState(
      {[e.target.name]: e.currentTarget.value}
    )
    console.log(this.state);
  };
  render(){
    return (
      <React.Fragment>
        <h1> New Property Page </h1>
        <Form>
          <Form.Input
            fluid
            label='Name'
            name="name"
            placeholder='Name'
            onChange={this.handleChange}
          />
          <Form.Input
            fluid
            label='Street'
            name="street"
            placeholder='Street'
            onChange={this.handleChange}
          />
          <Form.Input
            fluid
            label='House Number'
            name="houseNumber"
            placeholder='House Number'
            onChange={this.handleChange}
          />
          <Form.Input
            fluid
            label='Unit Number'
            name="unitNumber"
            placeholder='Unit Number*'
            onChange={this.handleChange}
          />
          <Button
            type='submit'
            onClick={(e) => {
              e.preventDefault();
              this.props.createAProperty(this.state)
              this.props.history.push('/properties');
            }}
          >Save</Button>
        </Form>
      </React.Fragment>

    );
    }
};

function mapDispatchToProps(dispatch){
  return {
    createAProperty: (propertyToCreate) => dispatch(createAProperty(propertyToCreate)),
  }
};

const NewConnected = connect(undefined, mapDispatchToProps)(New);

export default withRouter(NewConnected);
