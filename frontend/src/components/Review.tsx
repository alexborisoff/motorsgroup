import { Button } from './ui/Button';
import { StarRounded } from './ui/StarRounded';

export const Review = () => {
   return (
      <div className="flex justify-around flex-col rounded-[0px_30px] w-[33%] h-[226px] bg-white">
         <div className="flex row-flex">
            <StarRounded />
            <StarRounded />
            <StarRounded />
            <StarRounded />
            <StarRounded />
         </div>

         <div>
            <p className="text-black">
               Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
               dolore magna aliqua quis nostrud exercitation ullamcoLorem ipsum dolor sit amet, consectetur adipiscing
               elit, sed do
            </p>
         </div>

         <div>
            <div >
               <Button classname="flex bg-black gap-2 text-white font-bold rounded-[65px] p-4">
                  Google Reviews
                  <svg
                     xmlns="http://www.w3.org/2000/svg"
                     width="24"
                     height="24"
                     fill="none"
                     viewBox="0 0 24 24"
                     stroke="currentColor"
                     strokeWidth={2}
                     className="text-white"
                  >
                     <path strokeLinecap="round" strokeLinejoin="round" d="M13 11l8-8m0 0h-6m6 0v6" />
                     <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M20 13v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h7"
                     />
                  </svg>
               </Button>
            </div>
         </div>
      </div>
   );
};
