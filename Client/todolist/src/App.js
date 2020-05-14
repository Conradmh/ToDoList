import React, { Component } from 'react';
import ToDoList from './components/toDoList.js'
import 'semantic-ui-css/semantic.min.css'


class App extends Component {
  render(){
    return (
      <React.Fragment>
        <ToDoList />
      </React.Fragment>
    );
  }
}

export default App;
