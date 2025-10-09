type InputFormProps = {
   name: string;
   type?: string;
   value: string;
   placeholder?: string;
   required?: boolean;
   multiline?: boolean;
   checked?: boolean;
   onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
};

export const InputForm: React.FC<InputFormProps> = ({
   name,
   type = 'text',
   value,
   placeholder,
   required = true,
   multiline = false,
   checked = false,
   onChange,
}) => {
   return (
      <div className="flex flex-col gap-1">
         {multiline ? (
            <textarea
               id={name}
               name={name}
               value={value}
               placeholder={placeholder}
               required={required}
               onChange={onChange}
               className="border w-[595px] bg-main-dark border-[#292929] p-2 rounded-[20px] resize-none"
               rows={4}
            />
         ) : (
            <input
               id={name}
               type={type}
               name={name}
               value={value}
               placeholder={placeholder}
               required={required}
               checked={checked}
               onChange={onChange}
               className="w-full border bg-main-dark border-[#292929] rounded-main"
            />
         )}
      </div>
   );
};
