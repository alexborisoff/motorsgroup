import { SearchBar } from '../components/UI/SearchBar';
// import { useGetCarsQuery } from '../features/cars/carsApi';
import type { Car } from '../types/Car';
import { useEffect, useState } from 'react';
import { fetchCars } from '../features/cars/carsApi';
import { Pagination } from '../components/Pagination';

export const CatalogPage = () => {
   const [carList, setCarList] = useState<Car[]>([]);
   const [isLoading, setIsLoading] = useState<boolean>(true);

   useEffect(() => {
      const loadCars = async () => {
         try {
            const data = await fetchCars();
            setCarList(data);
         } finally {
            setIsLoading(false);
         }
      };

      loadCars();
   }, []);

   return (
      <main className="w-full flex flex-col justify-center items-center ">
         <section className="flex justify-center items-center gap-2">
            <h1>Каталог автомобилей</h1>
            <SearchBar />
         </section>

         <section className="flex flex-wrap justify-start w-[80%] items-center gap-[30px]">
            <div>{isLoading ? <p>Loader</p> : <></>}</div>
            <Pagination cars={carList} itemsPerPage={8} />
         </section>
      </main>
   );
};
