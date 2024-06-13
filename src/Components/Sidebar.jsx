import React from 'react'
import {Container , Col , Row, Navbar, Nav} from "react-bootstrap";

import { Link } from 'react-router-dom';


export default function Sidebar() {
  return (
    <Col lg={2} className=''>
    <Navbar expand="lg">
        <Container className='d-flex flex-lg-column  flex-md-row' fluid>
              <Navbar.Toggle aria-controls='basic-navbar nav' className='ms-auto'/>
            {/* <hr className='border border-2 w-100'/> */}
            <Navbar.Collapse id='basic-navbar nav'  className='justify-content-center align-items-center'>
            {/* <Container className='d-lg-flex  flex-column align-items-center d-none'>
              <img src={avatar} className='avatar-sidebar' alt='Avatar Image'/>
              <p className='fw-bold'>Dr. Anushka</p>
              <hr className='border border-2 w-100'/>
            </Container> */}
            <Nav className="d-flex flex-lg-column flex-md-row justify-content-around align-items-lg-start ">
                {/* <Link to="dashboard" className='text-center text-lg-start p-3 my-2 nav-link fw-semibold text-capitalize w-100'>
                <i className="fa-solid fa-table-columns me-2"></i>
                <span>Dashboard</span>
                </Link> */}
                <Link to="add" className='text-center text-lg-start p-3 my-2 nav-link fw-semibold text-capitalize w-100'>
                <i className="fa-solid fa-clipboard-list me-2"></i>
                <span>Add Card</span>
                </Link>
                <Link to="remove" className='text-center text-lg-start p-3 my-2 nav-link fw-semibold text-capitalize w-100'>
                <i className="fa-regular fa-calendar-check me-2"></i>
                <span>Remove Card</span>
                </Link>
                <Link to="edit" className='text-center text-lg-start p-3 my-2 nav-link fw-semibold text-capitalize w-100'> 
                <i className="fa-solid fa-hospital-user me-2"></i>
                <span>Edit Card</span>
                </Link>
                
            </Nav>
            <hr className='border border-2 w-100 d-lg-none'/>
            </Navbar.Collapse>

        </Container>
    </Navbar>
    </Col>
  )
}
