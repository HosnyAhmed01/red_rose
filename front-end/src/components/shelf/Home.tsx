import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Loading from '../loading/Loading';
import CartList from './CartList';
import { product } from './CartList';




const Home = () => { 

  const  [products , setProducts] = useState([]);
  const [ loading , setLoading ] = useState(true);
  useEffect(() => {
    axios.get(`http://localhost:3000/product/products`)
   .then((res) => {
    const finalData =res.data;
    setProducts(finalData.data)
    setLoading(false) 
    }).catch(err => console.log(err))
 }, []); 

  return (
    <div className='cart' style={{
      position : 'relative'
    }}>
     {
      loading ? <Loading /> : (
        <div className='cart-container'>
          <CartList
          allproducts={products.filter((product : product )=> product.product_catgory === 'puqah')} 
          name='بوكيهات' />
          <CartList 
          allproducts={products.filter((product : product) => product.product_catgory == 'car') } 
          name='تزيين سيارات وكوش افراح' />
       </div>
      )
     }
    </div>
  )
}

export default Home;
