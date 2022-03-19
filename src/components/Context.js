import React, { createContext, useState } from 'react'


export const Main = createContext();



const Context = ({children}) => {


    //Login Form 

        const [user , setUser] = useState({name:'' , email: ''})
        const [Error , setError] = useState("")

        const AdminUser = {
            email :'kyawthant035@gmail.com',
            password: 'kyawthant035'
        }

        const Login = details => {
            if(details.email === AdminUser.email && details.password === AdminUser.password ){

                setUser({
                    ...user,
                    name:details.name,
                    email: details.email
                })

                
            }else{
                setError("Details Do not match")
            }
        }


        const LogOut = () => {
            setUser({name:'' , email: ''})
        }


          //Login Form 


          const [data , setData ] = useState(null)
          const [isLoading , setIsLoading] = useState(true)
          const [dataError , setDataError] = useState(null)
          const [product , setProduct] = useState([])

        const ContextValue = {
            AdminUser,
            user,
            setUser,
            Error,
            Login,
            LogOut,
            data,
            setData,
            isLoading,
            setIsLoading,
            dataError,
            setDataError,
            product,
            setProduct
        }

  return (
   <Main.Provider value={ContextValue}>
       {children}
   </Main.Provider>
  )
}

export default Context