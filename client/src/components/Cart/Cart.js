import React from 'react'
import '../../css/Cart/Cart.css'

export default function Cart({cartItems, removeFromCart}) {
  return (
    <div>

        <div className='cart-wrapper'>
            <div className='cart-title'>{cartItems.length> 0? <p>there is {cartItems.length} product in cart</p> : "Cart is empty"}</div>
            <div className='cart-items'>
               {cartItems.map(item=>( <div key={item.id} className='cart-item'>
                    <img src={item.imageUrl} alt={item.title}/>
                    <div className='cart-info'>
                        <div>
                            <p>Title : {item.title}</p>
                            <p>Quantity :{item.qty}</p>
                            <p>Price :{item.price} $</p>
                        </div>
                            <button onClick={()=>removeFromCart(item)}>Remove</button>
                    </div>
                </div>))}

            </div>




        </div>



    </div>
  )
}
