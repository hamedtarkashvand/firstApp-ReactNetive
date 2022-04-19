import React , {useEffect, useState} from 'react';
import {Text,View , StyleSheet , Image , ScrollView , FlatList} from 'react-native';
import {useApiMovieDetails} from '../../hooks'
import {CColor, hp, LightenDarkenColor, wp} from '../../Global'
import { HtTag  , HtTextMore} from '../../Common';


const DetailMovie = ({route}) => {
    const {movie_id} = route.params;
    const {cast, detail,loading} = useApiMovieDetails(movie_id)
    useEffect(()=>{
        // FetchDetails(movie_id)
        // FetchDetails(634649)
    },[])
    const returnGenres = (genres:object[]) => {
        return genres?.map((genres) => <HtTag key={genres.id} text={genres.name} />)
    }
    
    return (
        
     <ScrollView
      style={{backgroundColor:CColor.whiteFFF}}
        showsHorizontalScrollIndicator={false}>
          
          {loading === true ? <Text>loading ...</Text> 
          : (
                    <View style={style.continerDetailMovie}>
                    <View style={style.wrapperBackdrop}>
                        <Image style={style.backdrop}
                         blurRadius={0.2}
                         source={{uri:`https://image.tmdb.org/t/p/w500${detail.backdrop_path}`}} />
                        <Text>{detail.original_title}</Text>
                     </View>
        
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
        
                   <View style={style.wrapperCast}>
                       <Text style={style.titleSection}>Cast</Text>
                         <FlatList
                           data={cast}
                           horizontal={true}
                           keyExtractor={item=>item.id}
                           renderItem={({item})=> {
                               return (
                                   <View style={style.cardPerson}>
                                        <View style={style.cardPhotos}>
                                            <Image style={style.photos} 
                                                    source={{uri:`https://image.tmdb.org/t/p/w500${item.profile_path}`}} />
                                        </View>

                                        <View style={style.cardInformation}>
                                                <Text
                                                 ellipsizeMode='tail' numberOfLines={1}
                                                 style={style.cardName}>{item.original_name}</Text>
                                                <Text style={style.cardDepartment}>{item.known_for_department}</Text>
                                        </View>
                                    <View/>
                                   </View>
                               )
                           }}
                         />    
                   </View>
        
                             
             </View>
          )} 

    

    </ScrollView> )}

export default DetailMovie

const style =  StyleSheet.create({
    continerDetailMovie:{
        flex:1,
        backgroundColor:CColor.whiteFFF,
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
        flexWrap:'wrap'},

    wrapperCast:{
        // flex:1,
        width:wp(100),
        paddingHorizontal:15, 
        // justifyContent:'flex-start', 
        // alignItems:'flex-end',
        marginBottom:30
    },
    titleSection:{
        fontSize:18,
         fontWeight:'bold'
        },

      cardPerson:{
        width:wp(35),
        height:hp(35),
        overflow:'hidden',
        marginHorizontal:5,
      },
      cardPhotos:{
        width:'100%',
        height:hp(27),
        overflow:'hidden',
        borderRadius:10
    }  ,
    photos:{
        width:'100%',
        height:'100%',
        resizeMode:'cover',
    },
    cardName:{
        fontWeight:'bold'

    }
})
// enum('cover', 'contain', 'stretch', 'repeat', 'center')	