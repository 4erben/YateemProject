import React from 'react'
import { useState } from 'react'
import {Row , Col , Container , Form} from "react-bootstrap";
import { useNavigate } from 'react-router-dom';

export default function SideElement() {
  const navigate = useNavigate();
  const [activeIndex, setActiveIndex] = useState(null);
  const [donateType, setDonateType] = useState("تيسرت");
  const [isClicked, setIsClicked] = useState(false);
  const [money,setMoney] = useState(0);
  function handleForm(){
    setIsClicked(!isClicked);
  }
  const handleDonate = (e)=>{
    e.preventDefault();
    navigate("/checkout",{state:{donateMoney: money, donateType:donateType}});
};
const handleColumnClick = (index) => {
  setActiveIndex(index === activeIndex ? null : index);
  switch(index){
    case 0:
      setDonateType("تيسرت");
      break;
    case 1:
      setDonateType("تبرع عام");
      break;
    case 2:
      setDonateType("وقف");
      break;
    case 3:
      setDonateType("المساجد");
      break;
  }
};
console.log(donateType);
  return (
  <>
    {
      !isClicked?<div className={`side-element d-flex`} dir='rtl'>
      <div className='fw-bold me-2'>تبرع سريع</div>
      <div className='side-button cursor-pointer' onClick={handleForm}><i className="fa-solid fa-plus text-white"  ></i></div>
    </div>:
    <div className='side-element expanded ' dir='rtl'>
      <Container fluid className=' px-0 h-100'>
      <Row className='flex-row '>
      <Col className='fw-bold  col-9 py-2'>تبرع سريع</Col>
      <Col className='side-button cursor-pointer col-3' onClick={handleForm}><i className="fa-solid fa-plus text-white"  ></i></Col>
      </Row>
      <Row>
        <Col className={`col-3 border-start  fs-8 fw-bold text-golden side-click text-center cursor-pointer d-flex align-items-center py-2 ${
          activeIndex === 0 ? 'active' : ''
        }`}  onClick={() => {handleColumnClick(0)}}>تيسرت</Col>
        <Col className={`col-3 border-start  fs-8 fw-bold text-golden side-click text-center cursor-pointer d-flex align-items-center py-2 ${
          activeIndex === 1 ? 'active' : ''
        }`}  onClick={() => {handleColumnClick(1)}}>تبرع عام</Col>
        <Col className={`col-3 border-start  fs-8 fw-bold text-golden side-click text-center cursor-pointer d-flex align-items-center py-2 ${
          activeIndex === 2 ? 'active' : ''
        }`}  onClick={() => {handleColumnClick(2)}}>وقف</Col>
        <Col className={`col-3 border-start  fs-8 fw-bold text-golden side-click text-center cursor-pointer d-flex align-items-center py-2 ${
          activeIndex === 3 ? 'active' : ''
        }`}  onClick={() => {handleColumnClick(3)}}>المساجد</Col>
      </Row>
      <hr className='mt-0'/>
      <Row className='py-2'>
        <Col className='col-4 text-center'>
        <button className='btn btn-white border text-nowrap' onClick={(e)=>{setMoney(150)}}>
        <span className='text-golden'>150</span> 
        <small className='ms-1'> ر.س</small>
        </button>
        </Col>
        <Col className='col-4 text-center'>
            <button className='btn btn-white border text-nowrap' onClick={(e)=>{setMoney(300)}}>
                <span className='text-golden'>300</span>
                <small className='ms-1'> ر.س</small>
            </button>
            </Col>
        <Col className='col-4 text-center'>
          <button className='btn btn-white border text-nowrap' onClick={(e)=>{setMoney(450)}}>
              <span className='text-golden'> 450</span> 
              <small className='ms-1'> ر.س</small>
          </button>
        </Col>
      </Row>
      <Form onSubmit={handleDonate}>
      <Row className='justify-content-center'>
        <Col className='col-10'>
         <input
          type='number'
          className='w-100  side-input px-2 form-control rounded-5'
          placeholder='ر.س'
          dir='rtl'
          value={money}
          onChange={(e)=>{setMoney(e.target.value)}}
          />
        </Col>
        <Col className='col-12 text-center fs-8 fw-bold '>
        سيذهب تبرعك للحالات الاشد احتياجا
        </Col>
        <Col className='col-12 text-center fs-8 fw-bold text-shade mt-3'>
        <i className="fa-solid fa-shield-halved "></i>
        <span className='mx-2'>
        جميع عمليات الدفع امنة
        </span>
        </Col>
        <Row className='justify-content-center mt-2'>
        <button className='btn bg-shade w-75 text-white rounded-5 fw-bold' type='submit'>تبرع الان </button>
        </Row>
       

      </Row>
      </Form>
      </Container>
    </div>
    }
    </>
  )
}
