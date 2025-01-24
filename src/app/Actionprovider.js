import OpenAI from 'openai';
import { createChatBotMessage } from 'react-chatbot-kit';

const openai = new OpenAI({
    apiKey: 'f2bcb2ec6ee440e2824beb954d66018a',
    baseURL: 'https://api.aimlapi.com',
    dangerouslyAllowBrowser: true
});

class ActionProvider {
    createChatBotMessage;
    setState;
    stateRef;

    constructor(createChatBotMessage, setStateFunc, stateRef, ...rest) {
        this.createChatBotMessage = createChatBotMessage;
        this.setState = setStateFunc;
        this.stateRef = stateRef;
    }

    callGenAI = async (prompt) => {
        const chatCompletion = await openai.chat.completions.create({
            model: 'gpt-3.5-turbo',
            messages: [
                { 
                    role: "system", 
                    content: "You are a compassionate and empathetic mental health support assistant. Your goal is to provide emotional support, offer coping strategies, and help users feel heard and understood. You can suggest mindfulness exercises, breathing techniques, or simply lend a listening ear. Always respond with kindness and avoid giving medical advice. If the user is in crisis, encourage them to seek professional help." 
                },
                { role: 'user', content: prompt }
            ],
            temperature: 0.5,  
            max_tokens: 50    
        });
        return chatCompletion.choices[0].message.content;
    }

    timer = ms => new Promise(res => setTimeout(res, ms));

    generateResponseMessage = async (userMessage) => {
        const responseFromGPT = await this.callGenAI(userMessage);
        const messages = responseFromGPT.split('\n');

        for (let i = 0; i < messages.length; i++) {
            const msg = messages[i];
            if (msg.length) {
                console.log('KW101', msg);
                const message = this.createChatBotMessage(msg);
                this.updateChatbotMessage(message);
            }
            await this.timer(1000);
        }
    }

    // Respond to user message
    respond = async (message) => {
        await this.generateResponseMessage(message);
    }

    // Update chatbot message in state
    updateChatbotMessage = (message) => {
        this.setState(prevState => ({
            ...prevState,
            messages: [...prevState.messages, message]
        }));
    }
}

export default ActionProvider;
