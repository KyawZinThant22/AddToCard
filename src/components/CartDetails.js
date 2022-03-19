import React, { useContext, useState } from 'react'
import { Main } from './Context'
import styles from './style.module.css'


const CartDetails = ({item,setItem}) => {
const [newPrice, setNewPirce] = useState(Number(1))
const {product , setProduct} = useContext(Main)



const handleAdd = () => {
  setNewPirce((pre) => (++pre))

}





  return (
    <div>
              <div className={styles.itemContainer} key={item.id}>

                    <div className={styles.cartDF}>
                    <img src={item.image}  className={styles.cartImg} alt={item.title}  />
                        <div className={styles.cartDe}>
                            <h4>{item.title}</h4>
                            <p>{item.description}</p>
                            <div className={styles.pricing}>
                                <div>
                                    <button className={styles.cartBtn} >-</button>
                                    <input type="text" value={newPrice} onChange={(e) => setNewPirce(e.target.value)} / >
                                    <button className={styles.cartBtn}  onClick={handleAdd}>+</button>
                                </div>
                                <span>${item.price}</span>
                                </div>
                                <button className={styles.cartDanger} onClick={() => setProduct(product.filter(data => data.id !== item.id))}>Delete</button>
                        </div>
</div>

</div>
    </div>
  )
}

export default CartDetails