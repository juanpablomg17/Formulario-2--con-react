import React, { Component } from 'react'

// css

import '../App.css'


export default class TaskForm extends Component {
    constructor(props){

        super(props);
        this.state = {
            title: '',
            responsable: '',
            descripcion: '',
            prioridad: 'baja'
        }
       
      
    };

  
    


    handleInput = (e) =>{

        const {name, value} = e.target;
        const a = this.setState({
           [name]: value
    
       })

       console.log(this.state);
     
           
         
    }

    HandleSubmit(e){
        e.preventDefault();
        this.props.AddTask(this.state);
        
        

        
        
    }

    
    render() {
        return (
            <div className="card">
                <form className="card-body" onSubmit={this.HandleSubmit}>
                    <div className="form-gropu">
                        <input name="title" type="text" placeholder="Task´s title" onChange={this.handleInput}/>
                    </div>
                    <div className="form-gropu">
                        <input name="responsable" type="text" placeholder="Responsible" onChange={this.handleInput} />
                    </div>
                    <div className="form-gropu">
                        <textarea name="descripcion" cols="30" rows="10" placeholder="Descripcion" onChange={this.handleInput} ></textarea>
                    </div>
                    <div className="form-gropu">
                    <select
                        name="prioridad"
                        className="form-control"
                        value={this.state.prioridad}
                        
                        onChange={this.handleInput}
                        >
                        <option>low</option>
                        <option>medium</option>
                        <option>high</option>
                        </select>
                    </div>
                    <div>
                        <button id="boton"type="submit" className="btn btn-primary">
                            Save
                        </button>
                    </div>
                </form>
                
            </div>
        )
    }
}
