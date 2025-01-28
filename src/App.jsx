import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Footer from './components/Footer';
import Register from './pages/Register';
import Login from './pages/Login';
import Cart from './pages/Cart';
import Pizza from './pages/Pizza';
import NotFound from './pages/NotFound';
import { Route, Routes } from 'react-router-dom';
import Profile from './pages/Profile';
import { CartProvider } from './context/CartContext';
import { UserContext, UserProvider } from './context/UserContext';
import { useContext } from 'react';

function App() {

  const { userToken } = useContext(UserContext);
  console.log(userToken)

  return (
    <>
        <CartProvider>
          <Navbar></Navbar>
          <Routes>
            <Route path='/' element={<Home></Home>}></Route>
            <Route path='/cart' element={<Cart></Cart>}></Route>
            <Route path='/login' element={userToken ? <Home></Home> : <Login></Login>}></Route>
            <Route path='/register' element={userToken ? <Home></Home> : <Register></Register>}></Route>
            <Route path='/pizza/:id' element={<Pizza></Pizza>}></Route>
            <Route path='/profile' element={userToken ? <Profile></Profile> : <Login></Login>}></Route>
            <Route path='*' element={<NotFound></NotFound>}></Route>
          </Routes>
          <Footer></Footer>
        </CartProvider>
    </>
  )
}

export default App