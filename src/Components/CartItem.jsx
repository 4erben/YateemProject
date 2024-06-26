import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { removeFromCart, setCardDonation, totalMoney } from '../Redux/Slices/CartSlice';

export default function CartItem({giftImg,giftCategory,title,card}) {
    const baseURL = import.meta.env.VITE_REACT_APP_API_URL;
    const dispatch = useDispatch();
    const handleInput = (e)=>{
        dispatch(setCardDonation({card:card, donation: Number(e.target.value)}));
        dispatch(totalMoney());
    }
    const handleRemoveFromCart = (e)=>{
        dispatch(removeFromCart({card}));
        dispatch(totalMoney());
    }
  return (
    <div className='d-flex justify-content-between align-items-center'>
          <div className='cart-item col-3 ' data-category={giftCategory}>
            <img src={baseURL + giftImg} alt="pic" className='img-fluid' />
          </div>
          <div className='col-9 d-flex flex-column justify-content-between py-3 '>
              <div className='d-flex justify-content-between'>
                <span className='fw-bold'>{title}</span>
                <span onClick={handleRemoveFromCart} className='cursor-pointer'><i className="fa-solid fa-xmark"></i></span>
              </div>
              <div>
                <input className='form-control' type='number' placeholder='ر.س' value={card.donateMoney}  onChange={handleInput} />
              </div>
          </div>
        </div>
  )
}
