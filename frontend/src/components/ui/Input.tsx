type InputProps = {
   name: string;
   type?: string;
   value: string;
   placeholder?: string;
   required?: boolean;
   onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
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
         className="border placeholder:text-white bg-[#FFFFFF33] border-[#FFFFFF4D] p-5 rounded-[65px]"
      />
   );
};
