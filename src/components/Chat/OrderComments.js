import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const OrderComments = ({ title, orderComments, setOrderComments }) => {
    return (_jsxs("div", { className: 'flex flex-col gap-[18px] mb-[18px]', children: [_jsx("h3", { className: 'font-semibold', children: title }), _jsx("textarea", { className: 'border h-[107px] rounded-[4px] p-1 outline-none', value: orderComments, onChange: (e) => setOrderComments(e.target.value) })] }));
};
export default OrderComments;
