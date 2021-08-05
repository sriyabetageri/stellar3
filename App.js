import "react-native-gesture-handler"
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";


//import { StyleSheet, Text, View } from 'react-native';

import DailyPic from './screens/DailyPic';
import SpaceCraft from './screens/SpaceCraft'
import StraMap from './screens/StarMap';


const Stack = createStackNavigator();

 function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName = "Home" screenOptions = {{
        headerShown: false
      }}>
        <Stack.Screen name = "DailyPic" component= {DailyPic}/>
        <Stack.Screen name = "SpaceCraft" component= {SpaceCraft}/>
        <Stack.Screen name = "StraMap" component= {StraMap}/>
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
