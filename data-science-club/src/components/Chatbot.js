import React, { useState } from 'react';
import axios from 'axios';
import './Chatbot.css'; //connected the css here

const Chatbot = () => {
  const [message, setMessage] = useState('');  // State to hold user input
  const [chatHistory, setChatHistory] = useState([]);  // State to hold chat history (messages from both sides)

  
  const handleMessageChange = (e) => {// hey so the next line we have a react hook function so that it updates the variable message in this case
    setMessage(e.target.value);// e.target.value is the new string that the user has inputted(e is an event object )
  };

 
  const handleSendMessage = async () => {// as soon as the user presses the send button the message is sent to the backend which is DIAlogflow
    if (!message.trim()) return; // so this is doneso as to not send empty string

   
    setChatHistory((prevHistory) => [//prevHistory is the array of previous string or message // again the setchatHistory is the react hook function so as to update the state of chatHistory

      ...prevHistory, // the ... is used to copy all of te previous chat string into the new array
      { text: message, sender: 'user' }// first one is the string and the second one is the sender of the string
    ]);

    try {
     // the issue might be with this as there might be a CORS issue which i said in the meeting
      const response = await axios.post('http://localhost:5001/api/dialogflow', { message });// here we are trying to get response from the API but for some reason aint working
// also we use axios.post wich is the  function from axios library to send a post request to the API
   // first is the url of the API and the second is the data that we are sending to the API
      const botReply = response.data.reply;// now we extract the reply and say it is the bot reply

    
      setChatHistory((prevHistory) => [// now we have botht the user message and the bot reply so we add it to the chat history
        ...prevHistory, 
      //  { text: message, sender: 'user' },// removed this as i already added preiously
        { text: botReply, sender: 'bot' }
      ]);
    } catch (error) {
      console.error("Error  with the backend:", error);//added to help witht the debugging
    }

   
    setMessage('');// after we already send the message we reset to empty string
  };

  return (
    <div className="chatbot">
      <div className="chat-history">
        {chatHistory.map((entry, index) => (
          <div key={index} className={entry.sender}>
            <p>{entry.text}</p>
          </div>
        ))}
      </div>
      <div className="chat-input">
        <input
          type="text"
          value={message}
          onChange={handleMessageChange}
          placeholder="Ask away"
        />
        <button onClick={handleSendMessage}>Send</button>
      </div>
    </div>
  );
};

export default Chatbot;// now this component is ready to be used in the app
