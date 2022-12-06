import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

import LandingPage from "./Page";
import Contact from "./Page/Contact";
import Shop from "./Page/Shop";
import Footer from "./components/Footer";
import Cart from "./Page/Cart";
import Login from "./Page/Login";
import SignUp from "./Page/Signup";


function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/contact-us" element={<Contact />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/sign-up" element={<SignUp />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
