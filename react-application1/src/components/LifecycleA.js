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
    render() {
        console.log("LifecycleA render method")
        return (
            <div>
                LifecyleA methods
                <LifecycleB/>
            </div>
        )
    }
}

export default LifecycleA
