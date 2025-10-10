import { Link } from 'react-router';
import phoneIcon from '../../assets/images/phone_orange.svg';
import tg from '../../assets/images/telegram.svg';
import viber from '../../assets/images/viber.svg';
import inst from '../../assets/images/insta.svg';
import tiktok from '../../assets/images/tiktok.svg';
import youtube from '../../assets/images/youtube.svg';

type SocialItems = {
   href: string;
   icon: string;
   alt: string;
};

const SOCIAL_NETWORKS: SocialItems[] = [
   { href: 'https://t.me/+l4nR_mV4NIA2ZDZi', icon: tg, alt: 'Telegram' },
   {
      href: 'https://invite.viber.com/?g2=AQBWA1OXgy4l7VQW4g3pbxqdzTrv6UdnzxchwaQZSXwlpj%2BcknstATe96Ct9%2BZn%2B&',
      icon: viber,
      alt: 'Viber',
   },
   { href: 'https://www.instagram.com/motorsgroup.by/', icon: inst, alt: 'Instagram' },
   { href: 'https://www.tiktok.com/@motorsgroup.ltd?_t=8s3Z1e9AHeI&_r=1', icon: tiktok, alt: 'TikTok' },
   { href: 'https://www.youtube.com/@motorsgroup.belarus', icon: youtube, alt: 'Youtube' },
];

export const Footer = () => {
   return (
      <footer className=" mt-15">
         <iframe
            src="https://yandex.ru/map-widget/v1/?um=constructor%3Aa627a9a761e22011f6d40e59279025a6d1404b1f8e2393463ae5d14d0fca4735&amp;source=constructor"
            width="100%"
            height="350"
            loading="lazy"
            title="Место расположение MotorsGroup на карте"
         ></iframe>

         <div className="grid grid-cols-1 text-center h-[242px] sm:flex sm:justify-around sm:items-center sm:text-start">
            <div className="flex flex-col gap-4">
               <Link to="/">
                  <img src="logo.png" alt="Logo" />
               </Link>
               <p>
                  <span>
                     Общества с ограниченой ответственностью
                     <br />
                  </span>
                  «МоторсГруппЛимитед», УНП 193823519
               </p>
               <p>2025 © MotorsGroup</p>
            </div>

            <div className="flex flex-col gap-2">
               <p className="text-primary font-semibold mb-3 text-[16px]"> Основное </p>
               <Link className="" to="/catalog">
                  Каталог автомобилей
               </Link>
               <Link to="/selection">Подбор автомобиля</Link>
               <Link to="/contacts">Контакты</Link>
               <Link to="/articles">Статьи</Link>
            </div>

            <div className="flex flex-col gap-2">
               <p className="text-primary font-semibold mb-3 text-[16px]"> Информация </p>
               <Link to="/privacy">Политика конфиденциальности</Link>
               <p>Пользовательское Соглашение</p>
               <p>Условия доставки и возрата </p>
               <Link to="/warranty">Гарантии</Link>
            </div>

            <div>
               <p>Адрес: г. Минск ул. Тиражная 150, офис 311</p>
               <p className="font-semibold">Время работы: пн-пт с 10.00 до 19.00</p>
               <a
                  href="tel:+375445771313"
                  className="inline-flex items-center gap-3  text-primary  py-2 hover:opacity-95 transition-opacity"
                  aria-label="Позвонить +375 (44) 577-13-13"
               >
                  <img src={phoneIcon} alt="Телефон" />
                  <span className="flex flex-col leading-tight">
                     <span className=" font-semibold">+375 (44) 577-13-13</span>
                  </span>
               </a>

               <a
                  href="tel:+375445771313"
                  className="flex items-center gap-3 text-primary  py-2 hover:opacity-95 transition-opacity"
                  aria-label="Позвонить +375 (44) 577-13-13"
               >
                  <img src={phoneIcon} alt="Телефон" />
                  <span className="flex flex-col leading-tight">
                     <span className=" font-semibold">+375 (44) 577-13-13</span>
                  </span>
               </a>

               <div className="flex gap-3">
                  {SOCIAL_NETWORKS.map(({ href, icon, alt }) => (
                     <a key={alt} href={href} target="_blank" rel="">
                        <img src={icon} alt={alt} />
                     </a>
                  ))}
               </div>
            </div>
         </div>
      </footer>
   );
};
