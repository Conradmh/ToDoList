import React, { Component } from 'react';
class App extends Component {

 render(){
   const currReqs = this.props.reqs
   const requests = currReqs.map((reqs) => {
     return(
       <li> {reqs.title} </li>
     )
   })
   return (
     <React.Fragment>
     <h1> Service Requests </h1>
     <ul>
     <li> {requests} </li>
     </ul>
     </React.Fragment>
   );
 };
};
export default App;
