import React from "react";
import ForumMessage from "./ForumMessage";

class Forum extends React.Component {
	state = { message: '' };
	handleClick = async (event) => {
    event.preventDefault();
    let id = Math.floor(Math.random() * 10000);
    let forumMessage =new ForumMessage(id, this.state.message);
    this.props.onSubmit(forumMessage);
    this.setState({ message: '' });
  };
	render() {
  	return (
    	<form  onSubmit={this.handleClick}>
    	  <input 
          type="text" 
          value={this.state.message}
          onChange={event => this.setState({ message: event.target.value })}
          placeholder="請留言" 
          required 
        />
        <button>send</button>
    	</form>
    );
  }
}

export default Forum;