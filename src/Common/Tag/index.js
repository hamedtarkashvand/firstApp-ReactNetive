import React from 'react'
import {Text , StyleSheet} from 'react-native';
import { CColor } from '../../Global';

const HtTag = ({text}) => <Text style={style.tag} >{text}</Text>

export { HtTag }

const style = StyleSheet.create({
    tag:{ 
        backgroundColor:CColor.blueCFF,
        color:CColor.whiteFFF,
        padding:5,
        fontWeight:'bold',
        fontSize:9 ,
        margin:1,
        borderRadius:10
    }
})

