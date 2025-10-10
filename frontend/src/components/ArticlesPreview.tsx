import { ArticlePreviewCard } from './ArticlePreviewCard';
import { ArrowLeft } from './UI/ArrowLeft';
import { ArrowRight } from './UI/ArrowRight';

export const ArticlesPreview = () => {
   return (
      <div className="flex gap-10">
         <div className=" flex flex-col gap-7">
            <h2 className="w-[490px] font-bold leading-[40px] ">
               То, что мы делаем, это не просто пригон автомобилей. Это{' '}
               <span className="text-primary"> забота, опыт и страсть,</span> вложенные в каждый миллиметр вашего
               автомобиля.
            </h2>
            <p className="w-[400px] text-[14px]">
               Мы горим своим делом и постоянно учимся, чтобы быть лучшими. Сотни довольных клиентов и пригнанных для
               них авто — наша лучшая рекомендация. Когда вы доверяете нам свою задачу, мы выкладываемся на все 100%,
               чтобы предоставить услугу безупречно.
            </p>
         </div>
         <div className="flex flex-col justify-between gap-5">
            <div className="flex gap-8">
               <ArticlePreviewCard />
               <ArticlePreviewCard />
            </div>
            <div className="flex items-center gap-2 justify-between">
               <p className="w-[60%] bg-[#FFFFFF33] h-0.5">3/10</p>
               <div className="flex gap-8 ">
                  <ArrowLeft />
                  <ArrowRight />
               </div>
            </div>
         </div>
      </div>
   );
};
