import React, { useState } from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'
import { useDispatch } from 'react-redux';
import { createNewCard } from '../Redux/Slices/AdminSlice';

export default function AdminAddCard() {
    const dispatch = useDispatch();
    const [category,setCategory] =useState("");
    const [title ,setTitle] = useState("");
    const [totalMoney, setTotalMoney] = useState("");
    const [imgSrc , setImgSrc] = useState("");
    const [sahm1 , setSahm1] = useState("");
    const [sahm2 , setSahm2] = useState("");
    const [sahm3 , setSahm3] = useState("");
    function handleAddCard(e){
        e.preventDefault();
        dispatch(createNewCard({category,title,totalMoney,imgSrc,sahm1,sahm2,sahm3}))
    }
  return (
    <Col lg={12}> 
    <Form onSubmit={handleAddCard} className='text-center my-5'> 
        <h4>Add New Card</h4>
        <Row className='my-2 text-center justify-content-center'>
        <Col lg={3} md={4} sm={6} xs={6} className=''>
            <Form.Label> Category</Form.Label>
            <Form.Control type='text' placeholder='Enter Category' value={category} onChange={(e)=>{setCategory(e.target.value)}}/>
        </Col>
        <Col lg={3} md={4} sm={6} xs={6} >
            <Form.Label> Total Money</Form.Label>
            <Form.Control type='number' placeholder='Enter Total Money' value={totalMoney} onChange={(e)=>{setTotalMoney(e.target)}}/>
        </Col>
        <Col lg={3} md={4} sm={6} xs={6}>
            <Form.Label> Image</Form.Label>
            <Form.Control type='text' placeholder='Enter Image Link' value={imgSrc} onChange={(e)=>{setImgSrc(e.target.value)}}/>
        </Col>
        <Col lg={3} md={4} sm={6} xs={6}>
            <Form.Label> Title</Form.Label>
            <Form.Control type='text' placeholder='Title' value={title} onChange={(e)=>{setTitle(e.target.value)}}/>
        </Col>
        <Col lg={3} md={4} sm={6} xs={6}>
            <Form.Label> Sahm One</Form.Label>
            <Form.Control type='text' placeholder='One' value={sahm1} onChange={(e)=>{setSahm1(e.target.value)}}/>
        </Col>
        <Col lg={3} md={4} sm={6} xs={6}>
            <Form.Label> Sahm Two</Form.Label>
            <Form.Control type='text' placeholder='Two' value={sahm2} onChange={(e)=>{setSahm2(e.target.value)}}/>
        </Col>
        <Col lg={3} md={4} sm={6} xs={6}>
            <Form.Label> Sahm Three</Form.Label>
            <Form.Control type='text' placeholder='Three'value={sahm3} onChange={(e)=>{setSahm3(e.target.value)}}/>
        </Col>
        </Row>
        <Button type='submit' variant="dark">12123</Button>
    </Form>
    </Col>
  )
}
