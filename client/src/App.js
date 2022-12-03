import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

import LandingPage from "./Page";
import Contact from "./Page/Contact";
import Shop from "./Page/Shop";

function App() {
  return (
   <>
   <Navbar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/contact-us" element={<Contact />} />
        </Routes>
   </>
  );
}

export default App;
