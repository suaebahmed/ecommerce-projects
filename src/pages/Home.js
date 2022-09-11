import React from 'react';
import FAQs from '../components/FAQs';
import Footer from '../components/Footer';
import SubcribptionForm from '../components/Subcribption-form';
import TrustedBy from '../components/TrustedBy';

function Home() {
  return (
    <div>
        <FAQs></FAQs>
        <TrustedBy></TrustedBy>
        <SubcribptionForm></SubcribptionForm>
        <Footer></Footer>
    </div>
  )
}

export default Home;