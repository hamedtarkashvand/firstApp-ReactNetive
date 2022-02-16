import React from 'react';
import {Text,View , StyleSheet , Image} from 'react-native';
import { Images } from '../../fakeData/Data';

const DetailMovie = () => {
    return (
        <View style={style.continerDetailMovie}>
            <View style={style.headerPic}>
                {/* <Image source={uri:''} /> */}
            <Text>salme</Text>
             </View>
        </View>
    )
}

export default DetailMovie

const style =  StyleSheet.create({
    continerDetailMovie:{
        padding:5,
        borderWidth:1
    }

})