import React from 'react';

const OrderPayment = ({ paymentSelect }) => {
  return (
    <div className="font-semibold flex flex-col gap-[24px]">
      <div className="flex justify-between">
        <span>До сплаты:</span>
        <span>284 грн</span>
      </div>
      <div className="flex justify-between items-center">
        <span>Спосіб оплати:</span>
        <select className="w-[212px] md:w-[420px] md:h-[42px] border h-[36px] font-[400] cursor-pointer px-1 ">
          {paymentSelect.map((varPayment , index) => (
            <option key={index}>{varPayment.title}</option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default OrderPayment;
