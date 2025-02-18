import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import arrow from '@/assets/home/svg/arrow-left.svg';
import logo from '@/assets/home/svg/logo.svg';
import CustomButton from '../UI/GradientTextBtn';
const styles = {
    'gradient-shadow-text': 'bg-gradientToTop text-transparent bg-clip-text text-shadow font-raleway text-xs font-bold',
};
const ChatHeader = ({ setIsShowOrder }) => {
    return (_jsxs("header", { className: "bg-gradientToTop flex pt-4 pl-2 sm:pl-8 pr-6 md:pr-[7rem] pb-2 sm:py-3 items-center justify-between mb-2 sm:mb-6", children: [_jsxs("div", { className: "flex items-center gap-[2.125rem]", children: [_jsx("img", { src: arrow, alt: "arrow" }), _jsx("p", { className: "font-poppins text-white font-medium sm:text-2xl", children: "\u0421\u0442\u0456\u043B \u21161" })] }), _jsxs("button", { className: "flex items-center flex-col gap-1", onClick: () => setIsShowOrder, onKeyDown: (e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        setIsShowOrder(false);
                    }
                }, tabIndex: 0, children: [_jsx("img", { src: logo, alt: "logo" }), _jsx("p", { className: "font-poppins text-white font-black text-sm sm:text-2xl", children: "\u0427\u0430\u0442 \u0456\u0437 \u0428\u0406" })] }), _jsx(CustomButton, { buttonType: "chat", borderRadius: "rounded-sm", whiteBtn: true, className: "btn-shadow px-2 py-1 hover:shadow-none", onClick: () => console.log('Викликати офіціанта'), children: _jsxs("p", { className: `${styles['gradient-shadow-text']} flex flex-col hover:text-white text-lg sm:text-xl`, children: ["\u0412\u0438\u043A\u043B\u0438\u043A\u0430\u0442\u0438 ", _jsx("span", { children: "\u043E\u0444\u0456\u0446\u0456\u0430\u043D\u0442\u0430" })] }) })] }));
};
export default ChatHeader;
