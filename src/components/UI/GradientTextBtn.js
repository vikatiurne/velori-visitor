import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const GradientTextBtn = ({ buttonType, borderRadius, onClick, className = '', children, whiteBtn, }) => {
    let currentButtonType;
    (function (currentButtonType) {
        currentButtonType["chat"] = "w-[calc(100%-2px)] h-[calc(100%-2px)]";
    })(currentButtonType || (currentButtonType = {}));
    const handleClick = () => onClick();
    return (_jsxs("button", { className: `${borderRadius} ${className} bg-gradientToTop  relative group  border-none transition duration-300 ease-out`, onClick: handleClick, children: [_jsx("span", { className: `${currentButtonType[buttonType]} ${borderRadius} ${whiteBtn ? 'bg-white group-hover:bg-gradientToTop' : 'group-hover:bg-white'} absolute inset-0 z-10 translate-x-[.075rem] translate-y-[.075rem] transition duration-300 ease-out` }), _jsx("span", { className: `relative z-20 transition duration-300 ease-out group ${whiteBtn ? 'group-hover:bg-transparent group-hover:text-white?' : 'group-hover:bg-white'} `, children: children })] }));
};
export default GradientTextBtn;
