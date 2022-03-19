import React, { useContext, useEffect, useState } from 'react'
import CartDetails from './CartDetails'
import { Main } from './Context'
import SingleProduct from './SingleProduct'
import styles from './style.module.css'


const Cart = () => {

  const {product , setProduct} = useContext(Main)
  const [total , setTotal] = useState('');
  const [addedproduct , setAddedproduct] = useState('')

  
 


  useEffect(() =>{
   setTotal(product.reduce((x,y) => x+ Number(y.price),0))
  },[product])

  


  return (

    <div >

      <div className={styles.cartContainer}>

          <div>
            <h1>My Cart</h1>
            <p>Added Item</p>
          </div>

          <div>
              <span>Total : ${total}</span>
          </div>
      </div>



  <div>
    {product.map((product) => (
     <CartDetails item={product} key={product.id} setItem = {setProduct}/>
    ))}
    </div>
 




    </div>


  )
}

export default Cart