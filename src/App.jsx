import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";
import '@fortawesome/fontawesome-free/css/all.min.css';
import Header from './Components/Header.jsx';
import  {Routes , Route}  from "react-router-dom";
import  {Container} from "react-bootstrap"
import {useDispatch} from "react-redux";
import HomePage from './Pages/HomePage';
import SideElement from './Components/SideElement.jsx';
import Footer from './Components/Footer.jsx';
import ProjectsPage from './Pages/ProjectsPage.jsx';
import GiftsPage from './Pages/GiftsPage.jsx';
import LoginPage from './Pages/LoginPage.jsx';
import CartPage from './Pages/CartPage.jsx';
import { useEffect } from 'react';
import { getCards } from './Redux/Slices/cardsSlice.jsx';
import { getBanners, getLogo } from './Redux/Slices/bannerSlice.jsx';
import Licensing from './Pages/Licensing.jsx';
import RegisterPage from './Pages/RegisterPage.jsx';
import CheckoutPage from './Pages/CheckoutPage.jsx';
function App() {
  const baseURL = `${import.meta.env.VITE_REACT_APP_API_URL}`;
  const dispatch = useDispatch();
  useEffect(()=>{
     dispatch(getCards()); 
    /*  dispatch(getBanners()); 
     dispatch(getLogo());  */
  
  },[])
  console.log(baseURL);
  return (
    <>
    <Container fluid className='mx-0 px-0 d-flex flex-column top-container'>
      <Header/>
      <SideElement />
      <Routes>
        <Route
        path="/"
        element={ <HomePage />}
        />
        <Route
        path='/projects'
        element ={<ProjectsPage />}
        />
        <Route
          path='/licensing'
          element={<Licensing/>}
          />
        <Route
        path="/gifts"
        element= {<GiftsPage />}
        />
        <Route
        path="/login"
        element= {<LoginPage />}
        />
        <Route
        path="/register"
        element= {<RegisterPage />}
        />
        <Route
        path="/cart"
        element= {<CartPage />}
        />
        <Route
          path='/checkout'
          element={<CheckoutPage/>}
          />
      </Routes>
      <Footer/>
      </Container>
    </>
  )
}

export default App
