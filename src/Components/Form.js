import React from "react";
import'../Styles/Form.css'
import Map1 from "./sample";

class Form extends React.Component{
    constructor(){
        super();
        this.state = {
            isClicked: false
        }
    }
    handleclick = () => {
        this.setState({isClicked : true })
    }
    handlesubmit = (event) => {
         event.preventDefault();
         alert("form successfullt submitted!");
    }
    render(){
        if(!this.state.isClicked)
        return(
            <div>
                <h1 style={{color:'red'}}>INFINITE SCROLLING LIST </h1>
                USERNAME :  <input type="text" placeholder="name" />
                    <br />
                 PASSWORD:  <input type="password" placeholder="password" />
                    <br />
                    <br />
                <button onClick={this.handleclick}>login</button>
            </div>
        )
       else{
        return(
            <div>
                <form onSubmit={this.handlesubmit} >
                <Map1 />
                {/* <input type="text" placeholder="name" />
                    <br />
                    <input type="password" placeholder="password" />
                    <br />
                    <br />
                    <input type="submit" value="submit" onChange={this.preventDefault}/> */}
                </form>
            </div>
        )
       }
}

}
export default Form;
