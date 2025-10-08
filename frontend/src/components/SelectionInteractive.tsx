import car from '../assets/images/car_selection.png';

export const SelectionInteractive = () => {
   return (
      <>
         <h3 className="mx-auto max-w-7xl px-4 py-1 font-extrabold">Подбор автомобиля</h3>
         <div className=" h-[56vh]">
            <div className="absolute right-[-340px] top-[100px] rounded-[50%] size-[666px] bg-[#C7A943]"></div>
            <img className="absolute right-0 top-20" src={car} alt="Картинка машины" />
         </div>
      </>
   );
};
