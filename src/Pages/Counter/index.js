import React,{useState}from 'react';
import {View, Text , StyleSheet} from 'react-native';
import {HtbuttonWiteIcon} from '../../Common';
import {wp} from '../../Global';

const Counter =()=> {
    const [ count , setCount  ] = useState(0)
 return (

    <View style={style.containerCounter}>
        <View style={style.counterWrappr}>
            <HtbuttonWiteIcon iconName={'pluscircleo'} 
            colorIcon={'#EEF0F2'} 
            callBack={()=> count !== 20 && setCount(count + 1)} 
            styleBtn={
                {
                    width:76 ,
                    height: 85 ,
                    backgroundColor:'#F93943',
                    opacity:count >= 20 ? 0.1 : 1,
                }
            } />

            <Text style={style.textCount}>{count}</Text>

            <HtbuttonWiteIcon iconName={'minuscircleo'}
             colorIcon={'#EEF0F2'}
             styleBtn={
                { 
                    width:76 ,
                    height: 85 ,
                    opacity:count === 0 ? 0.1 : 1,
                    backgroundColor:'#F93943',
                    
                }
            }
             callBack={()=> count&&setCount(count - 1)}
        
               />
        </View>
    </View>
) }

export default Counter

const style = StyleSheet.create({

    containerCounter:{
        padding:wp(4),
        height:`100%`,
        width:'100%',
        display:'flex',
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#6E44FF',
    },
    counterWrappr:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        backgroundColor:'#7F5CFF',
        width:230,
        // minWidth:230,
        height:85,
        borderRadius:50,
        overflow:'hidden'
    },
    textCount:{
        color:'#EEF0F2',
        fontSize:50
    }

})