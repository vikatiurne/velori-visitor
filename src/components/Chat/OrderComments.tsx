import React from 'react';

const OrderComments = ({title , orderComments , setOrderComments}) => {
    return (
        <div className='flex flex-col gap-[18px] mb-[18px]'>
            <h3 className='font-semibold'>{title}</h3>
            <textarea className='border h-[107px] rounded-[4px] p-1 outline-none' value={orderComments} onChange={ (e) => setOrderComments(e.target.value) } />
        </div>
    );
};

export default OrderComments;