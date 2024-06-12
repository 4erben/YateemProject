import React from 'react'
import {Container , Row , Col} from "react-bootstrap";

export default function Statitiscs() {
  return (
    <Row className='statistics mx-0'> 
        <Container>
          <Row className='justify-content-center align-items-center mx-0 my-4'>
            <Col className='col-4 text-center fw-bold'><h4>انجازاتنا في ارقام</h4></Col>
          </Row>
          <Row className='justify-content-center align-items-center w-75 mx-auto stat-no rounded rounded-4 text-center py-5 ' dir='rtl'>
            <Col lg={4} className='my-2'>
            <img src='https://myfixpedia.com/site/assets/images/icons/icon-donations.svg' className='img-fluid'/>
            <p>اجمالي التبرعات</p>
            <div > 828894  عملية ر.س</div>
            
            </Col>
            <Col lg={4} className='my-2'>
            <img src='https://myfixpedia.com/site/assets/images/icons/icon-add-user.svg' className='img-fluid'/>
            <p>عدد المستفيدين</p>
            <div >2636 عملية</div>
            </Col>
            <Col lg={4} className='my-2'>
            <img src='https://myfixpedia.com/site/assets/images/icons/icon-add-user.svg' className='img-fluid'/>
            <p>عدد عمليات التبرع</p>
            <div >1985 عملية</div>
            </Col>
          </Row>
          <Row className='mt-4'>
        <img src='https://myfixpedia.com/site/assets/images/homepage/lntnalo-ayah.svg' alt="لَن تَنَالُوا الْبِرَّ حَتَّىٰ تُنفِقُوا مِمَّا تُحِبُّونَ" className='aya mx-auto'/>
          </Row>
        </Container>
        </Row>
  )
}
