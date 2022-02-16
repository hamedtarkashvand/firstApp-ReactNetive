import React from 'react'
import {View , Text , StyleSheet , TextInput} from 'react-native';
import { CColor, wp, LightenDarkenColor } from '../../Global'
import {Icon} from 'react-native-elements'
import { HtButton } from '../';


const SerachBar = ({lable , iconName = 'search1' , inputValue , onChangeValue , onSubmit})=> {
    return (
        <View style={style.containerMovies}>
           <View style={style.iconWrapper}>
           <Icon
                name={iconName}
                type='antdesign'
                size={25}
                color={CColor.black021}
                />
            </View>
           <View style={style.inputWrapper}>
           <TextInput
            value={inputValue}
            onChangeText={(t)=>onChangeValue(t)}
            autoCorrect={false}
            style={style.input}
            placeholder="Serach ..."
            autoCapitalize="none"
            />
            </View>
           <View style={style.buttonWrapper}>
               <HtButton
                OnPress={()=>onSubmit(inputValue)}
                Type="primary" Title='SUBMIT' />
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