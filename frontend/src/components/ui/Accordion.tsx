import { useState } from 'react';

type AccordionType = {
   question: string;
   answer: string;
};

export const Accordion: React.FC<AccordionType> = ({ question, answer }) => {
   const [accordionStatus, setAccordionStatus] = useState<boolean>(false);

   return (
      <div className="py-[10px] border-[#FFFFFF1A] border-b">
         <button className="flex justify-between w-full" onClick={() => setAccordionStatus(!accordionStatus)}>
            <span className="text-xl font-bold">{question}</span>
            <svg className="fill-amber-50 shrink-0 ml-8" width="16" height="16" xmlns="http://www.w3.org/2000/svg">
               <rect
                  y="7"
                  width="16"
                  height="2"
                  rx="1"
                  className={`transform origin-center  transition duration-200 ease-out ${
                     accordionStatus && '!rotate-45'
                  }`}
               />
               <rect
                  y="7"
                  width="16"
                  height="2"
                  rx="1"
                  className={`transform origin-center rotate-90 transition duration-200 ease-out ${
                     accordionStatus && '!rotate-135 bg-[#C7A943]'
                  }`}
               />
            </svg>
         </button>

         <div
            className={`grid overflow-hidden transition-all duration-300 ease-in-out text-[#FFFFFF80] text-sm ${
               accordionStatus ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
            }`}
         >
            <p className="py-3 overflow-hidden">{answer}</p>
         </div>
      </div>
   );
};
