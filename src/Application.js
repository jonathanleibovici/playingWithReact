// we need to import react component

import React, { Component } from 'react';
import Highscore from './Highscore';
import './css/style.css';
class Application extends Component{

    constructor(props){
        super(props);

        this.state = {
            count: 0,
            overTen: false

        }
    }

    handleClick = () => {
       this.setState({count: this.state.count +1})
        //this.setState({ count: this.state.count + 1});
    }

    componentDidUpdate(props,state){//this is built in method called  componentDidUpdate(props,state)
       
        if(this.state.count > 10 && this.state.count !=state.count && !this.state.overTen){
            console.log("over ten");
            this.setState({overTen: true});
        } //console.log("updated from",state,"to",this.state);// shows you the state from one to another
    }//you have a meeting at 4 with captial one and 3 with drop box

    //we are creating a new method takes an event and does something
    resetCount = (e) => { 
        this.setState({
            count:0,
            overTen:false
        });
    }




    render(){//this is important method it return html and css script
        //let name = "jonny";
        let { count } = this.state;// this gets the count in the const
        return (
            <div>
                <h1>you clicked the button { count } times </h1>
                <Highscore    // this is how to inbed react properties

                overTen = {this.state.overTen}
                onReset = {this.resetCount}//the takes an event //it can work this way to 
                />
                <span>
                    <button onClick={(e)=> this.handleClick() }> click me</button>
                </span>
            </div>
        );
        
    }
}

export default Application;