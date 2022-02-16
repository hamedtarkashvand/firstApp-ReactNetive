import React from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';
import { CColor, wp } from '../../Global';
import {HtButton} from '../index'

const HTlistMove = (
  {nameMovie = 'name',
   discriptionMovie = 'last name' ,
    imgSrc = null ,
    result={
      vote_average:0,
      vote_count:0,
      language:""
    },
     onPress 
    }) => (
  <View style={style.continer}>
    {imgSrc && 
     <View style={style.imgContainer}>
     <Image style={style.imgMovie} source={{uri:imgSrc}} />
   </View>}

    <View style={style.wraperDetails}>
      <Text ellipsizeMode='tail' numberOfLines={1} style={[ style.textStyle , style.nameMovie  ]}>{nameMovie}</Text>

      {/* <Text style={[ style.textStyle , style.discriptionMovie]}>{discriptionMovie}</Text> */}

      <View style={style.result}>
        <View style={style.boxResult}>
          <Text style={style.textBoxResult}>{result.vote_count}</Text>
          <Text style={style.titlBoxResult}>Likes</Text>
        </View>
        <View style={style.boxResult}>
          <Text style={style.textBoxResult}>{result.vote_average}</Text>
          <Text style={style.titlBoxResult}>Avg Rate</Text>
        </View>
        <View style={style.boxResult}>
          <Text style={style.textBoxResult}>{result.language}</Text>
          <Text style={style.titlBoxResult}>Lng</Text>
        </View>
      </View>
    </View>

    <View style={[style.wraperButton]}>
      <HtButton Title="DETAILS" 
      Type={'primary'}
       OnPress={onPress}
       icon={
            {
              iconName:'doubleright',
              iconSize:14,
              colorIcon:'white'
            }
          }
       styleBtn={{...style.htButton}}/>
    </View>
  </View>
);
export {HTlistMove};

const style = StyleSheet.create({
  continer: {
    flex:1,
    flexDirection: 'row',
    alignItems:'flex-start',
    position:'relative',
    backgroundColor:CColor.whiteFFF,
    marginBottom:10,
    marginTop:10,
    borderRadius: 10,
    overflow:'hidden',
    elevation: 6,
  },
  wraperButton:{
    position:'absolute',
    bottom:0,
    left:wp(30),
    right:0,
    zIndex:0
  },
  htButton:{
    width:'100%',
    height:40,
    fontSize:wp(8),
    borderRadius:0
  },
  wraperDetails:{
    flex:1,
    padding:10,
    height:'100%',
   
  },
  textStyle: {
    fontSize: 15,
    textTransform: 'capitalize',
    marginBottom: 5,
    width:'100%'
  },
  nameMovie: {
    color: CColor.black021,
    fontWeight:'bold',
    fontSize:16,
  },
  discriptionMovie: {
    color: CColor.blue4FF,
  },
  imgContainer: {
  },
  imgMovie: {
    width:wp(30),
    height:wp(40),
    borderWidth:5,
    resizeMode:'contain'
  },
  result:{
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    width:`100%`,
    height:45,
    // borderWidth:1
  },
  boxResult:{
    marginTop:10
    // width:wp(17),
    // borderWidth:1
  },
  textBoxResult :{
    textAlign:'center',
    fontWeight:'bold',
    fontSize:19
  },
  titlBoxResult:{
    textAlign:'center',
    // fontWeight:'bold'
  },
  Notfound:{
    color:'red'
  }
});

// View style={style.result}>
//         <View style={style.boxResult}>
//           <Text style={style.textBoxResult}>270</Text>
//           <Text style={style.titlBoxResult}>270</Text>