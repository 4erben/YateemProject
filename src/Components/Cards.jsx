import React, { useEffect, useState } from 'react'
import {useDispatch, useSelector} from "react-redux";
import {Card , Button ,Container ,Row , Col ,Form} from "react-bootstrap";
import { addToCart } from '../Redux/Slices/CartSlice';

export default function CustomCard({title,gained,totalMoney,imgSrc,id, Sahm1,Sahm2,Sahm3 ,card}) {
    const baseURL = import.meta.env.VITE_REACT_APP_API_URL;
    const remainingMoney = totalMoney - gained;
    const percentage = Math.floor((gained / totalMoney) * 100)
    const [money , setMoney]= useState("");
    const dispatch = useDispatch();
    function handleInputMoney(e){
        setMoney(e.target.value)
    };
    function handleAddToCart(e){
        e.preventDefault()
        dispatch(
            addToCart({card: card})
        )
    }
  return (
    <Col md={6} lg={4} xl={4}  className='my-2 '>
    <Container dir='rtl' className='bg-white rounded rounded-4 py-3 overflow-hidden'>
        <Row>
            <Col>
            <h6 className="text-truncate title">{title}</h6>
            </Col>
        </Row>
        <Row>
            <Col className='col-12 position-relative px-0'>
                <img  src={ baseURL + imgSrc} className='custom-card-image w-100 position-relative'/>
                <span className='percentage-line' data-number={`${percentage}`} style={{ '--percentage': `${percentage}%` }} ></span>
            </Col>
        </Row>
        <Row className='mt-2'>
            <Col>
            <small className="text-golden fw-bold">تم جمع</small>
            <label className="text-primary-blue d-block h6 fw-bolder">{gained}<small className="ms-1 text-nowrap">ر.س</small><span className="visually-hidden">(10.00%)</span></label>
            </Col>
            <Col>
            <small className="text-golden fw-bold">المبلغ المتبقي</small>
            <label className="text-primary-blue d-block h6 fw-bolder">{remainingMoney}<small className="ms-1 text-nowrap">ر.س</small></label>
            </Col>
        </Row>
        <Row>
            <Col lg={4} md={4} sm={4} xs={4}  className='text-center  px-0'>
            <span className='fs-8 fw-semibold d-block  my-1'>{Sahm1}</span>
            <button className='btn btn-white border text-nowrap px-0' onClick={(e)=>{setMoney(150)}}>
               <span className='text-golden fw-bold'>150</span> 
                <small className='ms-1 text-golden'> ر.س</small>
            </button>
            </Col>
            <Col  lg={4} md={4} sm={4} xs={4} className=' text-center   px-0'>
            <span className='fs-8 fw-semibold d-block my-1'>{Sahm2}</span>
            <button className='btn btn-white border text-nowrap px-0' onClick={(e)=>{setMoney(300)}}>
                <span className='text-golden fw-bold'>300</span>
                <small className='ms-1 text-golden'> ر.س</small>
            </button>
            </Col>
            <Col lg={4} md={4} sm={4} xs={4} className=' text-center    px-0' >
            <span className='fs-8 fw-semibold mx-2 d-block  my-1'>{Sahm3}</span>
            <button className='btn btn-white border text-nowrap px-0' onClick={(e)=>{setMoney(450)}}>
               <span className='text-golden fw-bold'> 450</span> 
                <small className='ms-1 text-golden'> ر.س</small>
            </button>
            </Col>
        </Row>
        <Row className='mt-2'>
            
                <Row className='align-items-center px-0'>
                    <Col lg={10} md={10} sm={10} xs={10} className='mx-0 px-0'>
                    <Form className='px-0'>
                        <Row>
                        <Col lg={7} md={7} sm={7} xs={7} className='d-flex px-0'>
                        <Form.Control type='number' placeholder='مبلغ التبرع' className='fs-8 my-2 mx-auto rounded-pill' value={money} onChange={handleInputMoney} />
                        </Col>
                        <Col lg={5} md={5} sm={5} xs={5} className='d-flex px-0'>
                        <button type='submit'  className=' rounded-pill my-auto mx-1 w-100 text-nowrap donate-btn'> تبرع الان</button>
                        </Col>
                        </Row>
                    </Form>
                    </Col>
                    <Col lg={2} md={2} sm={2} xs={2} className=' d-flex px-0'>
                        <button className='cart-button rounded-circle p-2 mx-auto' onClick={handleAddToCart}>
                        <i className="fa-solid fa-cart-plus text-white"></i>
                        </button>
                    </Col>
                </Row>
                    

            
        </Row>
        <hr/>
        <Row className='text-center fw-semibold'> 
            <p>تفاصيل الحالة</p>
        </Row>
    </Container>
    </Col>
  )
}
