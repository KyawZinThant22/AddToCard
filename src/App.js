
import { useContext } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Cart from './components/Cart';
import { Main } from './components/Context';
import Home from './components/Home';
import LoginForm from './components/LoginForm';
import Navbar from './components/Navbar';
import ProductDetails from './components/ProductDetails';
import styles from './components/style.module.css'



function App() {

  const {user,setUser} = useContext(Main)




  return (
    <BrowserRouter>
        <div className={styles.container}>
            {user.email !== '' ? (
        <div>
            
            <Navbar/>

          <Routes>
            <Route exact path='/' element = { <Home/> }></Route>
            <Route path='/cart' element = { <Cart/>}></Route>

            {/* <Route path='/products/:id' element = { <ProductDetails/> }></Route> */}

         </Routes>

          </div>
         
          
      ): (
        <LoginForm/>
      )}
    </div>
    </BrowserRouter>
  );
}

export default App;
