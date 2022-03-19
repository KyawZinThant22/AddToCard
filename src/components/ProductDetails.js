import React from 'react'
import { useParams } from "react-router-dom";
import UseFetch from './UseFetch';
import styles from './style.module.css'



const ProductDetails = () => {
    const { id } = useParams();
    const { data,isLoading,dataError } = UseFetch('https://fakestoreapi.com/products/'+ id)
    
    



  return (
    <div>
          {isLoading && <div className={styles.loader}>Loading...</div>}
        {dataError && <div>{dataError}</div>}
       {data && <div><img src={data.image} alt="" /></div>}
    </div>
   
  )
}

export default ProductDetails