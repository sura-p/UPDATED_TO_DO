import logo from './logo.svg';
import './css/main.css';
import ToDo from './Components/ToDo';
import DisplayTodos from './Components/DisplayTodos';
import { Route, Routes } from 'react-router';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Container } from 'react-bootstrap';
import SignupScreen from './Components/SignupScreen';
import SigninScreen from './Components/SigninScreen';
import { Navbar  } from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { NavDropdown } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { signout } from './Services/Actions/action';
import { Navigate } from 'react-router';
import { useNavigate } from 'react-router';

function App() {
  const dispatch= useDispatch()
  const navigate = useNavigate()
 const userInfo = useSelector((state)=>state.Users.activeusers)
 const signouthandler=()=>{
  dispatch(signout());
  navigate("/");
 
}
  return (

<div className="d-flex flex-column site-container">
       <ToastContainer position="bottom-center" limit={1} />
        <Navbar bg="dark" variant="dark">
          <Container>
            <LinkContainer to='/'>
            <Navbar.Brand>TO-DO APP</Navbar.Brand>
            </LinkContainer>
            <Nav className="me-auto">
              <Link to="/cart" className="nav-link">
                
              </Link>
              {userInfo?(<NavDropdown title={userInfo?.name} id="basic-nav-dropdown">
                <LinkContainer to='/profile'>
                  <NavDropdown.Item>User Profile</NavDropdown.Item> 
                </LinkContainer>
                
                <NavDropdown.Divider/>
                <Link className="dropdown-item"
                to='/'
              onClick={signouthandler}
                >Sign Out</Link>
              </NavDropdown>):(<Link className='nav-link' to='/'>
              SignIN</Link>)}
            </Nav>
          </Container>
        </Navbar>
      <main>
    <Container className="mt-3">
   
    <ToastContainer position="bottom-center" limit={1} />
        <Routes>
          <Route path='/signin' element={<SignupScreen/>}/>
         
          <Route path='/' element={<SigninScreen/>}/>
          <Route path='/todo' element={<ToDo/>}/>
         
        </Routes>
        </Container>
        </main>
        <footer>
        <div className="text-center">
          All rights reserved
        </div>
      </footer>
   
    </div>
  );
}

export default App;
