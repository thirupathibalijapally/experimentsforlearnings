import React, { Component } from 'react'
import   '../css/NavDesign.css'
export class NavDesign extends Component {
    render() {
        return (
            <div className="nav">
                <ul>
                  <li> <a href="#Home.js">Home</a></li>
                  <li><a href="#Comments.js">Comments</a></li>
                  <li><a href="#Payments.js">Payments</a></li>
                  <li><a href="#About.js">About</a></li>
                  <li><a href="#Contact.js">Contact Us</a></li>

                </ul>
            </div>
        )
    }
}

export default NavDesign
