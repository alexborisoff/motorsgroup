import { SelectionCard } from './SelectionCard';

export const SelectionList = () => {
   return (
      <section className="flex flex-col items-center justify-center w-full z-[-2] ">
         <div className="flex items-around justify-between gap-10">
            <div className="flex flex-col gap-7 ">
               <h2 className="font-extrabold leading-none w-[55vh]">
                  Мы специализируемся на пригоне автомобилей и{' '}
                  <span className="text-primary"> предлагаем полный спектр услуг</span> ― от покупки и проверки
                  автомобиля до доставки «под ключ».
               </h2>
               <p className="w-[48vh] text-[14px]">
                  Покупайте без риска. Мы выбрали для вас только надежные площадки и добросовестных продавцов. Наша
                  задача — ваша уверенность: поэтому мы лично проверяем каждый автомобиль «от и до» — от технического
                  состояния до чистоты документов. Просто выберите свое идеальное авто.
               </p>
            </div>

            <div className="flex flex-col gap-3 ">
               <SelectionCard />
            </div>
         </div>
      </section>
   );
};
