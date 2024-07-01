import React, { useState } from 'react'
import {useSelector ,useDispatch} from "react-redux";
import { Button, Col, Container, Row , Spinner } from 'react-bootstrap'

import CustomCard from './Cards';
import { categoryFilter } from '../Redux/Slices/cardsSlice';
export default function CardsSection({cards}) {
    const isLoading = useSelector(state=>state.cards.loading);
    const dispatch = useDispatch();
    function handleFilteredCards(e){
      dispatch(categoryFilter({fullProducts: cards,category:e.target.value}))
        }
  
  return (
    <Row className='mx-0 w-100 mx-auto bg-c-owhite '>
    <Row>
      <Col className='col-12 text-center mt-2'>
      <h6 className='title'> مشاريع تنتظر دعمكم</h6>
      </Col>
      
    </Row>
    <Row className='my-5  ' dir='rtl'>
    <Col className='d-flex justify-content-center col-12 ' >
      <input type='button' className='mx-1 btn btn-light px-4 fw-bold text-secondary' value="عام"  onClick={handleFilteredCards}/>
      <input type='button' className='mx-1 btn btn-light px-4 fw-bold text-secondary' value="مباني" onClick={handleFilteredCards}/>
      <input type='button' className='mx-1 btn btn-light px-4 fw-bold text-secondary' value="سقيا الماء" onClick={handleFilteredCards} />
      <input type='button' className='mx-1 btn btn-light px-4 fw-bold text-secondary' value="كفالات" onClick={handleFilteredCards}/>
      <input type='button' className='mx-1 btn btn-light px-4 fw-bold text-secondary' value="الفقراء" onClick={handleFilteredCards}/>
      </Col>
    { !isLoading? cards?.map((card)=>{
      return(
        <CustomCard
        card = {card}
        no= {card.id}
        title = {card.title}
        gained = {card.gained}
        totalMoney={card.totalMoney}
        imgSrc = {card.imgSrc}
        Sahm1 = {card.Sahm1}
        Sahm2 = {card.Sahm2}
        Sahm3 = {card.Sahm3}
        key={card.id}
        />
      )
    }): <Spinner animation="border" role="status">
    <span className="visually-hidden">Loading...</span>
  </Spinner>
  }
    </Row>
  </Row>
  )
}
