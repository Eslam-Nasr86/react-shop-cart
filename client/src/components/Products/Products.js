import React, { useState } from 'react'
import "../../css/Products/Products.css"

import ProductModal from './ProductModal'

export default function Products({products,addToCart}) {
  const [product, setProduct] = useState("")

  const openModal = (product)=>{
    setProduct(product)
  }
  const closeModal = ()=>{
    setProduct(false)
  }

  return (
<div className="products-wrapper">
            {products.map((product) => (
                <div className='products-item' key={product.id}>
                        
                           <a href='#' onClick={()=>openModal(product)}> <img src={product.imageUrl} alt={product.title}/></a>
                            <div className='product-desc'>
                                <p>{product.title}</p> 
                                <span>{product.price}</span> 
                                
                                </div>    


                                <button onClick={()=>addToCart(product)}>Add to Cart</button>
                        


                </div>
            ))}


              <ProductModal product={product} closeModal={closeModal} />

        </div>
  )
}
