import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Footer from './Components/footer/Footer';
import Header from './Components/header/Header';
import Home from './Components/home/Home';
import ProductsContainer from "./Components/productsContainer/ProductsContainer";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
        <ProductsContainer/>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;

