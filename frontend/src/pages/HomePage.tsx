import { useState } from 'react';
import car from '../assets/images/test.png';
import arrow from '../assets/images/arrow_right.svg';
import timer from '../assets/images/icons/timer.svg';
import { Link } from 'react-router';
import { Input } from '../components/UI/Input';
import { Timer } from '../components/Timer';
import { Button } from '../components/UI/Button';
import { FAQ } from '../components/FAQ';
import { ReviewList } from '../components/ReviewSection/ReviewList';
import { StaffList } from '../components/StaffSection/StaffList';
import { ArticlesPreview } from '../components/ArticlesPreview';
import { CountUp } from '../components/UI/CountUp';

interface SelectForm {
   model: string;
   budget: string;
   deadline: string;
   country: string;
}

export const HomePage = () => {
   const [selectionForm, setSelectionForm] = useState<SelectForm>({
      model: '',
      budget: '',
      deadline: '',
      country: '',
   });

   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setSelectionForm({ ...selectionForm, [e.target.name]: e.target.value });
   };

   const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      alert('Ваша заявка принята, ожидайте с Вами свяжется специалист');
      setSelectionForm({ model: '', budget: '', deadline: '', country: '' });
   };

   const handleClick = () => {};

   return (
      <main className="flex flex-col items-center gap-15 relative overflow-x-hidden">
         <section className="w-[80%] flex flex-col ">
            <img className="absolute top-[50px] left-[550px]  z-[4]" src={car} alt="Привезем автомобиль" />
            <h1 id="title" className="max-w-3xl pt-6 text-[90px] leading-26 font-extrabold tracking-normal ">
               <span className="text-primary">ПРИВЕЗЕМ</span> АВТОМОБИЛЬ
            </h1>
            <p className="text-[30px] max-w-[430px]">
               Под заказ из США и Кореи в Беларусь <span className="font-bold">с выгодой до 40%</span>
            </p>
            <p className="mt-5 max-w-[360px]">
               Мы понимаем, что покупка автомобиля — это важное решение, и наша цель — сделать этот процесс максимально
               простым и прозрачным.
            </p>
            <br />
            <p className="max-w-[340px]">
               Наша компания стремится стать ведущим поставщиком автомобилей из США и Кореи в Беларусь.
            </p>
            <div className="flex justify-between items-center">
               <div>
                  <button className="h-[50px] px-4 text-primary font-bold border border-primary bg-[#C7A94333] rounded-main">
                     <Link to="/catalog">
                        КАТАЛОГ АВТОМОБИЛЕЙ <img className="inline text-center" src={arrow} alt="Стрелка вправо" />
                     </Link>
                  </button>
               </div>
               <div>
                  <p className="relative text-[50px] font-extrabold z-30">24/7</p>
                  <p className="text-[14px]">Сопровождение клиента</p>
               </div>
               <div>
                  <p className="relative text-[50px] font-extrabold z-30">
                     <CountUp from={1} to={5} separator="," direction="up" duration={3} className="count-up-text" /> ЛЕТ
                  </p>
                  <p className="text-[14px]">Опыта в сфере подбора</p>
               </div>
               <div>
                  <p className="relative text-[50px] font-extrabold z-30">
                     <CountUp from={300} to={500} separator="" direction="up" duration={2} className="count-up-text" />+
                  </p>
                  <p className="text-[14px]">Авто доставляем в год</p>
               </div>
               <div>
                  <p className="relative text-[50px] font-extrabold z-30">
                     <CountUp from={5} to={40} separator="," direction="up" duration={1} className="count-up-text" />+
                  </p>
                  <p className="text-[14px]">Решений проблемных ситуаций</p>
               </div>
            </div>
         </section>

         <section className="flex flex-col justify-around h-[25vh] w-[80%] bg-primary rounded-4xl">
            <div className="flex justify-between items-center px-8 ">
               <div>
                  <h2 className="font-bold">Быстрый подбор автомобиля</h2>
                  <p>
                     Мы любим скорость так же как и вы, подберем вам автомобиль в течение{' '}
                     <span className="font-bold">120 секунд! </span>
                  </p>
               </div>
               <div className="flex gap-2">
                  <img src={timer} alt="Таймер" />
                  <Timer />
               </div>
            </div>

            <form onSubmit={handleSubmit} className="px-8 flex gap-2">
               <Input
                  name="model"
                  type="text"
                  value={selectionForm.model}
                  placeholder="Укажите желаемую модель"
                  onChange={handleChange}
               />
               <Input
                  name="budget"
                  type="text"
                  value={selectionForm.budget}
                  placeholder="Какой у Вас бюджет?"
                  onChange={handleChange}
               />
               <Input
                  name="deadline"
                  type="text"
                  value={selectionForm.deadline}
                  placeholder="Когда нужен подбор?"
                  onChange={handleChange}
               />
               <Input
                  name="country"
                  type="text"
                  value={selectionForm.country}
                  placeholder="Страна подбора"
                  onChange={handleChange}
               />
               <Button classname="bg-white text-black font-bold rounded-main w-full" onClick={handleClick}>
                  Подобрать авто
               </Button>
            </form>
         </section>

         <section id="staff" className="flex flex-col w-[80%] ">
            <StaffList />
         </section>

         <section id="articles_info" className="flex w-[80%]">
            <ArticlesPreview />
         </section>

         <section id="reviews" className="flex flex-col w-[80%]">
            <ReviewList />
         </section>

         <section className="flex w-[80%] justify-between mb-15">
            <div className="flex flex-col gap-[30px] w-[23vw]">
               <p className="text-[40px] font-extrabold leading-10">Мы уже знаем, о чем вы хотите спросить.</p>
               <p>У вас все еще есть вопросы? Свяжитесь с нами и мы ответим на любые интересующие вас вопросы!</p>
               <Link to="/contacts">
                  <Button classname="px-5 w-[180px] h-[50px] bg-primary rounded-main">Связаться с нами</Button>
               </Link>
            </div>
            <FAQ />
         </section>
      </main>
   );
};
