import React, { Component } from 'react';
import {
  BrowserRouter as
  Route,
  Link
} from "react-router-dom";

class List extends Component {

  render(props){

    // const properties = this.props.properties.map((propt, idx) => {
    //     return (
    //       <Grid.Column width={8}>
    //       <Card className="blue card" key={propt.id}>
    //       <Card.Content>
    //       <Card.Header>{propt.name}</Card.Header>
    //       <Card.Description>{propt.street}</Card.Description>
    //       </Card.Content>
    //       <Card.Content>
    //       <Button
    //       className="ui blue basic button"
    //       onClick={() => {
    //       }}>Edit Property</Button>
    //       </Card.Content>
    //       </Card>
    //       </Grid.Column>
    //     )
    //   });
    const properties = this.props.properties.map((propt, idx) => {
      return (
        <li>
        <Link to={`/properties/${idx}`}>{propt.name}</Link>
        </li>
      )
    });
    return (
      <React.Fragment>

        <h1> Properties List </h1>

        <ul>
            { properties }

        </ul>


      </React.Fragment>
    );
  }
}
export default List;
