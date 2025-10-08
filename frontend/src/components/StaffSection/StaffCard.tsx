import { Link } from 'react-router';
import manager_photo from '../../assets/images/manager_photo.png';
import tg_icon from '../../assets/images/telegram.svg';
import viber_icon from '../../assets/images/viber.svg';
import inst_icon from '../../assets/images/insta.svg';

type Staff = {
   avatar: string;
   name: string;
   tg: string;
   viber: string;
   inst: string;
   position: string;
};

export const StaffCard = () => {
   const staffList: Staff[] = [
      {
         avatar: manager_photo,
         name: 'Роман Кометов',
         tg: 'https://www.web.telegram.org',
         viber: 'https://www.viber.com',
         inst: 'https://www.instagram.com',
         position: 'Старший менеджер',
      },
      {
         avatar: manager_photo,
         name: 'Антон Шастун',
         tg: 'https://web.telegram.org',
         viber: 'https://viber.com',
         inst: 'https://instagram.com',
         position: 'Старший менеджер',
      },
      {
         avatar: manager_photo,
         name: 'Евгений Онегин',
         tg: 'https://telegram.org',
         viber: 'https://viber.com',
         inst: 'https://instagram.com',
         position: 'Старший менеджер',
      },
   ];

   return (
      <>
         {staffList.map(staff => (
            <div className="flex flex-col justify-center items-center gap-4" key={staff.name}>
               <img className="size-[250px] rounded-[50%] bg-[#D6B64B] " src={staff.avatar} alt="Фото менеджера" />
               <div className="p-2 flex items-center justify-center bg-[#D6B64B] h-[60px] rounded-[65px] gap-7">
                  <p className="py-3 px-7 text-[14px] bg-[#C7A943] rounded-[65px]">{staff.name}</p>
                  <div className="flex gap-1">
                     <Link to={staff.tg}>
                        <img src={tg_icon} alt="Логотип Telegram" />
                     </Link>
                     <Link to={staff.viber}>
                        <img src={viber_icon} alt="Логотип Viber" />
                     </Link>
                     <Link to={staff.inst}>
                        <img src={inst_icon} alt="Логотип Instagram" />
                     </Link>
                  </div>
               </div>
               <p className="text-[14px] text-center font-bold">{staff.position}</p>
            </div>
         ))}
      </>
   );
};
