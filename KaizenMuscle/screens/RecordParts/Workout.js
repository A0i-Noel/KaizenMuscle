import React,{ useState } from "react";
import { StyleSheet, View, Text, TextInput, Keyboard} from "react-native";
import { Table, TableWrapper, Row, Rows } from 'react-native-table-component';
import WorkoutTable from "./WorkoutTable";



const Workout = () => {

  

  return(
    <View style={styles.container}>
      <View style={styles.box}>
        <Text style={styles.font}>Part</Text>
        <TextInput onSubmitEditing={Keyboard.dismiss} placeholder="Part" style={[styles.font]} />
      </View>
      <View style={[styles.box]}>
        <WorkoutTable />
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
  wrapper: { 
    flexDirection: 'row',
  },
  head: {  
    height: 40, 
    backgroundColor: '#f1f8ff',
  },
  row: {  
    height: 28,  
  },
  text: { 
    textAlign: 'center',
  },  
  title: { 
    flex: 1, 
    backgroundColor: '#f6f8fa',
  },
 

});

export default Workout;