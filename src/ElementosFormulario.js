'use strict'
import React, { Component } from 'react';
import Button from './Button';

class App extends Component {
    constructor(){
        super();
        this.state={
            value:"Valor inicial",
            checked: false
        }
    }
    
    render(){
        console.log(this.state.value)
        return(
            <div className="container">
                <form onChange={e => {
                    console.log("nome", e.target.name);
                    console.log("value", e.target.value);
                }}>
                    <input value={this.state.value} onChange={
                        (e) => this.setState({value: e.target.value})
                    }/>
                <label>
                <input type='checkbox'
                    value 
                    checked={this.state.checked}
                    name="Checkbox"
                    onChange={
                        e => this.setState({checked: !this.state.checked})
                    }
                    /> Checkbox
                </label>

                <label>
                    <input 
                        type="radio"
                        name="rd"
                        value='1'
                        defaultChecked
                    /> RADIO 1 
                    <input 
                        type="radio"
                        name="rd"
                        value= '2'

                    /> RADIO 2                
                </label> <br/><br/>
                <lable>
                    <select name="options" multiple>
                        <option value="1">Opção 1</option>
                        <option value="2">Opção 2</option>
                        <option value="3">Opção 3</option>
                    </select>
                </lable> <br/><br/>
                <input type ="text" name="nome" placeholder="nome"/>
                <input type ="email" name="email" placeholder="email"/>
            </form>
    </div>
        )
    }
}

// class App extends Component {
//     constructor(){
//         console.log('constructor');
//         super();
//         this.state={
//             time: 0,
//             showTimer: true
//         }
//     }
    
//     render() {  
//         return (
//             <div className='container'>
//                 <Button handleClick = 'string'>Eu sou o botão :D</Button>
//             </div>
//         )
//     }
// }

export default App;