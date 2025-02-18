import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import showicon from '@/assets/auth/svg/showicon.svg';
import warning from '@/assets/auth/svg/warning.svg';
import invisible from '@/assets/auth/svg/invisible.svg';
const GroupFormInput = ({ title, type, placeholder, isErrorConfirn, activeIconVisible, registerGroup, error, }) => {
    const [visibleData, setVisibleData] = useState(type);
    return (_jsxs("div", { className: "min-h-[92px] max-sm:min-h-[80px] flex  flex-col gap-2", children: [_jsx("h3", { className: "text-[16px] font-medium ", children: title }), _jsxs("div", { className: " flex relative", children: [_jsx("input", { className: `${error && 'border-red-500 '} outline-[#15C5CE] border  w-full h-[59px] rounded-md pl-[18px] max-sm:h-[48px] `, type: visibleData, placeholder: placeholder, ...registerGroup }), activeIconVisible && (_jsx("button", { type: "button", disabled: error ? true : false, onMouseDown: (e) => {
                            e.preventDefault();
                            setVisibleData(visibleData === 'text' ? 'password' : 'text');
                        }, children: !error ? (_jsx("img", { className: "absolute  right-5  top-1/2  -translate-y-1/2 h-5 w-5 ", src: !error && visibleData === 'text' ? showicon : invisible, alt: "icon" })) : (_jsx("img", { className: "absolute  right-5  top-1/2  -translate-y-1/2 ", src: warning, alt: "icon" })) })), error && (_jsx("img", { className: "absolute  right-5  top-1/2  -translate-y-1/2", src: !error ? showicon : warning, alt: "icon" }))] }), error && (_jsxs("span", { className: `text-[14px] mt-[6px] text-[#F64C4C] `, children: [error.message, ' '] }))] }));
};
export default GroupFormInput;
