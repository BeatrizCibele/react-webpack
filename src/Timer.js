//'use strict'

import React, { Component } from 'react';

class Timer extends Component {
    constructor(){
        super();
        this.state = {
            timer: 0
        }
        this.timer;
    }

    shouldComponentUpdate(nextProps, nextState){
        //console.log('shouldComponentUpdate', this.props, nextProps);
        return this.props !== nextProps;
    }
    componentDidUpdate(prevProps, prevState){
        console.log('componentDidUpdate', )
    }
    componentWillUpdate(nextProps, nextState){
        console.log('componentWillUpdate', this.props, nextProps);
        return this.props !== nextProps;
    }

    componentDidMount(){
        this.timer = setInterval(() => this.setState(
            {timer: this.state.timer + 1}
            ), 1000)
    }
    componentWillUnmount(){
        clearInterval(this.timer)
    }
    componentWillReceiveProps(nextProps){
        console.log('componentWillReceiveProps', this.props, nextProps)
    }
    render(){       
        return <div>Timer: {this.state.timer}</div>        
    }
}

export default Timer;