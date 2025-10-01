import React, { useState, useEffect } from 'react';

interface CountDownProps {
   hours?: number;
   minutes?: number;
   seconds?: number;
}

export const Timer: React.FC<CountDownProps> = ({ hours = 0, minutes = 1, seconds = 59 }) => {
   const [[h, m, s], setTime] = useState<[number, number, number]>([hours, minutes, seconds]);

   const tick = () => {
      if (m === 0 && s === 0) {
         setTime([h - 1, 59, 59]);
      } else if (s === 0) {
         setTime([h, m - 1, 59]);
      } else {
         setTime([h, m, s - 1]);
      }
   };

   useEffect(() => {
      const timerID = setInterval(tick, 1000);
      return () => clearInterval(timerID);
   });

   return (
      <>
         <p className="text-5xl font-bold min-w-[200px]">{`${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}:${s
            .toString()
            .padStart(2, '0')}`}</p>
      </>
   );
};
