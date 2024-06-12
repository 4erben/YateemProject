import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";
import '@fortawesome/fontawesome-free/css/all.min.css';
import Header from './Components/Header.jsx';
import  {Routes , Route}  from "react-router-dom";
import  {Container} from "react-bootstrap"
import HomePage from './Pages/HomePage';
import SideElement from './Components/SideElement.jsx';
import Footer from './Components/Footer.jsx';
import ProjectsPage from './Pages/ProjectsPage.jsx';
import GiftsPage from './Pages/GiftsPage.jsx';
import LoginPage from './Pages/LoginPage.jsx';
import CartPage from './Pages/CartPage.jsx';
function App() {
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
        path="/gifts"
        element= {<GiftsPage />}
        />
        <Route
        path="/login"
        element= {<LoginPage />}
        />
        <Route
        path="/cart"
        element= {<CartPage />}
        />
      </Routes>
      <Footer/>
      </Container>
    </>
  )
}

export default App
