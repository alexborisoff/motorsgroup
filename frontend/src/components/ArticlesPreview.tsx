
import { ArticlePreviewCard } from './ArticlePreviewCard';
import { ArrowLeft } from './UI/ArrowLeft';
import { ArrowRight } from './UI/ArrowRight';

export const ArticlesPreview = () => {
   return (
      <div className="flex">
         <div className="flex flex-col gap-7">
            <h3 className="w-[70%] font-extrabold leading-none ">
               То, что мы делаем, это не просто пригон автомобилей. Это{' '}
               <span className="text-[#C7A943]"> забота, опыт и страсть,</span> вложенные в каждый миллиметр вашего
               автомобиля.
            </h3>
            <p className="w-[55%]">
               Мы горим своим делом и постоянно учимся, чтобы быть лучшими. Сотни довольных клиентов и пригнанных для
               них авто — наша лучшая рекомендация. Когда вы доверяете нам свою задачу, мы выкладываемся на все 100%,
               чтобы предоставить услугу безупречно.
            </p>
         </div>
         <div className="flex flex-col">
            <div className='flex '>
            <ArticlePreviewCard />
            <ArticlePreviewCard />
            </div>
            <div className='flex items-center gap-2'>
                <p className="w-[80%] bg-[#FFFFFF33] h-0.5">3/10</p>
               <div className="flex gap-2 ">
                  <ArrowLeft />
                  <ArrowRight />
               </div>
            </div>
         </div>

         
      </div>
   );
};
