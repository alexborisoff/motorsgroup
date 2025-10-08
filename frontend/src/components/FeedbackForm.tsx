import { useState } from 'react';
import { Button } from './UI/Button';
import { InputForm } from './UI/InputForm';
import axios from 'axios';

interface FeedbackForm {
   name: string;
   phone: string;
   email: string;
   theme: string;
   message: string;
}

export const FeedbackForm = () => {
    const [form, setForm] = useState<FeedbackForm>({
      name: '',
      phone: '',
      email: '',
      theme: '',
      message: '',
   });
   const [status, setStatus] = useState<string>('');

   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setForm({ ...form, [e.target.name]: e.target.value });
   };
    const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault();
      try {
         await axios.post('http://localhost:5000/api/send-email', form);
         setStatus('Сообщение отправлено!');
         setForm({ name: '', phone: '', email: '', theme: '', message: '' });
      } catch (error) {
         console.error(error);
         setStatus('Ошибка при отправке.');
      }
   };
   return (
      <form onSubmit={handleSubmit} className="flex">
         <div className="flex flex-col justify-around items-center">
            <div className="flex gap-4">
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
            </div>
            <div className="flex gap-4">
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
               <h4>Выберете услугу</h4>
               <div className="flex items-center">
                  <InputForm name="choose_car" type="radio" value="choose_car" onChange={handleChange} checked />
                  <label className="pr-3 pl-1" htmlFor="choose_car">
                     Подбор автомобиля
                  </label>

                  <InputForm
                     name="delivery_questions"
                     type="radio"
                     value="delivery_questions"
                     onChange={handleChange}
                  />
                  <label className="pr-3 pl-1" htmlFor="delivery_questions">
                     Вопросы доставки
                  </label>

                  <InputForm name="cooperation" type="radio" value="cooperation" onChange={handleChange} />
                  <label className="pr-3 pl-1" htmlFor="cooperation">
                     Сотрудничество
                  </label>

                  <InputForm name="other" type="radio" value="other" onChange={handleChange} />
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
               <Button classname="w-[268px] h-[50px] bg-[#C7A943] rounded-[65px]">Отправить сообщение</Button>
            </div>
         </div>
      </form>
   );
};
