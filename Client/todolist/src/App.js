import React, { Component } from 'react';
import Admin from './components/admin.js'
import Tenant from './components/tenant.js'
import 'semantic-ui-css/semantic.min.css'
import { createStore } from 'redux'

class App extends Component {

  render(){
    const isAdmin = true;
    return (
      <React.Fragment>
        { isAdmin ? <Admin /> : <Tenant /> }
      </React.Fragment>
    );
  }
}

export default App;
