import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const OrderPayment = ({ paymentSelect, calculatePrice }) => {
    return (_jsxs("div", { className: "font-semibold flex flex-col gap-[24px]", children: [_jsxs("div", { className: "flex justify-between", children: [_jsx("span", { children: "\u0414\u043E \u0441\u043F\u043B\u0430\u0442\u044B:" }), _jsxs("span", { children: [calculatePrice(), " \u0433\u0440\u043D"] })] }), _jsxs("div", { className: "flex justify-between items-center", children: [_jsx("span", { children: "\u0421\u043F\u043E\u0441\u0456\u0431 \u043E\u043F\u043B\u0430\u0442\u0438:" }), _jsx("select", { className: "w-[212px] md:w-[420px] md:h-[42px] border h-[36px] font-[400] cursor-pointer px-1 outline-none ", children: paymentSelect.map((varPayment, index) => (_jsx("option", { children: varPayment.title }, index))) })] })] }));
};
export default OrderPayment;
