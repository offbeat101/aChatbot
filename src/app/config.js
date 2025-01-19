import { createChatBotMessage } from 'react-chatbot-kit';

const config = {
  botName: 'MyChatbot',
  initialMessages: [
    createChatBotMessage('Hello! I am your assistant. How can I help you today?')
  ],
  customStyles: {
    botMessageBox: {
      backgroundColor: 'var(--bot-message-bg)',
    },
    userMessageBox: {
      backgroundColor: 'var(--user-message-bg)',
    },
    chatButton: {
      backgroundColor: '#0066ff',
    },
  },
};

export default config;
