import './App.css';
import React from 'react';
import { Routes,Route,useNavigate,createSearchParams } from 'react-router-dom';
import {Cart} from "./pages/cart"
import { Not_found } from "./pages/notfound";
import { Product } from "./pages/product";
import {Products} from "./pages/products"
import { Navbar } from "./components";
import { useCart } from './context/cart';
import contact from "./Images/contactus.gif"
import aboutus from "./Images/aboutus.gif"
function App() {

const navigate=useNavigate();
const {cartItemCount}=useCart();

const onSearch=(searchQuery) =>{
  navigate(`/?${createSearchParams({ q: searchQuery})}`)
} 

  return (
   
    <>
    <div className="sticky top-0 nav_overlap">
    <Navbar onSearch={onSearch} cartItemcount={cartItemCount()} />
    </div>
    <Routes>
      <Route path="/" element={<Products />} />
      <Route path="/product/:productId" element={<Product />} />
      <Route path="*" element={<Not_found />} />
      <Route path="/cart" element={<Cart/>}/>
   </Routes>
   <footer>
    <div className="flex">
      <img className="ftrimg" src={contact}/>
      <img className="aboutus" src={aboutus}/>
    </div>
   </footer>
    </>
  );
}

export default App;
