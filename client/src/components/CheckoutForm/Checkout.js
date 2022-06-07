import React from 'react'
import '../../css/CheckoutForm/Checkout.css'
import Input from '../Input/Input'

export default function Checkout({submitOrder,handleChange,showForm,setShowForm, value}) {
  return (
      <>

    {showForm &&   <div className='checkout-form'>
    <span className='close-icon' onClick={()=>{setShowForm(false)}}>&times;</span>
    <form onSubmit={submitOrder}>
        <Input label="Name"  type="text" onchange={handleChange} name="name" />

        <Input label="Email"  type="email" onchange={handleChange} name="email"/>



       
        <div>
            <button type='submit' onClick={submitOrder}>Checkout</button>
        </div>

  
    </form>
</div>

}
  </>
  )
}
