import React,{ Component } from 'react';

class Highscore extends Component{
    
   
    render(){//render always needs to return osmething
        //line 14 or where ever is the button it takes an event and will reset the number
        //or the other button you can do it this way 
        if(this.props.overTen)
        {
            return(
                <h3>beat the score hight score 
                
                <button onClick = {(e)=> this.props.onReset(e)}> Reset</button>
                <button onClick = { this.props.onReset }> Reset</button>

                </h3>
            )
        } else{
            return null;
        }
    }
}
export default Highscore;