'use strict'
import React, { Component } from 'react';

class App extends Component {
    constructor(){
        super()
        this.state ={
            checked: false,
            showText: false
        }
    }
    // componentDidUpdate(prevProps, prevState){
    //     console.log("prevState:", prevState)
    // }
    

    render(){
        console.log("render")
        return(
            <div className="container">
                <lable>
                    <input
                     type="checkbox"
                      checked={this.state.checked}
                      onChange={() => this.setState({checked: !this.state.checked}/*, ()=>
                        this.setState({showText: this.state.checked}) */
                      ) } 
                    />
                </lable> Mostrar conteúdo

                {this.state.showText && <div>Oi, eu estou aqui</div>}
            </div> 
        )
    }
}

export default App