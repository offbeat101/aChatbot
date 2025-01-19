'use client';

import Chatbot from "react-chatbot-kit";
import 'react-chatbot-kit/build/main.css';

import config from "../config";
import ActionProvider from "../Actionprovider";
import MessageParser from "./MessageParser";

const ChatComponent = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '80vh', margin: '16px' }}>
      <Chatbot 
        config={config}
        actionProvider={ActionProvider}
        messageParser={MessageParser}
      />
    </div>
  );
};

export default ChatComponent;
