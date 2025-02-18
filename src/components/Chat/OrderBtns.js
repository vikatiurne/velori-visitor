import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import CustomButton from '@/components/UI/GradientTextBtn';
const styles = {
    'gradient-shadow-text': 'bg-gradientToTop text-transparent bg-clip-text text-shadow font-poppins font-normal text-xs sm:text-2xl',
    'gradient-shadow-hover': 'group-hover:bg-gradientToTop group-hover:text-transparent group-hover:bg-clip-text hover:text-shadow font-poppins font-normal text-xs sm:text-2xl',
};
const OrderBtns = ({ orderHandler }) => {
    return (_jsx("div", { className: "flex justify-end", children: _jsxs("div", { className: "flex flex-col gap-3 sm:gap-6 w-[13.5rem] sm:w-[26rem]", children: [_jsx(CustomButton, { buttonType: "chat", borderRadius: "rounded-sm", whiteBtn: false, className: "btn-shadow px-[1.875rem] py-4 hover:shadow-none", onClick: orderHandler, children: _jsx("p", { className: ` text-white ${styles['gradient-shadow-hover']} `, children: "\u0417\u0430\u043C\u043E\u0432\u0438\u0442\u0438 \u0441\u0442\u0440\u0430\u0432\u0443" }) }), _jsx(CustomButton, { buttonType: "chat", borderRadius: "rounded-sm", whiteBtn: true, className: "btn-shadow px-[1.875rem] py-4 hover:shadow-none ", onClick: orderHandler, children: _jsx("p", { className: `${styles['gradient-shadow-text']} hover:text-white `, children: "\u041F\u0435\u0440\u0435\u0439\u0442\u0438 \u0434\u043E \u043A\u043E\u0448\u0438\u043A\u0430" }) })] }) }));
};
export default OrderBtns;
