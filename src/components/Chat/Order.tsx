import Scroll from '@/components/UI/Scroll';
import ChatHeader from '@/components/Chat/ChatHeader';
import ProductQuantityControl from './ProductQuantityControl';

// Нужно будет тащить с бд
const order = [
  { dish: 'Борщ український', price: '106', qty: 1 },
  { dish: 'Млинці з м’ясом', price: '88', qty: 1 },
  { dish: 'Американо', price: '70', qty: 1 },
];

const orderId = 111; // из бд должно тянуться

interface OrderProps {
  setIsShowOrder: (value: boolean) => void;
}

const Order: React.FC<OrderProps> = ({ setIsShowOrder }) => {
  const title = (
    <h2 className="text-center font-bold text-sm mb-4 font-sansation">
      Замовлення #{orderId}
    </h2>
  );

  return (
    <Scroll
      header={
        <ChatHeader setIsShowOrder={() => setIsShowOrder(false)}>
          Чат із ШІ
        </ChatHeader>
      }
      title={title}
      footer={null}
      classWrap="px-2"
    >
      <ul className="list-decimal list-inside ">
        {order.map((item, i) => (
          <li
            key={i}
            className="flex items-center justify-between gap-6 mb-3 sm:mb-6"
          >
            <div className="flex items-center justify-between flex-1">
              <p>{item.dish}</p>
              <p>{item.price}грн</p>
            </div>
            <ProductQuantityControl qty={item.qty} />
          </li>
        ))}
      </ul>
    </Scroll>
  );
};

export default Order;
