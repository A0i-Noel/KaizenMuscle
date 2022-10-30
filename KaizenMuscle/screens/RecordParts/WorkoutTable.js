import React, { useState } from 'react';
import { StyleSheet, View, Button } from 'react-native';
import { Table, TableWrapper, Row, Rows } from 'react-native-table-component';

const WorkoutTable = () => {
  const [tableHead, setTableHead] = useState(['Item', 'Weight', 'Reps','sets']);
  const [tableData, setTableData] = useState([
      ['Dumbbell Curl', 35, 15,1],
      ['Bench Press', 70, 10,1],
      ['Overhead', 30, 15,1]
  ]);
    
    return (
        <View style={styles.container}>
            <Table borderStyle={{ borderWidth: 0 }}>
                <Row data={tableHead} flexArr={[2, 1, 1, 1]} style={styles.head} textStyle={styles.text} />
                <TableWrapper style={styles.wrapper}>
                    <Rows data={tableData} flexArr={[2,1,1,1]} style={styles.row} textStyle={styles.text} />
                </TableWrapper>
            </Table>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    },
    head: {  
        height: 40, 
        backgroundColor: 'gray',
    },
    wrapper: { 
        flexDirection: 'row',
      },
      title: { 
          flex: 1, 
          backgroundColor: '#f6f8fa',
      },
      row: {  
          height: 60,  
      },
      text: { 
          textAlign: 'center',
          fontSize:20
      },
  });
  
  export default WorkoutTable;