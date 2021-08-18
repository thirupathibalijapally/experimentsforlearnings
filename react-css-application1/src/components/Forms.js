import React, { Component } from 'react'
import   '../css/Forms.css'
 class Forms extends Component {
     constructor(props) {
         super(props)
     
         this.state = {
              name:'',
              age:'',
              address:'',
              location:''
         }
     }
     onNameChange=(event)=>{
         this.setState({
             name: event.target.value
         })
     }

     onAgeChange=(event)=>{
        this.setState({
            age: event.target.value
        })
    }
    
    onAddressChange=(event)=>{
        this.setState({
            address: event.target.value
        })
    }
    onLocationChange=(event)=>{
        this.setState({
                location: event.target.value
            })
    }
    render() {
        return (
            <div>
                <form id="theForm">

                  <div className="row">
                      <label>Name:</label>
                      <input type="text" value={this.state.name} onChange={this.onNameChange}></input>
                  </div>
                  <div className="row">
                      <label>Age:</label>
                      <input type="text" value={this.state.age} onChange={this.onAgeChange}></input>
                  </div>
                  <div className="row">
                      <label>Address:</label>
                      <input type="text" value={this.state.address} onChange={this.onAddressChange}></input>
                  </div>
                
                  <div className="row">
                      <label>Location:</label>
                      <input type="text" value={this.state.location} onChange={this.onLocationChange}></input>
                  </div>

                </form>
            </div>
        )
    }

}

export default Forms
