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

interface OrderProps {
  setIsShowOrder: (value: boolean) => void;
}

const Order: React.FC<OrderProps> = ({ setIsShowOrder }) => {
  const [dataChekbox, setOrderAdedChekbox] = useState([
    { title: 'Сметана', price: 10, checked: false, id: 1 },
    { title: 'Майонез', price: 10, checked: false, id: 2 },
  ]);
  const [orderComments, setOrderComments] = useState('');
  const paymentSelect = [
    { value: '', title: 'Готівка' },
    { value: '', title: 'Varian 2' },
    { value: '', title: 'Variant 3' },
  ];

  const title = (
    <h2 className="text-center font-bold text-sm mb-4 font-sansation">
      Замовлення #{orderId}
    </h2>
  );

  const ChangeChecked = (item) => {
    setOrderAdedChekbox(
      dataChekbox.map((elem) =>
        elem.id === item.id ? { ...elem, checked: !elem.checked } : elem
      )
    );
  };

  return (
    <Scroll
      header={
        <ChatHeader setIsShowOrder={() => setIsShowOrder(false)}>
          Чат із ШІ
        </ChatHeader>
      }
      title={title}
      footer={null}
      classWrap="px-2 pb-10 md:text-[20px]"
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
      <OrderAded
        title={'Добавить в заказ'}
        dataChekbox={dataChekbox}
        ChangeChecked={ChangeChecked}
      />
      <OrderComments
        title={'Коментар до замовлення'}
        orderComments={orderComments}
        setOrderComments={setOrderComments}
      />
      <OrderPayment paymentSelect={paymentSelect} />
      <div className="flex justify-end mt-[50px] gap-[8px]">
        {/* Спешил , не понял как указать бордер у КастомБтн */}
        <button
          className="h-[38px] px-[8px] text-[#4B4B4B] border rounded-[4px] md:px-[20px] md:h-46px md:text-[20px]"
          onClick={() => setIsShowOrder(false)}
        >
          Скасувати
        </button>
        <CustomButton
          children={'Підтвердити'}
          buttonType={'login'}
          active={true}
          className="h-[38px] px-[8px] text-white rounded-[4px] md:px-[20px] md:h-46px md:text-[20px]"
          onClick={() => (window.location.href = '/')}
        />
      </div>
    </Scroll>
  );
};

export default Order;
