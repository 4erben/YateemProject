import React, { useState } from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import CustomCarousel from '../Components/CustomCarousel'
import Statitiscs from '../Components/Statitiscs'
import CustomCard from '../Components/Cards';
import cards from "../data/data.jsx";
import CardsSection from '../Components/CardsSection.jsx';

export default function HomePage() {
  return (
    <Container  fluid className='px-0 home-page'>
        <Row className='mx-0'>
            <Col className='col-12 px-0'>   
            <CustomCarousel />
            </Col>
        </Row>
        <Row className='bg-c-owhite'>
        <CardsSection/>
        </Row>
        <Statitiscs />
    </Container>
  )
}
