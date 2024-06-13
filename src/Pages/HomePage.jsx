import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import CustomCarousel from '../Components/CustomCarousel'
import Statitiscs from '../Components/Statitiscs'
import CustomCard from '../Components/Cards';
import cards from "../data/data.jsx";

export default function HomePage() {
  return (
    <Container  fluid className='px-0 home-page'>
        <Row className='mx-0'>
            <Col className='col-12 px-0'>   
            <CustomCarousel />
            </Col>
        </Row>
        <Row className='bg-c-owhite'>
        <Row className='mx-0 w-100 mx-auto '>
          <Row className='my-5' dir='rtl'>
          {cards.map((card)=>{
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
