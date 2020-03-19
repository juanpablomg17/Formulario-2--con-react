import React, { Component } from 'react';

import datos from '../smple/task.json';

import '../App.css';

import PropTypes from 'prop-types';



export default class Task extends Component {

    state = {
       datos : datos
    }

    Alinear(){
        return{
          
          
            text : 'center'
    }

    }

    
    

    render(){     
        const todos = this.state.datos.map((todo, i) => {
            return (
              <div className="col-md-4" key={i}>
                <div className="card mt-4">
                  <div className="card-title text-center">
                    <h3>{todo.title}</h3>
                    <span className="badge badge-pill badge-danger ml-2">
                      {todo.prioridad}
                    </span>
                  </div>
                  <div className="card-body text-center" >
                    {todo.descripcion}
                    <mark><p>{todo.responsable}</p></mark>
                  </div>
                  <div className="card-footer">
                    <button id="boton"
                      className="btn btn-danger "
                        >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            )
          });
        return(
             
            <div className="row">
                {todos}
            </div>
            
           


        );

    }
            
    }

