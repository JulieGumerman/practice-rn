import React, { useState } from 'react';
import { StyleSheet, Text, View,  Button, FlatList } from 'react-native';

import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  const [ enteredGoal, setEnteredGoal ] = useState("");
  const [ techGoals, setTechGoals ] = useState([]);
  const [ addMode, setAddMode ] = useState(false)

  const handleChange = text => {
    setEnteredGoal(text);
  }

  const goalHandler = () => {
    setTechGoals([...techGoals, {id: Math.random().toString(), goal: enteredGoal}])
    setEnteredGoal("");
    setAddMode(false);
  }

  const removeGoal = goalId => {
    setTechGoals(currentGoals => {
      return currentGoals.filter((goal) => goal.id !== goalId);
    });
  }

  return (
    <View style={styles.container}>

      <Text style={styles.texty}>Haii!</Text>
       <Button 
        title="ADD NEW GOAL" 
        onPress={() => setAddMode(true)}
        color="red"
        backgroundColor="purple"
      />
      <GoalInput 
        visible={addMode}
        handleChange={handleChange} 
        goalHandler={goalHandler}
        enteredGoal={enteredGoal}
      />

      <FlatList 
        keyExtractor={(item, index) => item.id}
        data={techGoals} 
        renderItem={(itemData) => (
          <GoalItem 
          id={itemData.item.id}
          onDelete={removeGoal}
          item={itemData.item}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 20,
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  texty: {
    color: "blue",
    fontSize: 30
  }, 
  buttonAdd: {
    color: "white",
    backgroundColor: "green"
  }

});
