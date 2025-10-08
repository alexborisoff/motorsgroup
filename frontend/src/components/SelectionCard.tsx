import shipping from '../assets/images/logist.svg';
import prices from '../assets/images/prices.svg';
import catalog from '../assets/images/catalog.svg';

type SelecionType = {
   image: string;
   title: string;
   description: string;
};

export const SelectionCard = () => {
   const cardsList: SelecionType[] = [
      {
         image: shipping,
         title: 'Качественная логистика',
         description:
            'Мы организуем идеальную логистику, где главное — безаварийность и сохранность машины, а не просто скорость. Авто в надежных руках.',
      },
      {
         image: prices,
         title: 'Доступные цены',
         description:
            'Ваш бюджет - не препятствие, а задача для наших специалистов. Мы найдем автомобиль, где вы получите максимум качества за ваши деньги.',
      },
      {
         image: catalog,
         title: 'Большой выбор автомобилей',
         description:
            'Редкое авто — не проблема. Ищем машины на закрытых площадках и аукционах, где представлены уникальные лоты со всего мира.',
      },
   ];

   return (
      <>
         {cardsList.map(card => (
            <div className="p-4 flex items-center h-25 w-[670px] gap-5 bg-[#202020] rounded-[15px]" key={card.image}>
               <img src={card.image} alt="Картинка карточки" />
               <div>
                  <p className=" text-[20px] font-bold">{card.title}</p>
                  <p className="text-[16px]">{card.description}</p>
               </div>
            </div>
         ))}
      </>
   );
};
