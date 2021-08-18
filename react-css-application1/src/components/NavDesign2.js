import React, { Component } from 'react'
import   '../css/NavDesign2.css'
export class NavDesig2 extends Component {
    render() {
        return (
            <div className="nav">
                <ul>
                  <li> <a href="#Home.js" className="button">Home</a></li>
                  <li><a href="#Comments.js" className="button">Comments</a></li>
                  <li><a href="#Payments.js" className="button">Payments</a></li>
                  <li><a href="#About.js" className="button">About</a></li>
                  <li><a href="#Contact.js" className="button">Contact Us</a></li>

                </ul>
            </div>
        )
    }
}

export default NavDesig2
