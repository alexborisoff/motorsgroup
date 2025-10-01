import { Button } from './ui/Button';
import pdf_icon from '../assets/images/pdf_icon.png';

export const FileDownload = () => {
   return (
      <div className="flex flex-col justify-center items-center gap-5 pt-7">
         <div>
            <img className="size-16" src={pdf_icon} alt="Загрузка PDF-файла" />
         </div>
         <p className="max-w-[230px] text-center">Политика предотвращения и урегулирования конфликта интересов</p>
         <Button />
      </div>
   );
};
