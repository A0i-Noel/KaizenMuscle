import * as React from "react";
import { View, Text, TextInput} from "react-native";

const Record = (navigation) => {
  return(
    <View style={{flex:1, alignItems:"center",justifyContent:"center"}}>
      <Text onPress={()=>navigation.navigation("Record")}>This is Record Page</Text>
    </View>
  );
}

export default Record;

