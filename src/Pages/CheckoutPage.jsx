import React, { useState } from 'react'
import { Container, Row , Col, Form, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom'
import { postPayment } from '../Redux/Slices/paymentSlice';

export default function CheckoutPage() {
    const dispatch = useDispatch();
    const [personId, setPersonId] = useState("");
    const [personName, setPersonName] = useState("");
    const [personPhone, setPersonPhone] = useState("");
    const [year, setYear] = useState("");
    const [month, setMonth] = useState("");
    const [cvv, setCode] = useState("");


    const handeSubmit = (e)=>{
        e.preventDefault();
        dispatch(postPayment({card_number:personId,name_on_card:personName,phone:personPhone,year:year,month:month,cvv:cvv}))
    }
    const location = useLocation();
    const money = location.state?.donateMoney;
    const cartItems = location.state?.cartItems;
    console.log(location.state);
  return (
    <Container dir='rtl' className='py-5 checkout-container'>
        <Row className='py-5 my-5'>
            <Col lg={6}>
                <h1>الدفع</h1>
                <div className='d-flex flex-column align-items-start justify-content-center pay-now px-5'>
                    <span>المبلغ الاجمالي</span>
                    <span>{money} ر.س</span>
                </div>
            </Col>
            <Col lg={6} className='my-5 py-3'>
                <div className='payment box-shadow d-flex flex-column border border-2 rounded rounded-4 px-4 py-5'>
                    <h4>خيارات الدفع</h4>
                    <hr/>
                    <Form onSubmit={handeSubmit}>
                        <Form.Group className=''>
                            <Form.Label>رقم البطاقة</Form.Label>
                            <Form.Control type='text' placeholder='ال 16 رقما المدونة علي بطاقتك' value={personId} onChange={(e)=>{setPersonId(e.target.value)}} required/>
                        </Form.Group>
                        <Form.Group className='my-2'>
                            <Form.Label>الاسم علي البطاقة</Form.Label>
                            <Form.Control type='text' placeholder='اسمك المدون علي البطاقة' value={personName} onChange={(e)=>{setPersonName(e.target.value)}} required/>
                        </Form.Group>
                        <Form.Group className='my-2'>
                            <Form.Label>رقم الهاتف</Form.Label>
                            <Form.Control type='text' placeholder='رقم الهاتف' value={personPhone}  onChange={(e)=>{setPersonPhone(e.target.value)}} required/>
                        </Form.Group>
                        <Form.Group className='row my-2 justify-content-between'>
                            <Col lg={4} >
                                <Form.Label>تاريخ الانتهاء</Form.Label>
                                <div className='d-flex'>
                                <Form.Control placeholder='YY' value={year}  onChange={(e)=>{setYear(e.target.value)}} required/>
                                <Form.Control placeholder='MM' value={month} onChange={(e)=>{setMonth(e.target.value)}} required/>
                                </div>
                            </Col>
                            <Col lg={4}>
                                <Form.Label>رمز الامان</Form.Label>
                                <div className='d-flex'>
                                <Form.Control placeholder='ال 3 ارقام خلف بطاقتك' onChange={(e)=>{setCode(e.target.value)}} required/>
                                </div>
                            </Col>
                            <Form.Group className='row my-3 btn-group'>
                                <div className='d-flex justify-content-between my-2 '>
                                    <span>الاجمالي:</span>
                                    <span>{money} ر.س</span>
                                </div>
                                <Button type='submit' className='rounded-pill '>اتمام عملية التبرع</Button>
                            </Form.Group>
                        </Form.Group>
                    </Form>
                </div>
            </Col>
        </Row>
    </Container>
  )
}
