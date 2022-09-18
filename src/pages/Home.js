import React from 'react';
import FAQs from '../components/FAQs';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import SubcribptionForm from '../components/Subcribption-form';
import TrustedBy from '../components/TrustedBy';

function Home() {
  return (
    <>  
        <Navbar></Navbar>
        <div className='pt-40'></div>
        <FAQs></FAQs>
        <TrustedBy></TrustedBy>
        <SubcribptionForm></SubcribptionForm>
        <Footer></Footer>
    </>
    
  )
}

export default Home;