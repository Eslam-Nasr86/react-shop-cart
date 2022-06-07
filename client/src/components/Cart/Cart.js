import React, {useState} from 'react'
import '../../css/Cart/Cart.css'
import Checkout from '../CheckoutForm/Checkout'

export default function Cart({cartItems, removeFromCart}) {

    const [showForm, setShowForm] = useState(false)
    const [value, setValue] = useState("")


    const submitOrder = (e)=>{
        e.preventDefault();
        console.log("first")
        const order = {
            name:value.name,
            email:value.email}
            console.log(order)
    }
   


    const handleChange = (e)=>{
        console.log(e.target.name)
        setValue((prevState)=>({...prevState,[e.target.name]: e.target.value}))
    }

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


            {cartItems.length &&  (<div className='cart-footer'>
           <div className='total'> Total Price : {cartItems.reduce((acc, p)=>{return acc+p.price},0 )}$</div>
           <button onClick={()=>{setShowForm(true)}}>select product</button>
        </div>)}

        <Checkout submitOrder={submitOrder} handleChange={handleChange} showForm={showForm} setShowForm={setShowForm}/>
      

        </div>

       

    </div>
  )
}
