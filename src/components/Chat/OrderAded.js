import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const OrderAded = ({ dataChekbox, title, ChangeChecked }) => {
    return (_jsxs("div", { className: 'mb-[23px]', children: [_jsx("h2", { className: "text-center font-semibold mt-[24px] mb-[18px]", children: title }), _jsx("div", { className: "flex flex-col gap-[11px]", children: dataChekbox.map((item, index) => (_jsxs("div", { className: 'flex justify-between', children: [_jsxs("label", { className: "flex items-center gap-2 font-medium", children: [_jsx("input", { className: "h-[16px] w-[16px] border", type: "checkbox", checked: item.checked, onChange: () => ChangeChecked(item) }), _jsx("span", { children: item.title })] }), _jsxs("span", { children: [item.price, " \u0433\u0440\u043D"] })] }, index))) })] }));
};
export default OrderAded;
