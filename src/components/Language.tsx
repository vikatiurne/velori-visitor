import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import CustomButton from './UI/CustomButton';

const Language = () => {
    const [language, setLanguage] = useState('UA');

    const { pathname } = useLocation();
  
    const [isAuth, setIsAuth] = useState(
      pathname.toLocaleLowerCase() === '/login' ||
        pathname.toLocaleLowerCase() === '/registration'
    );
  
    useEffect(() => {
      setIsAuth(pathname === '/login' || pathname === '/registration');
    }, [pathname]);
  
    const setUkrainianLanguage = () => setLanguage('UA');
    const setEnglishLanguage = () => setLanguage('EN');
    return (
        <div className="flex flex-1 items-end justify-end gap-[18%]">
        <div className="flex flex-1 justify-end items-center gap-1 md:gap-2">
          <CustomButton
            className={`w-[44px] h-[44px] md:h-[70px] md:w-[70px] font-raleway text-lg md:text-[30px] mobile:font-elMessiri mobile:text-sm mobile:w-7  mobile:h-7 ${language === 'UA' && 'font-semibold'} `}
            onClick={setUkrainianLanguage}
            buttonType="language"
            active={language === 'UA'}
            borderRadius={
              language === 'UA' && 'rounded-full before:rounded-full p-1 '
            }
            whiteBtn={language === 'UA'}
          >
            УКР
          </CustomButton>
          <CustomButton
            className={`w-[44px] h-[44px]  md:h-[70px] md:w-[70px] font-raleway text-lg md:text-[30px] mobile:font-elMessiri mobile:text-sm mobile:w-7  mobile:h-7 ${language === 'EN' && 'font-semibold'} `}
            onClick={setEnglishLanguage}
            buttonType="language"
            active={language === 'EN'}
            borderRadius={
              language === 'EN' && 'rounded-full before:rounded-full p-1'
            }
            whiteBtn={language === 'EN'}
          >
            EN
          </CustomButton>
        </div>
      </div>
    );
};

export default Language;