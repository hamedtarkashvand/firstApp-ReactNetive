import React from 'react';
import {Text , StyleSheet , TouchableOpacity} from 'react-native';
import {CColor , wp , hp , LightenDarkenColor} from '../../Global'
import { Icon } from 'react-native-elements';

const HtButton = ({Type,
     Title,
     icon={
         iconName:'',
         iconSize:30,
         colorIcon:CColor.whiteFFF
        },
      OnPress,styleBtn}) =>{

    const backgroundColorReturn = (type) =>{
        if(type === 'danger'){
            return CColor.red343
        } else if(type === 'success'){
            return CColor.greenD6C
        } else if (type === 'primary'){
            return CColor.blue4FF
        } else {
            return CColor.whiteFFF
        }
    }

    const styleGroupTouchable = [
        style.HtButton ,
        styleBtn,
            {
                backgroundColor : backgroundColorReturn(Type)
            } 
    ]

    const styleGroupText = [
        style.textbutton ,
        {
            color:Type == null ?CColor.black021:CColor.whiteFFF,
            backgroundColor:backgroundColorReturn(Type)
         }
    ]  

    const IconReturn = ()=>{
        return (<Icon
            name={icon.iconName}
            type='antdesign'
            size={icon.iconSize}
            color={icon.colorIcon||'white'}
            />)
    }

    return (
        <TouchableOpacity
        style={styleGroupTouchable}
        onPress={OnPress} 
        >   
            <Text 
                style={styleGroupText}>
                {Title} 
            </Text>

           <Text style={{ marginLeft: icon.iconName ? 10 : 0}}>
           { icon.iconName && IconReturn()}
           </Text>

        </TouchableOpacity>
    )
}

export {HtButton}

const style= StyleSheet.create({
    HtButton:{
        width:`100%`,
        height:wp(20),
        borderRadius:5,

        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        // paddingRight:2,
        // paddingLeft:2
    },
    textbutton:{
        marginTop:'auto',
        marginBottom:'auto',
        textAlign:'center',
        fontWeight:'bold',
        // borderWidth:1,
        height:'auto',
        textAlign:'center'
  },
  wrapperIcon:{
    //   marginRight:10,
    //   marginLeft: icon.iconName ? 10 : 0,
  }
})