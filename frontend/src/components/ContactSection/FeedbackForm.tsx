import { useState } from 'react';
import { Button } from '../UI/Button';
import { InputForm } from '../UI/InputForm';

type ThemeOption = 'choose_car' | 'delivery_questions' | 'cooperation' | 'other';

interface FeedbackForm {
   name: string;
   phone: string;
   email: string;
   theme: string;
   service: ThemeOption;
   message: string;
}

export const FeedbackForm = () => {
   const [form, setForm] = useState<FeedbackForm>({
      name: '',
      phone: '',
      email: '',
      theme: '',
      service: 'choose_car',
      message: '',
   });

   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { name, value } = e.target;
      setForm({ ...form, [name]: value });
   };

   const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault();
      alert('Форма отправлена');
      setForm({ name: '', phone: '', email: '', theme: '', service: 'choose_car', message: '' });
   };
   return (
      <form onSubmit={handleSubmit} className="flex ">
         <div className="flex flex-col justify-around items-center">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
               <InputForm
                  name="name"
                  placeholder="Как Вас зовут?"
                  type="text"
                  value={form.name}
                  onChange={handleChange}
                  required
               />
               <InputForm
                  name="phone"
                  type="text"
                  placeholder="Номер телефона"
                  value={form.phone}
                  onChange={handleChange}
                  required
               />
               <InputForm name="email" placeholder="E-mail адрес" value={form.email} onChange={handleChange} required />
               <InputForm
                  name="theme"
                  placeholder="Тема обращения"
                  value={form.theme}
                  onChange={handleChange}
                  required
               />
            </div>

            <div>
               <h6>Выберете услугу</h6>
               <div className="flex items-center">
                  <InputForm
                     name="service"
                     type="radio"
                     value="choose_car"
                     onChange={handleChange}
                     required={false}
                     checked={form.service === 'choose_car'}
                  />
                  <label className="pr-3 pl-1" htmlFor="choose_car">
                     Подбор автомобиля
                  </label>

                  <InputForm
                     name="service"
                     type="radio"
                     value="delivery_questions"
                     onChange={handleChange}
                     required={false}
                     checked={form.service === 'delivery_questions'}
                  />
                  <label className="pr-3 pl-1" htmlFor="delivery_questions">
                     Вопросы доставки
                  </label>

                  <InputForm
                     name="service"
                     type="radio"
                     value="cooperation"
                     required={false}
                     onChange={handleChange}
                     checked={form.service === 'cooperation'}
                  />
                  <label className="pr-3 pl-1" htmlFor="cooperation">
                     Сотрудничество
                  </label>

                  <InputForm
                     name="service"
                     type="radio"
                     value="other"
                     required={false}
                     onChange={handleChange}
                     checked={form.service === 'other'}
                  />
                  <label className="pr-3 pl-1" htmlFor="other">
                     Другое
                  </label>
               </div>
            </div>
            <div>
               <InputForm
                  name="message"
                  placeholder="Напишите сообщение"
                  value={form.message}
                  onChange={handleChange}
                  multiline
                  required
               />
            </div>
            <div className="items-center">
               <Button classname="w-[268px] h-[50px] bg-primary rounded-main">Отправить сообщение</Button>
            </div>
         </div>
      </form>
   );
};
