

import React, { Component } from 'react'

import datos from '../smple/task.json'







export default class Navigation extends Component {

   state = {
       datos : datos
   }

   

    render() {
     
        return (
                <div>
                    <nav className="navbar navbar-dark bg-dark">
                    <a className="text-white"> {datos.length}</a>
                    <div>
                       
                    </div>
                    </nav>
                   
        
                </div>
            )
    }
}




