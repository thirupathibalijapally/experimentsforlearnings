import React, { Component } from 'react'
import '../css/DropDownNav.css'
 class DropDownNav extends Component {
    render() {
        return (
            <div>
               
                   <nav>
                       <p>Ptravels</p>

                        <ul>

                          <li><a href="#">Home</a></li>
                          <li><a href="#">Portfolio</a>
                          <ul>
                              <li><a href="">Digital art</a></li>
                              <li><a href="">Vedio Production</a></li>
                              <li><a href="">Web Developement</a></li>
                          </ul>
                          
                          </li>
                          <li><a href="#">About Me</a></li>
                          <li><a href="#">Contact</a></li>

                        </ul>

                   </nav>
              
            </div>
        )
    }
}

export default DropDownNav
