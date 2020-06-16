import React, { Component } from 'react';
import { Button, Form, Card } from 'semantic-ui-react';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom'
import { getPropertyByPk } from '../../properties.services';

class Show extends Component {
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
  goToEdit = () => {
    this.props.history.push(`/properties/edit/${this.state.property.id}`)
  };
  renderProperty = () => {
    if(!this.isLoaded()) return null;

    return (

      <>
      <Card>
        <h2>
          {this.state.property.name}
          </h2>
          <Card.Content>
            Street: {this.state.property.street}
          </Card.Content>
          <Card.Content>
            House Number: {this.state.property.houseNumber}
          </Card.Content>
          <Card.Content>
            Unit Number: {this.state.property.unitNumber}
          </Card.Content>
      </Card>
      </>
    )

  }
  renderLoading = () => {
    if(this.isLoaded()) return null;
    return <div>Loading...</div>;
  }
  isLoaded = () => {
      if(this.state.property) return true;
      return false;
  }
  render(){
    return (
      <React.Fragment>
        <h1>
          Property Info  <Button onClick={() => this.goToEdit()}>edit</Button>
        </h1>
        {this.renderProperty()}
        {this.renderLoading()}
      </React.Fragment>
    );
  }
}
export default withRouter(Show);
