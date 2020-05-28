import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { createRequest } from '../../serviceRequests.services';
import { Form, Button, Dropdown} from 'semantic-ui-react';

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
  handleDropDown = (e, data) =>{
    this.setState({
      [data.name]: data.value
    });
  };
  render(){
    const priorityOptions = [
      {
        key: 1,
        text:'1  *Least Urgency',
        value: 1,
      },
      {
        key: 2,
        text: 2,
        value: 2,
      },
      {
        key: 3,
        text:'3  * Highest Urgency',
        value: 3 ,
      }];
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
          <Dropdown
            fluid selection
            name="priority"
            placeholder='Urgency'
            onChange={this.handleDropDown}
            options={priorityOptions}
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
