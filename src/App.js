import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Wrapper from "./components/layout/Wrapper";
import Vans from "./pages/Vans";
import VanDetail from "./pages/VanDetail";
import Layout from "./components/layout/Layout";

function App() {
  return (
    <div>
    <BrowserRouter>
      <Wrapper>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/vans" element={<Vans />} />
            <Route path="/vans/:id" element={<VanDetail />} />
          </Route>
        </Routes>
      </Wrapper>
    </BrowserRouter>
    
    </div>
  );
}

export default App;
