import React from 'react'
import {View, StyleSheet , TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign'
import { CColor, wp } from '../../Global'
import { HtButton } from '../';
import { buttonBackgerandEnum } from '../../utils/typs';

interface SerachBarProps {
     inputValue:string ,
     onChangeValue:(value:string)=>void ,
     onSubmit:(value:string)=>void
}

const SerachBar = (
    {    inputValue ,
         onChangeValue ,
         onSubmit
    }
    : SerachBarProps)=> {

    return (
        <View style={style.containerMovies}>
           <View style={style.iconWrapper}>
           <Icon
                name={'search1'}
                size={25}
                color={CColor.black021}
                />
            </View>
           <View style={style.inputWrapper}>
           <TextInput
            value={inputValue}
            onChangeText={(t)=>onChangeValue(t)}
            autoCorrect={false}
            placeholder="Serach ..."
            autoCapitalize="none"
            />
            </View>
           <View style={style.buttonWrapper}>
               <HtButton
                OnPress={()=>onSubmit(inputValue)}
                Type={buttonBackgerandEnum.primary} Title='SUBMIT' />
            </View>
        </View>
    )
}
export {SerachBar}

const style = StyleSheet.create({
    containerMovies:{
        display:'flex',
       flexDirection:'row',
       alignItems:'stretch',
       borderRadius:6,
       height:wp(18),
       overflow:'hidden',
       elevation: 3,
       backgroundColor:CColor.whiteFFF,
    },
    iconWrapper:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        height:wp(18),
    },
    inputWrapper:{
        flex:5,
        justifyContent:'center',
        paddingRight:3,
        paddingLeft:3,
        height:wp(18),
    },
    buttonWrapper:{
        flex:2,
        justifyContent:'center',
        alignItems:'center',
        height:wp(18),
    }
})