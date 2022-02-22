import React , {useState} from 'react'
import {Text ,View, StyleSheet} from 'react-native';
import { CColor } from '../../Global';


const HtTextMore = ({title, children}) => {
    const [more , setMore] = useState(false)
  return (
    <View style={style.wrapperTextMore}>
        <Text style={style.title}>{title}</Text>

        <Text style={style.childern}
            ellipsizeMode='tail' numberOfLines={more ? 100 : 3} >
            { children }
        </Text>
        <Text 
        onPress={()=>setMore(!more)}
        style={style.button}> {!more ? 'more' : 'less'} </Text>
    </View> )}

export { HtTextMore }

const style = StyleSheet.create({
    wrapperTextMore:{
         flex:1 ,
         paddingHorizontal:15, 
         width:'100%',
    },
    title:{
        fontSize:18,
         fontWeight:'bold'
        },
    button:{
        marginLeft:'auto',
        color:CColor.blueCFF,
        fontWeight:'bold'
    },
    childern:{ 
        textAlign:'justify',
         fontSize:16,
        //  color:CColor.blueCFF
        }
    }
)

