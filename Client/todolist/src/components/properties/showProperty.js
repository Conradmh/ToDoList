import React, { Component } from 'react';
import { Button, Form, Card } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';
import { selectPropertyById } from '../../reducers/properties.js';
import { setCurrentProperty } from '../../actions'

class Show extends Component {
  constructor(props){
    super(props);
    this.state = {

    }
  }


  goToEdit = () => {
    this.props.history.push(`/properties/edit/${this.props.currentProperty.id}`)
  };
  renderProperty = () => {
    if(!this.isLoaded()) return null;

    return (

      <>
      <Card>
        <h2>
          {this.props.currentProperty.name}
          </h2>
          <Card.Content>
            Street: {this.props.currentProperty.street}
          </Card.Content>
          <Card.Content>
            House Number: {this.props.currentProperty.houseNumber}
          </Card.Content>
          <Card.Content>
            Unit Number: {this.props.currentProperty.unitNumber}
          </Card.Content>
      </Card>
      </>
    )

  }
  renderLoading = () => {
    if(this.isLoaded()){
      this.props.setCurrentProperty(this.props.currentProperty);
      console.log(this.props.currentProperty,'fire me off');
    } else {

      return <div>Loading...</div>;
    }
  }
  isLoaded = () => {
      if(this.props.currentProperty) return true;
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
};

function mapStateToProps(state, ownProps) {
  console.log(state, 'mapStateToProps');
  const id = ownProps.match.params.id;

  return {
    currentProperty: selectPropertyById(state, id)
  }
};
function mapDispatchToProps(dispatch){
  return {
    setCurrentProperty: (currentProperty) => dispatch(setCurrentProperty(currentProperty))
  }
};
const ShowConnected = connect(mapStateToProps, mapDispatchToProps)(Show);

export default withRouter(ShowConnected);
