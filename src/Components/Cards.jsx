import React from 'react'
import {Card , Button ,Container ,Row , Col ,Form} from "react-bootstrap";

export default function CustomCard() {
  return (
    <Col md={6} lg={4} className='my-2'>
    <Container dir='rtl' className='bg-white rounded rounded-4 py-3'>
        <Row>
            <h6 className="text-truncate">كفالة معتمر</h6>
        </Row>
        <Row>
            <Col className='col-12'>
            <div className='custom-card-image position-relative'>
                
            </div>
            </Col>
        </Row>
        <Row className='mt-2'>
            <Col>
            <small className="text-primary-green">تم جمع</small>
            <label className="text-primary-blue d-block h6 font-semibold">500<small className="ms-1 text-nowrap">ر.س</small><span className="visually-hidden">(10.00%)</span></label>
            </Col>
            <Col>
            <small className="text-primary-green">المبلغ المتبقي</small>
            <label className="text-primary-blue d-block h6 font-semibold ">4500<small className="ms-1 text-nowrap">ر.س</small></label>
            </Col>
        </Row>
        <Row>
            <Col lg={6} md={6} sm={6} xs={6}  className=' text-center'>
            <span className='fs-8 fw-semibold'>كفالة معتمر واحد</span>
            <button className='btn btn-white border text-nowrap'>
               <span className='text-golden'>150</span> 
                <small className='ms-1'> ر.س</small>
            </button>
            </Col>
            <Col  lg={6} md={6} sm={6} xs={6} className=' text-center'>
            <span className='fs-8 fw-semibold'>كفالة معتمرين</span>
            <button className='btn btn-white border text-nowrap'>
                <span className='text-golden'>300</span>
                <small className='ms-1'> ر.س</small>
            </button>
            </Col>
            <Col lg={12} md={12} sm={12} xs={12} className=' text-center my-2'>
            <span className='fs-8 fw-semibold mx-2'>كفالة ثلاثة معتمرين</span>
            <button className='btn btn-white border text-nowrap'>
               <span className='text-golden'> 450</span> 
                <small className='ms-1'> ر.س</small>
            </button>
            </Col>
        </Row>
        <Row className='mt-2'>
            <Form>
                <Row className='justify-content-around align-items-center'>
                    <Col lg={12} md={12} sm={12} xs={12} className='d-flex'>
                    <Form.Control type='number' placeholder='مبلغ التبرع' className='fs-8 my-2 mx-auto' />
                    </Col>
                    <Col lg={6} md={6} sm={6} xs={6} className='d-flex'>
                    <Button type='submit' variant='primary-blue' className=' rounded rounded-5 fs-8 mx-auto'> تبرع الان</Button>
                    </Col>
                    <Col lg={6} md={6} sm={6} xs={6} className=' d-flex'>
                    <i className="fa-solid fa-cart-shopping text-golden fa-2x mx-auto"></i>
                    </Col>
                </Row>
                    

            </Form>
        </Row>
        <hr/>
        <Row className='text-center fw-semibold'> 
            <p>تفاصيل الحالة</p>
        </Row>
    </Container>
    </Col>
  )
}
