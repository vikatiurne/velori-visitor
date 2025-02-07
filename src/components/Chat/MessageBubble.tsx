import tail from '@/assets/home/svg/tail.svg';
import tailGreen from '@/assets/home/svg/tail-green.svg';
import read from '@/assets/home/svg/check.svg';
import sent from '@/assets/home/svg/send.svg';
import { useState } from 'react';

interface Message {
  text: string;
  sender: 'user' | 'bot';
  time: string;
}

interface MessageBubbleProps {
  message: Message;
}

const styles = {
  tailLeft: 'absolute bottom-[-6px] left-[-7px]',
  tailRight: 'absolute bottom-[-6px] right-[-7px] ',
};

const MessageBubble: React.FC<MessageBubbleProps> = ({ message }) => {
  const [sentMsg, setSentMsg] = useState(true); //нужно будет подязать под состояние отправки запроса на сервер
  const [readMsg, setReadMsg] = useState(true); //нужно будет подязать под состояние отправки запроса на сервер

  let statusIcon = null;

  if (message.sender === 'user') {
    statusIcon = (
      <img src={sent} alt="sent" className="absolute right-2 bottom-1.5" />
    );
  } else if (readMsg) {
    statusIcon = (
      <img src={read} alt="read" className="absolute right-1 bottom-1.5" />
    );
  }

  return (
    <div
      className={`relative inline-block p-2 sm:pb-6 rounded-lg ${message.sender === 'bot' ? 'bg-white' : 'bg-green-chat'} font-sansation font-bold leading-5 w-72 sm:w-[36rem] mb-3 sm:mb-6`}
    >
      {message.sender === 'bot' && (
        <img src={tail} alt="tail" className={styles.tailLeft} />
      )}
      {message.sender === 'user' && (
        <img src={tailGreen} alt="tailgreen" className={styles.tailRight} />
      )}

      <span className="sm:text-2xl">{message.text}</span>

      <span
        className={`absolute ${message.sender === 'user' && sentMsg ? 'right-6' : 'right-[5px]'} bottom-0 text-[0.625rem] sm:text-lg ${message.sender === 'bot' ? 'text-[#9F9F9F]' : 'text-[#15C5CE]'}`}
      >
        {new Date(message.time).toLocaleTimeString([], {
          hour: '2-digit',
          minute: '2-digit',
        })}
      </span>
      {message.sender === 'user' ? (
        <>
          <img src={sent} alt="sent" className="absolute right-2 bottom-1.5" />
          {readMsg ? (
            <img
              src={read}
              alt="read"
              className="absolute right-1 bottom-1.5"
            />
          ) : null}
        </>
      ) : null}
    </div>
  );
};

export default MessageBubble;
