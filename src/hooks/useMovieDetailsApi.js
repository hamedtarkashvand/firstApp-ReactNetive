import React , {useState , useEffect} from 'react';
import Server from '../Services/Server';

export default ()=>{
    const [detail , setDetail] = useState([])
    const [loading , setLoading] = useState(true)
     

    const FetchDetails = async movie_id => {
           setLoading(true)
    try {        
            await Server.get(`/movie/${movie_id}`)
                .then(res=> {
                    
                    setLoading(false)
                    setDetail(res.data)

                }).catch(err=>{
                    console.warn(err);
                    setLoading(false)
                })

   } catch {
            setLoading(false)
        }
    }


    // useEffect(()=>{
    //     //  FetchDetails()
    // },[])


    return [FetchDetails , detail , loading]
}

// import {View} from 'react-native'