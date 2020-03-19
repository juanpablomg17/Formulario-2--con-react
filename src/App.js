
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


// components
import Navigation from './Components/Navigation';
import Tareas from './Components/Task';
import Formulario from './Components/TaskForm';
import todos from './smple/task.json';




export default class App extends Component {
  constructor(){
    super();
    this.state = {
      todos
    };

    this.AddTask = this.AddTask.bind(this);
  }

  AddTask(todo){
    this.setState({
      todos:  [...this.state.todos, todo]
    })

    
  }

  


  render() {
    return (
      <div>
        <div>
        <Navigation/>
        <div className="row">
          <div className="col-md-">
            <Formulario onAddTodo={this.AddTask}/>
          </div>
          <div className="col-md-6">
          <Tareas/>
          </div>
        </div>
        
        


    </div>
      </div>
    )
  }
}



