import { Route, Routes, Navigate } from 'react-router';
import { HomePage } from './pages/HomePage';
import { CatalogPage } from './pages/CatalogPage';
import { ArticlesPage } from './pages/ArticlesPage';
import { SelectionPage } from './pages/SelectionPage';
import { Contacts } from './pages/Contacts';
import { WarrantyPage } from './pages/WarrantyPage';
import { Header } from './components/UI/Header';
import { Footer } from './components/UI/Footer';
import { PrivacyPage } from './pages/PrivacyPage';


export const App = () => {
   return (
      <>
         <Header />

         <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/selection" element={<SelectionPage />} />
            <Route path="/catalog" element={<CatalogPage />} />
            <Route path="/articles" element={<ArticlesPage />} />
            <Route path="/warranty" element={<WarrantyPage />} />
            <Route path="/contacts" element={<Contacts />} />
            <Route path="/privacy" element={<PrivacyPage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
         </Routes>

         <Footer />
      </>
   );
};
