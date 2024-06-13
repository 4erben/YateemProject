import React, { useState } from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import CustomCarousel from '../Components/CustomCarousel'
import Statitiscs from '../Components/Statitiscs'
import CustomCard from '../Components/Cards';
import cards from "../data/data.jsx";

export default function HomePage() {
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
    <Container  fluid className='px-0 home-page'>
        <Row className='mx-0'>
            <Col className='col-12 px-0'>   
            <CustomCarousel />
            </Col>
        </Row>
        <Row className='bg-c-owhite'>
        <Row className='mx-0 w-100 mx-auto '>
          <Row>
            <Col className='col-12 text-center mt-2'>
            <h6 className='title'> مشاريع تنتظر دعمكم</h6>
            </Col>
            
          </Row>
          <Row className='my-5' dir='rtl'>
          <Col className='d-flex justify-content-center col-12' >
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
        </Row>
        <Statitiscs />
    </Container>
  )
}
