import React from 'react';


const Title = ({name, lastName}) =>
<h1>Oiee {`${name} ${lastName}`}</h1>

// const Title = React.createClass({
//     getDefautlProps: function(){
//         return {
//             name: 'Desconhecido',
//             lastName: 'Sem nome'
//         }        
//     },
//     render: function(){
//     return <h1>Oie {this.props.name + ' ' + this.props.lastName}</h1>
//     } 
// })

Title.defaultProps ={    
    name: "desconhecido",
    lastName: "Sem sobrenome"    
}

export default Title;
