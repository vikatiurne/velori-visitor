import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState } from 'react';
import { findKeywords } from '@/utils/findKeywords';
import { formatDate } from '@/utils/formatDate';
import ChatHeader from '@/components/Chat/ChatHeader';
import MessageBubble from '@/components/Chat/MessageBubble';
import Scroll from '@/components/UI/Scroll';
import ChatFooter from '@/components/Chat/ChatFooter';
import OrderBtns from '@/components/Chat/OrderBtns';
const Chat = ({ setIsShowOrder }) => {
    const [messages, setMessages] = useState([]);
    const [inputText, setInputText] = useState('');
    const [isKeyboardOpen, setIsKeyboardOpen] = useState(false);
    const [showButtons, setShowButtons] = useState(false);
    const welcomeText = 'Привіт! Чим можу допомогти вам сьогодні?';
    const answerAi = 'Відповідь Ai';
    const confirmationOrder = 'Підтверджуєте замовлення?';
    useEffect(() => {
        const handleResize = () => {
            const keyboardOpenThreshold = 550;
            if (window.innerHeight < keyboardOpenThreshold) {
                setIsKeyboardOpen(true);
            }
            else {
                setIsKeyboardOpen(false);
            }
        };
        window.addEventListener('resize', handleResize);
        handleResize();
        return () => window.removeEventListener('resize', handleResize);
    }, []);
    // временно тащу из localStorage  (загрузку нужно делать из бд)
    useEffect(() => {
        const savedMessages = JSON.parse(localStorage.getItem('messages') || '[]');
        if (savedMessages.length === 0) {
            const welcomeMessage = {
                text: welcomeText,
                sender: 'bot',
                time: new Date().toISOString(),
            };
            setMessages([welcomeMessage]);
        }
        else {
            setMessages(savedMessages);
        }
    }, []);
    //временно ложу в localStorage(хранить надо в бд)
    useEffect(() => {
        localStorage.setItem('messages', JSON.stringify(messages));
    }, [messages]);
    const handleSendMessage = () => {
        if (inputText.trim()) {
            const wordsArr = findKeywords(inputText);
            const newMessage = {
                text: inputText,
                sender: 'user',
                time: new Date().toISOString(),
            };
            setMessages((prevMessages) => [...prevMessages, newMessage]);
            setInputText('');
            // нужно будет поменять на ожидание ответа от сервера
            setTimeout(() => {
                const botMessage = {
                    text: !wordsArr.length ? answerAi : confirmationOrder,
                    sender: 'bot',
                    time: new Date().toISOString(),
                };
                setMessages((prevMessages) => [...prevMessages, botMessage]);
                setShowButtons(!!wordsArr.length);
            }, 1000);
        }
    };
    const groupedMessages = messages.reduce((acc, message) => {
        const date = formatDate(message.time);
        if (!acc[date]) {
            acc[date] = [];
        }
        acc[date].push(message);
        return acc;
    }, {});
    const handleVoiceInput = () => {
        const recognition = new (window.SpeechRecognition ||
            window.webkitSpeechRecognition)();
        recognition.onresult = (event) => {
            const transcript = event.results[0][0].transcript;
            setInputText(transcript);
        };
        recognition.start();
    };
    return (_jsx("section", { className: `h-screen bg-[#F5F5F5] ${isKeyboardOpen ? 'pb-20' : 'pb-0'}`, children: _jsx(Scroll, { header: _jsx(ChatHeader, { children: "\u0427\u0430\u0442 \u0456\u0437 \u0428\u0406" }), footer: _jsx(ChatFooter, { inputText: inputText, setInputText: setInputText, handleSendMessage: handleSendMessage, handleVoiceInput: handleVoiceInput }), children: _jsx("div", { className: "flex flex-col px-2 md:px-10", children: Object.keys(groupedMessages).map((date) => (_jsxs("div", { className: "mb-4", children: [_jsx("div", { className: "font-bold font-sansation text-white bg-[#d9d9d9] px-2.5 text-center w-[4.75rem] rounded-2xl m-0 mx-auto text-[0.8125rem] leading-4 mb-3 md:mb-6 md:text-lg md:w-32", children: date }), groupedMessages[date].map((message, index) => (_jsx("div", { className: `flex items-start ${message.sender === 'user' ? 'justify-end' : ''}`, children: _jsx(MessageBubble, { message: message }) }, index))), showButtons && (_jsx(OrderBtns, { orderHandler: () => setIsShowOrder(true) }))] }, date))) }) }) }));
};
export default Chat;
