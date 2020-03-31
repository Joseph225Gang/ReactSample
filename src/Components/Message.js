import React from "react";

class Message extends React.Component {
	render() {
      const message = this.props;
  	return (
        <div className="info">
          <div className="message">{message.text}</div>
        </div>
    );
  }
}

export default Message;