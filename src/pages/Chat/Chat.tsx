import BotMessage from '@/components/Chat/BotMessage';
import ChatHeader from '@/components/Chat/ChatHeader';
import UserMessage from '@/components/Chat/UserMessage';
import microphone from '@/assets/home/svg/microphone.svg';
import { useState } from 'react';

const Chat: React.FC = () => {
  const [inputValue, setInputValue] = useState('');

  const handleVoiceInput = () => {
    const recognition = new (window.SpeechRecognition ||
      window.webkitSpeechRecognition)();

    recognition.onstart = () => {
      console.log(
        'Voice recognition started. Try speaking into the microphone.'
      );
    };

    recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript;
      setInputValue(transcript);
    };

    recognition.onerror = (event) => {
      console.error('Error occurred in recognition: ' + event.error);
    };

    recognition.start();
  };

  return (
    <section className="h-screen">
      <ChatHeader>Чат із ШІ</ChatHeader>
      <div>
        <BotMessage>
          <p>Привіт! Чим можу допомогти вам сьогодні? </p>
          <span>18:25</span>
        </BotMessage>
        <UserMessage>
          <p>
            Привіт! Я хотів би переглянути сьогоднішні спеціальні пропозиції.
          </p>
          <span>18:25</span>
        </UserMessage>
      </div>
      <div>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Напишіть повідомлення..."
        />
        <img src={microphone} alt="microphone" />
        {/* <VoiceButton onClick={handleVoiceInput}>🎤</VoiceButton> */}
      </div>
    </section>
  );
};

export default Chat;
