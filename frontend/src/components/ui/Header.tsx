import { useState } from 'react';
import phoneIcon from '../../assets/images/icons/phone_icon.svg';
import { NavLink, Link } from 'react-router';

export const Header = () => {
   const [menuOpen, setMenuOpen] = useState<boolean>(false);

   const navLinkClass = ({ isActive }: { isActive: boolean }) =>
      `px-5 py-2 rounded-3xl transition-colors  ${
         isActive ? 'bg-[#C7A943] text-white font-semibold' : 'text-white/80 hover:text-[#C7A943]'
      }`;

   return (
      <header className="flex justify-around items-center h-25">
         <Link to="/">
            <img src="./logo.png" alt="Логотип" />
         </Link>

         <div className="text-white">
            <nav className="flex h-16 px-5 text-center items-center gap-3 rounded-4xl bg-[#202020]">
               <NavLink to="/" className={navLinkClass}>
                  Главная
               </NavLink>
               <NavLink to="/selection" className={navLinkClass}>
                  Подобрать авто
               </NavLink>
               <NavLink to="/catalog" className={navLinkClass}>
                  Каталог автомобилей
               </NavLink>
               <NavLink to="/articles" className={navLinkClass}>
                  Статьи
               </NavLink>
               <NavLink to="/warranty" className={navLinkClass}>
                  Гарантии
               </NavLink>
               <NavLink to="/contacts" className={navLinkClass}>
                  Контакты
               </NavLink>
            </nav>
         </div>

         <a
            href="tel:+375445771313"
            className="inline-flex items-center gap-3 bg-[#C7A943] text-[#1A1A1A] rounded-full px-4 py-2 hover:opacity-95 transition-opacity"
            aria-label="Позвонить +375 (44) 577-13-13"
         >
            <img src={phoneIcon} alt="Телефон" className="h-5 w-5" />
            <span className="flex flex-col leading-tight">
               <span className="text-white font-semibold">+375 (44) 577-13-13</span>
               <span className="text-[12px] text-white/90">Единый номер в РБ</span>
            </span>
         </a>
      </header>
   );
};
