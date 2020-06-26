import React, { Component } from 'react';
import { Button, Form, Card } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';
import { selectPropertyById } from '../../reducers/properties.js';
import { getPropertyByPk } from '../../properties.services';
import { setProperty } from '../../actions'

class Show extends Component {
  constructor(props){
    super(props);
    this.state = {

    }
  }
  componentDidMount(){
    this.findById();
  };
  findById = async () => {
    const property = await getPropertyByPk(this.props.match.params.id);
    this.setState({
      property: property
    });
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
    if(this.isLoaded()){
      this.props.setProperty(this.state.property);
      console.log(this.state.property,'fire me off');
    } else {

      return <div>Loading...</div>;
    }
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
    setProperty: (currentProperty) => dispatch(setProperty(currentProperty))
  }
};
const ShowConnected = connect(mapStateToProps, mapDispatchToProps)(Show);

export default withRouter(ShowConnected);
