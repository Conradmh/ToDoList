import React, { Component } from 'react';
import { Form, Button } from 'semantic-ui-react'

class EditPropertyModal extends Component {
  constructor(props){
    super(props);
  };
  showUnitNumber = () => {
    if (this.props.property.unitNumber) {
      return this.props.property.unitNumber
    } else {
      return ""
    }
  };
  render(){

    return (
      <React.Fragment>
        {<Form>
          <Form.Input
            fluid
            name="name"
            placeholder={this.props.property.name}
            onChange={this.handleChange}
          />
          <Form.Input
            fluid
            name="houseNumber"
            placeholder={this.props.property.houseNumber}
            onChange={this.handleChange}
          />
          <Form.Input
            fluid
            name="street"
            placeholder={this.props.property.street}
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
            onClick={async () => {
              await update(this.props.property.id, state)
            }}
          >Update</Button>
          <Button
            className="ui red basic button"
            onClick={async () => {
              await delete(this.props.property.id)

            }}
          >Delete</Button>
        </Form>}
      </React.Fragment>
    );
  }
}
export default EditPropertyModal;
