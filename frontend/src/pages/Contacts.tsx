import { ContactSection } from '../components/ContactSection/ContactSection';

export const Contacts = () => {
   return (
      <section className="mx-auto max-w-7xl px-4 py-10">
         <h1 className="text-[40px] font-bold pb-10 text-center sm:text-left">Контакты</h1>
         <ContactSection />
      </section>
   );
};
