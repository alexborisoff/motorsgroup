import { ContactInfo } from './ContactInfo';
import { FeedbackForm } from './FeedbackForm';

export const ContactSection = () => {
   return (
      <section className="flex py-7 flex-wrap justify-around rounded-4xl  bg-[#202020]">
         <FeedbackForm />
         <ContactInfo />
      </section>
   );
};
