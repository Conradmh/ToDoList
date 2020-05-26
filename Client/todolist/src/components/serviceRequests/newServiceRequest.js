import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { createRequest } from '../../serviceRequests.services';
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
        <h1> New Service Request Page </h1>
        <Form>
          <Form.Input
            fluid
            label='Title'
            name="title"
            placeholder='Title'
            onChange={this.handleChange}
          />
          <Form.Input
            fluid
            label='Description'
            name="description"
            placeholder='Description'
            onChange={this.handleChange}
          />
          <Button
            type='submit'
            onClick={(e) => {
              e.preventDefault();
              createRequest(this.state)
              this.props.history.push('/');
            }}
          >Save</Button>
        </Form>
      </React.Fragment>

    );
    }
}
export default withRouter(New);
