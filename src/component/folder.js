import { render } from "@testing-library/react";
import React, { Component } from "react";

class Folder extends Component{
    constructor(props) {
        super(props);

        this.state = {
            visibility: false
        }
        this.handleToggle = this.handleToggle.bind(this);
    }

    handleToggle(){
        this.setState(state => ({
            visibility: !state.visibility
        }))
    }
    
    


    render(){
        if(!this.state.visibility){
            return(
            
                <div>
                    <h1>Home</h1>
                    <button onClick={this.handleToggle}>View</button>
                </div>
                
            )
        }else{
            return(
                <div>
                    <h1>Home</h1>
                    <ul>
                        <li>file1</li>
                        <li>file2</li>
                        <li>file3</li>
                        
                    </ul>
                    <button onClick={this.handleToggle}>back</button>
                </div>
            )
        }
        
            
            
        
    }
}


export default Folder;