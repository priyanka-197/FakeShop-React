import React from 'react';
import axios from 'axios';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setProducts } from '../redux/action/productAction';

import {ProductCompent} from './ProductCompent'

const ProductList = () => {
 const products = useSelector((state)=>state)

const dispatch = useDispatch()
 const fetchProducts = async()=>{
  const response = await axios.get("https://fakestoreapi.com/products").catch((err)=>{
    console.log('err',err)
  })
  dispatch(setProducts(response.data))
}
 useEffect(()=>{
  fetchProducts()
 },[])
 console.log('products :', products)
  return (
    <div className='ui grid container'>
   <ProductCompent/>
    </div>
  )
}

export default ProductList
