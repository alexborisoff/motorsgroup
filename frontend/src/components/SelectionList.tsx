import { SelectionCard } from "./SelectionCard";

export const SelectionList = () => {
   return (
      <div className="flex items-center justify-between gap-10">
         <div className="flex flex-col gap-7 ">
            <h3 className="font-extrabold leading-none w-[50vh]">
               Мы специализируемся на пригоне автомобилей и{' '}
               <span className="text-[#C7A943]"> предлагаем полный спектр услуг</span> ― от покупки и проверки
               автомобиля до доставки «под ключ».
            </h3>
            <p className="w-[48vh]">
               Покупайте без риска. Мы выбрали для вас только надежные площадки и добросовестных продавцов. Наша задача
               — ваша уверенность: поэтому мы лично проверяем каждый автомобиль «от и до» — от технического состояния до
               чистоты документов. Просто выберите свое идеальное авто.
            </p>
         </div>
         <div className="flex flex-col gap-3">
            <SelectionCard />
         </div>
      </div>
   );
};
