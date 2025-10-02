import { Button } from './Button';
import pdf_icon from '../assets/images/pdf_icon.png';
import type React from 'react';

interface FileDownloadProps {
   children: React.ReactNode;
}

export const FileDownload: React.FC<FileDownloadProps> = ({ children }) => {
   return (
      <div className="flex flex-col justify-center items-center gap-5 pt-7">
         <div>
            <img className="size-16" src={pdf_icon} alt="Загрузка PDF-файла" />
         </div>
         <p className="max-w-[230px] text-center">{children}</p>
         <Button classname="px-5 w-[180px] h-[50px] bg-[#C7A943] rounded-[65px]">Скачать</Button>
      </div>
   );
};
