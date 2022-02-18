import React , {useState } from 'react';
import {View , Text , StyleSheet , FlatList} from 'react-native';
import { CColor, wp , LightenDarkenColor, hp } from '../../Global';
import {useApiMovieSearch} from '../../hooks';
import {HTlistMove , SerachBar} from '../../Common';

const Movies = ({navigation})=> {
    const [value , setValue] = useState('')
    const [ setPageNumber , pageNumber, listMovies, errorText , SearchScreenMovies] = useApiMovieSearch()
    const pathComponent = 'DetailMovie';
   
    const rowRenderItem = (item)=>{
        return (
            <HTlistMove
            imgSrc={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
            nameMovie={item.title}
            discriptionMovie={item.release_date}
            onPress={()=>{
                navigation.navigate(pathComponent, {
                    movie_id: item.id,
                  });
            }}
            

             result={{
                    language:item.original_language,
                    vote_count:item.vote_count,
                    vote_average:item.vote_average
                }}
            />
        );
    }

    return (
        <View style={style.containerMovies}>
            <SerachBar
             inputValue={value}
             onSubmit={(e)=>SearchScreenMovies(e)}
             onChangeValue={(e)=>setValue(e)}
             />

          <View style={style.ListMovies}>
            <FlatList
                    data={listMovies}
                    horizontal={false}
                    // initialNumToRender={10} 
                    showsHorizontalScrollIndicator={false}
                    keyExtractor={item => item.id.toString()}
                    onEndReached={() => setPageNumber({...pageNumber,page:pageNumber.page+1})}
                    renderItem={({item}) => rowRenderItem(item)  } />
             
          </View>   
             {
                 errorText !== '' &&<Text style={style.err}>{errorText}</Text>
             }
        </View>
    )
}

export default Movies

const style = StyleSheet.create({
    containerMovies:{
        flex:1,
        paddingBottom:hp(16),
        height:hp(100),
        padding:wp(4),
        backgroundColor:LightenDarkenColor(CColor.blue4FF,-0.3)
    },
    ListMovies:{
        padding:0
    },
    err:{
        color:LightenDarkenColor(CColor.red343 , -0.1),
        textAlign:'center',
        width:`100%`,
        fontSize:wp(6),
        padding:10,
        borderWidth:1,
        borderColor:CColor.red343,
        marginTop:'auto',
        marginBottom:'auto',
        borderRadius:5,
        backgroundColor:LightenDarkenColor(CColor.red343 , 2.9)
    }
})