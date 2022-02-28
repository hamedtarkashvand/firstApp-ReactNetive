import React from 'react';
import {Text , StyleSheet , TouchableOpacity} from 'react-native';
import {CColor , wp} from '../../Global'
import Icon from 'react-native-vector-icons/AntDesign'
import { buttonBackgerandEnum } from '../../utils/typs';

interface HtButtonType {
    Type?:buttonBackgerandEnum,
    Title:string,
    icon?:{
        iconName:string,
        iconSize:number,
        colorIcon:string
       },
     OnPress:()=>void,
     styleBtn?:object}

const HtButton = ({
     Type,
     Title,
     icon={
         iconName:'',
         iconSize:30,
         colorIcon:CColor.whiteFFF
        },
      OnPress,styleBtn}:HtButtonType) =>{

    const backgroundColorReturn = ():string => {
        if(Type === 'danger'){
            return CColor.red343
        } else if(Type === 'success'){
            return CColor.greenD6C
        } else if (Type === 'primary'){
            return CColor.blue4FF
        } else {
            return CColor.whiteFFF
        }
    }

    const styleGroupTouchable = [
        style.HtButton ,
        styleBtn,
            {
                backgroundColor : backgroundColorReturn()
            } 
    ]
    
    const styleGroupText = [
        style.textbutton ,
        {
            color: !!Type ? CColor.whiteFFF : CColor.black021,
            backgroundColor:backgroundColorReturn()
         }
    ]  

    const IconReturn = ()=>{
        return (<Icon
            name={icon.iconName}
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
        textAlignVertical:'center'
  },
  wrapperIcon:{
    //   marginRight:10,
    //   marginLeft: icon.iconName ? 10 : 0,
  }
})