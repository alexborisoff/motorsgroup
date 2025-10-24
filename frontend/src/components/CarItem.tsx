import { Fragment } from 'react/jsx-runtime';
import type { Car } from '../types/Car';
import { Link } from 'react-router';

interface CarItemProps {
   car: Car;
}

export const CarItem = ({ car }: CarItemProps) => {
   return (
      <Fragment key={car.id}>
         <div className='flex flex-col border-[#C7A94333] rounded-[20px] border-1'>
            <img
               className="h-[270px] w-[258px] rounded-t-[20px] object-cover"
               src={car.photo}
               alt={`Автомобиль ${car.brand}`}
            />
            <Link className='p-3' to={`/catalog/${car.id}`}>
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
               <p className="font-bold text-[18px]">
                  <span className="line-through">{car.price}$</span>
                  <span className="no-underline decoration-none font-bold text-primary text-[23px] ">
                     {car.discount}$
                  </span>
                  <button className='size-[50px] bg-primary rounded-[15px]'> -- </button>
               </p>
            </Link>
         </div>
      </Fragment>
   );
};
