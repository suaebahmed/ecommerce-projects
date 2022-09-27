import React, { useEffect, useState } from 'react'
import ProductItem from './ProjuctItem';

function Products() {
  const [products,setProducts] = useState([]);
  useEffect(()=>{
    const getData = async () =>{
        var res = await fetch('/products_data.json');
        var data = await res.json();
        setProducts(data.products);
      }
    getData();

  },[]);

  return (
    <div className='w-full mb-8'>
        <h1 className='text-4xl text-center text-gray-700 mb-8'>New Arrivals</h1>
        <div className='grid grid-cols-1 sm:grid-cols-3 justify-items-center items-center mx-auto'>
          {products.map((item,i)=>{
            return <ProductItem key={i} product={item}></ProductItem>
          })}
        </div>
    </div>
  )
}

export default Products;