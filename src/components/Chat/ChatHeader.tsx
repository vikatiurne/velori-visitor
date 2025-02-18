import arrow from '@/assets/home/svg/arrow-left.svg';
import logo from '@/assets/home/svg/logo.svg';
import CustomButton from '../UI/GradientTextBtn';

interface ChatHeaderProps {
  children: React.ReactNode;
  setIsShowOrder?: () => void;
}

const styles = {
  'gradient-shadow-text':
    'bg-gradientToTop text-transparent bg-clip-text text-shadow font-raleway text-xs font-bold',
};

const ChatHeader: React.FC<ChatHeaderProps> = ({ setIsShowOrder }) => {
  return (
    <header className="bg-gradientToTop flex pt-4 pl-2 sm:pl-8 pr-6 md:pr-[7rem] pb-2 sm:py-3 items-center justify-between mb-2 sm:mb-6">
      <div className="flex items-center gap-[2.125rem]">
        <img src={arrow} alt="arrow" />
        <p className="font-poppins text-white font-medium sm:text-2xl">
          Стіл №1
        </p>
      </div>
      <button
        className="flex items-center flex-col gap-1"
        onClick={setIsShowOrder}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            setIsShowOrder(false);
          }
        }}
        tabIndex={0}
      >
        <img src={logo} alt="logo" />
        <p className="font-poppins text-white font-black text-sm sm:text-2xl">
          Чат із ШІ
        </p>
      </button>
      <CustomButton
        buttonType="chat"
        borderRadius="rounded-sm"
        whiteBtn
        className="btn-shadow px-2 py-1 hover:shadow-none"
        onClick={()=>console.log("Викликати офіціанта")}
      >
        <p
          className={`${styles['gradient-shadow-text']} flex flex-col hover:text-white text-lg sm:text-xl`}
        >
          Викликати <span>офіціанта</span>
        </p>
      </CustomButton>
    </header>
  );
};

export default ChatHeader;
