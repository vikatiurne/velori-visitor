type ButtonType = 'chat';

interface ButtonProps {
  children: React.ReactNode;
  buttonType: ButtonType;
  onClick: () => void;
  className: string;
  whiteBtn: boolean;
  borderRadius: string;
}

type OptionalButtonProps = Partial<ButtonProps> & {
  children: React.ReactNode;
  buttonType: ButtonType;
};

const GradientTextBtn: React.FC<OptionalButtonProps> = ({
  buttonType,
  borderRadius,
  onClick,
  className = '',
  children,
  whiteBtn,
}) => {
  enum currentButtonType {
    chat = 'w-[calc(100%-2px)] h-[calc(100%-2px)]',
  }

  const handleClick = () => onClick();

  return (
    <button
      className={`${borderRadius} ${className} bg-gradientToTop  relative group  border-none transition duration-300 ease-out`}
      onClick={handleClick}
    >
      <span
        className={`${currentButtonType[buttonType]} ${borderRadius} ${whiteBtn ? 'bg-white group-hover:bg-gradientToTop' : 'group-hover:bg-white'} absolute inset-0 z-10 translate-x-[.075rem] translate-y-[.075rem] transition duration-300 ease-out`}
      ></span>

      <span
        className={`relative z-20 transition duration-300 ease-out group ${whiteBtn ? 'group-hover:bg-transparent group-hover:text-white?' : 'group-hover:bg-white'} `}
      >
        {children}
      </span>
    </button>
  );
};

export default GradientTextBtn;
