import arrow from '@/assets/home/svg/arrow-left.svg';
import logo from '@/assets/home/svg/logo.svg';
import CustomButton from '../UI/CustomButton';


const styles = {
  'gradient-shadow-text':
    'bg-gradientToTop text-transparent bg-clip-text text-shadow font-raleway text-xs font-bold',
};

const ChatHeader: React.FC = () => {
  return (
    <header className="bg-gradientToTop flex pt-4 pl-2 pr-6 pb-2 items-center justify-between">
      <div className="flex items-center gap-[2.125rem]">
        <img src={arrow} alt="arrow" />
        <p className="font-poppins text-white font-medium">Стіл №1</p>
      </div>
      <div className="flex items-center flex-col gap-1">
        <img src={logo} alt="logo" />
        <p className="font-poppins text-white font-black text-sm">Чат із ШІ</p>
      </div>
      <CustomButton
        buttonType="chat"
        borderRadius="rounded-sm"
        whiteBtn
        className="btn-shadow px-2 py-1 hover:shadow-none"
      >
        <p className={`${styles['gradient-shadow-text']} flex flex-col hover:text-white`}>
          Викликати <span>офіціанта</span>
        </p>
      </CustomButton>
    </header>
  );
};

export default ChatHeader;
