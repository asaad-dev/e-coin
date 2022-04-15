import { Routes, Route } from "react-router-dom";
import { Footer } from "./components/footer/Footer";
import { Navbar } from "./components/navbar/Navbar";
import { Coins } from "./components/coins/Coins";
import { Coin } from "./pages/coin/Coin";
import { Home } from "./pages/home-page/Home";
import { Featured } from "./pages/features/Featured"

function App () {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/coins' element={<Coins />} />
        <Route path='/coin' element={<Coin />}>
          <Route path=':coinId' element={<Coin />} />
        </Route>
        <Route path='/features' element={<Featured />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
