'use client'
import React, { useState } from 'react';
import axios from 'axios';
import ChatHistory from '../components/ChatHistory';
import ChatInput from '../components/ChatInput';
import Image from 'next/image'

const IndexPage = () => {
  const [chatHistory, setChatHistory] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleNewQuestion = async (question) => {
    setChatHistory(prevHistory => [...prevHistory, { sender: 'user', message: question }]);
    setLoading(true); 

    const apiResponse = await axios.post('http://localhost:3001/getResponse', {
      question: question
    })

    setLoading(false); 
    setChatHistory(prevHistory => [...prevHistory, { sender: 'api', message: apiResponse.data }]);
  };

  return (
    <div className="container h-full mx-auto py-10 px-4">
      <div className="flex flex-row items-center">
        <div className="rounded-lg h-18 overflow-hidden mb-2">
      <Image src='/images/bot.png' width={100} height={100}/>
      </div>
      <h1 className="text-3xl mx-2">Chat with ThermoMate</h1>
    
      </div>
      <ChatHistory chatHistory={chatHistory} loading={loading} />
      <ChatInput onSubmitQuestion={handleNewQuestion} />
    </div>
  );
}

export default IndexPage;
