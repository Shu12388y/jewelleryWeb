import axios from "axios";
import { useState,useEffect } from "react";


export const useFetch = ({path})=>{
    const [data,setData] = useState([]);
    const [error,setError] = useState('error')
    useEffect(()=>{
        fetchData()
    },[]);

    async function fetchData() {
            try {
                const {data} = await axios.get(`https://dummyjson.com/${path}`);
                if(!data){
                    setData([])
                    setError('Error')
                }
                setData(data)
                setError('')
                
            } catch (error) {
                    setData([])
                    setError('Error')
            }
    }

    return {
        data,error
    }
}

