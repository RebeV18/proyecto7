import { Route, Routes } from "react-router-dom"
import { Navbar } from "../shared/components/Navbar"
import { HomePage } from "../shared/pages/HomePage"
import { AboutPage } from "../shared/pages/AboutPage"
import { LoginPage } from "../modules/auth/pages/Login"
import { ProductPage } from "../modules/products/pages/ProductPage"
import { Footer } from "../shared/components/Footer"


export const AppRouter = () => {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path="/" element={<HomePage />}/>
                <Route path="/about" element={<AboutPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/products" element={<ProductPage />} />
            </Routes>
            <Footer />
        </>
    )
}