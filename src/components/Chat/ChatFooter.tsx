import microphone from '@/assets/home/svg/microphone.svg';
import send from '@/assets/home/svg/sand-btn.svg';

interface MessageInputProps {
  inputText: string;
  setInputText: (text: string) => void;
  handleSendMessage: () => void;
  handleVoiceInput: () => void;
}

const styles = {
  "img":"absolute right-3 top-3 md:w-12 md:h-12"
}

const ChatFooter: React.FC<MessageInputProps> = ({
  inputText,
  setInputText,
  handleSendMessage,
  handleVoiceInput,
}) => {
  return (
    <div className="relative bg-white mt-2 w-screen h-24 md:h-56 px-10 py-1">
      <textarea
        className={`w-full h-20 p-2 md:text-2xl  resize-none overflow-hidden focus:outline-none focus:border-transparent font-bold ${inputText ? 'font-bold' : 'font-normal'}`}
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        placeholder="Повідомлення"
        style={{ overflow: 'hidden' }}
      />
      {inputText ? (
        <img
          src={send}
          alt="send"
          onClick={handleSendMessage}
          className={styles.img}
        />
      ) : (
        <img
          src={microphone}
          alt="voice"
          className={styles.img}
          onClick={handleVoiceInput}
        />
      )}
    </div>
  );
};

export default ChatFooter;
