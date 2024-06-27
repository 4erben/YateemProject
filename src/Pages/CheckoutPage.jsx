import React from 'react'
import { Container, Row , Col, Form, Button } from 'react-bootstrap';
import { useLocation } from 'react-router-dom'

export default function CheckoutPage() {
    const location = useLocation();
    const message = location.state?.message;
    console.log(message);
  return (
    <Container dir='rtl' className='py-5 checkout-container'>
        <Row className='py-5 my-5'>
            <Col lg={6}>
                <h1>الدفع</h1>
                <div className='d-flex flex-column align-items-start justify-content-center pay-now px-5'>
                    <span>المبلغ الاجمالي</span>
                    <span>44 ر.س</span>
                </div>
            </Col>
            <Col lg={6} className='my-5 py-3'>
                <div className='payment box-shadow d-flex flex-column border border-2 rounded rounded-4 px-4 py-5'>
                    <h4>خيارات الدفع</h4>
                    <hr/>
                    <Form>
                        <Form.Group className=''>
                            <Form.Label>رقم البطاقة</Form.Label>
                            <Form.Control type='text' placeholder='ال 16 رقما المدونة علي بطاقتك' />
                        </Form.Group>
                        <Form.Group className='my-2'>
                            <Form.Label>الاسم علي البطاقة</Form.Label>
                            <Form.Control type='text' placeholder='اسمك المدون علي البطاقة' />
                        </Form.Group>
                        <Form.Group className='my-2'>
                            <Form.Label>رقم الهاتف</Form.Label>
                            <Form.Control type='text' placeholder='رقم الهاتف' />
                        </Form.Group>
                        <Form.Group className='row my-2 justify-content-between'>
                            <Col lg={4} >
                                <Form.Label>تاريخ الانتهاء</Form.Label>
                                <div className='d-flex'>
                                <Form.Control placeholder='YY' />
                                <Form.Control placeholder='MM' />
                                </div>
                            </Col>
                            <Col lg={4}>
                                <Form.Label>رمز الامان</Form.Label>
                                <div className='d-flex'>
                                <Form.Control placeholder='ال 3 ارقام خلف بطاقتك' />
                                </div>
                            </Col>
                            <Form.Group className='row my-3 btn-group'>
                                <div className='d-flex justify-content-between my-2 '>
                                    <span>الاجمالي:</span>
                                    <span>44 ر.س</span>
                                </div>
                                <Button className='rounded-pill '>اتمام عملية التبرع</Button>
                            </Form.Group>
                        </Form.Group>
                    </Form>
                </div>
            </Col>
        </Row>
    </Container>
  )
}
