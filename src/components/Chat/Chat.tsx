import { useEffect, useState } from 'react';

import { findKeywords } from '@/utils/findKeywords';
import { formatDate } from '@/utils/formatDate';

import ChatHeader from '@/components/Chat/ChatHeader';
import MessageBubble from '@/components/Chat/MessageBubble';
import Scroll from '@/components/UI/Scroll';
import ChatFooter from '@/components/Chat/ChatFooter';
import OrderBtns from '@/components/Chat/OrderBtns';

interface ChatProps {
  setIsShowOrder: (value: boolean) => void;
}
interface Message {
  text: string;
  sender: 'user' | 'bot';
  time: string;
}

const Chat: React.FC<ChatProps> = ({ setIsShowOrder }) => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputText, setInputText] = useState<string>('');
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
      } else {
        setIsKeyboardOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);

    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // временно тащу из localStorage  (загрузку нужно делать из бд)
  useEffect(() => {
    const savedMessages = JSON.parse(
      localStorage.getItem('messages') || '[]'
    ) as Message[];

    if (savedMessages.length === 0) {
      const welcomeMessage: Message = {
        text: welcomeText,
        sender: 'bot',
        time: new Date().toISOString(),
      };
      setMessages([welcomeMessage]);
    } else {
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
        const botMessage: Message = {
          text: !wordsArr.length ? answerAi : confirmationOrder,
          sender: 'bot',
          time: new Date().toISOString(),
        };
        setMessages((prevMessages) => [...prevMessages, botMessage]);
        setShowButtons(!!wordsArr.length);
      }, 1000);
    }
  };

  const groupedMessages: Record<string, Message[]> = messages.reduce(
    (acc, message) => {
      const date = formatDate(message.time);
      if (!acc[date]) {
        acc[date] = [];
      }
      acc[date].push(message);
      return acc;
    },
    {} as Record<string, Message[]>
  );

  const handleVoiceInput = () => {
    const recognition = new (window.SpeechRecognition ||
      window.webkitSpeechRecognition)();
    recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript;
      setInputText(transcript);
    };
    recognition.start();
  };

  return (
    <section
      className={`h-screen bg-[#F5F5F5] ${isKeyboardOpen ? 'pb-20' : 'pb-0'}`}
    >
      <Scroll
        header={<ChatHeader>Чат із ШІ</ChatHeader>}
        footer={
          <ChatFooter
            inputText={inputText}
            setInputText={setInputText}
            handleSendMessage={handleSendMessage}
            handleVoiceInput={handleVoiceInput}
          />
        }
      >
        <div className="flex flex-col px-2 md:px-10">
          {Object.keys(groupedMessages).map((date) => (
            <div key={date} className="mb-4">
              <div className="font-bold font-sansation text-white bg-[#d9d9d9] px-2.5 text-center w-[4.75rem] rounded-2xl m-0 mx-auto text-[0.8125rem] leading-4 mb-3 md:mb-6 md:text-lg md:w-32">
                {date}
              </div>

              {groupedMessages[date].map((message, index) => (
                <div
                  key={index}
                  className={`flex items-start ${message.sender === 'user' ? 'justify-end' : ''}`}
                >
                  <MessageBubble message={message} />
                </div>
              ))}
              {showButtons && (
                <OrderBtns orderHandler={() => setIsShowOrder(true)} />
              )}
            </div>
          ))}
        </div>
      </Scroll>
    </section>
  );
};

export default Chat;
