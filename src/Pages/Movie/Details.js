import React , {useEffect, useState} from 'react';
import {Text,View , StyleSheet , Image , ScrollView} from 'react-native';
import {useApiMovieDetails} from '../../hooks'
import {CColor, LightenDarkenColor, wp} from '../../Global'
import { HtTag  , HtTextMore} from '../../Common';


const DetailMovie = ({route}) => {
    const [FetchDetails, detail,loading] = useApiMovieDetails()
    const {movie_id} = route.params;
    useEffect(()=>{
        FetchDetails(movie_id)
        // FetchDetails(634649)
    },[])

    const returnGenres = (genres) => {
        return genres?.map((genres) => <HtTag key={genres.id} text={genres.name} />)
    }
    
    return (
    <ScrollView
    style={{backgroundColor:CColor.whiteFFF}}
        showsHorizontalScrollIndicator={false}>
          <View style={style.continerDetailMovie}>
            <View style={style.wrapperBackdrop}>
                <Image style={style.backdrop}
                 blurRadius={0.2}
                 source={{uri:`https://image.tmdb.org/t/p/w500${detail.backdrop_path}`}} />
                <Text>{detail.original_title}</Text>
             </View>

             {
                 loading&&<Text>loading</Text>
             }
            <View style={style.contentDetails}>

                <View style={style.wrapperPoster}>
                    <Image style={style.poster} 
                    source={{uri:`https://image.tmdb.org/t/p/w500${detail.poster_path}`}} />
                </View>

                <View style={style.content}>
                    <Text style={style.content_title} ellipsizeMode='tail' numberOfLines={1}>
                       {detail.original_title}
                    </Text>
                    
                    <View style={style.result}>
                        <View style={style.boxResult}>
                           <Text style={style.textBoxResult}>{detail.vote_count}</Text>
                           <Text style={style.lableBoxResult}>Likes</Text>
                        </View>
                        <View style={style.boxResult}>
                           <Text style={style.textBoxResult}>{detail.vote_average}</Text>
                           <Text style={style.lableBoxResult}>Avg Rate</Text>
                        </View>
                        <View style={style.boxResult}>
                           <Text style={style.textBoxResult}>{detail.original_language}</Text>
                           <Text style={style.lableBoxResult}>Lng</Text>
                        </View>
                    </View>

                    <View style={style.wrapperGenres}>
                        {
                           returnGenres(detail.genres)
                        }
                    </View>
                </View>
           </View>

           <HtTextMore title='Overview'>
             { detail.overview }
           </HtTextMore>

                     
     </View>

    </ScrollView> )}

export default DetailMovie

const style =  StyleSheet.create({
    continerDetailMovie:{
        backgroundColor:CColor.whiteFFF,
        flex:1,
        alignItems:'center',
        // borderWidth:1,
    },
    wrapperBackdrop:{
        width:'160%',
        margin:'auto',
        backgroundColor:CColor.black021,
        height:200,
        borderBottomEndRadius:600,
        borderBottomStartRadius:600,
        overflow:'hidden',
    },
    backdrop:{
        resizeMode:'contain',
        width:'100%',
        height:'100%',
        opacity:0.8,
    },
    contentDetails:{
        display:'flex',
        padding:15,
        paddingTop:10,
        flexDirection:'row',
        width:wp(100),
        marginTop:-55
        //   transform: [
        //     { 
        //         translateY: -55
        //      }
        // ],
    },
    content:{
        flex:3,
        padding:10,
        paddingBottom:0,
        height:'auto',
        alignSelf:'flex-end'
    },
    content_title:{
        fontWeight:'bold',
        fontSize:20,
        color:CColor.black021
    },
    wrapperPoster:{
      flex:2,
      height:170,
     },
     poster:{
         width:'100%',
         height:'100%',
         resizeMode:'stretch',
         borderRadius:15,
     },
     result:{
        display:'flex',
        flexDirection:'row',
        alignSelf:'flex-end',
        justifyContent:'space-between',
        alignItems:'center',
        width:`100%`,
        // height:35,
      },
      boxResult:{
        marginTop:5
      },
      textBoxResult :{
        textAlign:'center',
        fontWeight:'bold',
        fontSize:20,
        color:CColor.blue4FF
      },
      lableBoxResult:{
        textAlign:'center',
        color:LightenDarkenColor(CColor.gray0F9,-0.5)
      },
      wrapperGenres:{
        overflow:'hidden',
        width:'100%',
        marginTop:10,
        display:'flex',
        flexDirection:'row',
        flexWrap:'wrap'}
})
// enum('cover', 'contain', 'stretch', 'repeat', 'center')	