import * as React from "react";
import {View, Text, TextInput} from "react-native";

const Timeline = (navigation) => {
  return(
    <View style={{flex:1, alignItems:"center",justifyContent:"center"}}>
      <Text onPress={()=>navigation.navigation("Timeline")}>This is Timeline Page</Text>
    </View>
  );
}

export default Timeline;

