import React from 'react';
import {View, StyleSheet, FlatList} from 'react-native';
import {HTlist} from '../Common';
import {wp,CColor,LightenDarkenColor, hp} from '../Global';
import { UserDate , Images} from '../fakeData/Data'

const ListScreen = () => {
  const ListData = UserDate;
  return (
    <View style={style.HomeScreenContainer}>
     <View>
       <HTlist
            name={'maman'}
            lastName={'soltane man'}
            images={Images.pic8}
          />
     </View>
      <FlatList
        data={ListData}
        horizontal={false}
        showsHorizontalScrollIndicator={false}
        keyExtractor={item => item.id}
        // onEndReached={() => HTalert('props', 'onEndReached')}
        renderItem={({item}) => {
          return (
            <HTlist
            images={item.pic}
            name={item.name}
            lastName={item.lastName}
          />
          );
        }}
      />
    </View>
  );
};
export default ListScreen;

const style = StyleSheet.create({
  HomeScreenContainer:{
    backgroundColor:LightenDarkenColor(CColor.blue4FF,-0.2),
    paddingBottom:hp(13),
    padding:wp(4),
    height:hp(100),
  },
  continer: {
    borderWidth: 1,
    padding: 20,
    margin: 10,
    borderRadius: 10,
  },
});
