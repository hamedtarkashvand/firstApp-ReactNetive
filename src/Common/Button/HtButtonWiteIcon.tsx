import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import Icon ,{}  from 'react-native-vector-icons/AntDesign'

interface HtbuttonWiteIconProps {
    colorIcon?:string,
    iconName:string,
    sizeIcon?:number,
    styleBtn?:object,
    lable?:string,
    callBack:()=>void
}

const HtbuttonWiteIcon = (
    {
        colorIcon,
        iconName,
        sizeIcon=30, 
        styleBtn={
            width:100,
            height:100
        },
        lable,
        callBack }:HtbuttonWiteIconProps ) =>(
            <View style={[style.containerButton , styleBtn]}>
                <TouchableOpacity 
                    style={style.touchableOpacity}
                    onPress={callBack}
                >
                    <Icon
                        name={iconName}
                        size={sizeIcon}
                        color={colorIcon||'black'}
                        />

                       {lable&&(<Text style={style.lable}>{lable}</Text>)}
                </TouchableOpacity>
            </View>
    ) 
    export {HtbuttonWiteIcon};
    
    
const style = StyleSheet.create({
    containerButton:{ 
        borderRadius:5,
        backgroundColor:'#6E44FF',
        elevation: 9,
    },
    touchableOpacity:{
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        height:'100%',
        width:'100%',
    
    },
    lable:{
        color:'white',
        marginTop:8,
        fontWeight:'bold'
    }
})

