import type { Car } from '../types/Car';
import { Link } from 'react-router';

interface CarItemProps {
   car: Car;
}

export const CarItem = ({ car }: CarItemProps) => {
   return (
      <div className="flex flex-col border-[#C7A94333] rounded-[20px] border">
         <img
            className="h-[270px] w-[258px] rounded-t-[20px] object-cover"
            src={car.photo}
            alt={`Автомобиль ${car.brand}`}
         />
         <Link className="p-3" to={`/catalog/${car.id}`}>
            <h5 className="text-xl text-primary font-bold">
               {car.brand} {car.model}
            </h5>
            <p className="font-bold">
               Комплектация: <span className="font-light">{car.confiquration}</span>
            </p>

            <p className="font-bold">
               Трансмиссия: <span className="font-light">{car.transmission}</span>
            </p>
            <p className="font-bold">
               Привод: <span className="font-light">{car.drive}</span>
            </p>
            <p className="font-bold">
               Двигатель: <span className="font-light">{car.engine}</span>
            </p>
            <p className="font-bold">
               Пробег: <span className="font-light">{car.mileage}</span>
            </p>
            <p className="font-bold">
               Год: <span className="font-light">{car.year}</span>
            </p>
            <p className="flex items-center justify-between font-bold text-[18px]">
               <p>
                  <span className="line-through">{car.price}$</span>
                  <span className="pl-2 font-bold text-primary text-[23px] ">{car.discount}$</span>
               </p>
               <button className="size-[50px] content-center bg-primary rounded-[15px]">
                  <svg width="48" height="48" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                     <path
                        d="M29.9395 17.1898L13.7736 26.5231M29.9395 17.1898L27.0113 28.118M29.9395 17.1898L19.0113 14.2616"
                        stroke="white"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                     />
                  </svg>
               </button>
            </p>
         </Link>
      </div>
   );
};
