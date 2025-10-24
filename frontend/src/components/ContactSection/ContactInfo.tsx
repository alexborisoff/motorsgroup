import phoneIcon from '../../assets/images/icons/phone_icon.svg';
import mail from '../../assets/images/icons/mail.svg';
import tg from '../../assets/images/icons/telegram_black.svg';
import viber from '../../assets/images/icons/viber_black.svg';
import inst from '../../assets/images/icons/insta_black.svg';
import tiktok from '../../assets/images/icons/tiktok_black.svg';
import youtube from '../../assets/images/icons/youtube_black.svg';

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

export const ContactInfo = () => {
   return (
      <div className="h-[40vh] font-bold flex flex-col justify-center pl-10 gap-10 bg-primary w-[471px] rounded-3xl">
         <h4>Основные контакты</h4>
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
            <p className="font-light"> Адрес: г. Минск ул. Тиражная 150, офис 307</p>
            <p>Время работы: пн-пт с 10.00 до 19.00</p>
            <div className="flex pt-5 gap-[10px]">
               {SOCIAL_NETWORKS.map(({ href, icon, alt }) => (
                  <a key={alt} href={href} target="_blank" rel="">
                     <img src={icon} alt={alt} />
                  </a>
               ))}
            </div>
         </div>
      </div>
   );
};
