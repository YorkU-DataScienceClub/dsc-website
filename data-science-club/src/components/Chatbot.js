import React, { useState } from 'react';
import axios from 'axios';
import './Chatbot.css';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false); // State to toggle chatbot visibility
  const [message, setMessage] = useState('');
  const [chatHistory, setChatHistory] = useState([]);

  const handleToggleChatbot = () => {
    setIsOpen(!isOpen); // Toggle the chatbot's open/closed state
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSendMessage = async () => {
    if (!message.trim()) return;

    setChatHistory((prevHistory) => [
      ...prevHistory,
      { text: message, sender: 'user' },
    ]);

    try {
      const response = await axios.post('http://localhost:5001/api/dialogflow', { message });
      const botReply = response.data.reply;

      setChatHistory((prevHistory) => [
        ...prevHistory,
        { text: botReply, sender: 'bot' },
      ]);
    } catch (error) {
      console.error("Error with the backend:", error);
    }

    setMessage('');
  };

  return (
    <div>
      {/* Floating Chatbot Button */}
      <button className="chatbot-toggle" onClick={handleToggleChatbot}>
        {isOpen ? 'Close' : 'Chat'}
      </button>

      {/* Chatbot Interface */}
      {isOpen && (
        <div className="chatbot-container">
          <div className="chat-header">
            DataBot
            <button className="close-btn" onClick={handleToggleChatbot}>✖</button>
          </div>
          <div className="chat-history">
            {chatHistory.map((entry, index) => (
              <div key={index} className={`chat-bubble ${entry.sender}`}>
                <p>{entry.text}</p>
              </div>
            ))}
          </div>
          <div className="chat-input">
            <input
              type="text"
              value={message}
              onChange={handleMessageChange}
              placeholder="Ask me anything..."
            />
            <button onClick={handleSendMessage}>Send</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbot;
