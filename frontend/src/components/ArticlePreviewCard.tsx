export const ArticlePreviewCard = () => {
   return (
      <div>
         <div className="flex flex-col items-center gap-4">
            <video className="size-[200px] rounded-[50%]" controls>
               <source src="https://www.youtube.com/watch?v=aMO1NMkz4q8&list=RDaMO1NMkz4q8&start_radio=1" />
            </video>
            <p className="font-bold text-center">Привезли для клиента GMC Acadia 2022 2.0l в комплектации SLT.</p>
            <p className="text-center">
               Автомобиль практически целый, с минимальными повреждениями по нижней части. Стоимость автомобиля со всеми
               расходами (кроме ремонта) составила - 24.500$, что примерно на 30% меньше аналогичных вариантов на рынке
               РБ.
            </p>
         </div>
      </div>
   );
};
