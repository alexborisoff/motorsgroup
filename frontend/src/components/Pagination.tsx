import { useMemo, useState } from 'react';
import type { Car } from '../types/Car';
import { CarItem } from './CarItem';

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
      <>
         {carList.map(car => (
            <CarItem key={car.id} car={car} />
         ))}

         <div className="flex items-center gap-2">
            <button onClick={() => handlePageSwitch(currentPage - 1)} disabled={currentPage === 1}>
               {'<'}
            </button>

            {[...Array(totalPages)].map((_, index) => {
               const page = index + 1;
               return (
                  <button
                     key={page}
                     onClick={() => handlePageSwitch(page)}
                     className={`px-3 py-1 rounded transition ${
                        currentPage === page ? 'bg-primary text-white font-semibold' : 'bg-gray-100 hover:bg-gray-200'
                     }`}
                  >
                     {page}
                  </button>
               );
            })}

            <button
               onClick={() => handlePageSwitch(currentPage + 1)}
               disabled={currentPage === totalPages}
               className="px-3 py-1 bg-gray-200 rounded disabled:opacity-50 hover:bg-gray-300 transition"
            >
               {'>'}
            </button>
         </div>
      </>
   );
};
