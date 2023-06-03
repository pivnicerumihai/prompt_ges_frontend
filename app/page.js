'use client'
import React, { useState } from 'react';
import ChatHistory from '../components/ChatHistory';
import ChatInput from '../components/ChatInput';

const IndexPage = () => {
  const [chatHistory, setChatHistory] = useState([]);

  const handleNewQuestion = async (question) => {
    // Append user's question to chat history right away
    setChatHistory(prevHistory => [...prevHistory, { sender: 'user', message: question }]);

    // Replace the following code with an actual call to OpenAI's API
    await new Promise(resolve => setTimeout(resolve, 2000));

    const apiResponse = 'This is a fake response from the OpenAI API.';

    // Then append API's response to chat history
    setChatHistory(prevHistory => [...prevHistory, { sender: 'api', message: apiResponse }]);
  };

  return (
    <div className="container mx-auto py-10 px-4">
      <h1 className="text-3xl mb-4">Chat with OpenAI</h1>
      <ChatHistory chatHistory={chatHistory} />
      <ChatInput onSubmitQuestion={handleNewQuestion} />
    </div>
  );
}

export default IndexPage;
