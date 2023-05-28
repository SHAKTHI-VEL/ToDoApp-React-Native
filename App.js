import { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput ,ScrollView ,FlatList} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
 
  const [modalIsVisible,setModalIsVisible]=useState(false)

  const [courseGoals,setCourseGoals]=useState([])

 function startAddGoalHandler(){
  setModalIsVisible(true);
 }

 function endAddGoalHandler(){
  setModalIsVisible(false);
 };

  function addGoalHandler(enteredGoalText){
    setCourseGoals(currentCourseGoals=>[
      ...currentCourseGoals,
      {text:enteredGoalText,id:Math.random().toString()}]);
      endAddGoalHandler();
  };

  function deleteGoalHandler(id){
    setCourseGoals((currentCourseGoals)=>{
      return currentCourseGoals.filter((goal)=>goal.id!==id);
    });
  }

  return (
    <>
    <StatusBar style='inverted'/>
    <View style={styles.appContainer}>
    <Button title='Add New Goal' color="#a065ec" onPress={startAddGoalHandler}/>
     <GoalInput onAddGoal={addGoalHandler} visible={modalIsVisible} onCancel={endAddGoalHandler}/>
      <View style={styles.goalsContainer}>
      <FlatList data={courseGoals} renderItem={(itemData)=>{
        return(
          <GoalItem 
          text={itemData.item.text} 
          id={itemData.item.id}
          onDeleteItem={deleteGoalHandler}
          />
        );
      }}>
        
      </FlatList>
      </View>
    </View>
    </>
  );
}

const styles = StyleSheet.create({
 appContainer:{
  paddingTop:50,
  paddingHorizontal:10,
  flex:1,
  backgroundColor:"#1e085a"
 },

 goalsContainer:{
  flex:5
 },

});
