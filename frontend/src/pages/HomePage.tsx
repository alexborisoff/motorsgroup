import car from '../assets/images/car_home.png';
import arrow from '../assets/images/arrow-right.svg';
import timer from '../assets/images/timer.svg';
import { Link } from 'react-router';
import { Input } from '../components/ui/Input';
import { Timer } from '../components/Timer';
import { Button } from '../components/ui/Button';
import { FAQ } from '../components/FAQ';
import { ReviewList } from '../components/ReviewList';

export const HomePage = () => {
   const handleChange = () => {};

   return (
      <main className="flex flex-col items-center gap-15">
         <section className="w-[80%] flex flex-col">
            <img className="absolute top-[130px] right-0 z-20" src={car} alt="Привезем автомобиль" />
            <h1 className="max-w-3xl pt-6 text-[90px] leading-26 font-extrabold tracking-normal ">
               <span className="text-[#C7A943]">ПРИВЕЗЕМ</span> АВТОМОБИЛЬ
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
            <div className="flex justify-around items-center">
               <div>
                  <button className="h-[50px] w-[246px] text-[#C7A943] font-bold border border-[#C7A943] bg-[#C7A94333] rounded-[65px]">
                     <Link to="/catalog">
                        КАТАЛОГ АВТОМОБИЛЕЙ <img className="inline text-center" src={arrow} alt="Стрелка вправо" />
                     </Link>
                  </button>
               </div>
               <div>
                  <p className="relative text-[50px] font-extrabold z-30">24/7</p>
                  <p>Сопровождение клиента</p>
               </div>
               <div>
                  <p className="relative text-[50px] font-extrabold z-30">5 ЛЕТ</p>
                  <p>Опыта в сфере подбора</p>
               </div>
               <div>
                  <p className="relative text-[50px] font-extrabold z-30">500+</p>
                  <p>Авто доставляем в год</p>
               </div>
               <div>
                  <p className="relative text-[50px] font-extrabold z-30">40+</p>
                  <p>Решений проблемных ситуаций</p>
               </div>
            </div>
         </section>

         <section className="h-[192px] w-[80%] bg-[#C7A943] rounded-4xl">
            <div className="flex justify-between items-center px-8 py-5">
               <div>
                  <h2 className="text-[40px] font-bold">Быстрый подбор автомобиля</h2>
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

            <form className="flex gap-2 px-8">
               <Input name="model" type="text" value="" placeholder="Укажите желаемую модель" onChange={handleChange} />
               <Input name="budget" type="text" value="" placeholder="Какой у Вас бюджет?" onChange={handleChange} />
               <Input name="deadline" type="text" value="" placeholder="Когда нужен подбор?" onChange={handleChange} />
               <Input name="country" type="text" value="" placeholder="Страна подбора" onChange={handleChange} />
               <Button classname="bg-white text-black rounded-[65px] w-[200px]">Подобрать авто</Button>
            </form>
         </section>

         <section id='reviews' className='flex w-[80%]'>
            <ReviewList/>
         </section>

         <section className="flex w-[80%] justify-between mb-15">
            <div className="flex flex-col gap-[30px] w-[340px] li">
               <p className="text-[40px] font-extrabold leading-10">Мы уже знаем, о чем вы хотите спросить.</p>
               <p>У вас все еще есть вопросы? Свяжитесь с нами и мы ответим на любые интересующие вас вопросы!</p>
               <Button classname="px-5 w-[180px] h-[50px] bg-[#C7A943] rounded-[65px]">Связаться с нами</Button>
            </div>
            <FAQ />
         </section>
      </main>
   );
};
