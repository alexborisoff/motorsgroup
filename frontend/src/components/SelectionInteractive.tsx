import car from '../assets/images/select_auto.png';

export const SelectionInteractive = () => {
   return (
      <section className="relative overflow-hidden ">
         <h1 className="mx-auto max-w-7xl px-4 py-5 font-extrabold ">Подбор автомобиля</h1>

         <div className="h-[60vh] ">
            <div className="absolute left-[1333px] top-[30px] rounded-[50%] size-[666px] bg-primary"></div>
            <img className="h-[695px] absolute left-[1000px] top-1 z-3" src={car} alt="Картинка машины" />
         </div>
      </section>
   );
};
