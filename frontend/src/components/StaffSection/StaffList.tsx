import { ArrowLeft } from '../UI/ArrowLeft';
import { ArrowRight } from '../UI/ArrowRight';
import { StaffCard } from './StaffCard';

export const StaffList = () => {
   return (
      <>
         <div className="h-[660px] bg-[#c7a943] rounded-[65px] py-12 ">
            <div className="flex items-center justify-center gap-11 p-4">
               <p className="text-[16px]/5 w-[560px]  text-justify">
                  Приобретение автомобиля из США или Южной Кореи — ответственный шаг. Наши специалисты с многолетним
                  опытом работы в сфере подбора и пригона автомобилей помогут вам принять верное решение, взяв на себя
                  все заботы по выбору, проверке и доставке вашего будущего авто.
               </p>
               <h3 className="leading-none w-[496px] font-black">
                  Наша команда состоит из специалистов с большим опытом работы
               </h3>
            </div>
            <div className="flex items-center justify-around">
               <StaffCard />
            </div>

            <div className="flex items-center justify-around pt-10">
               <p className="w-[80%] bg-[#FFFFFF33] h-0.5">3/10</p>
               <div className="flex gap-2 ">
                  <ArrowLeft />
                  <ArrowRight />
               </div>
            </div>
         </div>
      </>
   );
};
