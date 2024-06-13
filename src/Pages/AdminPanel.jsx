import React, { useState } from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'
import { useDispatch } from 'react-redux';
import { createNewCard } from '../Redux/Slices/AdminSlice';
import AdminAddCard from '../Components/AdminAddCard';

export default function AdminPanel() {

  return (
    <Container className='h-100'>
        <h1 className='text-center text-golden'>Admin Panel</h1>
        <hr/>
        <Row>
            <AdminAddCard/>
            <hr/>

        </Row>

    </Container>
  )
}