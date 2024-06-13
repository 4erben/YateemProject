import React, { useState } from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import cards from '../data/data';
import CustomCard from './Cards';
export default function CardsSection() {
    const [filteredCards , setFilteredCards] = useState(cards);
    function handleFilteredCards(e){
    const category = e.target.value;
    if(category =="عام"){setFilteredCards(cards)}else{

    
    setFilteredCards(
      cards.filter((card)=>{
        return card.category == category
      })
    )}
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
    {filteredCards.map((card)=>{
      return(
        <CustomCard
        card = {card}
        no= {card.no}
        title = {card.title}
        gained = {card.gained}
        totalMoney={card.totalMoney}
        imgSrc = {card.imgSrc}
        Sahm = {card.Sahm}
        key={card.no}
        />
      )
    })}
    </Row>
  </Row>
  )
}
