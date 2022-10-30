import * as React from "react";
import { View, ScrollView, StyleSheet, Button, Alert, Pressable, Text} from "react-native";
import { InitialInfo, Memo, Workout } from "./RecordParts";

const Record = (navigation) => {
  return(
    <ScrollView >
      <InitialInfo />
      <Workout />
      <Memo />
      <Pressable onPress={() => Alert.alert('Well done you are THE buff guy!!')} style={styles.button}>
        <Text style={styles.text}>Submit</Text>
      </Pressable>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: 'black',
    marginHorizontal:100,
    marginTop:200
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
});

export default Record;

