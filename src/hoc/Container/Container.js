import { jsx as _jsx } from "react/jsx-runtime";
const Container = ({ children, padding = 'pl-[1.875rem] pr-4 pt-8 pb-10 md:pt-4 md:pl-4 md:pr-[1.375rem] md:pb-22', maxWidth = 'max-w-[52.125rem]', }) => {
    return _jsx("div", { className: `${padding} ${maxWidth} mx-auto`, children: children });
};
export default Container;
