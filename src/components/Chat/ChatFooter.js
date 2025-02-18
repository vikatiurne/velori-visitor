import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import microphone from '@/assets/home/svg/microphone.svg';
import send from '@/assets/home/svg/sand-btn.svg';
const styles = {
    "img": "absolute right-3 top-3 md:w-12 md:h-12"
};
const ChatFooter = ({ inputText, setInputText, handleSendMessage, handleVoiceInput, }) => {
    return (_jsxs("div", { className: "relative bg-white mt-2 w-screen h-24 md:h-56 px-10 py-1", children: [_jsx("textarea", { className: `w-full h-20 p-2 md:text-2xl  resize-none overflow-hidden focus:outline-none focus:border-transparent font-bold ${inputText ? 'font-bold' : 'font-normal'}`, value: inputText, onChange: (e) => setInputText(e.target.value), placeholder: "\u041F\u043E\u0432\u0456\u0434\u043E\u043C\u043B\u0435\u043D\u043D\u044F", style: { overflow: 'hidden' } }), inputText ? (_jsx("img", { src: send, alt: "send", onClick: handleSendMessage, className: styles.img })) : (_jsx("img", { src: microphone, alt: "voice", className: styles.img, onClick: handleVoiceInput }))] }));
};
export default ChatFooter;
