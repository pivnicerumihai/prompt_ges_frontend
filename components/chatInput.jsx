import React, { useState } from 'react';

const ChatInput = ({ onSubmitQuestion }) => {
  const [question, setQuestion] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmitQuestion(question);
    setQuestion('');
  }

  return (
    
    <form onSubmit={handleSubmit} className="flex">
        
      <input
        type="text"
        value={question}
        onChange={e => setQuestion(e.target.value)}
        className="flex-grow p-2 border-2 border-gray-200 rounded-l-md"
      />
      <button type="submit" className="bg-blue-500 text-white p-2 rounded-r-md">Submit</button>
    </form>
  );
}

export default ChatInput;
