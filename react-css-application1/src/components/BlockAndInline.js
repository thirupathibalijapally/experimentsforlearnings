import React, { Component } from 'react'
import   '../css/BlockAndInline.css'

 class BlockAndInline extends Component {
    render() {
        return (
            <div>
                <h1 className ="blockHeader1">This Header1 is a block element</h1>
                <p className="blockpara1">This paragraph is a block element</p>
                <div className="blockdiv">This Div tag is is block element</div>
                <h2  className="blockHeader2">This Header2 tag is is block element</h2>
                 <div className="blockdiv">
                     The Div2 is a block emenent
                     <p className="test">The paragraph inside the div still block element</p>
                     <p className="test">Another  paragraph inside the div still block element</p>
                 </div>
                 <h3  className="blockHeader3">This Header2 tag is is block element</h3>
                 <div className="blockdiv">
                     The Div2 is a block emenent
                     <p className="test">The paragraph inside the div still block element</p>
                     <p className="test">Another  paragraph inside the div still block element</p>
                     <a><img src="https://th.bing.com/th/id/OIP.PB92De8hCV1jH38lIM4ToAHaE9?w=275&h=184&c=7&o=5&dpr=1.25&pid=1.7"></img></a>
                     <a><img src="https://th.bing.com/th/id/OIP.PB92De8hCV1jH38lIM4ToAHaE9?w=275&h=184&c=7&o=5&dpr=1.25&pid=1.7"></img></a>
                     <a><img src="https://th.bing.com/th/id/OIP.PB92De8hCV1jH38lIM4ToAHaE9?w=275&h=184&c=7&o=5&dpr=1.25&pid=1.7"></img></a>
                     <a><img src="https://th.bing.com/th/id/OIP.PB92De8hCV1jH38lIM4ToAHaE9?w=275&h=184&c=7&o=5&dpr=1.25&pid=1.7"></img></a>

                     <span className="spaninline">This is inline span element</span>
                     <span className="spaninline">This is inline span element</span>
                     <span className="spaninline">This is inline span element</span>
                     <span className="spaninline">This is inline span element</span>
                     <span className="spaninline">This is inline span element</span>
                     <span className="spaninline"
                     >This is inline span element</span>
                 </div>

            </div>
        )
    }
}

export default BlockAndInline
