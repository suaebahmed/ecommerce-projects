import React from 'react';
import FAQs from '../components/FAQs';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Products from '../components/Products';
import SubcribptionForm from '../components/Subcribption-form';
import TrustedBy from '../components/TrustedBy';
import Cartmodel from '../components/Cart-model';
import First_Section from '../components/First_Section';

function Home() {
  return (
    <>  
        <Cartmodel></Cartmodel>
        <Navbar></Navbar>
        <First_Section></First_Section>
        <Products></Products>

        <FAQs></FAQs>
        <TrustedBy></TrustedBy>
        <SubcribptionForm></SubcribptionForm>
        <Footer></Footer>
    </>
    
  )
}

export default Home;
