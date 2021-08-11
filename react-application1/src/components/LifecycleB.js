import React, { Component } from 'react'

 class LifecycleB extends Component {
     constructor(props) {
         super(props)
     
         this.state = {
              name:'viswa'
         }
         console.log("LifecycleB Constructor")
     }
     
     static getDerivedStateFromProps(props,state){
         console.log("LifecyleA  getDerivedStateFromProps")
         return null;
     }

     componentDidMount(){
         console.log("LifecycleB componentDidMount")
     }
    render() {
        console.log("LifecycleB render method")
        return (
            <div>
                LifecyleB methods
            </div>
        )
    }
}

export default LifecycleB
