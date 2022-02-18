import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HomeScreen, ListScreen , Counter , ColorPicker , Movies , DetailMovie} from './Pages';
import {CColor} from './Global'
const Stack = createNativeStackNavigator();

const Routes = [{
  name:'Home',
  component:HomeScreen
},{
  name:'List',
  component:ListScreen
},{
  name:'Counter',
  component:Counter
},{
  name:'ColorPicker',
  component:ColorPicker
},{
  name:'Movies',
  component:Movies
},{
  name:'DetailMovie',
  component:DetailMovie
}]
function App() {
  
  return (
    <NavigationContainer>
      <Stack.Navigator
       screenOptions={{
        // title: `${route.name}`,
        headerStyle: {
          backgroundColor: CColor.blue4FF,
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}  
       initialRouteName="DetailMovie">
        {
          Routes.map((route)=> <Stack.Screen key={route.name} name={route.name} component={route.component}/>)
        }
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;
