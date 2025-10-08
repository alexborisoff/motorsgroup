import { Button } from '../UI/Button';
import { StarRounded } from '../UI/StarRounded';
import { GoOutIcon } from '../GoOutIcon';
import user_avatar from '../../assets/images/user_ava.png';

export const Review = () => {
   return (
      <div className="flex justify-around flex-col px-2 pt-4 pb-2 rounded-[0px_30px] w-[100%] bg-white ">
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

         <div className="px-2 flex justify-between">
            <div className="flex gap-2">
               <img className="size-12" src={user_avatar} alt="Иконка пользователя" />
               <div className="">
                  <p className="text-black font-bold text-[18px]/5">Maxin Will</p>
                  <p className="text-[#02090280] text-[14px]">Product Manager</p>
               </div>
            </div>
            <Button classname="flex bg-black gap-2 text-white font-bold rounded-[65px] p-4">
               Google Reviews
               <GoOutIcon />
            </Button>
         </div>
      </div>
   );
};
