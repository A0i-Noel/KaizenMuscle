import * as React from "react";
import {View, Text, TextInput} from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from "react-native-vector-icons/Ionicons";

import Record from "./screens/Record";
import History from "./screens/History";
import Timeline from "./screens/Timeline";

const record = "Record";
const history = "History";
const timeline = "Timeline";

const Tab = createBottomTabNavigator();


const Main = () => {
  return(
    <NavigationContainer>
      <Tab.Navigator
      initialRouteName={record}
      screenOptions={({route})=> ({
        tabBarIcon: ({focused,color,size}) => {
          let iconName;
          let rn = route.name;
          if (rn === timeline) {
            iconName = focused ? "earth" : "earth-outline"
          } else if (rn === record){
            iconName = focused ? "barbell" : "barbell-outline"
          } else if (rn === history){
            iconName = focused ? "book" : "book-outline"
          }

          return <Ionicons name={iconName} size={size} color={color} />
        },
      })}
      tabBarOptions={{
        activeTintColor:"salmon",
        inactiveTintColor:"gray",
        labelStyle:{paddingBottom:10,fontSize:10},
        style: {padding: 10, height: 70}
      }}
      >

        <Tab.Screen name={timeline} component={Timeline}/>
        <Tab.Screen name={record} component={Record}/>
        <Tab.Screen name={history} component={History}/>
        


      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default Main;