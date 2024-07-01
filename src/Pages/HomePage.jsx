import React, { useState } from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import CustomCarousel from '../Components/CustomCarousel'
import Statitiscs from '../Components/Statitiscs'
import {useSelector} from "react-redux";
import CardsSection from '../Components/CardsSection.jsx';

export default function HomePage() {


  const filteredCards = useSelector(state=>state.cards.filteredCards);
  return (
    <Container  fluid className='px-0 home-page'>
        <Row className='mx-0'>
            <Col className='col-12 px-0'>   
            <CustomCarousel />
            </Col>
        </Row>
        <Row className=''>
        {/* <CardsSection cards={filteredCards}/> */}
        </Row>
        <Statitiscs />
    </Container>
  )
}
