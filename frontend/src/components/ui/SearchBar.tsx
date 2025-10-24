import type { ChangeEvent } from 'react';

interface SearchBarProps {
   value?: string;
   placeholder?: string;
   type?: string;
   className?: string;
   onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const SearchBar = ({ type = 'text', value, placeholder = 'Начните вводить модель для поиска в каталоге', className, onChange }: SearchBarProps) => {
   return (
      <div className={`relative w-[50vw] bg-[#202020] rounded-main max-w-sm ${className}`}>
         <svg
            className="absolute left-1 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5 pointer-events-none"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
         >
            <path
               strokeLinecap="round"
               strokeLinejoin="round"
               d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 104.5 4.5a7.5 7.5 0 0012.15 12.15z"
            />
         </svg>

         <input
            type={type}
            value={value}
            placeholder={placeholder}
            onChange={onChange}
            className="w-[40vw] rounded-main pl-10 focus:ring-2 focus:ring-primary focus:outline-none"
         />
      </div>
   );
};
