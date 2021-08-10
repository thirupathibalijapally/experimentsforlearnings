import React, { Component } from 'react'

 class Form extends Component {
     constructor(props) {
         super(props)
     
         this.state = {
              username:'',
              comments:'',
              topic:'react'
         }
     }
     handleUserNameChange =(event)=>{
         this.setState({
             username:event.target.value
         })
     }
     handleCommentsChange =(event)=>{
        this.setState({
            comments:event.target.value
        })
    }
    handleTopicChange =(event)=>{
        this.setState({
            topic:event.target.value
        })
    }

    handleSubmitForm =(event)=>{
        console.log(this.state.username);
        console.log(this.state.comments);
        console.log(this.state.topic);
        event.preventDefault()
    }
    render() {
        return (
            <form onSubmit={this.handleSubmitForm}>
            <div>
                <label>UserName :</label>
                <input type="text"
                 value={this.state.username}
                 onChange={this.handleUserNameChange}>
                </input>
            </div>
            <div>
                <label>Comments :</label>
                <textarea 
                 value={this.state.comments}
                 onChange={this.handleCommentsChange}>
                </textarea>
            </div>
            <div>
                <label>Topic :</label>
                <select 
                 value={this.state.topic}
                 onChange={this.handleTopicChange}>
                  <option value='react'>React</option>
                  <option value='java'>java</option>
                  <option value='.Net'>.Net</option>
                </select>
            </div>

            <div>
              <button>Submit</button>

            </div>
            </form>
        )
    }
}

export default Form
