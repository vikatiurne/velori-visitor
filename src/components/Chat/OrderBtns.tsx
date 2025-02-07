import CustomButton from '@/components/UI/GradientTextBtn';

interface OrderBtnsProps {
  orderHandler: () => void;
}

const styles = {
  'gradient-shadow-text':
    'bg-gradientToTop text-transparent bg-clip-text text-shadow font-poppins font-normal text-xs sm:text-2xl',
  'gradient-shadow-hover':
    'group-hover:bg-gradientToTop group-hover:text-transparent group-hover:bg-clip-text hover:text-shadow font-poppins font-normal text-xs sm:text-2xl',
};

const OrderBtns: React.FC<OrderBtnsProps> = ({ orderHandler }) => {
  return (
    <div className="flex justify-end">
      <div className="flex flex-col gap-3 sm:gap-6 w-[13.5rem] sm:w-[26rem]">
        <CustomButton
          buttonType="chat"
          borderRadius="rounded-sm"
          whiteBtn={false}
          className="btn-shadow px-[1.875rem] py-4 hover:shadow-none"
          onClick={orderHandler}
        >
          <p className={` text-white ${styles['gradient-shadow-hover']} `}>
            Замовити страву
          </p>
        </CustomButton>
        <CustomButton
          buttonType="chat"
          borderRadius="rounded-sm"
          whiteBtn
          className="btn-shadow px-[1.875rem] py-4 hover:shadow-none "
          onClick={orderHandler}
        >
          <p className={`${styles['gradient-shadow-text']} hover:text-white `}>
            Перейти до кошика
          </p>
        </CustomButton>
      </div>
    </div>
  );
};

export default OrderBtns;
