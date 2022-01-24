import React, { Component } from 'react';
import Image from './avatar.jpg'

 class AppClass extends Component {
     constructor(props){
         super(props)
         this.state={
            Image :<img src={Image} width={200} height={300}/>,
             FullName:"oumaima chourabi",
             Bio: "Licences Fondamentale En Sciences Informatique",
             Stage :"Dream Fm",
             show:false
          


         }
     }
     show=()=>{
         this.setState({ show:!this.state.show})
     }
  render() {
    return (
    <div className='style'>
                <p>{this.state.Image}</p>

       {this.state.show ? <h1>My name is {this.state.FullName}</h1>: null}
        <h2>IN 2020: {this.state.Bio} </h2>
        <h2>Stage: {this.state.Stage}</h2> 
        <button onClick={this.show}>show me</button>
    
    </div>
    )
  }
}
export default AppClass
