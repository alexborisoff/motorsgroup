import { SelectionInteractive } from '../components/SelectionInteractive';
import { SelectionList } from '../components/SelectionList';

export const SelectionPage = () => {
   return (
      <main className="flex flex-col ">
         <section > 
         <SelectionInteractive />
         </section>
         <section className="flex flex-col items-center justify-center  ">
            <SelectionList />
         </section>
      </main>
   );
};
