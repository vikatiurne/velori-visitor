import bannerImage from '@/assets/images/Home/Homebanner.png';
import iconNavigation from '@/assets/images/Home/Navigation.png';
import logo from '@/assets/images/Home/Logo.png';
import CustomButton from '../UI/CustomButton';
import Language from '../language';
import { Link } from 'react-router-dom';

type aboutTimeJobs = {
  day: string;
  time: string;
};

const HomeComponent = () => {
  const aboutTimeJobs: aboutTimeJobs[] = [
    { day: 'Понеділок', time: '10.00-18.00' },
    { day: 'Вівторок', time: '10.00-18.00' },
    { day: 'Середа', time: '10.00-18.00' },
    { day: 'Четвер', time: '10.00-18.00' },
    { day: 'П’ятниця', time: '10.00-18.00' },
    { day: 'Субота', time: '10.00-18.00' },
    { day: 'Неділя', time: '10.00-18.00' },
  ];
  return (
    <div className="font-playfair h-full">
      <div className="h-[565px] md:h-[900px] flex justify-center shadow-md border-b-8">
        {/*Start Banner image */}
        <img
          src={bannerImage}
          className="absolute top-0 left-0 right-0 h-[589px] md:h-[900px] object-cover w-full border-b-2 border-gray-500 z-30 md:shadow-custom  object-[-70px_0px] md:object-[0px_0px] "
          alt="bg-image"
        />
        <div className="absolute top-0 left-0 right-0 h-[589px] md:h-[900px]  bg-gray-100 bg-opacity-50 z-40"></div>
        {/*END Banner image */}
        {/* Start Language */}
        <div className="absolute right-[20px] top-[32px] z-50">
          <Language />
        </div>
        {/* END  Language */}
        <div className="z-40 relative flex flex-col items-center   pt-[110px] md:pt-[215px] w-full md:w-[520px] ">
          <img src={logo} className="h-[96px] w-[150px] md:h-[148px] md:w-[230px]" alt="logo" />
          <h1 className="text-[#15C5CE] font-semibold text-[30px] md:text-[44px] leading-[40px] text-center mt-[64px] md:mt-[105px]  ">
            Ласкаво просимо <br />
            до нашого ресторану
          </h1>
          <h2 className="font-[500] my-[24px] md:text-[24px] md:my-[55px]">Стіл №1</h2>
          <div className="flex flex-col gap-3 w-full md:gap-6">
            <CustomButton
              className="h-[57px] w-full rounded-[6px] text-white md:font-medium md:h-[72px] md:text-[32px]"
              children={'Меню'}
              buttonType={'login'}
              active={true}
            />
            <Link to={'/chat'}>
              <CustomButton
                className="h-[57px] w-full rounded-[6px] text-white md:font-medium md:h-[72px] md:text-[32px]"
                children={'Чат із ШІ-офіціантом'}
                buttonType={'login'}
                active={true}
              />
            </Link>
          </div>
        </div>
      </div>
      {/* Start Section 2 */}
      <div className="h-[350px] ">
        <div className="z-30 relative">
          <h3 className="mt-[30px] md:mt-[40px] flex flex-col  justify-center md:text-[26px] md:ml-10">
            <span className="pl-8 md:pl-[44px]">Адреса</span>
            <div className="flex items-center gap-2">
              <img
                src={iconNavigation}
                className="h-[22px] w-[22px] md:h-[33px]  md:w-[32px]"
                alt="icon navigation"
              />
              <span> Країна, Місто, Вулиця</span>
            </div>
          </h3>
          <div className="flex flex-col  items-center">
            <h4 className="text-center text-[24px] md:text-[36px] font-semibold text-[#15C5CE] mt-[50px] md:mt-[70px]">
              Години роботи
            </h4>
            <ul className="flex flex-col gap-[10px] md:gap-[16px] w-full  md:w-[390px] px-[35px] mt-[20px]">
              {aboutTimeJobs.map((item, index) => (
                <li
                  key={index}
                  className="flex justify-between text-[14px] md:text-[20px]"
                >
                  <span>{item.day}</span>
                  <span>{item.time}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        {/* START bg color */}
        <span className="absolute left-0 top-[589px] md:top-[900px] bg-[#EEFCFC] h-[452px] md:h-[655px]  w-full z-0"></span>
        {/* END bg color */}
      </div>
      {/* End Section 2 */}
    </div>
  );
};

export default HomeComponent;
