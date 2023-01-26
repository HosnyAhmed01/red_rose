import axios from 'axios';
import React, { useEffect, useState } from 'react'
import CartItem from './CartItem';
import './cartlist.scss';

export interface product {
  product_id? : number 
  product_name : string 
  product_img_url : string 
  product_catgory : string 
  product_alt : string
}

const CartList = ({ name  , allproducts } : {name : string , allproducts : product[]}) => {

  const [currentPage , setCurrentPage] = useState(1); 
  const [productPerPage , setProductPerPage] = useState(8);




  const indexOfLastProduct = currentPage * productPerPage; 
  const indexOfFirstProduct = indexOfLastProduct - productPerPage; 
  const currentProducts = allproducts.slice(indexOfFirstProduct , indexOfLastProduct); 


  let pageNumber = []; 

  for (let i =1; i <= Math.ceil(allproducts.length / productPerPage); i++) {
    pageNumber.push(i); 
  }
  console.log(pageNumber);     
  return (
   <>
    <h1>{name}</h1>
    <div className='cartlist-container'>
      {
        currentProducts.map((product : product) => {
          return <CartItem key={product.product_id} name={product.product_name} url={product.product_img_url} alt={product.product_alt} />
        })
      }
    </div>

      <ul className='paginate'>
        {
          pageNumber.map((page) => {
            return (
              <li key={page} onClick={() => setCurrentPage(page)} className={currentPage == Number(page) ? 'active' : undefined}>
                {page}
              </li>
            )
          })  
        }
      </ul>
   </>
  )
}

export default CartList
