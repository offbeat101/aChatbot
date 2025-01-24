import { createChatBotMessage } from 'react-chatbot-kit';
const config = {
  botName: 'Manas', 
  initialMessages: [
    createChatBotMessage(
      "Hi there! I'm Manas, your mental health companion. 🌟 I'm here to listen, support, and help you navigate your feelings. Whether you're feeling stressed, anxious, or just need someone to talk to, I'm here for you. How are you feeling today?"
    )
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
