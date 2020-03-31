import React from "react";
import { useState } from "react";
import Button from './Components/Button.js';
import Display from "./Components/Display.js";
import ShowTime from "./Components/ShowTime.js";
import CardList from "./Components/CardList.js";
import Form from "./Components/Form.js";
import Forum from "./Components/Forum.js";
import MessageList from "./Components/MessageList.js";

function App() {
  let [counter, setCounter] = useState(0);
  const [dataList, setDataList] = useState([]);
  const [messageList, setMessageList] = useState([]);
  const incrementCounter = (incrementValue) => {
    setCounter(counter+incrementValue);
  }
  
  const addNewProfile = (profileData) => {
    setDataList(prevArray => [...prevArray, profileData]);
  }

  const addNewMessage = (messageData) => {
    setMessageList(prevArray => [...prevArray, messageData]);
  };

	return (
    <div>
      <Button onClickFunction={incrementCounter} increment={1} />
      <Button onClickFunction={incrementCounter} increment={5} />
      <Button onClickFunction={incrementCounter} increment={10} />
      <Button onClickFunction={incrementCounter} increment={100} />
      <Display message={counter}/>
      <ShowTime/>
      <Form onSubmit={addNewProfile} />
      <CardList profiles={dataList} />
      <Forum onSubmit={addNewMessage}/>
      <MessageList messages={messageList} />
    </div>   
  );
}


export default App
