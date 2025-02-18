import React from 'react';

const OrderAded = ({ dataChekbox , title , ChangeChecked}) => {
  return (

    <div className='mb-[23px]'>
      <h2 className="text-center font-semibold mt-[24px] mb-[18px]">
        {title}
      </h2>
      <div className="flex flex-col gap-[11px]">
        {dataChekbox.map((item , index) => (
          <div key={index} className='flex justify-between'>
            <label className="flex items-center gap-2 font-medium">
              <input
                className="h-[16px] w-[16px] border"
                type="checkbox"
                checked={item.checked}
                onChange={ () => ChangeChecked(item) }
              />
              <span>{item.title}</span>
            </label>
            <span>{item.price} грн</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OrderAded;
