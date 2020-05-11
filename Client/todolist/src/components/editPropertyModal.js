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
  update = async () => {
    if (this.state.name === "") {
      await this.setState({
        name: this.props.property.name
      });
    } else if (this.state.street === "") {
        await this.setState({
          street: this.props.property.street
        });
    } else if (this.state.houseNumber === null) {
      await this.setState({
        houseNumber: this.props.property.houseNumber
      });
    } else {
       return null
    }
  }
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
            value={this.props.property.name}
            onChange={this.handleChange}
          />
          <Form.Input
            fluid
            name="houseNumber"
            label='House Number'
            value={this.props.property.houseNumber}
            onChange={this.handleChange}
          />
          <Form.Input
            fluid
            name="street"
            label='Street Name'
            value={this.props.property.street}
            onChange={this.handleChange}
          />
          <Form.Input
            fluid
            name="unitNumber"
            label='Unit Number'
            value={this.showUnitNumber()}
            onChange={this.handleChange}
          />
          <Button
            type='submit'
            onClick={async () => {
              await this.update()
              await this.props.update(this.props.property.id, state)
            }}
          >Update</Button>
        </Form> : null}
      </Modal>
    );
  }
}
export default EditPropertyModal;
