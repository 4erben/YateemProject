import React from 'react'
import { Container } from 'react-bootstrap'
import {useSelector} from "react-redux";
import CardsSection from '../Components/CardsSection';

export default function CartPage() {
  const giftCards = useSelector(state=>state.cart.cartItems);
  return (
    <Container className='py-5 px-0' fluid>
      <CardsSection cards={giftCards} />
    </Container>
  )
}
