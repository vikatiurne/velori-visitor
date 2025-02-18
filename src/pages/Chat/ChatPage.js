import { jsx as _jsx } from "react/jsx-runtime";
import Chat from '@/components/Chat/Chat';
import Order from '@/components/Chat/Order';
import { useState } from 'react';
const ChatPage = () => {
    const [isShowOrder, setIsShowOrder] = useState(false);
    return !isShowOrder ? (_jsx(Chat, { setIsShowOrder: setIsShowOrder })) : (_jsx(Order, { setIsShowOrder: setIsShowOrder }));
};
export default ChatPage;
