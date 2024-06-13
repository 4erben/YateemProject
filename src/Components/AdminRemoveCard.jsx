import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { Button, Col, Container, Form, Row } from 'react-bootstrap'
import {  removeCard } from '../Redux/Slices/AdminSlice';

export default function AdminRemoveCard() {
    const dispatch = useDispatch();
    const [cardId,setCardId] =useState("");
    function handleRemoveCard(e){
        e.preventDefault();
        dispatch(removeCard({_id:cardId}))
    }
  return (
    <Col lg={12}> 
    <Form onSubmit={handleRemoveCard} className='text-center my-5'> 
        <h4>Remove Card</h4>
        <Row className='my-2 text-center justify-content-center'>
        <Col lg={3} md={4} sm={6} xs={6} className=''>
            <Form.Label className='fw-bold'>Card ID</Form.Label>
            <Form.Control type='text' placeholder='Enter Card Id' value={cardId} onChange={(e)=>{setCardId(e.target.value)}} required/>
        </Col>
        </Row>
        <Button type='submit' variant="dark">Submit</Button>
    </Form>
    </Col>
  )
  
}
