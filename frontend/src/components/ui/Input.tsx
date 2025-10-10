type InputProps = {
   name: string;
   type?: string;
   value: string;
   placeholder?: string;
   required?: boolean;
   onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export const Input: React.FC<InputProps> = ({ name, type = 'text', value, placeholder, required = true, onChange }) => {
   return (
      <input
         id={name}
         type={type}
         name={name}
         value={value}
         placeholder={placeholder}
         required={required}
         onChange={onChange}
         className="w-full border placeholder:text-white placeholder:text-[14px] bg-[#FFFFFF33] border-[#FFFFFF4D] pl-4 rounded-main"
      />
   );
};
