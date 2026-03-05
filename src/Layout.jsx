import { Outlet, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";

import LandingPage from "./Pages/Landing";
import AboutPage from "./Pages/About";
import PricingPage from "./Pages/Pricing";
import ContactPage from "./Pages/Contact";
import ProductsPage from "./Pages/Products";

const Layout = () => {
  return (
    <Routes>
      <Route
        element={
          <div className="flex h-screen w-screen flex-col">
            <Navbar />
            <div className="">
              <Outlet />
            </div>
          </div>
        }
      >
        <Route path="/" element={<LandingPage />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Route>
    </Routes>
  );
};

export default Layout;
