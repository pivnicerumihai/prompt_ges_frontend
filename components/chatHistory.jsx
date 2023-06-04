import React from 'react';
import Image from 'next/image';
import LoadingDots from './LoadingDots';

const ChatHistory = ({ chatHistory, loading }) => (
  <div className="overflow-y-auto h-5/6 border-2 border-gray-200 p-4 mb-4">
    {chatHistory.map((item, idx) => (
      <div
        key={idx}
        className={`flex ${item.sender === 'user' ? 'justify-end' : 'justify-start'}`}
      >
        {item.sender === 'api' && (
          <div className="overflow-hidden rounded-2xl w-12 h-12 mx-2">
            <Image src="/images/bot.png" width={70} height={70} />
          </div>
        )}
        <div
          className={`p-2 my-2 rounded-xl ${
            item.sender === 'user' ? 'text-right bg-blue-200' : 'bg-green-200'
          }`}
        >
          {item.message.replace(/\\n/g, '\n').split('\n').map((line, i) => (
            <React.Fragment key={i}>
              {line}
              <br />
            </React.Fragment>
          ))}
        </div>
        {item.sender === 'user' && (
          <div className="overflow-hidden rounded-2xl h-12 w-12 mx-2">
            <Image src="/images/user.png" width={70} height={70} />
          </div>
        )}
      </div>
    ))}
    {loading && (
      <div className="flex justify-start items-center space-x-2">
        <div className="overflow-hidden rounded-2xl w-12 h-10 mx-2">
          <Image src="/images/bot.png" width={70} height={70} />
        </div>
        <LoadingDots />
      </div>
    )}
  </div>
);

export default ChatHistory;
