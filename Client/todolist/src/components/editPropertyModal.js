import React, { Component } from 'react';
import { Modal, Form, Button } from 'semantic-ui-react'

class EditPropertyModal extends Component {
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
  showUnitNumber = () => {
    if (this.props.property.unitNumber) {
      return this.props.property.unitNumber
    } else {
      return ""
    }
  };
  render(){

    const state = this.state
    return (
      <Modal
          open={this.props.open}
          closeIcon
          onClose={this.props.toggleModal}
      >
        {this.props.render ? <Form>
          <Form.Input
            fluid
            name="name"
            label='Property Name'
            placeholder={this.props.property.name}
            onChange={this.handleChange}
          />
          <Form.Input
            fluid
            name="houseNumber"
            label='House Number'
            placeholder={this.props.property.houseNumber}
            onChange={this.handleChange}
          />
          <Form.Input
            fluid
            name="street"
            label='Street Name'
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
              await this.props.update(this.props.property.id, state)
              await this.props.refresh();
              this.props.toggleModal();
            }}
          >Update</Button>
        </Form> : null}
      </Modal>
    );
  }
}
export default EditPropertyModal;
