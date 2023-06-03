'use client'
import React, { useState } from 'react';
import axios from 'axios';
import ChatHistory from '../components/ChatHistory';
import ChatInput from '../components/ChatInput';

const IndexPage = () => {
  const [chatHistory, setChatHistory] = useState([]);

  const handleNewQuestion = async (question) => {
    // Append user's question to chat history right away
    setChatHistory(prevHistory => [...prevHistory, { sender: 'user', message: question }]);

   const apiResponse =  await axios.post('http://localhost:3001/getResponse', {
      question: question
    })
//  const apiResponse = {data: 'test'}
    // Then append API's response to chat history
    setChatHistory(prevHistory => [...prevHistory, { sender: 'api', message: apiResponse.data }]);
  };

  return (
    <div className="container mx-auto py-10 px-4">
      <h1 className="text-3xl mb-4">Chat with ThermoMate</h1>
      <ChatHistory chatHistory={chatHistory} />
      <ChatInput onSubmitQuestion={handleNewQuestion} />
    </div>
  );
}

export default IndexPage;
