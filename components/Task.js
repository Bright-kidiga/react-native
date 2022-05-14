import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Task = (props) => {

    return (
        <View style= {styles.item}>
          <View style={styles.itemLeft}>
           <View style= {styles.square}></View>
           <Text style={styles.itemText}>{props.text}</Text>
          </View>
          <View style= {styles.circular}></View>
        </View>
    )
}

const styles = StyleSheet.create({
    item:{
        backgroundColor:'#fff',
        padding: 15,
        borderRadius: 10,
        borderColor: '#C0C0C0',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    itemLeft:{
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap',
        
    },
    square:{
        width: 24,
        height: 24,
        backgroundColor: '#b2bec3',
        opacity: 0.4,
        borderRadius: 5,
        marginRight: 10,

    },
    itemText:{
        maxWidth: '80%',

    },
    circular:{
        backgroundColor: '#fff',
        width: 12,
        height: 12,
        borderColor: '#b2bec3',
        borderWidth: 2,
        borderRadius: 10,

    },
});

export default Task;