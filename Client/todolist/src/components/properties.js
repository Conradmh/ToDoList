import React, { Component } from 'react';
import { Card, Grid, Button } from 'semantic-ui-react';

class Property extends Component {
 constructor(props){
   super(props);

 }
 render(){
   const proptArray = this.props.properties
   const properties = proptArray.map((propt, idx) => {
     return (
       <Grid.Column width={8}>
         <Card className="blue card" key={propt.id}>
          <Card.Content>
            <Card.Header>{propt.name}</Card.Header>
            <Card.Description>{propt.street}</Card.Description>
         </Card.Content>
         <Card.Content>
          <Button
            className="ui blue basic button"
            onClick={() => {
              this.props.setCurrentPropertyIndex(idx)
              this.props.toggleRender()
              this.props.toggleModal()
            }}>Edit Property</Button>
         </Card.Content>
         </Card>
       </Grid.Column>
     )
   })
   return (
      <React.Fragment>
            <Card.Group stackable itemsPerRow={2}>
              {properties}
            </Card.Group>
      </React.Fragment>
   );
 }
}
export default Property;
