import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Footer from './components/Footer';
import Register from './components/Register';
import Login from './components/Login';
import Cart from './components/Cart';

function App() {

  return (
    <>
      <Navbar></Navbar>
      <Home></Home>
      <Cart></Cart>
      {/*<Register></Register>*/}
      {/*<Login></Login>*/}
      <Footer></Footer>
    </>
  )
}

export default App
