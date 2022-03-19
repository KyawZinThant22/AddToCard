import axios from "axios";
import { useContext, useEffect } from "react";
import { Main } from "./Context";



const UseFetch = (url) => {

    const {data ,setData , isLoading , setIsLoading , dataError , setDataError} = useContext(Main)

        useEffect(() => {

            const abortCont = new AbortController();
          
                axios.get(url, {signal : abortCont.signal})
            .then((res) => {
                setData(res.data)
                setIsLoading(false)
                setDataError(null)
          
            }).catch((err)=>{

                if(err.name === 'AbortError'){

                }else{
                    setIsLoading(false)
                    setDataError(err.message)
                }
             
            })

            return () => abortCont.abort();

          
        },[])

     return {data , isLoading , dataError} 


}

export default UseFetch