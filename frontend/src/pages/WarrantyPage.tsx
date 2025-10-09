import { FileDownload } from '../components/UI/FileDownload';
import box from '../assets/images/front_box.png';
import envelope from '../assets/images/front_envelope.png';
import marker from '../assets/images/front_marker.png';

export const WarrantyPage = () => {
   return (
      <section className="mx-auto max-w-7xl px-4 py-10">
         <h1 className=" pb-10 text-center sm:text-left">Гарантии</h1>
         <p className="text-[14px] text-justify">
            Политика «Знай своего клиента» (KYC) в последнее время приобретает все большее значение во всем мире,
            особенно среди банков и других финансовых учреждений для предотвращения кражи личных данных, отмывания
            денег, финансового мошенничества и террористической деятельности. Компания Motorsgroup.by абсолютно не
            терпит махинации и принимает все возможные меры для их предотвращения. Любая мошенническая деятельность
            будет задокументирована, и все связанные с ней учетные записи будут немедленно закрыты. Все средства на этих
            счетах будут конфискованы.
         </p>
         <p className="text-[14px] mt-3">
            Motorsgroup.by обеспечивает безопасность любых конфиденциальных данных, а именно информации которую вы
            оставляете на сайте и транзакциях, которые вы совершаете.
         </p>

         <div className="flex justify-between pb-10">
            <FileDownload>Политика предотвращения и урегулирования конфликта интересов</FileDownload>
            <FileDownload>Документы предпринимательской деятельности на территории Республики Беларуси</FileDownload>
            <FileDownload>Документы предпринимательской деятельности на территории Республики Беларуси</FileDownload>
            <FileDownload>Политика предотвращения и урегулирования конфликта интересов</FileDownload>
         </div>

         <h2 className="text-[40px] font-bold pb-10">Этапы работы</h2>
         <div className="flex flex-col gap-10">
            <div className="gridLayer">
               <div className="relative flex items-center justify-between gap-[18px] border border-[#c7a94333] rounded-[0px_30px] bg-[#121212] py-[25px] px-[30px]">
                  <div className="absolute top-0 translate-y-[-50%] left-[30px] text-5xl font-bold">01</div>
                  <div>
                     <h3 className="font-bold text-primary">ЗАКЛЮЧЕНИЕ ДОГОВОРА</h3>
                     <p>
                        При заключении соглашений, договоров или иных обязательств важно четко устанавливать условия их
                        исполнения, конкретные сроки выполнения и возможные последствия за несоблюдение взятых на себя
                        обязательств.
                     </p>
                  </div>
                  <img src={envelope} alt="Заключение договора" />
               </div>
               <div className="relative flex items-center justify-between gap-[18px] rounded-[0px_30px] bg-primary py-[25px] px-[30px]">
                  <div className="absolute top-0 translate-y-[-50%] left-[30px] text-5xl font-bold">02</div>
                  <div>
                     <h3 className="text-[27px] font-bold">ПОДБОР И ПРОВЕРКА</h3>
                     <p>
                        При выборе автомобиля крайне важно провести проверку на выявление возможного скрученного
                        пробега, скрытых повреждений, а также анализ истории обслуживания.
                     </p>
                  </div>
               </div>
            </div>

            <div className="reverseGridLayer">
               <div className="relative flex items-center justify-between gap-[18px] rounded-[0px_30px] bg-primary py-[25px] px-[30px]">
                  <div className="absolute top-0 translate-y-[-50%] left-[30px] text-5xl font-bold">03</div>
                  <div>
                     <h3 className="text-[27px] font-bold">ТОРГИ И ОПЛАТА</h3>
                     <p>
                        Процесс приобретения автомобиля через торги требует соблюдения этапов оплаты и оформления
                        сделки. После завершения торгов наступает этап внесения первоначального платежа.
                     </p>
                  </div>
               </div>
               <div className="relative flex items-center justify-between gap-[18px] border border-[#c7a94333] rounded-[0px_30px] bg-[#121212] py-[25px] px-[30px]">
                  <div className="absolute top-0 translate-y-[-50%] left-[30px] text-5xl font-bold">04</div>
                  <div>
                     <h3 className="text-3xl font-bold text-primary">ДОСТАВКА АВТО В ПОРТ</h3>
                     <p>
                        Процесс транспортировки автомобиля в порт требует тщательного контроля на всех этапах, включая
                        проверку его состояния. Для обеспечения безопасности и подтверждения целостности груза делаем
                        фото/видео.
                     </p>
                  </div>
                  <img src={box} alt="Доставка авто в порт" />
               </div>
            </div>

            <div className="gridLayer">
               <div className="relative flex items-center justify-between gap-[18px] border border-[#c7a94333] rounded-[0px_30px] bg-[#121212] py-[25px] px-[30px]">
                  <div className="absolute top-0 translate-y-[-50%] left-[30px] text-5xl font-bold">05</div>
                  <div>
                     <h3 className="text-3xl font-bold text-primary">ПРОМЕЖУТОЧНАЯ ТОЧКА</h3>
                     <p>
                        При организации транспортировки автомобиля на дальние расстояния часто используется
                        промежуточная точка, после которой уже автомобиль отправляется в ваш город назначения.
                     </p>
                  </div>
                  <img src={marker} alt="Промежуочная точка" />
               </div>
               <div className="relative flex items-center justify-between gap-[18px] rounded-[0px_30px] bg-primary py-[25px] px-[30px]">
                  <div className="absolute top-0 translate-y-[-50%] left-[30px] text-5xl font-bold">06</div>
                  <div>
                     <h3 className=" font-bold">ТАМОЖЕННОЕ ОФОРМЛЕНИЕ</h3>
                     <p>
                        Процесс таможенного оформления является важным этапом при ввозе автомобиля и требует точного
                        соблюдения всех процедур и правил. Мы оказываем полное сопровождение на всех этапах.
                     </p>
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
};
