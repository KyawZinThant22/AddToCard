import React, { useContext, useState } from 'react'
import { Main } from './Context'
import styles from './style.module.css'

const LoginForm = () => {

    const [details , setDetails] = useState({name:'' , email: '' , password: ''})

    const {Login , Error} = useContext(Main)

    const handleSubmit = (e) => {
        e.preventDefault();
        Login(details)
    }



  return (
    <div className={styles.login}>
  <div className= {styles.loginTriangle } ></div>
  
  <h2 className={styles.loginHeader}>Log in</h2>
  {Error && <div>{Error}</div>}

  <form className={styles.loginContainer} onSubmit={handleSubmit}>


    <p><input type="text" placeholder="Name"  value={details.name} 

        onChange={(e) => setDetails({...details , name: e.target.value})}  required /></p>


    <p><input type="email" placeholder="Email"  value={details.email} 

        onChange={(e) => setDetails({...details , email: e.target.value})}  required /></p>

    <p><input type="password" placeholder="Password" value={details.password}
     
    onChange={(e) => setDetails({...details,password : e.target.value})} required /></p>

    <p><input type="submit" value="Log in"/></p>

  </form>
</div>
  )
}

export default LoginForm