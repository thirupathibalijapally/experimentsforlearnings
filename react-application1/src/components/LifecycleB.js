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
         console.log("LifecyleB  getDerivedStateFromProps")
         return null;
     }

     componentDidMount(){
         console.log("LifecycleB componentDidMount")
     }


    shouldComponentUpdate(){
        console.log("LifecycleB shouldComponentUpdate ")
        return true
    }
    getSnapshotBeforeUpdate(prevProps,prevState){
        console.log("LifecycleB getSnapshotBeforeUpdate")
        return null
    }
    componentDidUpdate(){
        console.log("LifecycleB componentDidUpdate")
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
