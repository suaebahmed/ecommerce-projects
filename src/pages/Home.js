import React, { useState } from 'react';
import FAQs from '../components/FAQs';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Products from '../components/Products';
import SubcribptionForm from '../components/Subcribption-form';
import TrustedBy from '../components/TrustedBy';
import Cartmodel from '../components/Cart-model';
import FirstSection from '../components/First_Section';
import { CartContext } from '../context/CartContext';

function Home() {
  const [totalCost, setTotalCost] = useState(0);
  const [cartProducts, setCartProducts] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  
  const OpenCartHandle = () =>{setIsCartOpen(!isCartOpen)}
  const addProductHandle = (product) =>{
    var newCart = [...cartProducts], ok = 1, total = 0;
    for(var item of newCart){
      if(item._id === product._id){
        item.amount += 1;
        ok = 0;
      }
      total += item.amount * item.price;
    }
    if(ok){
      newCart.push(product);
      total += product.price;
    }
    setCartProducts(newCart);
    setTotalCost(total);
  }
  const removeProduct = (product) =>{
    var total = 0;
    var newCart = cartProducts.filter(item => item._id !== product._id);
    for(let item of newCart) total += item.amount*item.price;
    setCartProducts(newCart);
    setTotalCost(total);
  }
  const productAmountIncrement = (product) =>{
    var newCart = [...cartProducts], total = 0;
    for(var item of newCart){
      if(item._id === product._id) item.amount++;
      total += item.amount * item.price;
    }
    setCartProducts(newCart);
    setTotalCost(total);
  }
  const productAmountDecrement = (product) =>{
    var newCart = [...cartProducts], total = 0;
    for(var item of newCart){
      if(item._id === product._id && item.amount>1) item.amount--;
      total += item.amount * item.price;
    }
    setCartProducts(newCart);
    setTotalCost(total);
  }
  const clearCart = () =>{
    setCartProducts([]);
    setTotalCost(0);
  }
  return (
    <>  
      <CartContext.Provider value={{isCartOpen,cartProducts,totalCost,addProductHandle,OpenCartHandle,
      removeProduct,productAmountIncrement,productAmountDecrement,clearCart}}>
        <Cartmodel></Cartmodel>
        <Navbar></Navbar>
        <FirstSection></FirstSection>
        <Products></Products>

        <FAQs></FAQs>
        <TrustedBy></TrustedBy>
        <SubcribptionForm></SubcribptionForm>
        <Footer></Footer>
      </CartContext.Provider>
    </>
    
  )
}

export default Home;
