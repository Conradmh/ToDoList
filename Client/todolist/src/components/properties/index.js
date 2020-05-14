import React, { Component } from 'react';
import List from './list.js'
import {
  BrowserRouter as
  Link
} from "react-router-dom";
import { getProperties } from '../../services.js'

class Property extends Component {
 constructor(props){
   super(props);
   this.state = {
     properties: [
       {
         id: 0,
         name: "Kitty",
       }
     ]
   };
 };
 componentDidMount(){
   this.loadProperties();

 };
 loadProperties = async () => {
   const propts =  await getProperties()
   console.log(propts, 'this is propts');
   this.setState({
     properties: propts
   });
   console.log(this.state.properties);
 };
 render(){
   console.log(this.state.properties, 'in render');


   return (
      <React.Fragment>
      <h1> Properties Index </h1>

      <ul>
        <li>
          <Link to={`/properties/new`}>New Property</Link>
        </li>
        <li>
          <Link to={`/properties/edit`}>Edit Property</Link>
        </li>

      </ul>
      <hr />
      <List properties={this.state.properties}/>

      </React.Fragment>
   );
 }
}
export default Property;
