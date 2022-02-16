import React from 'react'
import {View , Text , StyleSheet , TextInput} from 'react-native';
import { CColor, wp, LightenDarkenColor } from '../../Global'
import {Icon} from 'react-native-elements'

const InputText = ({lable , iconName = 'search1' , inputValue , onChangeValue})=> {
    return (
        <View style={style.containerMovies}>
            <Text style={style.lable}>Movis</Text>
            <View style={style.wrapperInput}>

            <Icon
                    name={iconName}
                    type='antdesign'
                    size={25}
                    color={LightenDarkenColor(CColor.gray0F9,-0.5)}
                    />

            <TextInput
            value={inputValue}
            onChangeText={(t)=>onChangeValue(t)}
            autoCorrect={false}
            style={style.input}
            autoCapitalize="none"
            />
            </View>
        </View>
    )
}


export {InputText}
const style = StyleSheet.create({
    containerMovies:{
        position:'relative',
        display:'flex',
        borderWidth:2,
        borderColor:CColor.blueCFF,
        borderRadius:30,
        justifyContent:'center',
        alignItems:'center',
        width:'100%',
        marginTop:wp(3),
        marginBottom:wp(3),
        textAlign:'left',
        height:50,
        backgroundColor:LightenDarkenColor(CColor.blueCFF,1.7),
        overflow:'hidden'
    },
    wrapperInput:{
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        paddingRight:10,
        paddingLeft:30,
    }
    ,input:{
        position:'relative',
        width:'100%',
        height:'100%',
        paddingLeft:10,
    },
    lable:{
        position:'absolute',
        top:-15,left:15,
        // backgroundColor:,
        fontWeight:'bold',
        paddingLeft:5,
        paddingRight:5
    }

})