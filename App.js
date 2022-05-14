import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { KeyboardAvoidingView, StyleSheet, ImageBackground, Text, View, TextInput, TouchableOpacity, Keyboard, ScrollView, } from 'react-native';
import Task from './components/Task';

export default function App() {
  const image = { uri: "https://reactjs.org/logo-og.png" };
  const [task, setTask] = useState();
{/** we use state for things that change often */}
  
  const[taskItems, setTaskItems] = useState([]);
  const handleAddTask = () => {
     Keyboard.dismiss();
     setTaskItems([...taskItems, task])
     setTask(null);
  }
  const completeTask = (index) => {
     let itemsCopy =[...taskItems];
     itemsCopy.splice(index, 1);
     setTaskItems(itemsCopy);
  }
  return (

    
    <View style={styles.container}>
      {/*today's task*/}
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
      <View style={styles.titleWrapper}>
          <Text style={styles.sectionTitle}>Today's task</Text>
      </View>
      <ScrollView>
   
      <View style={styles.taskWrapper}>
        
      
        <View style={styles.items}>
          {/* This is where the task will go*/}
          {
            taskItems.map((item, index) => {
             return (
               <TouchableOpacity key={index} onPress={() => completeTask(index)}>
                 <Task  text={item}/>
               </TouchableOpacity>
             )
            })
          }
           
        </View>
      
      </View> 
      </ScrollView>
        {/* Write a task */}
        <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"}
          style= {styles.writeTaskWrapper}>
          {/** the keyboard avoiding view pushes the text field and the button up when keyboard is "activated" */}
          <TextInput style={styles.input} placeholder ={' Write a task'} value= {task} onChangeText={text => setTask(text)}/>

          <TouchableOpacity onPress={()=> handleAddTask()}>
             <View style={styles.addWrapper}>
                <Text style={styles.addText}>+</Text>
             </View>
          </TouchableOpacity>
        </KeyboardAvoidingView>
        </ImageBackground>
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2d3436',
    
    
  },
  image:{
    
    flex: 1,
    justifyContent: "center"
    
  },
  taskWrapper: {
    paddingTop: 40,
    paddingHorizontal: 20, 
  },
  titleWrapper: {
    paddingTop: 90,
    paddingHorizontal: 20, 
    backgroundColor: '#b2bec3',
   
    
  },
  sectionTitle: {
    fontSize: 40,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  items:{},
  writeTaskWrapper:{
    position: 'absolute',
    bottom: 60,
    width:'100%',
    flexDirection:'row',
    justifyContent: 'space-around',
    alignItems:'center',
  },
  input:{
    paddingVertical:15,
    paddingHorizontal:15,
    backgroundColor: '#fff',
    borderRadius: 60,
    borderColor: '#C0C0C0',
    borderWidth: 1,
    width: 250,

  },
  addWrapper:{
    width:60,
    height:60,
    backgroundColor:'#636e72',
    borderRadius: 60,
    justifyContent: 'center',
    alignItems:'center',
    borderColor: '#C0C0C0',
    borderWidth: 1,

  },
  addText:{
    fontSize: 30,
  },
});
