import React, { useEffect, useState } from 'react'
import "../../css/Products/Products.css"
import { Bounce, Slide } from "react-awesome-reveal";
import ProductModal from './ProductModal'
import {connect} from 'react-redux'
import { fetchProducts } from '../../store/actions/products';

function Products({products,addToCart}) {
  const [product, setProduct] = useState("")

  const openModal = (product)=>{
    setProduct(product)
  }
  const closeModal = ()=>{
    setProduct(false)
  }



  useEffect(()=>{fetchProducts()},[])

  return (
        
      <div className="products-wrapper">
                  {products && products.length? products.map((product) => (
                      <div className='products-item' key={product.id}>
                              
                           <a href='#' onClick={()=>openModal(product)}> <img src={product.imageUrl} alt={product.title}/></a>
                            <div className='product-desc'>
                                <p>{product.title}</p> 
                                <span>{product.price}</span> 
                                
                                </div>    


                                <button onClick={()=>addToCart(product)}>Add to Cart</button>
                        


                </div>
            )): "Loading"}


              <ProductModal product={product} closeModal={closeModal} />

        </div>
      
  )
}
export default connect((state)=>{return {products:state.products.products}},fetchProducts)(Products)