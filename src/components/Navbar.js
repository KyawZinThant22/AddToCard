import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Main } from './Context'
import style from './style.module.css'





const Navbar = () => {

const {user,LogOut} = useContext(Main)

const { product} = useContext(Main)


const handleShow = () => {
  if(product.length > 0) {
    return (
      (product.length)
    )
  }
}


  return (
        <nav className={style.navbarContainer}>
           <div>
                    <Link to= "/" className={style.header}>{user.name} shop</Link>
                    <p>with React</p>
           </div>
           <div className={style.links}>
               <Link to="/">Home</Link>
               <Link to="/cart">Cart {(handleShow())}</Link>
               <button className={style.btnDanger} onClick={LogOut}>LogOut</button>

           </div>
        </nav>
  )
}

export default Navbar