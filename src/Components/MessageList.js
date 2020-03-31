import React from 'react';
import Message from './Message.js';

const MessageList = (props) => (
	<div>
  	{props.messages.map(message => <Message key={message.id}{...message}/>)}
	</div>
);

export default MessageList;