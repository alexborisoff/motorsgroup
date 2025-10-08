import { FeedbackForm } from './FeedbackForm';

import phoneIcon from '../assets/images/phone_icon.svg';
import mail from '../assets/images/mail.svg';
import tg from '../assets/images/telegram_black.svg';
import viber from '../assets/images/viber_black.svg';
import inst from '../assets/images/insta_black.svg';
import tiktok from '../assets/images/tiktok_black.svg';
import youtube from '../assets/images/youtube_black.svg';

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

export const SupportForm = () => {
   return (
      <section className="flex py-3 justify-around rounded-4xl h-[483px] bg-[#202020]">
         <FeedbackForm />

         <div className="h-[423px] mt-4 font-bold flex flex-col justify-center pl-10 gap-5 bg-[#C7A943] w-[471px] rounded-3xl">
            <h2>Основные контакты</h2>
            <div className="flex flex-col gap-2">
               <a className="inline-flex" href="mailto:support@motorsgroup.by">
                  <img src={mail} alt="Логотип email" />
                  <span className="pl-3">support@motorsgroup.by</span>
               </a>
               <a className="inline-flex" href="tel:+375445771313">
                  <img src={phoneIcon} alt="Логотип вызова" />
                  <span className="pl-3">+375 (44) 577-13-13</span>
               </a>
               <a className="inline-flex" href="tel:+375445771313">
                  <img src={phoneIcon} alt="Логотип вызова" />
                  <span className="pl-3">+375 (44) 577-13-13</span>
               </a>
            </div>

            <div>
               <p className="font-light"> Адрес: г. Минск ул. Тиражная 150, офис 311</p>
               <p>Время работы: пн-пт с 10.00 до 19.00</p>
            </div>

            <div className="flex gap-3">
               {SOCIAL_NETWORKS.map(({ href, icon, alt }) => (
                  <a key={alt} href={href} target="_blank" rel="">
                     <img src={icon} alt={alt} />
                  </a>
               ))}
            </div>
         </div>
      </section>
   );
};
