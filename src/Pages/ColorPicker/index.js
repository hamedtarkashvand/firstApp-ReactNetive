import React, {useReducer} from 'react';
import {View , Text , StyleSheet} from 'react-native';
import {HtButton } from '../../Common';
import {wp , CColor , LightenDarkenColor} from '../../Global';

const reducer = (state,action) =>{
    switch (action.type) {
        case 'changRed':
            return  state.red + action.payload <= 0 || state.red + action.payload  >= 255 ? state :
                {...state, red: state.red + action.payload}
            
        case 'changGreen':
            return  state.green + action.payload <= 0 || state.green + action.payload >= 255 ? state :
              { ...state, green: state.green + action.payload}
          
            case 'changBlue':
                return state.blue + action.payload <= 0 || state.blue + action.payload >= 255 ? state :
                   {...state, blue: state.blue + action.payload}
        default:
          return state
    }
}

const initialState = {
    red:0,
    green:0,
    blue:0
}

const ColorPicker = () => {

    const [state , dispach] = useReducer(reducer,initialState)
    const unit = 20

    return (
        <View style={style.container}>
            <View style={[style.previewColor ,{ backgroundColor:`rgb(${state.red}, ${state.green} , ${state.blue})` }]}>
                <Text style={[ style.previewColorTextChild, {color:'white'}]}>{`RGB(${state.red} , ${state.green} , ${state.blue})`}</Text>
            </View>

            <View style={style.buttonGroup}>

                <View style={style.wrapperButton}>
                    <HtButton
                    Type='danger'
                    OnPress={()=>
                        dispach({
                        type:'changRed',
                        payload:unit
                    })}
                     icon={
                            {
                                iconSize:40,
                                colorIcon:CColor.whiteFFF,
                                iconName:'upcircleo'
                            }
                     } />
                    <HtButton
                     Type='danger'
                     OnPress={()=>dispach({
                        type:'changRed',
                        payload:-1 * unit
                    })}
                    icon={
                        {
                            iconSize:40,
                            colorIcon:CColor.whiteFFF,
                            iconName:'downcircleo'
                        }
                     }
                    />
                </View>

                <View style={style.wrapperButton}>
                    <HtButton
                    Type='success'
                    OnPress={()=>
                        dispach({
                        type:'changGreen',
                        payload:unit
                    })}
                    icon={
                        {
                            iconSize:40,
                            colorIcon:CColor.whiteFFF,
                            iconName:'upcircleo'
                        }
                      } />
                    <HtButton
                     Type='success'
                     OnPress={()=>
                        dispach({
                        type:'changGreen',
                        payload:-1*unit
                    })}
                    icon={
                        {
                            iconSize:40,
                            colorIcon:CColor.whiteFFF,
                            iconName:'downcircleo'
                        }
                     }
                 />
                </View>

                <View style={style.wrapperButton}>
                    <HtButton
                    Type='primary'
                    OnPress={()=>
                        dispach({
                        type:'changBlue',
                        payload:unit
                    })}

                    icon={
                        {
                            iconSize:40,
                            colorIcon:CColor.whiteFFF,
                            iconName:'upcircleo'
                        }
                     } />

                    <HtButton
                     Type='primary'
                     OnPress={()=>
                        dispach({
                        type:'changBlue',
                        payload:-1*unit
                    })}
                    icon={
                        {
                            iconSize:40,
                            colorIcon:CColor.whiteFFF,
                            iconName:'downcircleo'
                        }
                     } />
                </View>

            </View>
        </View>
    )
}

export default ColorPicker

const style = StyleSheet.create({
    container:{
        padding:wp(4),
        paddingTop:0,
        display:'flex',
        flexDirection:'column',
        justifyContent:"space-between",
        height:'100%',
        backgroundColor: LightenDarkenColor(CColor.blue4FF,-0.3)  
    },
    previewColor:{
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        width:wp(92),
        height:wp(50),
        borderBottomRightRadius:30,
        borderBottomLeftRadius:30,
        elevation: 6,
        backgroundColor:CColor.whiteFFF,
       
    },
    previewColorTextChild:{
        fontSize:wp(10)
    },
    wrapperButton:{
        elevation: 6,
        display:'flex',
        flexDirection:'column',
        justifyContent:"space-between",
        width:wp(25),
        height:wp(42),
        borderRadius:5,
    },
    buttonGroup:{
        width:'100%',
        display:'flex',
        flexDirection:'row',
        justifyContent:"space-between",
        padding:wp(5),
    }
    
})