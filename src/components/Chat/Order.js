import { jsxs as _jsxs, jsx as _jsx } from "react/jsx-runtime";
import Scroll from '@/components/UI/Scroll';
import ChatHeader from '@/components/Chat/ChatHeader';
import ProductQuantityControl from './ProductQuantityControl';
import OrderAded from './OrderAded';
import OrderComments from './OrderComments';
import { useState } from 'react';
import OrderPayment from './OrderPayment';
import CustomButton from '../UI/CustomButton';
// Нужно будет тащить с бд
const order = [
    { dish: 'Борщ український', price: '106', qty: 1 },
    { dish: 'Млинці з м’ясом', price: '88', qty: 1 },
    { dish: 'Американо', price: '70', qty: 1 },
];
const orderId = 111; // из бд должно тянуться
const Order = ({ setIsShowOrder }) => {
    const [dataChekbox, setOrderAdedChekbox] = useState([
        { title: 'Сметана', price: 10, checked: false, id: 1 },
        { title: 'Майонез', price: 10, checked: false, id: 2 },
    ]);
    const [orderComments, setOrderComments] = useState('');
    const paymentSelect = [
        { value: '', title: 'Готівка' },
        { value: '', title: 'Variant 2' },
        { value: '', title: 'Variant 3' },
    ];
    const calculatePrice = () => {
        for (const i of dataChekbox) {
            if (i.checked) {
                return 284 + i.price;
            }
        }
        return 284;
    };
    const title = (_jsxs("h2", { className: "text-center font-bold text-sm mb-4 font-sansation", children: ["\u0417\u0430\u043C\u043E\u0432\u043B\u0435\u043D\u043D\u044F #", orderId] }));
    const ChangeChecked = (item) => {
        setOrderAdedChekbox(dataChekbox.map((elem) => elem.id === item.id ? { ...elem, checked: !elem.checked } : elem));
    };
    return (_jsxs(Scroll, { header: _jsx(ChatHeader, { setIsShowOrder: () => setIsShowOrder(false), children: "\u0427\u0430\u0442 \u0456\u0437 \u0428\u0406" }), title: title, footer: null, classWrap: "px-2 pb-10 md:text-[20px]", children: [_jsx("ul", { className: "list-decimal list-inside ", children: order.map((item, i) => (_jsxs("li", { className: "flex items-center justify-between gap-6 mb-3 sm:mb-6", children: [_jsxs("div", { className: "flex items-center justify-between flex-1", children: [_jsx("p", { children: item.dish }), _jsxs("p", { children: [item.price, "\u0433\u0440\u043D"] })] }), _jsx(ProductQuantityControl, { qty: item.qty })] }, i))) }), _jsx(OrderAded, { title: 'Добавить в заказ', dataChekbox: dataChekbox, ChangeChecked: ChangeChecked }), _jsx(OrderComments, { title: 'Коментар до замовлення', orderComments: orderComments, setOrderComments: setOrderComments }), _jsx(OrderPayment, { paymentSelect: paymentSelect, calculatePrice: calculatePrice }), _jsxs("div", { className: "flex justify-end mt-[50px] gap-[8px]", children: [_jsx("button", { className: "h-[38px] px-[8px] text-[#4B4B4B] border rounded-[4px] md:px-[20px] md:h-46px md:text-[20px]", onClick: () => setIsShowOrder(false), children: "\u0421\u043A\u0430\u0441\u0443\u0432\u0430\u0442\u0438" }), _jsx(CustomButton, { children: 'Підтвердити', buttonType: 'login', active: true, className: "h-[38px] px-[8px] text-white rounded-[4px] md:px-[20px] md:h-46px md:text-[20px]", onClick: () => (window.location.href = '/') })] })] }));
};
export default Order;
