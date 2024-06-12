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
            <Col className='col-4 text-center'>
            <span className='fs-8 fw-semibold'>كفالة معتمر واحد</span>
            <button className='btn btn-white border text-nowrap'>
               <span className='text-golden'>150</span> 
                <small className='ms-1'> ر.س</small>
            </button>
            </Col>
            <Col className='col-4 text-center'>
            <span className='fs-8 fw-semibold'>كفالة معتمرين</span>
            <button className='btn btn-white border text-nowrap'>
                <span className='text-golden'>300</span>
                <small className='ms-1'> ر.س</small>
            </button>
            </Col>
            <Col className='col-4 text-center'>
            <span className='fs-8 fw-semibold'>كفالة ثلاثة معتمرين</span>
            <button className='btn btn-white border text-nowrap'>
               <span className='text-golden'> 450</span> 
                <small className='ms-1'> ر.س</small>
            </button>
            </Col>
        </Row>
        <Row className='mt-2'>
            <Form>
                <Row className='justify-content-between align-items-center'>
                    <Col className='col-6'>
                    <Form.Control type='number' placeholder='مبلغ التبرع' className='fs-8' />
                    </Col>
                    <Col className='col-2'>
                    <Button type='submit' variant='primary-blue' className=' rounded rounded-5 fs-8'> تبرع الان</Button>
                    </Col>
                    <Col className='col-2'>
                    <i className="fa-solid fa-cart-shopping text-golden fa-2x"></i>
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
