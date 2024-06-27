import React from 'react'
import { Container , Row , Col , Form, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function RegisterPage() {
  return (
   <Container dir='rtl' className=' login-container d-flex flex-column justify-content-center align-items-center'>
    <Row className='my-5 py-5'>
      <Col className='py-5 my-5'>
        <Form className='py-5 px-4 border border-2 rounded'>
          <h5 className='text-center mb-5 fw-bold'>تسجيل الدخول</h5>
          <Form.Group className='row'>
            <Form.Label htmlFor='phoneNo'>الاسم</Form.Label>
            <Form.Control type='text'  className='px-3' />
          </Form.Group>
          <Form.Group className='row my-2'>
            <Form.Label htmlFor='phoneNo'>رقم الجوال</Form.Label>
            <Form.Control type='text' placeholder='05XXXXXX' className='px-3' />
          </Form.Group>
          <Form.Group className='d-flex my-2 py-2'>
            <Button className='rounded-pill donate-btn py-2 mx-auto'>ارسال رمز التحقق</Button>
          </Form.Group>
          <Form.Group className='d-flex align-items-center justify-content-center'>
              <small>هل لديك حساب</small> 
              <Link to="/login" className='mx-2'>تسجيل الدخول</Link>
          </Form.Group>
        </Form>
      </Col>
    </Row>
   </Container>
  )
}
