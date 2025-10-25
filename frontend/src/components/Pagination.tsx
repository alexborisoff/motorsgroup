import { useMemo, useState } from 'react';
import type { Car } from '../types/Car';
import { CarItem } from './CarItem';
import { MarkerLeft } from './UI/MarkerLeft';
import { MarkerRight } from './UI/MarkerRight';

interface PaginationProps {
   cars: Car[];
   itemsPerPage?: number;
}
export const Pagination: React.FC<PaginationProps> = ({ cars, itemsPerPage = 4 }) => {
   const [currentPage, setCurrentPage] = useState<number>(1);

   const totalPages = Math.ceil(cars.length / itemsPerPage);

   const carList = useMemo(() => {
      const start = (currentPage - 1) * itemsPerPage;
      return cars.slice(start, start + itemsPerPage);
   }, [cars, currentPage, itemsPerPage]);

   const handlePageSwitch = (page: number) => {
      if (page < 1 || page > totalPages) return;
      setCurrentPage(page);
   };

   return (
      <div className="flex flex-col">
         <div className="flex flex-wrap justify-start items-center gap-[30px]">
            {carList.map(car => (
               <CarItem key={car.id} car={car} />
            ))}
         </div>

         <div className="pt-7 flex items-center justify-center gap-2">
            <button onClick={() => handlePageSwitch(currentPage - 1)} disabled={currentPage === 1}>
               <MarkerLeft />
            </button>

            {[...Array(totalPages)].map((_, index) => {
               const page = index + 1;
               return (
                  <button
                     key={page}
                     onClick={() => handlePageSwitch(page)}
                     className={`size-[30px] rounded-[5px] transition duration-300 ${
                        currentPage === page
                           ? 'bg-primary text-white hover:bg-secondary'
                           : 'bg-dark-20 hover:bg-gray-700'
                     }`}
                  >
                     {page}
                  </button>
               );
            })}

            <button onClick={() => handlePageSwitch(currentPage + 1)} disabled={currentPage === totalPages}>
               <MarkerRight />
            </button>
         </div>
      </div>
   );
};
