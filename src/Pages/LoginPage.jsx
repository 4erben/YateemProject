import React from 'react'
import { useState } from 'react'
import { Container , Row , Col , Form, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function LoginPage() {
  const [phone , setPhone] = useState("");
  return (
   <Container dir='rtl' className=' login-container d-flex flex-column justify-content-center align-items-center'>
    <Row className='my-5 py-5'>
      <Col className='py-5 my-5'>
        <Form className='py-5 px-4 border border-2 rounded'>
          <h5 className='text-center mb-5 fw-bold'>تسجيل الدخول</h5>
          <Form.Group className='row'>
            <Form.Label htmlFor='phoneNo'>رقم الجوال</Form.Label>
            <Form.Control type='text' placeholder='05XXXXXX'  maxLength={10} className='px-3' value={phone} onChange={(e)=>{setPhone(e.target.value)}}/>
          </Form.Group>
          <Form.Group className='d-flex my-2 py-2'>
            <Button variant='outline' className='rounded-pill donate-btn py-2 mx-auto'>ارسال رمز التحقق</Button>
          </Form.Group>
          <Form.Group className='d-flex align-items-center justify-content-center'>
              <small>ليس لديك حساب؟</small> 
              <Link to="/register" className='mx-2'>انشاء حساب</Link>
          </Form.Group>
        </Form>
      </Col>
    </Row>
   </Container>
  )
}
