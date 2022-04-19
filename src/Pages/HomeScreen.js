import * as React from 'react';
import {View,StyleSheet,Image, FlatList} from 'react-native';
import {Images} from '../fakeData/Data';
import {HtbuttonWiteIcon} from './../Common';
import {wp , hp , CColor , LightenDarkenColor} from '../Global/style'


function HomeScreen({navigation}) {
  return (
    <View style={style.containerHomePage}>
      {/* <Text> Home Screen </Text> */}
      <View style={style.containerImage}>
          <Image
            style={style.pic}
            source={{
              uri:Images.absoluteImages
            }}
          />
      </View>

      <View style={{width:'100%'}}>
 
      <FlatList
              data={ListMenu}
              horizontal={false}
              numColumns={2}
              showsHorizontalScrollIndicator={true}
              contentContainerStyle={{margin:4}}
              keyExtractor={item => item.name}
              // onEndReached={() => HTalert('props', 'onEndReached')}
              renderItem={({item}) => {
                return (
                  <HtbuttonWiteIcon
                  key={item.name}
                  lable={item.name}
                  styleBtn={{height:hp(25), width:wp(47), margin:wp(1)}}
                  iconName={item.icon}
                  colorIcon={CColor.whiteFFF}
                  sizeIcon={wp(15)}
                  callBack={()=>navigation.navigate(item.pathComponent)}
                  />
                );
              }}
            />

        </View>      
    </View>
  );
}

export default HomeScreen;

const style = StyleSheet.create({
  containerHomePage:{
    display:'flex',
    alignItems:'center',
    backgroundColor:LightenDarkenColor(CColor.blue4FF,-0.2),
    height:`100%`,
  },
  wraperListMenu:{

  },
  containerImage:{
    width:100,
    height:100,

  },
  pic:{
    width:`100%`,
    height:`100%`,
    resizeMode:'contain'
  }
  
})


const ListMenu = [
  {
    name:'List User',
    icon:'addusergroup',
    pathComponent:'List',
  },
  {
    name:'Counter',
    icon:'pluscircleo',
    pathComponent:'Counter'
  },
  {
    name:'ColorPicker',
    icon:'aliwangwang-o1',
    pathComponent:'ColorPicker'
  },
  {
    name:'Movies',
    icon:'videocamera',
    pathComponent:'Movies'
  }

]