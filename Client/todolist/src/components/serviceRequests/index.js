import React, { Component } from 'react';
import {
  BrowserRouter as
  Route,
  Link
} from "react-router-dom";
import List from './list.js'
import { getRequests } from '../../serviceRequests.services.js'

class Request extends Component {
 constructor(props){
   super(props);
   this.state = {
     serviceRequests: [
       {
         id: 0,
         title: "Req # 1",
         description: "Example description"
       }
     ]
   };
 };
 componentDidMount(){
   this.loadRequests();

 };
 loadRequests = async () => {
   const reqs =  await getRequests()
   console.log(reqs, 'this is reqs');
   this.setState({
     serviceRequests: reqs
   });
   console.log(this.state.serviceRequests);
 };
 render(){
   console.log(this.state.serviceRequests, 'in render');


   return (
      <React.Fragment>
      <h1> Requests Index </h1>

      <ul>
        <li>
          <Link to="/new">New Request</Link>
        </li>
        <li>
          <Link to="/edit">Edit Request</Link>
        </li>

      </ul>
      <hr />
       <List  requests={this.state.serviceRequests}/>
      </React.Fragment>
   );
 }
}
export default Request;
