import React, { useEffect, useState } from 'react'
import { Container , Col , Row , Form , Button} from 'react-bootstrap'
import {useSelector} from "react-redux";
import CardsSection from '../Components/CardsSection';
import CartItem from '../Components/CartItem';
import { useNavigate } from 'react-router-dom';

export default function CartPage() {
  const giftCards = useSelector(state=>state.cart.cartItems);
  const total = useSelector(state=>state.cart.totalMoney);
  const navigate = useNavigate();
  const handleDonate = (e)=>{
    navigate("/checkout",{state:{donateMoney: total}});
}
  return (
    <Container className='py-5 px-0 cart-container' fluid dir='rtl'>
      <Row>
        <h4>سلة تبرعاتك</h4>
      </Row>
      <Row className='w-100'>
        <Col lg={6} className='row'>
        {
          giftCards.map((card)=>{
            return(
              <CartItem 
              key={card.id}
              giftImg={card.imgSrc} 
              giftCategory={card.category} 
              title={card.title}  
              card = {card}
              />
            )
          })
        }
        </Col>
        <Col lg={6} >
          <Row className='justify-content-center py-5'>
            <Col className=' '>
            <div className='text-center d-flex flex-column align-items-center mx-5 rounded rounded-4 pt-5 border border-2'>
              <h2 className='mb-2'>المجموع</h2>
              <div className='my-3 d-flex align-items-center'>
              <h3 className='fw-bold mx-1'>{total}</h3>
              <small >ر.س</small>
              </div>
              <div className='bg-light w-100  py-2 mt-4 cart-btn-container'>
                <Button variant='black' className='donate-btn px-5 py-2 rounded-pill' onClick={handleDonate}>المتابعة للدفع </Button>
              </div>
            </div>
              
              
              
            </Col>
          </Row>
        </Col>
        
      </Row>
    </Container>
  )
}
