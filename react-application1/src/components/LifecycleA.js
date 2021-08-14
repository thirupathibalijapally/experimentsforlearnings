import React, { Component } from 'react'
import LifecycleB from './LifecycleB'

 class LifecycleA extends Component {
     constructor(props) {
         super(props)
     
         this.state = {
              name:'viswa'
         }
         console.log("LifecycleA Constructor")
     }
     
     static getDerivedStateFromProps(props,state){
         console.log("LifecyleA  getDerivedStateFromProps")
         return null;
     }

     componentDidMount(){
         console.log("LifecycleA componentDidMount")
     }

     shouldComponentUpdate(){
         console.log("LifecycleA shouldComponentUpdate ")
         return true
     }
     getSnapshotBeforeUpdate(prevProps,prevState){
         console.log("LifecycleA getSnapshotBeforeUpdate")
         return null
     }
     componentDidUpdate(){
         console.log("LifeCycleA componentDidUpdate")
     }

     changeState=()=>{
        this.setState({
            name:'Thirupathi'
        })
    }
    render() {
        console.log("LifecycleA render method")
        return (
            <div>
                LifecyleA methods
                <button onClick={this.changeState}>onClick</button>
                <LifecycleB/>
            </div>
        )
    }
}

export default LifecycleA
