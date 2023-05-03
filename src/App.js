// import logo from './logo.svg';
import './App.css';
import { Routes,Route } from 'react-router-dom';
import Cart from './components/Cart';
import Home from './components/Home';
import Product from './components/Product';
import SingleProduct from './components/SingleProduct';
import Contact from './components/Contact';
import About from './components/About';
import Header from './components/Header';
import ErrorPage from './components/ErrorPage';
import {GlobalStyle} from './components/GlobalStyle'
import Footer from './components/Footer';

import {ThemeProvider} from 'styled-components'

function App() {

  const theme = {

    colors: {

      bg: "#F6F8FA",

      footer_bg: "0a1435",

      btn: "rgb(98 84 243)",

      border: "rgba(98, 84, 243, 0.5)",

      hr: "#ffffff",

      gradient:

        "linear-gradient(0deg, rgb(132 144 255) 0%, rgb(98 189 252) 100%)",

      shadow:

        "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;",

      shadowSupport: " rgba(0, 0, 0, 0.16) 0px 1px 4px"

    },

    media: {

      mobile: "768px",

      tab: "998px"

    }

  }


  return (
     <>
     <ThemeProvider theme={theme}>

    


    
  <GlobalStyle/>
  <Header/>
    <Routes>
      <Route index element={<Home/>}/>
      <Route exact path="/about" element={<About/>}/>
      <Route exact path="/contact" element={<Contact/>}/>
      <Route exact path="/singleproduct/:id" element={<SingleProduct/>}/>
      <Route exact path="/cart" element={<Cart/>}/>
      <Route exact path="/product" element={<Product/>}/>
      <Route path="*" element={<ErrorPage/>}/>
    </Routes>
  <Footer />
   
    </ThemeProvider>
    </>
    
  );
}

export default App;
