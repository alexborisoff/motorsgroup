interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
   children: React.ReactNode;
   classname: string;
   onClick?: () => void;
}

export const Button: React.FC<ButtonProps> = ({ children, classname }) => {
   return <button className={classname}>{children}</button>;
};
