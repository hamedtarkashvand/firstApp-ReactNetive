import React from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';
import {HTbuttonWiteIcon , HTalert} from '../index'

const HTlist = ({name = 'name', lastName = 'last name' , images = null}) => (
  <View style={style.continer}>
    {images && 
     <View style={style.imgContainer}>
     <Image source={images} />
   </View>}

    <View>
      <Text style={[ style.textStyle , style.title ]}>{name}</Text>
      <Text style={[ style.textStyle , style.subject]}>{lastName}</Text>
    </View>
    <View style={style.wraperButton}>
      <HTbuttonWiteIcon
       iconName={'caretright'}
       colorIcon={'#FFFFFC'}
       styleBtn={{width:60,height:60,borderRadius:50}}
       callBack={()=>HTalert(name,lastName)} />
    </View>
  </View>
);
export {HTlist};

const style = StyleSheet.create({
  continer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    // borderWidth: 1,
    padding: 20,
    margin: 10,
    borderRadius: 10,
    backgroundColor:'white',
    elevation: 6,
    // justifyContent:'flex-start'
  },
  imgContainer: {
    marginRight: 10,
  },
  textStyle: {
    fontSize: 15,
    textTransform: 'capitalize',
    marginBottom: 5,
  },
  wraperButton:{
    marginLeft:'auto'
  },
  title: {
    color: 'black',
    fontWeight:'bold',
    fontSize:19
  },
  subject: {
    color: '#6E44FF',
  },
  Notfound:{
    color:'red'
  }
});
