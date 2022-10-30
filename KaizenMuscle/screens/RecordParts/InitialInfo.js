import React,{ useState } from "react";
import { StyleSheet, View, Text, TextInput,Keyboard} from "react-native";



const InitialInfo = () => {

  const [day, setDay] = useState(new Date());



  return(
    <View style={styles.container}>
      <View style={styles.box}>
        <Text style={styles.font}>Day</Text>
        <TextInput onSubmitEditing={Keyboard.dismiss} placeholder="Day" style={[styles.font]}/>
      </View>
      <View style={styles.box}>
        <Text style={styles.font}>Weight</Text>
        <TextInput  onSubmitEditing={Keyboard.dismiss}placeholder="Weight" style={[styles.font]} keyboardType="numeric" />
      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexBox: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth:1,
    borderBottomColor:"gray",
  },
  box: {
    flexBox:1,
    flexDirection:"row",
    
  },
  font: {
    fontSize: 30,
    margin:30,
    
  },

});

export default InitialInfo;