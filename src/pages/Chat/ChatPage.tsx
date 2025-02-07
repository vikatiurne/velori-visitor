import Chat from '@/components/Chat/Chat';
import Order from '@/components/Chat/Order';
import { useState } from 'react';

const ChatPage: React.FC = () => {
  const [isShowOrder, setIsShowOrder] = useState(false);

  return !isShowOrder ? (
    <Chat setIsShowOrder={setIsShowOrder} />
  ) : (
    <Order setIsShowOrder={setIsShowOrder} />
  );
};

export default ChatPage;
