import { Route, Routes } from "react-router-dom";
import { Navbar } from "../shared/components/Navbar";
import { HomePage } from "../shared/pages/HomePage";
import { AboutPage } from "../shared/pages/AboutPage";
import { LoginPage } from "../modules/auth/pages/Login";
import { ProductPage } from "../modules/products/pages/ProductPage";
import { Podcast } from "../modules/products/pages/Podcast";
import { Contacto } from "../shared/pages/Contacto";
import { Footer } from "../shared/components/Footer";
import { SongPage } from "../modules/products/pages/SongPage";
import { MercadoPagoStatus } from "../modules/payments/components/MercadoPagoStatus";

export const AppRouter = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/products" element={<ProductPage />} />
        <Route path="/podcast" element={<Podcast />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/SongPage/:id" element={<SongPage />} />
        <Route path="/mercadopago/status" element={<MercadoPagoStatus />} />
      </Routes>
      <Footer />
    </>
  );
};
