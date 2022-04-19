import React , {useState , useEffect} from 'react';
import Server from '../Services/Server';
import { movieDetailType } from '../utils/typs';

export default (id:number)=>{
    const [detail , setDetail] = useState<movieDetailType[]>([])
    const [cast , setCast] = useState<object[]>([])
    const [loading , setLoading] = useState(true)
     
    const FetchDetails = async (movie_id:number) => {
           setLoading(true)
    try {        
            await Server.get(`/movie/${movie_id}`)
                .then(res=> {
                    setLoading(false)
                    setDetail(res.data)

                }).catch(err=>{
                    setLoading(false)
                    console.warn(err);
                })

   } catch {
            setLoading(false)
        }
    }

    const FetchImages = async (movie_id:number) => {
           setLoading(true)
    try {        
            await Server.get(`/movie/${movie_id}/credits`)
                .then(res=> {
                    setLoading(false)
                    setCast(res.data.cast)

                }).catch(err=>{
                    console.warn(err);
                    setLoading(false)
                })

   } catch {
            setLoading(false)
        }
    }

    useEffect(()=>{
        FetchDetails(id)
        FetchImages(id)
    },[id])

    return {cast , detail , loading}
}

