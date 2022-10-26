import * as React from "react";
import {View, Text, TextInput} from "react-native";

const History = (navigation) => {
  return(
    <View style={{flex:1, alignItems:"center",justifyContent:"center"}}>
      <Text onPress={()=>navigation.navigation("History")}>This is History Page</Text>
    </View>
  );
}

export default History;
