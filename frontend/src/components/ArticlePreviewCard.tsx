import article_car from '../assets/images/article_preview.jpg';

export const ArticlePreviewCard = () => {
   return (
      <div className="w-full flex flex-col items-center gap-4">
         <img className="size-[200px] rounded-[50%] object-cover" src={article_car} alt="Превью статьи" />
         <p className="font-bold text-center">Привезли для клиента GMC Acadia 2022 2.0l в комплектации SLT.</p>
         <p className="text-center text-[#FFFFFF80] text-[12px]">
            Автомобиль практически целый, с минимальными повреждениями по нижней части. Стоимость автомобиля со всеми
            расходами (кроме ремонта) составила - 24.500$, что примерно на 30% меньше аналогичных вариантов на рынке РБ.
         </p>
      </div>
   );
};
