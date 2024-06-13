import React, { useState } from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'
import { useDispatch } from 'react-redux';
import { createNewCard } from '../Redux/Slices/AdminSlice';
import AdminAddCard from '../Components/AdminAddCard';
import { Outlet, Route, Routes, useLocation } from 'react-router-dom';
import Sidebar from '../Components/Sidebar';

export default function Panel() {
  const location = useLocation().pathname;
  return (
    <Container fluid className=' dashboard px-0 '>
      <Row className='w-100'>
        <Col className='col-12'>
        <h1 className='text-center text-golden'>Dashboard</h1>
        </Col>
        <Sidebar />
        <Col className='col-10'>
        
        {/* Statisics Row */}
        {
        location === "/dashboard"?
        <Row className='p-2 my-2  fw-bold'>
          <hr/>
        <Col lg="4" >
          <div className='btn-primary-blue border border-warning rounded-3 m-1 d-flex flex-column'>
            <p className='m-3'>354</p>
            <p className='text-end mx-2'>Total Patients</p>
            <p className='text-end mx-2 '>3</p>
          </div>
        </Col>
        <Col lg="4" >
          <div className='btn-primary-blue border border-warning rounded-3 m-1 flex-column'>
            <p className='m-3'>1</p>
            <p className='text-end mx-2'>Today's Appointments</p>
            <p className='text-end mx-2'>3</p>
          </div>
        </Col>
        <Col lg="4">
          <div  className='btn-primary-blue border border-warning rounded-3 m-1 flex-column'>
            <p className='m-3'>1</p>
            <p className='text-end mx-2'>Total Surgeries</p>
            <p className='text-end mx-2'>3</p>
          </div>
        </Col>
      </Row>
      :
      <Outlet />
      }
      <hr/>
        
       
        </Col>
      </Row>
    </Container>
  )
}