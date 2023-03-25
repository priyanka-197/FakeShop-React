import React from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { selectedProducts } from '../redux/action/productAction';
import {useEffect} from 'react'


const ProductDetail = () => {
  const product=useSelector((state)=>state.product)
  const {image,price,title,category,description}=product
const {productId}=useParams()
console.log(productId)
const dispatch=useDispatch()


const fetchProductDetail=async()=>{
const response =await axios.get(`https://fakestoreapi.com/products/${productId}`).catch((err)=>{
  console.log('err,err')
})
dispatch(selectedProducts(response.data))
console.log(response.data)
}
useEffect(() => {
if(productId && productId !=='') fetchProductDetail();
}, [productId])
console.log('products :', product)
  return (
    <div className='ui grid container'>
    {Object.keys(product).length ===0 ?(<div>...Loading</div>):(
 <div className='ui placeholder segment'>
 <div className='ui two column stackable center aligned grid'>AND</div>
 <div className='middle aqligned row'>
 <div className='column lp'>
 <img className='ui fluid image' src={image}/>
 </div>
 <div className='coulmn rp'>
 <h1>{title}</h1>
 <h2><a className='ui teal tag label'>${price}</a></h2>
 <h3 className='ui brown block header'>{category}</h3>
 <p>{description}</p>
 <div className='ui vertical animated button' tabIndex='0'>
 <div className='hidden content'>
 <i className='shop icon'></i>
 </div>
 <div className='visible content'>Add to cart</div>
 </div>
 </div>
 </div>
 </div>)}
    </div>
  )
}

export default ProductDetail
