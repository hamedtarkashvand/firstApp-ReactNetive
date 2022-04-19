import React from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';
import { ImageProps } from 'react-native-elements';
import {HtbuttonWiteIcon , HtAlert} from '../index'

interface HtListProps {
  name:string,
  lastName:string,
  images:ImageProps
}

const HtList = ({
  name = 'name',
  lastName = 'last name',
  images}:HtListProps) => (

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
      <HtbuttonWiteIcon
       iconName={'caretright'}
       colorIcon={'#FFFFFC'}
       styleBtn={{width:60,height:60,borderRadius:50}}
       callBack={()=>HtAlert(name , lastName)} />
    </View>
  </View>
);
export {HtList};

const style = StyleSheet.create({
  continer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    margin: 10,
    borderRadius: 10,
    backgroundColor:'white',
    elevation: 6,
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
