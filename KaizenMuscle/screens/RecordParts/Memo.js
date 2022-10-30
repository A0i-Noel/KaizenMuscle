import React,{ useState } from "react";
import { StyleSheet, View, Text, TextInput, Keyboard} from "react-native";



const Memo = () => {

  const [memo, setMemo] = useState("");



  return(
    <View style={styles.container}>
      <TextInput 
      onSubmitEditing={Keyboard.dismiss}
      style={styles.memo} 
      placeholder="Memo"
      maxLength={500}
      multiline
      editable
      onChangeText={text => setMemo(text)}
      value={memo} /> 
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
  memo: {
    height:100,
    borderRadius:10,
    borderColor:"gray",
    padding:10,
    borderWidth:1,
    margin:10,
    width:"80%",
    textAlignVertical:"top"
  }

});

export default Memo;