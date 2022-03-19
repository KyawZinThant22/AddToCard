import React, { useContext } from 'react'
import SingleProduct from './SingleProduct';
import UseFetch from './UseFetch'
import styles from './style.module.css'
import { Main } from './Context';

const  Home = () => {

    const { data ,isLoading , dataError} = UseFetch('https://fakestoreapi.com/products')

    const {product , setProduct} = useContext(Main)

    

 

  return (
    <div>
        {isLoading && <div className={styles.loader}>Loading...</div>}
        {dataError && <div>{dataError}</div>}
       {data  && (
           <div className={styles.productContainer}>
               {data.map((item)=>(
                   <SingleProduct item = {item} key={item.id}/>
               ))}
               </div>
       )}
    </div>
  )
}

export default Home