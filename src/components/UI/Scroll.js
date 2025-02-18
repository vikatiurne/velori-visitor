import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useRef, useEffect } from 'react';
const Scroll = ({ children, header, footer, title, classContent, classWrap, width = '100%', height = '100%', }) => {
    const scrollContainerRef = useRef(null);
    useEffect(() => {
        const container = scrollContainerRef.current;
        if (container) {
            container.scrollTop = container.scrollHeight;
        }
    }, [children]);
    return (_jsxs("div", { ref: scrollContainerRef, style: { height, width }, className: "flex flex-col relative overflow-hidden", children: [_jsx("div", { className: "flex-shrink-0", children: header }), _jsxs("div", { className: `flex-1 overflow-y-auto pr-1 ${classContent} scrollbar-hidden`, children: [_jsx("div", { className: "flex-shrink-0", children: title }), _jsx("div", { className: classWrap || 'flex flex-col', children: children })] }), _jsx("div", { className: "flex-shrink-0", children: footer })] }));
};
export default Scroll;
