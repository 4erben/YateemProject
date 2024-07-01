import React from 'react'
import {Container, Navbar, Row ,Nav, NavDropdown, Col} from "react-bootstrap";
import {Link} from "react-router-dom";
import Logo from "../assets/logo.png";
import { useSelector } from 'react-redux';

export default function Header() {
    const cartItems = useSelector(state=>state.cart.cartItems);
/*     const baseURL = import.meta.env.VITE_REACT_APP_API_URL;
    const logo = useSelector(state=>state.banners.logo);
    console.log(baseURL + logo?.img_url); */
  return (
    <header className='header bg-white'>
    <Navbar expand="lg" className='p-0' dir='rtl'>
        <Container className='px-0 justify-content-around  flex-column' fluid>
            <Row className='w-100 bg-md-white   bg-header-responsive flex-row align-items-center py-2'>
            <Col className='col-2'>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            </Col>
            <Col className='col-4'>
            <h6 className='pt-2 fw-bold '>مبني اليتيم بمكة</h6>
            </Col>
            <Col className=' col-3 logo-container'>
            <Link href="https://myfixpedia.com" className="navbar-brand" to="/">
                <img className='logo'
                loading="lazy" src={Logo} alt="مبنى اليتيم بمكة"/>
            </Link>
            </Col>
            <Col className=' col-3  me-auto d-flex'>
            <Link id='cart' className='cursor-pointer me-auto' to="/cart">
                <img className="icon mx-2" src="https://myfixpedia.com/site/assets/images/icons/icon-shopping_cart.svg" alt="سلة تبرعاتك"/>
                <span className="cartCount badge ">{cartItems.length}</span>
            </Link>
            </Col>
            </Row>
            <Row className='w-100 justify-content-center justify-content-md-around py-2 '>
                <Col md={8} sm={8} lg={4} xs={8} className='col-4  align-items-center fw-bold my-2 '>
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="flex-row justify-content-between align-items-center">
                    <Link to="/" className='mx-2 nav-link'>الرئيسية</Link>
                    <Link to="/projects" className='mx-2 nav-link'>فرص التبرع</Link>
                    <Link to="/dashboard" className='mx-2 nav-link pointer-none' >حاسبة الزكاة</Link>
                    <Link to="/licensing" className='mx-2 nav-link '>الترخيص</Link>
                    </Nav>
                    </Navbar.Collapse>
                </Col>
                <Col xs={12} sm={12} md={12} lg={8} xl={8} className='d-flex justify-content-around align-items-center'>
                <Row className='align-items-center  justify-content-lg-around w-100 fw-bold'>
                    <Col lg={3} md={3} sm={6} xs={6} className='my-2'>
                    <Link className="nav-link p-0 mt-1 pe-3 d-flex align-items-center" to="/gifts">
                        <i className="fa-solid fa-gift text-c-orange"></i>
                        <span className="text-primary-blue mx-1 ">الاهداءات</span>
                    </Link>
                    </Col>
                    <Col lg={3} md={3} sm={6} xs={6} className='my-2'>
                    <Link className="nav-link p-0 mt-1 pe-3 d-flex align-items-center" to="/login">
                    <i className="fa-solid fa-file text-c-orange"></i>
                        <span className="text-primary-blue mx-1">الايصالات</span>
                    </Link>
                    </Col>
                    <Col lg={3} md={3} sm={6} xs={6} className='my-2'>
                    <Link className="nav-link p-0 mt-1 pe-3 d-flex align-items-center" to="/login">
                        <i className="fa-solid fa-certificate text-c-orange"></i>
                        <span className="text-primary-blue mx-1">صك الوقفية</span>
                    </Link>
                    </Col>
                    <Col lg={3} md={3} sm={6} xs={6} className='my-2'>
                    <Link className="nav-link p-0 mt-1 pe-3 login_icon d-flex align-items-center " to="/login">
                        <i className="fa-solid fa-address-book fa-2x text-c-orange"></i>
                        <span className="text-primary-blue mx-1">تسجيل الدخول</span>
                    </Link>
                    </Col>
                </Row>
                </Col>
            </Row>
      </Container>
    </Navbar>
    </header>
  )
}
