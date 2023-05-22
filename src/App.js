import { BrowserRouter, Routes, Route } from "react-router-dom";

import './services/server';

import Home from "./pages/Home";
import About from "./pages/About";
import Wrapper from "./components/layout/Wrapper";
import Vans from "./pages/vans/Vans";
import VanDetail from "./pages/vans/VanDetail";
import Layout from "./components/layout/Layout";
import HostLayout from "./components/layout/HostLayout";
import Dashboard from "./pages/host/Dashboard";
import Income from "./pages/host/Income";
import Reviews from "./pages/host/Reviews";
import HostVans from "./pages/host/HostVans";
import HostVanDetail from "./pages/host/HostVanDetail";
import HostVanInfo from "./pages/host/HostVanInfo";
import HostVanPricing from "./pages/host/HostVanPricing.jsx";
import HostVanPhotos from "./pages/host/HostVanPhotos";
import NotFound from "./pages/NotFound.jsx";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Wrapper>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="about" element={<About />} />
              <Route path="vans" element={<Vans />} />
              <Route path="vans/:id" element={<VanDetail />} />
              <Route path="host" element={<HostLayout />}>
                <Route index element={<Dashboard />} />
                <Route path="income" element={<Income />} />
                <Route path="reviews" element={<Reviews />} />
                <Route path="vans" element={<HostVans />} />
                <Route path="vans/:id" element={<HostVanDetail />}>
                  <Route index element={<HostVanInfo />}/>
                  <Route path="pricing" element={<HostVanPricing />}/>
                  <Route path="photos" element={<HostVanPhotos />}/>
                </Route>
              </Route>
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </Wrapper>
      </BrowserRouter>
    </div>
  );
}

export default App;
