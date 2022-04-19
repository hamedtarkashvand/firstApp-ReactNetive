import React , {useState , useEffect} from 'react';
import Server from '../Services/Server';
import {movieResultType} from './../utils/typs'

type pageNumberType = {
    page:number,
    total_pages?:number,
    total_results?: number
}

export default () =>{
    const [listMovies , setListMovies] = useState<movieResultType[]>([])
    const [errorText , setErrorText] = useState<string>('')
    const [pageNumber , setPageNumber] = useState<pageNumberType>({
        page:1,
        total_pages:0,
        total_results: 0
    })
    let isMounted:boolean = true;   

    const  SearchScreenMovies = async (trem:string) =>{
          
        try {
            await Server.get('search/movie?language=en-US/', {
                params:{
                    query: trem,
                    page:pageNumber.page
                }
            })
            .then((response)=>{
                 setListMovies(response.data.results)
                //  setPageNumber({
                //     page:response.data.page,
                //     total_pages:response.data.total_pages,
                //     total_results: response.data.total_results
                //    })
                 setErrorText('')
                })
            .catch((err)=>{
                console.warn(err)
            })
          
        } catch (err) {
            setErrorText('Somthing Went Worng ...')
        }
        
    }

    const  latestListMovie = async ()=>{
    try {
        await Server.get(`/trending/movie/day`,{
            params:{
                page:pageNumber.page
            }
        })
        .then((response)=>{
          if ( isMounted) {
            //   console.log(pageNumber.page)
            // setListMovies([...listMovies ,  ...response?.data?.results ])
            setListMovies(response.data.results)

            // setPageNumber({
            //     page:response.data.page,
            //     total_pages:response.data.total_pages,
            //     total_results: response.data.total_results
            //    })

          }
             setErrorText('')
            })
        .catch((err)=>{
            console.warn(err)
        })
      
    } catch (err) {
        setErrorText('Somthing Went Worng ...')
    }
    
}

    useEffect(()=>{  
        latestListMovie();
        // console.log('ghfghfghfghh')
        // SerchScreenMovies('spiderman')
        return ()=>{ isMounted = false }
    },[pageNumber])

    return {setPageNumber,pageNumber, listMovies, errorText , SearchScreenMovies}
}