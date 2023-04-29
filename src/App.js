import logo from './logo.svg';
import './App.css';
import { Routes,Route } from 'react-router-dom';
import Cart from './components/Cart';
import Home from './components/Home';
import Product from './components/Product';
import Productlist from './components/Productlist';
import Navbar from './components/Navbar';
import Notfound from './components/Notfound';

function App() {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route index element={<Home/>}/>
      <Route exact path="/cart" element={<Cart/>}/>
      <Route exact path="/product" element={<Product/>}/>
      <Route exact path="/productlist" element={<Productlist/>}/>
      <Route path="*" element={<Notfound/>}/>

    </Routes>
    </>
  );
}

export default App;
