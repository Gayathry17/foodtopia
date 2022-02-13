import React from 'react'

import './Cart.css'

function Cart() {
  return (
    <div className='cart'>
      <div className='cart-container'>
         <div className='cart-header'>
             <h2>Shopping Cart</h2>
         </div>
         <div className='cart-body'>
            <div className='cart-items'>
               <h2>Items Selected:</h2>
            </div>
            <div className='cart-price'>
              <div className='cart-total'>
                <div className='price-field'>
                  <h2>Subtotal:</h2>
                  <p>₹35</p>
                </div>
                <div className='div-line'>
                </div>
                <div className='price-field'>
                  <h2>Delivery charges:</h2>
                  <p>₹35</p>
                </div>
                <div className='div-line'>
                </div>
                <div className='price-field big_price'>
                  <h2>Total:</h2>
                  <p>₹70</p>
              </div>
              </div>
              <button className='checkout_btn'>
                Checkout
              </button>
            </div>
         </div>
      </div>

    </div>
  )
}

export default Cart