import React from 'react';

const ChatHistory = ({ chatHistory }) => (
  <div className="overflow-y-auto h-96 border-2 border-gray-200 p-4 mb-4">
    {chatHistory.map((item, idx) => (
      <div key={idx} className={`p-2 my-2 ${item.sender === 'user' ? 'text-right bg-blue-200' : 'bg-green-200'}`}>
        <p>{item.message}</p>
      </div>
    ))}
  </div>
);

export default ChatHistory;
