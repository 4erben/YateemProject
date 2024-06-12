import React from 'react'
import {Container , Row , Col} from "react-bootstrap";
export default function Footer() {
  return (
    <footer className='container-fluid w-100 d-flex flex-column footer ' dir='rtl'>
    <Row className='justify-content-center f-content1 mt-2'>
    <Col className='col-10'>
    <Row className='text-nowrap text-white py-1'>
        <Col className='col-2 ms-auto'><i className="fa-solid fa-phone mx-2"></i>الاتصال </Col>
        <Col className='col-2'> تواصل معنا</Col>
        <Col className='col-2'> حاسبة الزكاة</Col>
        <Col className='col-2'>الترخيص</Col>
    </Row>
    </Col>
    </Row>
    <Row className='f-content2 justify-content-center py-3'>
    <Col className='col-10 justify-content-center'>
    <Row className='text-nowrap text-white py-1'>
        <Col className='col-2 ms-auto'>
        جميع الحقوق محفوظة 2024
        </Col>

    </Row>
    </Col>
    </Row>
    </footer>
  )
}
