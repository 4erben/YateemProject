import React, { useState } from 'react';
import {Col, Container, Form, Row} from "react-bootstrap";
import gift from "../assets/gift.jpg";
import pics from "../data/data.jsx";
import GiftsPaymentSection from '../Components/GiftsPaymentSection.jsx';

export default function GiftsPage() {
  const [selectedGift, setSelectedGift] = useState([]);
  const [selectedCard , setSelectedCard] = useState(null);
  const handlePickedGift = (no)=>{
    const selected = pics.filter((p)=>{
      return p.no === no;
    });
    setSelectedGift(selected[0]);
  }
  return (
    <Container className='py-5 giftspage' dir='rtl'>
        <Row className='py-5'>
          <h2>هدية</h2>
          <small className='text-golden fw-bold'>
            خدمة لتقديم التبرعات عن الغير كهدية للأهل والأصدقاء، في مختلف المناسبات الاجتماعية
          </small>
        </Row>
        <Row className='gifts-section'>
          <Row>
              <h6 className='fw-bold py-2'>اختر نوع الهدية</h6>
              {
              pics.map((p)=>{
                return(
                <Col lg={2} md={4} sm={6} key={p.no} >
                <img src={p.pic}  className='img-fluid' onClick={()=>{handlePickedGift(p.no)}}/>
                </Col>
                )
                
              })
              }
          </Row>
          <Row className='py-2 '>
            <h6 className='fw-bold py-2'>اختر شكل البطاقة</h6>
            <Col lg={2} md={4} sm={6}  >
              <img src={selectedGift.a}  className='img-fluid' onClick={()=>{setSelectedCard(selectedGift.a)}}/>
            </Col>
            <Col lg={2} md={4} sm={6}  >
              <img src={selectedGift.b}  className='img-fluid'onClick={()=>{setSelectedCard(selectedGift.b)}} />
            </Col>
            
          </Row>
        </Row>
      
       {/*  <GiftsPaymentSection selectedCard={selectedCard} /> */}
    </Container>
  )
}
