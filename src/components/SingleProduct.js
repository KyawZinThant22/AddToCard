import React, { useContext } from 'react'
import { Link } from "react-router-dom";
import { Main } from './Context';

import styles from './style.module.css'






function SingleProduct({item}) {

  const {product , setProduct} = useContext(Main)




  function truncate(str, n){
    return (str.length > n) ? str.substr(0, n-1) + '&hellip.....' : str;
  };


  

  return (
    <div className={styles.products}>

     
      
        <img src={item.image} alt={item.title} />
        
        <div className={styles.pD}>
            <span style={{fontWeight:700}}>{truncate(item.title,20)}</span>
            <div className={styles.Price}>
              <span>${item.price}</span>


              {product.includes(item)? (
                   <button className={styles.Danger}
                   onClick={() => setProduct(product.filter(data => data.id !== item.id))}
                   >
                     Remove </button>
              ):(
                <button className={styles.btnInfo}
                onClick={() => setProduct([...product,item])}
                >
                  Add </button>
              )}

             

               
            </div>
        </div>
      
      

        <Link to={`/products/${item.id}`}>
            <button className={styles.btnDetPri}
           
            >More Details</button>
        </Link>
    </div>
  )
}

export default SingleProduct