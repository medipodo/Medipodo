import { useEffect } from "react";
import "@/App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import axios from "axios";

// Blog Pages
import DiyabetVeAyakSagligi from "./pages/blog/DiyabetVeAyakSagligi";
import AyakSagligiRehberi from "./pages/blog/AyakSagligiRehberi";
import AyakAgrisiNedenOlur from "./pages/blog/AyakAgrisiNedenOlur";
import AyaktaKizariklikNedenOlur from "./pages/blog/AyaktaKizariklikNedenOlur";
import NasirNedenTekrarEder from "./pages/blog/NasirNedenTekrarEder";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

const Home = () => {
  const helloWorldApi = async () => {
    try {
      const response = await axios.get(`${API}/`);
      console.log(response.data.message);
    } catch (e) {
      console.error(e, `errored out requesting / api`);
    }
  };

  useEffect(() => {
    helloWorldApi();
  }, []);

  return (
    <div className="home-container">
      <header className="home-header">
        <h1>Medipodo Blog</h1>
        <p>Ayak sağlığı hakkında bilmeniz gereken her şey</p>
      </header>
      
      <nav className="blog-nav" data-testid="blog-nav">
        <h2>Blog Yazıları</h2>
        <ul>
          <li>
            <Link to="/blog/diyabet-ve-ayak-sagligi" data-testid="link-diyabet">
              Diyabet ve Ayak Sağlığı
            </Link>
          </li>
          <li>
            <Link to="/blog/ayak-sagligi-rehberi" data-testid="link-rehber">
              Ayak Sağlığı Rehberi
            </Link>
          </li>
          <li>
            <Link to="/blog/ayak-agrisi-neden-olur" data-testid="link-agrisi">
              Ayak Ağrısı Neden Olur?
            </Link>
          </li>
          <li>
            <Link to="/blog/ayakta-kizariklik-neden-olur" data-testid="link-kizariklik">
              Ayakta Kızarıklık Neden Olur?
            </Link>
          </li>
          <li>
            <Link to="/blog/nasir-neden-tekrar-eder" data-testid="link-nasir">
              Nasır Neden Tekrar Eder?
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog/diyabet-ve-ayak-sagligi" element={<DiyabetVeAyakSagligi />} />
          <Route path="/blog/ayak-sagligi-rehberi" element={<AyakSagligiRehberi />} />
          <Route path="/blog/ayak-agrisi-neden-olur" element={<AyakAgrisiNedenOlur />} />
          <Route path="/blog/ayakta-kizariklik-neden-olur" element={<AyaktaKizariklikNedenOlur />} />
          <Route path="/blog/nasir-neden-tekrar-eder" element={<NasirNedenTekrarEder />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
