import React, { useContext } from 'react'
import './Cart.css'
// import StoreContext from '../../context/StoreContext'
import { useNavigate } from 'react-router-dom'
import { StoreContext } from '../../context/StoreContext'

const Cart = () => {

  const { cartItems,Food_list, removeFromCart ,getTotalCartAmount,url} = useContext(StoreContext)
  // const {food_list=[]}=useContext(StoreContext)
  const navigate=useNavigate()
  // console.log(Food_list)
  if (Object.keys(cartItems).length===0){
    return <div className="cart"><div className="cart-items">
    <div className="cart-items-title">
      <p>Items</p>
      <p>Title</p>
      <p>Price</p>
      <p>Quantity</p>
      <p>Total</p>
      <p>Remove</p>
    </div>
  </div>
  <br />
  <hr />no cart item</div>
  }
  return (
    <div className='cart'>
      <div className="cart-items">
        <div className="cart-items-title">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
      </div>
      <br />
      <hr />
      {Food_list.map((item, index) => {
        if (cartItems[item._id] > 0) {
          return (
            <>
              <div className="cart-items-title cart-items-item" key={index}>
                <img src={url+"/images/"+item.image} alt="" />
                <p>{item.name}</p>
                <p>${item.price}</p>
                <p>{cartItems[item._id]}</p>
                <p>${item.price * cartItems[item._id]}</p>
                <p onClick={() => removeFromCart(item._id)} className='cross' style={{textAlign:"center"}}>X</p>
              </div>
              <hr />
            </>
          )
        }else{
          <p>add products</p>
        }
      })}
      <div className="cart-bottom">
        <div className="cart-total">
          <h2>Cart Total</h2>
          <div className="cart-total-detail">
            <p>Subtotal</p>
            <p>${getTotalCartAmount()}</p>
          </div>
          <hr />
          <div className="cart-total-detail">
            <p>Delivery Fee</p>
            <p>${getTotalCartAmount()===0?0:2}</p>
          </div>
          <hr />
          <div className="cart-total-detail">
            <b>Total</b>
            <b>${getTotalCartAmount()===0?0:getTotalCartAmount()+2}</b>
          </div>
          <button onClick={()=>navigate('/placeorder')}>PROCEED TO CHECKOUT</button>
        </div>
      <div className="cart-promocode">
        <div>
          <p>If you have promocode,Enter it here</p>
          <div className='cart-promocode-input'>
            <input type="text" placeholder='promo code' />
            <button>Submit</button>
          </div>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Cart
