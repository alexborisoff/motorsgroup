import { Autoplay } from 'swiper/modules';
import { Review } from './Review';
import { Swiper, SwiperSlide } from 'swiper/react';

export const ReviewList = () => {
   return (
      <Swiper
         className="w-full"
         pagination={{
            dynamicBullets: true,
         }}
         modules={[Autoplay]}
         spaceBetween={20}
         slidesPerView={3}
         loop
         autoplay
      >
         <SwiperSlide>
            <Review />
         </SwiperSlide>
         <SwiperSlide>
            <Review />
         </SwiperSlide>
         <SwiperSlide>
            <Review />
         </SwiperSlide>
         <SwiperSlide>
            <Review />
         </SwiperSlide>
         <SwiperSlide>
            <Review />
         </SwiperSlide>
         <SwiperSlide>
            <Review />
         </SwiperSlide>
         <SwiperSlide>
            <Review />
         </SwiperSlide>
      </Swiper>
   );
};
