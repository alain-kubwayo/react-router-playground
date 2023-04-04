import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Wrapper from "./components/layout/Wrapper";
import Navbar from "./components/ui/Navbar";
import Footer from "./components/ui/Footer";
import Vans from "./pages/Vans";

function App() {
  return (
    <div>
    <BrowserRouter>
      <Wrapper>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/vans" element={<Vans />} />
        </Routes>
        <Footer />
      </Wrapper>
    </BrowserRouter>
    
    </div>
  );
}

export default App;
