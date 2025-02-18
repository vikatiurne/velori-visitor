import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const CustomButton = ({ buttonType, borderRadius, onClick, active, className = '', children, whiteBtn, disabled, }) => {
    let currentButtonType;
    (function (currentButtonType) {
        currentButtonType["login"] = "w-[calc(100%-2.1px)] h-[calc(100%-2.1px)]";
        currentButtonType["language"] = "w-[calc(100%-2.3px)] h-[calc(100%-2.1px)]";
        currentButtonType["menuOptions"] = "";
    })(currentButtonType || (currentButtonType = {}));
    const handleClick = () => {
        if (onClick && !disabled) {
            onClick();
        }
    };
    return (_jsxs("button", { className: `${borderRadius} ${className} ${active && 'bg-gradientToTop'} ${disabled ? 'bg-[#828386]' : 'bg-custom-gradient  hover:bg-customHover-gradient'} relative border-none`, onClick: handleClick, disabled: disabled, children: [active && (_jsx("span", { className: `${currentButtonType[buttonType]} ${borderRadius} ${whiteBtn && 'bg-white'} absolute inset-0 z-10 translate-x-[.075rem] translate-y-[.075rem]` })), _jsx("span", { className: "relative z-20", children: children })] }));
};
export default CustomButton;
